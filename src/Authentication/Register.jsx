import React from 'react'
import RegistrationForm from './components/RegisterForm'
import image2 from '../../src/assets/images/person.jpg'

const Register = () => {
  return (
    <main className='max-w-6xl mx-auto mt-20'>
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div>
    <img src={image2}  alt='' className='w-96 h-96' />
    </div>
    <div>
    <RegistrationForm/>
    </div>
    </div>
    </main>
  )
}

export default Register
