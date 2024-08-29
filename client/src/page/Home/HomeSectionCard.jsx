import React, { useState } from 'react'
import img21 from "../../assets/10067.jpg";
import { Link } from 'react-router-dom';
import { addItemToLocalStorage } from '../Cart/cartlocal';
const HomeSectionCard = ({value}) => {
    const stock = value.stock;
   
     const handleAddItem = (id) => {
      
       if (id !== "") {
         addItemToLocalStorage("cartItem", id);
        
       }
     };
  return (
    <div className="w-full h-full border-2 flex flex-col gap-1 justify-center items-center relative third-card p-2">
      <img src={value.img} alt="" className="w-[12rem] h-[11.5rem]" />
      <h4 className="text-[14px] font-medium text-ellipsis text-nowrap overflow-hidden ">
        প্যারাডক্সিক্যাল সাজিদ ২
      </h4>
      <p className="text-[13px] text-[#666]">আরিফ আজাদ</p>
      <div className="flex gap-1 items-center">
        <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
        <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
        <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
        <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>

        <i class="fa-regular fa-star-half-stroke text-[#f90] text-[12px]"></i>
        <span className="text-[12px] text-[#666]">(120)</span>
      </div>
      {stock ? (
        <>
          <span className="text-[13px] text-[#33c24d] text-capitalize font-medium">
            Product in stock
          </span>
        </>
      ) : (
        <>
          <span className="text-[13px] text-[red] text-capitalize font-medium">
            Product out stock
          </span>
        </>
      )}

      <p className="text-[15px] font-bold">
        <strike>TK. 415</strike> TK. 290
      </p>

      <div
        className="absolute top-[5rem] w-[12rem] h-[3rem] bg-[#FFAC32]   justify-center items-center  z-40 thirditem cursor-pointer"
        onClick={() => handleAddItem(value._id)}
      >
        <span className="text-[16px] font-bold text-white ">Add To Cart</span>
      </div>
      <Link className="absolute bottom-0 w-full h-[2rem] bg-[#F5F5F5]  justify-center items-center z-40 thirditem text-[14px] font-bold text-[#48B1F7]" to={`/book/${value._id}`}>
        
      
          View Details
        
      </Link>
    
    </div>
  );
}

export default HomeSectionCard