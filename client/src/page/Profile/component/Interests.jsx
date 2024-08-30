import React from 'react'

const Interests = () => {
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller  ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Interests Information</span>
      </div>
      <div className="border"></div>
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <img
          src="https://www.rokomari.com/static/200/images/user-choice/user-choice-zero-category.png"
          alt=""
        />
        <p className="text-xl font-medium text-[#000]">
          আপনি এখনও বিষয় নির্বাচন করেননি।
        </p>
        <p className="text-sm text-[#737373]">
          পছন্দের বিষয় দিয়ে হোম পেজ সাজিয়ে নিন
        </p>
        <button className="bg-[#0070f6] p-2 rounded font-medium text-white">শুরু করুণ</button>
      </div>
    </div>
  );
}

export default Interests