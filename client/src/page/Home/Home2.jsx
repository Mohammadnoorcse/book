import React, { useEffect, useState } from 'react'
import img1 from "../../assets/10021.png";
import img2 from "../../assets/10022.webp";
import img3 from "../../assets/10023.webp";
import img4 from "../../assets/10024.webp";
import img5 from "../../assets/10025.webp";
import img6 from "../../assets/10026.webp";
import img7 from "../../assets/10027.webp";
import img8 from "../../assets/10028.webp";
import img9 from "../../assets/10029.webp";
import img10 from "../../assets/10030.webp";

const images = [img1, img2, img3, img4 ,img5, img6, img7, img8,img9,img10];

const Home2 = ({ leftButton, setLeftButton }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

     const goToNext = () => {
       setCurrentIndex((currentIndex + 1) % images.length);
     };

     const goToPrevious = () => {
       setCurrentIndex((currentIndex - 1 + images.length) % images.length);
     };

  return (
    <div className="w-full h-screen bg-white relative">
      <div
        className="absolute left-[-4rem] lg:top-[20rem] sm:top[10rem]  -rotate-90 p-5 text-center bg-white shadow-lg rounded-xl cursor-pointer flex align-center justify-center"
        onClick={() => setLeftButton(!leftButton)}
      >
        <span className="">Read rokomi ebook</span>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col gap-[1rem]">
        {/* first cursoul */}
        <div className="w-full h-[14rem] border-2 flex overflow-hidden relative">
          <div className="w-full h-full">
            <img src={images[currentIndex]} alt="" className="w-full h-full" />
          </div>
          <div
            className="absolute top-[5rem] left-0 w-[2.5rem] h-[5rem] border-2 z-50 bg-white opacity-[0.6] flex justify-center items-center rounded-sm cursor-pointer"
            onClick={goToPrevious}
          >
            <i className="fa-solid fa-chevron-left font-bold text-2xl"></i>
          </div>
          <div
            className="absolute top-[5rem] right-0 w-[2.5rem] h-[5rem] border-2 z-50 bg-white opacity-[0.6] flex justify-center items-center rounded-sm cursor-pointer"
            onClick={goToNext}
          >
            <i className="fa-solid fa-chevron-right font-bold text-2xl"></i>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home2