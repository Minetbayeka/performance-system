import React, { useState } from 'react';
import image from '../../assets/images/person.jpg';
import image1 from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { saveUser, useLoginMutation } from '@app/services/auth/auth.services';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();

      dispatch(saveUser(response));
      toast.success('Login successful!');

      // Redirect based on role
      if (response.admin) {
        navigate('/dataverification', { replace: true });
      } else if (response.supervisor) {
        navigate('/dashboard', { replace: true });
      } else if (response.intern) {
        navigate('/dataverification', { replace: true });
      } else {
        navigate('/usermanagement', { replace: true });
      }
    } catch (err) {
      if (err?.data?.errors) {
        Object.values(err.data.errors).forEach((msgs) =>
          msgs.forEach((msg) => toast.error(msg))
        );
      } else {
        toast.error('Login failed. Check credentials.');
      }
    }
  };

  return (
    <section className="flex justify-center px-4">
      <div className="flex mt-40 bg-white rounded-lg shadow-md overflow-hidden w-[65rem] h-[32rem]">
        {/* Left Image/Info Section */}
        <div className="w-2/5 h-full bg-primary flex flex-col items-center justify-center px-2">
          <img
            src={image1}
            alt="logo"
            className="w-28 mb-4 invert brightness-0 font-semibold"
          />
          <p className="text-white text-center">
            Welcome back to Skye8 Intern Performance Analysis.
            <br />
            Please enter your details to access your account.
          </p>
          <Link to="/register">
            <button className="bg-white text-primary p-3 rounded-lg px-8 mt-6">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Right Form Section */}
        <div className="w-3/5 h-full flex flex-col justify-center px-12 py-8">
          <img src={image1} alt="logo" className="w-28 mb-4" />
          <h1 className="text-4xl font-semibold mb-6">Login</h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email or Phone Number"
              className="p-3 text-sm border-b-2 border-gray-400 w-full focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-3 text-sm border-b-2 border-gray-400 w-full focus:outline-none"
              required
            />

            <button
              type="button"
              className="text-primary text-sm text-left font-semibold"
            >
              Forgot Password?
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white p-3 rounded-lg w-full mt-6"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;









// import React, { useState } from 'react'
// import image from '../../assets/images/person.jpg'
// import image1 from '../../assets/images/logo.png'
// import { Link, useNavigate } from 'react-router-dom'
// import {saveUser, useLoginMutation } from '@app/services/auth/auth.services'
// import { useDispatch } from 'react-redux'
// // import toast from 'react-toastify'
// import toast from 'react-hot-toast'

// const LoginForm = () => {
//   const [login, {isLoading}] = useLoginMutation()
//   const [formData, setFormData] = useState({ email: "", password: "" })
//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await login(formData).unwrap();

//       dispatch(saveUser(response));
//       toast.success("Login successful!");

//       // Redirect based on role (optional)
//       if (response.admin){
//         navigate("/dashboard", { replace: true }); 
//       } 
//       else if (response.supervisor){
//         navigate("/dashboard", { replace: true });  
//       } 
//       else if (response.intern){
//         navigate("/dataverification", { replace: true });
//       }
//       else navigate("/", { replace: true });

//     } catch (err) {
//       if (err?.data?.errors) {
//         Object.values(err.data.errors).forEach((msgs) =>
//           msgs.forEach((msg) => toast.error(msg))
//         );
//       } else {
//         toast.error("Login failed. Check credentials.");
//       }
//     }
//   };


//   return (
//     <section className='flex justify-center px-4'>
//       <div className="flex mt-40 bg-white rounded-lg shadow-md overflow-hidden w-[65rem] h-[32rem]">

//         {/* Image Section (Smaller) */}
//         <div className="w-2/5 h-full bg-primary flex flex-col items-center justify-center px-2">
//         <img src={image1} alt='logo' className='w-28 mb-4 invert brightness-0 font-semibold' />
//         <p className='text-white text-center'>
//           Welcome back to Skye8 intern performance Analysis, 
//           please enter the required details to access your account. Don't have an account?</p>
//           <Link to="/register">
//           <button
//             type="submit"
//             className='bg-white text-primary p-3 rounded-lg px-8  mt-6'
//           >
//             SignUp
//           </button>
//           </Link>
//           {/* <img
//             src={image}
//             alt='interns'
//             className='w-full h-full object-cover'
//           /> */}
          
//         </div>

//         {/* Form Section (Larger) */}
//         <div className='w-3/5 h-full flex flex-col justify-center px-12 py-8'>
//           <img src={image1} alt='logo' className='w-28 mb-4' />
//           <h1 className='text-4xl font-semibold mb-6'>Login</h1>

//           <form className='flex flex-col gap-4' 
//            onSubmit={handleSubmit}
//           >
//             <input
//               type="text"
//               name='email'
//               placeholder="Email or Phone Number"
//               className="p-3 text-sm border-b-2 border-gray-400 w-full focus:outline-none"
//               value={formData.email}
//                onChange={handleChange}
//             />

//             <input
//               type="password"
//               name='password'
//               placeholder="Password"
//               value={formData.password} 
//               onChange={handleChange}
//               className="p-3 text-sm border-b-2 border-gray-400 w-full focus:outline-none"
//             />

//             <button type="button" className='text-primary text-sm text-left font-semibold'>
//               Forgot Password?
//             </button>
//           </form>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className='bg-primary text-white p-3 rounded-lg w-full mt-6'
//           >
//             {isLoading ? "Logging in..." : "Login"}
//             {/* Login */}
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default LoginForm
