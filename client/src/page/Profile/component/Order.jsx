import React from 'react'

import OrderCard from './OrderCard';

const Order = () => {
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Orders Information</span>
      </div>
      <div className="border"></div>
      {/* card-section */}
      <OrderCard />
      <OrderCard />
    </div>
  );
}

export default Order