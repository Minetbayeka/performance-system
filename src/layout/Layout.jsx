import React from 'react'
import Header from '../components/atoms/Header'
import Footer from '../components/atoms/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
