import React from 'react'
import HomeSection from '../../Home/HomeSection';
import { homesectiondata } from '../../Home/data';

const BookShelf = () => {
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Bookshelf Information</span>
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

export default BookShelf