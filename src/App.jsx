import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'




const App = () => {
  return (
   <>
      <Navbar />
     <Routes>
       <Route path='/' element={<><Home/><About/><Contact/></>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/admin' element={<Admin/>}/>
       
     </Routes>
     {/* <Admin></Admin> */}
      <Footer/>
     
   </>
  )
}

export default App