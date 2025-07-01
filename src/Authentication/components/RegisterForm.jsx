
import { Link } from "react-router-dom";

import image1 from '../../assets/images/logo.png'
import { useState } from "react";
import { use } from "react";
function RegistrationForm() {

  return (
    <>
    <section className="flex justify-center px-4">
    <div className="flex mt-40 bg-white rounded-lg shadow-md overflow-hidden w-[65rem] h-[38rem] " >
    <div className="w-2/5 h-full bg-primary flex flex-col items-center justify-center px-2">
            <img src={image1} alt='logo' className='w-28 mb-4  invert brightness-0 font-semibold' />
            <p className='text-white text-center'>
              Welcome to Skye8 intern performance Analysis, 
             please enter the required details to create an account. Already have an account?</p>
              <Link to="/login">
              <button
                type="submit"
                className='bg-white text-primary p-3 rounded-lg px-8  mt-6'
              >
              Login
              </button>
              </Link>
              {/* <img
                src={image}
                alt='interns'
                className='w-full h-full object-cover'
              /> */}
              
            </div>
      <form
      onSubmit={(e) => e.preventDefault()}
      
  
        className="w-3/5 h-full flex flex-col justify-center px-12 py-8"
      >
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-medium ">Create an account</p>
          <p className="font-medium"> Enter your details below </p>
        </div>
        <div className="flex flex-col gap-4">
      
          <input
            type="text"
            placeholder="Name"
            className="p-2 text-sm  border-b-2 border-gray-400 w-full"
          />
          <input
            type="text "
            placeholder="Email or Phone Number "
            className="p-2 text-sm border-b-2 border-gray-400 w-full"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-2  border-b-2 text-sm border-gray-400 w-full"
          />
           <input
            type="text"
            placeholder="Confirm Password"
            className="p-2  border-b-2 text-sm border-gray-400 w-full"
          />
        </div>

        <div className="flex flex-col gap-4  mt-10">

          <button className="bg-primary px-4 py-2  text-white rounded-lg">Create Account</button>
          <button className="bg-primary px-4 py-2  text-white rounded-lg">Sign Up with Google</button>
         
        </div>
        <p className=" font-semibold mt-6">
          Already have an account?
          <span className="font-normal text-primary mx-2 ">
            <Link to="/login"> Log in </Link>
          </span>
        </p>
      </form>
      </div>
      </section>
    </>
  );
}

export default RegistrationForm;
