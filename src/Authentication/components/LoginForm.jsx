import React from 'react'
import image from '../../assets/images/person.jpg'
import image1 from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
// import { useLoginMutation } from '@app/services/auth/auth.services'

const LoginForm = () => {
  // const [login, {isLoading}] = useUserLoginMutation()

  // const onSubmit = async(data) =>{
  //   const {
  //     success,
  //     data:response,

  //   } = await handleRequest(
  //     ()=>login(data).unwrap(),
  //     {},
  //     "LOGIN"
  //   );

  //   if(success){
  //     dispatch
  //   }

  // }

  return (
    <section className='flex justify-center px-4'>
      <div className="flex mt-40 bg-white rounded-lg shadow-md overflow-hidden w-[65rem] h-[32rem]">

        {/* Image Section (Smaller) */}
        <div className="w-2/5 h-full bg-primary flex flex-col items-center justify-center px-2">
        <img src={image1} alt='logo' className='w-28 mb-4 invert brightness-0 font-semibold' />
        <p className='text-white text-center'>
          Welcome back to Skye8 intern performance Analysis, 
          please enter the required details to access your account. Don't have an account?</p>
          <Link to="/register">
          <button
            type="submit"
            className='bg-white text-primary p-3 rounded-lg px-8  mt-6'
          >
            SignUp
          </button>
          </Link>
          {/* <img
            src={image}
            alt='interns'
            className='w-full h-full object-cover'
          /> */}
          
        </div>

        {/* Form Section (Larger) */}
        <div className='w-3/5 h-full flex flex-col justify-center px-12 py-8'>
          <img src={image1} alt='logo' className='w-28 mb-4' />
          <h1 className='text-4xl font-semibold mb-6'>Login</h1>

          <form className='flex flex-col gap-4'>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="p-3 text-sm border-b-2 border-gray-400 w-full focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="p-3 text-sm border-b-2 border-gray-400 w-full focus:outline-none"
            />

            <button type="button" className='text-primary text-sm text-left font-semibold'>
              Forgot Password?
            </button>
          </form>

          <button
            type="submit"
            className='bg-primary text-white p-3 rounded-lg w-full mt-6'
          >
            Login
          </button>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
