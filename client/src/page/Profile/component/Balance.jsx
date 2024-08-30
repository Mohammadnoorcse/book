import React, { useState } from 'react'

const Balance = () => {
  const [isBalance,setIsBalance] = useState(false);
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller  ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Balance Information</span>
      </div>
      <div className="border"></div>

      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="w-full h-[20rem] bg-[#303956] flex justify-center items-center gap-4">
          <h2 className="text-[#fff] font-normal text-xl">
            Aminur`s Rokomari Balance
          </h2>
          <div className="relative flex flex-col gap-2 text-center">
            <img
              src="https://www.rokomari.com/static/200/images/my-wallet.png"
              alt=""
              className="w-[25rem]"
            />
            <div className="absolute top-[5rem] right-3">
              <p className="text-[#a6b5e0]">Your Available Rokomari Balance</p>
              <h3 className="text-white font-medium text-xl">
                <span className="text-base">Tk.</span> 0
              </h3>
            </div>
          </div>
        </div>
        <button className="p-2 border border-[#33c24d] text-[#33c24d]" onClick={()=>setIsBalance(true)}>
          View Your Rokomari Balance History
        </button>
        <div className={isBalance?"w-full ":"hidden"}>
          <table className="text-center w-full">
            <thead className="bg-[#edeef2] text-[#212837] ">
              <tr className='h-[3rem] text-sm'>
                <th>Date</th>
                <th>Rokomari Balance Type</th>
                <th>Reference Order ID</th>
                <th>Amount</th>
                
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Balance