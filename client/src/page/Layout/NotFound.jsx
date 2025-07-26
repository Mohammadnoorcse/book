import React from 'react'
import { Link } from "react-router-dom";
import notfound from "../../assets/notfound.jpg";
const NotFound = () => {
  return (
    <div className="w-full h-screen bg-[#F1F2F4] pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex  gap-2 pb-4 flex-col items-center bg-white shadow-sm">
        <img src={notfound} alt="" className="w-[20rem] h-[12rem]" />
        
        <h3 className="text-xl font-medium">
          Sorry, the page you're looking for doesn't exist.
        </h3>
        <p>
          Please go{" "}
          <Link to="/" className="underline text-[#73ABCD]">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound