
import React from 'react'
import image from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Power } from 'lucide-react';
import { Bell } from 'lucide-react';
import image1 from '../../../assets/images/girl.jpeg';

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg flex flex-col justify-between z-20'>
      <div className='p-6 overflow-y-auto'>
        <img src={image} alt="logo" className='h-28 w-24' />
        <ul className='mt-10 space-y-4 font-semibold'>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/dashboard">Intern Management</Link></li>
          <li><Link to="/usermanagement">User Management</Link></li>
          <li><Link to="#">Performance Analysis</Link></li>
          <li><Link to="#">Data Verification</Link></li>
          <li className='pb-40'><Link to="#">Reports and Analytics</Link></li>
          <li><Link to="#">Setting</Link></li>
          <li><Link to="#">Help & Support</Link></li>
          <li>
            <Link to="#" className='flex text-secondary gap-3 font-semibold items-center'>
              <Power />
              <span>Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='p-6 text-xs text-gray-500'>
        <p>Current System</p>
        <p>Skye8 Company Ltd CopyRight</p>
      </div>
    </div>
  )
}
export default Sidebar




// import React from 'react'
// import image from '../../../assets/images/logo.png'
// import { Link } from 'react-router-dom'
// import { Power } from 'lucide-react';

// const Sidebar = () => {
//   return (
//     <div className='fixed p-6 bg-white shadow-md rounded-md'>
//       {/* top-0 left-0 */}
//       <nav>
//         <img src={image}  alt="logo" className='h-28 w-24'/>

//         <ul className='mt-10 space-y-4  font-semibold'>
//             <li><Link to="/">Dashboard</Link></li>
//             <li> <Link to="/dashboard">Intern Management</Link></li>
//             <li><Link to="/usermanagement">User Management</Link></li>
//             <li> <Link>Performance Analysis</Link></li>
//             <li><Link>Data Verification</Link></li>
//             <li className='pb-40'><Link>Reports and Analytics</Link></li>

//             <li><Link>Setting</Link></li>
//             <li><Link>Help & Support</Link></li>
//             <Link className='flex text-secondary gap-3 font-semibold'><Power/>
//             <li className=' font-semibold'>Log Out</li></Link>

//              <li className='pt-12'>Current System</li>
//               <li>Skye8 Company Ltd CopyRight</li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Sidebar