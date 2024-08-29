import React from 'react'

import OrderCard from './OrderCard';

const Order = () => {
  return (
    <div className="w-full flex  flex-col gap-4 ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Orders Information</span>
      </div>
      <div className="border"></div>
      {/* card-section */}
      <OrderCard/>
      <OrderCard/>
     
    </div>
  );
}

export default Order