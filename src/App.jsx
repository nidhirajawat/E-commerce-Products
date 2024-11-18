import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
// import { NavItem } from 'react-bootstrap'
import NavItems from './components/header/NavItems'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
      <NavItems/>
      <div className='min-vh-100'>
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default App
