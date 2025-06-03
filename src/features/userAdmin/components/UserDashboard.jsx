import { Key, ListFilter,  Search, Settings,  Users } from 'lucide-react';
import { Button } from '../../admin/components/DashboardButton';
import { Link } from 'react-router-dom';
import { users } from "../../data";
import Pagination from '../../../components/atoms/Pagination';
import { useState } from 'react';


const UserDashboard= () => {
    const [search, setSearch]= useState("")

    const filterUsers = users.filter((user) =>{
        const searchLower = search.toLowerCase();
        return(
            user.name.toLowerCase().includes(searchLower) ||
            user.department.toLowerCase().includes(searchLower) ||
            user.role.toLowerCase().includes(searchLower)


        );
    }) 


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
        <button className="bg-[#E4E7EC] rounded-full px-2 text-primary">{users.length}</button>
      </div>
        <div className='flex space-x-10 mb-3'>
     <div className="border rounded px-2 py-1 flex items-center w-80 bg-gray-50">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 outline-none w-full text-[#E4E7EC] placeholder-[#E4E7EC] mx-5"
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
                <td className="px-6 py-4 text-center">{user.last}
                    <span className='ml-10'>...</span>
                </td>
                
                <td className="px-6 py-4 flex space-x-3 items-center">
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
