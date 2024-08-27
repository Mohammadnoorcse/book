import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './page/Layout/Navbar'
import Footer from './page/Layout/Footer'
import Home from './page/Home/Home'
import ProtectUser from './page/Protect/ProtectUser'
import BookDetails from './page/book/BookDetails'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<ProtectUser element={<BookDetails />} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
