import React from 'react'
import Dashboard from './components/dashboard'
import HeaderIntern from './components/HeaderIntern'
import Sidebar from '../components/Sidebar'


const InternDashboard = () => {
  return (
    <section className='max-w-7xl mx-auto '>
        <div className='flex gap-8 pt-11'>
     <Sidebar/>
     
     <div>
    <HeaderIntern/>
     <Dashboard/>
  
     </div>
     
      </div>
        
    </section>
  )
}


export default InternDashboard
