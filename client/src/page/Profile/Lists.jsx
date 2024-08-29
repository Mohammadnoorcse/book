import React from 'react'
import HomeSection from '../Home/HomeSection';
import { homesectiondata } from '../Home/data';

const Lists = () => {
  return (
    <div className="w-full flex  flex-col gap-4 ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Lists Information</span>
      </div>
      <div className="border"></div>
      <HomeSection
        bg="#FFFF"
        height="25rem"
        text="শুধুই আপনার জন্য"
        data={homesectiondata}
      />
    </div>
  );
}

export default Lists