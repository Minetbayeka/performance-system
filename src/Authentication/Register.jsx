import React from 'react'
import RegistrationForm from './components/RegisterForm'
import image2 from '../../src/assets/images/person.jpg'

const Register = () => {
  return (
    <section className='  min-h-screen grid place-items-center bg-gray-50 pb-10'>
    <div>
    <RegistrationForm/>
    </div>
    </section>
  )
}

export default Register


