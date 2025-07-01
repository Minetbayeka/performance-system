import React from 'react'
import DataVerficationDetails from './components/DataVerficationDetails'
import Sidebar from '@features/components/Sidebar'
// import Sidebar from '../components/Sidebar'
import DataHeader from './components/DataHeader'


const Dataverification = () => {
  return (
    <section className='bg-gray-50' >
    <div className='flex gap-3'>
      <Sidebar/>
      <div className=''>
        <div className='ml-40'>
      <DataHeader/>
      </div>
      <div className='ml-72'>
      <DataVerficationDetails/>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Dataverification

















