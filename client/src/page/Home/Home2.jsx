import React, { useEffect, useRef, useState } from 'react'
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
import img11 from "../../assets/10031.jpg";
import img12 from "../../assets/10032.jpg";
import img13 from "../../assets/10033.jpg";
import img14 from "../../assets/10034.png";
import img15 from "../../assets/10035.jpg";
import img16 from "../../assets/10036.png";
import img17 from "../../assets/10037.jpg";
import img18 from "../../assets/10038.jpg";
import img19 from "../../assets/10039.jpg";
import img20 from "../../assets/10040.jpg";
import img21 from "../../assets/10073.webp";
import {Link} from "react-router-dom"
import HomeSection from './HomeSection';
import { homesectiondata } from './data';

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
    <div
      className="w-full h-screen bg-[#F1F2F4] relative overflow-y-auto pb-4"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="absolute left-[-4rem] top-[20rem]  -rotate-90 p-5 text-center bg-white shadow-lg rounded-xl cursor-pointer align-center justify-center hidden md:flex "
        onClick={() => setLeftButton(!leftButton)}
      >
        <span className="">Read rokomi ebook</span>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col gap-[1rem]">
        {/* first cursoul */}
        <div className="w-full h-[14rem] flex overflow-hidden relative">
          <div className="w-full h-[12rem]">
            <img
              src={images[currentIndex]}
              alt=""
              className="w-full h-[12rem]"
            />
          </div>
          <div
            className="absolute top-[5rem] left-0 w-[2.5rem] h-[5rem]  z-50 bg-white opacity-[0.6] flex justify-center items-center rounded-sm cursor-pointer"
            onClick={goToPrevious}
          >
            <i className="fa-solid fa-chevron-left font-bold text-2xl"></i>
          </div>
          <div
            className="absolute top-[5rem] right-0 w-[2.5rem] h-[5rem] z-50 bg-white opacity-[0.6] flex justify-center items-center rounded-sm cursor-pointer"
            onClick={goToNext}
          >
            <i className="fa-solid fa-chevron-right font-bold text-2xl"></i>
          </div>
        </div>
        {/* second section */}
        <div className="w-full h-[7rem]  bg-white shadow-md flex gap-5 items-center pl-2 pr-2">
          <div>
            <h3 className="text-xl font-medium">Suggested For You</h3>
          </div>
          <div
            className="flex justify-between w-[80%] overflow-auto gap-2 no-scrollbar"
            style={{
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer and Edge
            }}
          >
            <img src={img11} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img12} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img13} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img14} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img15} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img16} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img17} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img18} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img19} alt="" className="w-[3.5rem] h-[5rem]" />
            <img src={img20} alt="" className="w-[3.5rem] h-[5rem]" />
          </div>
          <Link
            to="/"
            className=" flex items-center gap-1 border-[#0397D3] border-[1px] p-1 hover:bg-[#0397D3] cursor-pointer text-[#0397D3] hover:text-[white]"
          >
            <span className="">View All</span>
            <i className="fa-solid fa-chevron-right "></i>
          </Link>
        </div>

        {/* third section */}
        <HomeSection
          bg="#FFFFEB"
          height="25rem"
          text="শুধুই আপনার জন্য"
          data={homesectiondata}
          
          
        />
        {/* four section */}
        <div className="w-full h-[13rem] bg-white shadow-md flex flex-col gap-1 p-3">
          <div className="w-full flex justify-between ">
            <h3 className="text-[18px] font-medium text-[#333]">
              বেস্ট সেলার বিষয়
            </h3>
            <Link
              to="/"
              className="p-1 border-[1px] border-[#0397D3] text-[#0397D3] hover:bg-[#0397D3] hover:text-[white]"
            >
              View All
            </Link>
          </div>
          <div className="w-full flex flex-row gap-5 overflow-auto">
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
          </div>
        </div>
        {/* five section */}
        <div className="w-full h-[13rem] bg-white shadow-md flex flex-col gap-1 p-3">
          <div className="w-full flex justify-between ">
            <h3 className="text-[18px] font-medium text-[#333]">Superstore</h3>
            <Link
              to="/"
              className="p-1 border-[1px] border-[#0397D3] text-[#0397D3] hover:bg-[#0397D3] hover:text-[white]"
            >
              View All
            </Link>
          </div>
          <div className="w-full flex flex-row gap-5 overflow-auto">
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
            <Link
              to="/"
              className="w-[9rem] h-[8rem] text-center border-2 flex flex-col gap-2"
            >
              <img src={img21} alt="" />
              <p>ইসলামি বই</p>
            </Link>
          </div>
        </div>
        {/* six section */}
        <HomeSection
          bg="#FFFFEB"
          height="25rem"
          text="Recently Sold Products"
          data={homesectiondata}
        />
        {/* seven section */}
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="সেরা ডিস্কাউন্ট এ বেস্টসেলার বই"
          data={homesectiondata}
        />
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="HSC বিজ্ঞান বিভাগের ১ম বর্ষের বইসমূহ🚀"
          data={homesectiondata}
        />
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="HSC মানবিক বিভাগের ১ম বর্ষের বইসমূহ🚀"
          data={homesectiondata}
        />
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="প্রস্তুতি পরীক্ষা ২০২৪👍🚀"
          data={homesectiondata}
        />
        {/*  */}
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="Baby Care"
          data={homesectiondata}
        />
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="Find your next great read today!"
          data={homesectiondata}
        />
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="ড. মুহাম্মদ ইউনূস"
          data={homesectiondata}
        />
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="কালান্তর প্রকাশনী (সিলেট) এর বইয়ে নিশ্চিত ৪৯% ছাড়"
          data={homesectiondata}
        />
      </div>
    </div>
  );
};

export default Home2