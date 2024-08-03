import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/about-us'
import Maps from './pages/maps'

const Customer = () => {
  return (
      <Routes>
        <Route path='/' element={<Navbar/>}>

          <Route exact path='/' element={<Home/>} />
          <Route path='/customer/about' element={<About/>} />
          <Route path='/map' element={<Maps/>} />
        </Route>
      </Routes>
      
  )
}

export default Customer
