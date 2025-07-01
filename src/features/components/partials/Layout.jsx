import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <Sidebar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout
