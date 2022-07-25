import React from 'react'

// React Router
import { Route, Routes, Navigate } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound';

const handleRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/company' element={< Navigate to="/About" />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default handleRoutes