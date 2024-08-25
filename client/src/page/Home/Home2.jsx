import React from 'react'

const Home2 = ({ leftButton, setLeftButton }) => {
  return (
    <div className="w-full h-screen bg-white relative">
      <div className="absolute left-[-4rem] lg:top-[20rem] sm:top[10rem]  -rotate-90 p-5 text-center bg-white shadow-lg rounded-xl cursor-pointer flex align-center justify-center" onClick={()=>setLeftButton(!leftButton)}>
        <span className="">Read rokomi ebook</span>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col gap-[1rem]">
       
      </div>
    </div>
  );
};

export default Home2