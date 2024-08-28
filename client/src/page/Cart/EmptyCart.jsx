import React from 'react'
import {Link} from "react-router-dom"
import HomeSection from '../Home/HomeSection';
import { homesectiondata } from '../Home/data';
const EmptyCart = () => {
  return (
    <div
      className="w-full h-screen bg-[#F1F2F4] relative overflow-y-auto pb-4"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col gap-[1rem]">
        <div className="flex justify-center">
          <div className="w-[25rem] h-[25rem] bg-[#FBFBFB] flex flex-col gap-4 justify-center items-center p-4">
            <img
              src="https://www.rokomari.com/static/200/images/icon_empty_cart.png"
              alt=""
              className="w-[10rem] h-[10rem]"
            />
            <h2 className="text-[2rem] font-medium">Your Cart is Empty!</h2>
            <div className="flex flex-col items-center">
              <p className="text-[#666] text-[14px]">
                Looks like you haven't made order yet.
              </p>
              <Link to="/" className="text-[#007bff] text[16px] font-bold">
                Continue to Shopping
              </Link>
            </div>
          </div>
        </div>

        {/*  */}
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="Recently Sold Products"
          data={homesectiondata}
        />
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="This Week's Best Selling Products"
          data={homesectiondata}
        />
      </div>
    </div>
  );
}

export default EmptyCart