import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './page/Layout/Navbar'
import Footer from './page/Layout/Footer'
import Home from './page/Home/Home'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>

        <Route path='/' element={<Home/>}/>
       </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
