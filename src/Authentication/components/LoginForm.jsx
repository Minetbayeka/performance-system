import React from 'react'
import image from '../../assets/images/person.jpg'
import image1 from '../../assets/images/logo.png'
import { Eye } from 'lucide-react'

const LoginForm = () => {
  return (
    <section className='flex justify-center'>
    <div className="flex gap-9  mt-40 bg-[#E4E7EC] rounded-lg w-[60%]">
    <div>
       <img src={image} alt='interns' className='w-80 h-96 rounded-lg' /> 
    </div>
    <div className='pt-5'>
        <img src={image1}  alt='logo' className='w-32 '/>
        <h1 className='text-4xl pb-5'>Login</h1>
        <form className='space-y-2'>
            <label for="email" className='block' >Email</label>
            <input type='text' placeholder='example@gmail.com' className='rounded-md p-2 w-72 outline-none' />
            <label for="password" className='block' >Password</label>

            <div className='flex items-center border border-white rounded-md bg-white'>
            <input type='text' placeholder='password' className='rounded-md p-2 w-60 outline-none' />
            <Eye />
            </div>

        </form>
        <button className='bg-primary items-center p-1 rounded-lg px-32  text-white mt-5'>Login</button>
    </div>
    </div>
    </section>
  )
}

export default LoginForm
