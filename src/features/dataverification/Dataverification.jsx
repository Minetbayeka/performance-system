import React from 'react'
import DataVerficationDetails from './components/DataVerficationDetails'
import Sidebar from '../components/Sidebar'


const Dataverification = () => {
  return (
    <section className='bg-gray-50' >
    <div className='flex gap-3'>
      <Sidebar/>
      <div className='ml-72'>
      <DataVerficationDetails/>
      </div>
    </div>
    </section>
  )
}

export default Dataverification

















