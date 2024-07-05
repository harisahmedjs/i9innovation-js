import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from '../../screens/Blogs'
import Navbar from '../../components/Navbar'
import Company from '../../screens/Company'
import Software from '../../screens/Software'
import Marketing from '../../screens/Marketing'

const RouterConfig = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Blogs />} />
      <Route path='/About' element={<Company />} />
      <Route path='/Software' element={<Software />} />
      <Route path='/Marketing' element={<Marketing />} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig