import React from 'react'

const Points = () => {
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Points Information</span>
      </div>
      <div className="border"></div>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-xl text-[#333]">Reward List</h2>
        {/* point card */}
        <div className="w-full flex justify-between items-center border border-[#e9e9e9] rounded transition-all hover:shadow-md p-2 cursor-pointer">
          <div className="flex gap-4 items-center">
            <img
              src="https://www.rokomari.com/static/200/images/icon-rok.png"
              alt=""
            />
            <div className="flex flex-col gap-0">
              <h5 className="text-base font-medium">30 TK Shipping Discount</h5>
              <h6 className="text-sm">300 Points </h6>
            </div>
          </div>
          <div>
            <button className="p-2 border border-[#0397d3] text-sm text-[#0397d3] hover:bg-[#0397d3] hover:text-white">
              Redeem Reward
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center border border-[#e9e9e9] rounded transition-all hover:shadow-md p-2 cursor-pointer">
          <div className="flex gap-4 items-center">
            <img
              src="https://www.rokomari.com/static/200/images/icon-rok.png"
              alt=""
            />
            <div className="flex flex-col gap-0">
              <h5 className="text-base font-medium">30 TK Shipping Discount</h5>
              <h6 className="text-sm">300 Points </h6>
            </div>
          </div>
          <div>
            <button className="p-2 border border-[#0397d3] text-sm text-[#0397d3] hover:bg-[#0397d3] hover:text-white">
              Redeem Reward
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center border border-[#e9e9e9] rounded transition-all hover:shadow-md p-2 cursor-pointer">
          <div className="flex gap-4 items-center">
            <img
              src="https://www.rokomari.com/static/200/images/icon-rok.png"
              alt=""
            />
            <div className="flex flex-col gap-0">
              <h5 className="text-base font-medium">30 TK Shipping Discount</h5>
              <h6 className="text-sm">300 Points </h6>
            </div>
          </div>
          <div>
            <button className="p-2 border border-[#0397d3] text-sm text-[#0397d3] hover:bg-[#0397d3] hover:text-white">
              Redeem Reward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points