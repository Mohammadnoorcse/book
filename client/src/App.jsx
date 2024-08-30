import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './page/Layout/Navbar'
import Footer from './page/Layout/Footer'
import Home from './page/Home/Home'
import ProtectUser from './page/Protect/ProtectUser'
import BookDetails from './page/book/BookDetails'
import Login from './page/LoginAndRegistration/Login'
import BecomeSeller from './page/LoginAndRegistration/BecomeSeller'
import Signup from './page/LoginAndRegistration/Signup'
import Cart from './page/Cart/Cart'
import Dashboard from './page/Dashboard/Dashboard'
import Profile from './page/Profile/Profile'
import ProfileSection from './page/Profile/ProfileSection'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/becomeseller" element={<BecomeSeller />} />

        {/* user auth check */}
        <Route
          path="/book/:id"
          element={<ProtectUser element={<BookDetails />} />}
        />
        {/* <Route
          path="/profile"
          element={<ProtectUser element={<Profile />} />}
        /> */}
        <Route path="/cart" element={<ProtectUser element={<Cart />} />} />
        <Route path="/profile/:section" element={<ProtectUser element={<ProfileSection />} />} />
        <Route path="/deshboard" element={<Dashboard/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
