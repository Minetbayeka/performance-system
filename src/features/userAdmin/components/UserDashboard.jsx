import { Key, ListFilter,  Search, Settings,  Users } from 'lucide-react';
import { Button } from '../../admin/components/DashboardButton';
import { Link } from 'react-router-dom';
import { users } from "../../data";
import Pagination from '../../../components/atoms/Pagination';
import { useState , useRef, useEffect} from 'react';


const UserDashboard= () => {
    const [search, setSearch]= useState("")
      const [isOpen, setIsOpen] = useState(false);
      const menuRefs = useRef({});

    const filterUsers = users.filter((user) =>{
        const searchLower = search.toLowerCase();
        return(
            user.name.toLowerCase().includes(searchLower) ||
            user.department.toLowerCase().includes(searchLower) ||
            user.role.toLowerCase().includes(searchLower)


        );
    }) 

    useEffect(() => {
        const handleClickOutside = (event) =>{
          const isClickInsideAny = Object.values(menuRefs.current).some(ref => ref?.contains(event.target));
          if (!isClickInsideAny)  setIsOpen(null);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);


  return (
    <section className="pt-4 ml-56 mt-16">
      <div className=" mb-3">
        <div className='flex space-x-10 ml-96'>
          <Link to="/createuser">
            <Button
              icon={<Users size={16} />}
              title="Create user"
              lg
            />
          </Link>
          <Link to="/role">
          <Button
              icon={<Settings size={16} />}
              title="Role Configuration"
              lg
            />
            </Link>
            <Button
              icon={<Key size={16} />}
              title="Access Control"
              lg
            />
        </div>
      </div>

<div className='flex  space-x-10 gap-96'>
     <div className="flex gap-2 pt-4 pb-3">
        <h1>Interns</h1>
        <button className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-full">{users.length}</button>
      </div>
        <div className='flex space-x-10 mb-3'>
        <div className="relative w-full max-w-xs ml-12">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
           <input
               type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
                value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
        </div>
        <Button 
        icon={<ListFilter size={16} />}
        title ="Filters"
        
        />
        </div>
</div>
     
      <div className="">
        <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">last seen online</th>
                <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.map((user) => (
              <tr className="border-t" key={user.id}>
                <td className="flex items-center px-6 py-4 space-x-3 whitespace-nowrap">
                  <img src={user.imgUrl} alt="profile" className="h-10 w-10 rounded-full" />
                  <span
                   onChange={(e) => setSearch(e.target.value)}>{user.name}</span>
                </td>

                <td className="px-6 py-4">
                  <span className=" text-xs font-semibold px-2.5 py-0.5 rounded">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">{user.department}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4 text-center">{user.last}</td>
                <td className="px-6 py-4 flex space-x-3 items-center"
                onClick={() => setIsOpen(!isOpen === user.id ? null : user.id)}>
                  <button className="text-gray-500 hover:text-gray-900 ml-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                    </button>
                      {isOpen === user.id && (
                       <div className="absolute right-0 mt-2 w-48 bg-white border border-blue-400 rounded-md shadow-lg z-10">
                       <ul className="py-1 text-sm text-gray-700">
                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit User</li>
                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200">Delete user account</li>
                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200">View action logs</li>
                      </ul>
                     </div>
                      )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination />
      </div>
    </section>
  );
};

export default UserDashboard;
