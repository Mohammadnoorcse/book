import React from 'react'

const Ebook = () => {
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller  ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My eBook Library Information</span>
      </div>
      <div className="border"></div>
    </div>
  );
}

export default Ebook