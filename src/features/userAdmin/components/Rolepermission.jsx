import React, { useState } from 'react'
import {permissionsList} from '../../data'
import { Bell } from 'lucide-react';
import image1 from '../../../assets/images/girl.jpeg'
import Sidebar from '../../components/Sidebar';


const Rolepermission = () => {
  const [role, setRole] = useState("Administrator");
  const [permissions, setPermissions] = useState({
    create: true,
    read: true,
    update: true,
    cancerReport: true,
    articlePublishing: true,
    delete: true,
  });

  const togglePermission = (key) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <section className='flex flex-col lg:flex-row max-w-6xl mx-auto gap-2 mt-10 '> 
    <div className=''>    
    <Sidebar/>
       </div> 
       <div className='flex-1 mt-16'>
        <div className='fixed top-0 left-64 right-0 z-10 flex justify-between items-center px-6 py-4 bg-white shadow-md h-20'>

  <div><h1 className='font-semibold text-xl'>User Management</h1></div>
  <div className='flex items-center gap-2'>
    <button>
     <Bell className='relative' />
     <span className='absolute top-11 text-lg bg-[#E4E7EC]  text-center
     w-6 h-6 rounded-full text-primary'></span>
    </button>
    
    <img src={image1}  alt='profile' className='h-10 w-10 rounded-full'/>
  </div>

 </div> 
 <div className="p-6 flex-1  bg-white shadow-md rounded-md ml-52">
      <h2 className="text-xl font-semibold mb-4">Role Permission</h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Select a role</label>
        <select
          className="w-52 p-2 border border-gray-300 rounded-md"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Administrator">Administrator</option>
          <option value="Administrator">Supervisor</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">None</option>
        </select>
      </div>

   <div className="space-y-4">
        {permissionsList.map((permission) => (
          <div key={permission.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className=" text-black  font-medium">{permission.label}</p>
              <p className="text-sm text-gray-500">{permission.description}</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={permissions[permission.key]}
                onChange={() => togglePermission(key)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-secondary relative after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Click the save button to apply the permission changes to the selected role.
      </p>

      <button className="mt-4 bg-primary text-white px-6 py-2 rounded  transition">
        Apply Changes
      </button>
    </div>
    </div>
    </section>
  )
}

export default Rolepermission

