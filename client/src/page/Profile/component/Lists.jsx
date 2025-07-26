import React from 'react'
// import HomeSection from '../Home/HomeSection';
// import { homesectiondata } from '../Home/data';
import { Link } from 'react-router-dom';

const Lists = () => {
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller  ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Lists Information</span>
      </div>
      <div className="border"></div>
      {/* <HomeSection
        bg="#FFFF"
        height="25rem"
        text="শুধুই আপনার জন্য"
        data={homesectiondata}
      /> */}

      <div className="w-full h-[72vh] flex flex-col gap-4 p-4 overflow-scroller">
        {/* card */}

        <div className="w-full h-[11rem] flex gap-4 bottom-border">
          <div className="w-[8rem] h-[10rem]">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base text-[#222]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-sm text-[#959699]">সাইফুল ইসলাম</p>
            <Link to="/book/1" className="text-[13px] text-[#33abdb] font-bold">
              Add Cart
            </Link>
          </div>
        </div>
        
      </div>


    </div>
  );
}

export default Lists