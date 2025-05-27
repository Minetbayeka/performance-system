import React from 'react'
import Dashboard from './components/dashboard'
import Sidebar from '../admin/components/Sidebar'
import HeaderIntern from './components/HeaderIntern'

const InternDashboard = () => {
  return (
    <section className='max-w-6xl mx-auto '>
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
