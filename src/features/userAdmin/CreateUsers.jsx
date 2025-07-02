import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useCreateUsersMutation } from '@app/services/admin/admin.service';
import toast from 'react-hot-toast';

const CreateUsers = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState('');
  const [image, setImage] = useState(null);

  const [createUser, { isLoading, isSuccess, isError }] = useCreateUsersMutation();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Just preview, you can handle upload later
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      // name: `${firstName} ${middleName} ${lastName}`,
     first_name: firstName,
     middle_name: middleName,
     last_name: lastName,
      email,
      role,
      // departments: department,
      password,
      access,
      // image: upload logic would go here
    };

    try {
      await createUser(newUser).unwrap();
      // alert('User created successfully!');
      // Clear form after submission
      setFirstName('');
      setMiddleName('');
      setLastName('');
      setRole('');
      setEmail('');
      setDepartment('');
      setPassword('');
      setAccess('');
      setImage(null);
      toast.success('create user successful!');
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex pt-4">
        <Sidebar />
        <div className="flex-1">
          <Link to="/usermanagement">
            <button className="mb-4 text-purple-600 hover:underline ml-48">&larr; Back</button>
          </Link>

          <div className="flex flex-col items-center">
            <div className="text-primary bg-[#E4E7EC] rounded-full p-4 w-20 h-20 ml-24 flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image} alt="Preview" className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <User className="w-12 h-12 text-gray-500" />
              )}
            </div>

            <div className="mt-10">
              <label className="bg-[#fafcff] p-2 text-center ml-3 font-medium px-28 py-2 rounded-md cursor-pointer hover:bg-gray-200">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 mt-8">
            <div>
              <label className="block text-sm font-medium mb-1">First name</label>
              <input
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Middle name</label>
              <input
                type="text"
                placeholder="Doe"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last name</label>
              <input
                type="text"
                placeholder="Smith"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              >
                <option value="">Select Department</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Product Design</option>
                <option>Data Science</option>
                <option>Cyber Security</option>
                <option>Mobile App Dev</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Access Permission</label>
              <input
                type="text"
                placeholder="Access permission"
                value={access}
                onChange={(e) => setAccess(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-purple-500 text-white font-semibold rounded py-2 hover:bg-purple-600"
            >
              {isLoading ? 'Creating...' : 'CONFIRM'}
            </button>

            {isSuccess && <p className="text-green-600 text-center">User created successfully!</p>}
            {isError && <p className="text-red-600 text-center">Error creating user. Try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUsers;





























// import React, { useContext } from 'react'
// import  {  useState } from "react";

// import { User } from "lucide-react";
// import { Link } from "react-router-dom";
// import {users as initialUser} from "../data"
// import Sidebar from '../components/Sidebar';
// import { useCreateUsersMutation } from '@app/services/admin/admin.service';



// const CreateUsers = () => {
//     const [firstName, setFirstName] = useState("")
//     const [middleName, setMiddleName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [role, setRole] = useState("")
//     const [email, setEmail] = useState("")
//     const [department, setDepartment] = useState("")
//     const [user, setUser] = useState(initialUser)

//    const [CreateUsers, { isLoading, isSuccess, isError }] = useCreateUsersMutation()
   

//    const [image, setImage] = useState(null)

//    const handleUpload = () =>{
//     const file = e.target.files[0]

//     if(file){
//         setImage(URL.createObjectURL(file))
//     }
//    }

//    const newUsers = {
//     id: Date.now(),
//     name:`${firstName} ${middleName} ${lastName}`,
//     role: role,
//     email: email,
//     departments: department
//    }

//   const createUser = (newUsers) => {
//   setUser((prevUsers) => [...prevUsers, newUsers]);
// };


//   return (
//  <div className="max-w-6xl mx-auto">
//       <div className="flex pt-4">
//         <Sidebar />
//         <div className='flex-1'>
//           <Link to="/usermanagement">
//             <button className="mb-4 text-purple-600 hover:underline  ml-48">&larr; Create Users</button>
//           </Link>
//           <div className="">
//             <div className="flex flex-col items-center">
//             <div className="text-primary bg-[#E4E7EC] rounded-full p-4 w-20 h-20 ml-24 flex items-center justify-center overflow-hidden">
//               {image ? (
//                 <img src={image} alt="Preview" className="h-10 w-10 rounded-full object-cover" />
//               ) : (
//                 <User className="w-12 h-12 text-gray-500" />
//               )}
//             </div>

//             <div className="mt-10">
//               <label className="bg-[#fafcff] p-2 text-center ml-3 font-medium px-28 py-2 rounded-md cursor-pointer hover:bg-gray-200">
//                 Upload
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleUpload}
//                 />
//               </label>
//             </div>
//             </div>

//             <form className="max-w-md mx-auto p-4 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">First name</label>
//                 <input
//                   type="text"
//                   placeholder="John"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                   onChange={(e) => setFirstName(e.target.value)}
               
//                />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Middle name</label>
//                 <input
//                   type="text"
//                   placeholder="Doe"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                 onChange={(e) => setLastName(e.target.value)}
//                />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Last name</label>
//                 <input
//                   type="text"
//                   placeholder="Smith"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                   onChange={(e) => setMiddleName(e.target.value)}
//                />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="example@email.com"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                 onChange={(e) => setEmail(e.target.value)}
//                />
//               </div>
//                <div>
//                 <label className="block text-sm font-medium mb-1">Role</label>
//                 <input
//                   type="text"
//                   placeholder="Role"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
              
//                  onChange={(e) =>setRole(e.target.value)}
//               />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Department</label>
//                 <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                   onChange={(e) =>setDepartment(e.target.value)} 
//                 >
//                   <option>Frontend</option>
//                   <option>Backend</option>
//                   <option>Product Design</option>
//                   <option>Data Science</option>
//                   <option>Cyber Security</option>
//                   <option>Mobile App Dev</option>
//                 </select> 
//               </div>

//                 <div>
//                 <label className="block text-sm font-medium mb-1">password</label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                />
//               </div>
               
//                 <div>
//                 <label className="block text-sm font-medium mb-1">Access Permission</label>
//                 <input
//                   type="text"
//                   placeholder="Acess permission"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
               
//                />
//               </div>

                

//               <button
//                 type="submit"
//                 className="w-full bg-purple-500 text-white font-semibold rounded py-2 hover:bg-purple-600"
//                onClick={(e) => {
//                e.preventDefault(); // Prevent default form submission
//                createUser(newUsers);}}
//               >
            
//                 CONFIRM
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CreateUsers
