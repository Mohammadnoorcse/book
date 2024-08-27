import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './page/Layout/Navbar'
import Footer from './page/Layout/Footer'
import Home from './page/Home/Home'
import Login from './page/LoginAndRegistration/Login'
import Signup from './page/LoginAndRegistration/Signup'
import BecomeSeller from './page/LoginAndRegistration/BecomeSeller'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/becomeseller' element={<BecomeSeller/>}/>
       </Routes>

      <Footer/>
    
    
    </BrowserRouter>
  )
}

export default App
