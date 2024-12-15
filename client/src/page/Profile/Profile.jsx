import React, { useState } from 'react'
import Account from './component/Account';
import Order from './component/Order';
import Ebook from './component/Ebook';
import Lists from './component/Lists';
import BookShelf from './component/BookShelf';
import Wishlist from './component/Wishlist';
import Interests from './component/Interests';
import Reviews from './component/Reviews';
import Balance from './component/Balance';
import Points from './component/Points';
import Following from './component/Following';
import Courses from './component/Courses';
import Voucher from './component/Voucher';
import Bkash from './component/Bkash';


const Profile = () => {
    const [activeSidebar,setActiveSidebar] = useState("account");

     const renderView = () => {
       switch (activeSidebar) {
         case "account":
           return <Account />;
         case "order":
           return <Order/>;
         case "ebook":
           return <Ebook/>;
         case "list":
           return <Lists/>;
         case "bookshelf":
           return <BookShelf/>;
         case "wishlist":
           return <Wishlist/>;
         case "interest":
           return <Interests/>;
         case "rating":
           return <Reviews/>;
         case "balance":
           return <Balance/>;
         case "point":
           return <Points/>;
         case "following":
           return <Following/>;
         case "course":
           return <Courses/>;
         case "load":
           return <Voucher/>;
         case "bkash":
           return <Bkash/>;
         default:
           return <h1>404 Not Found</h1>;
       }
     };
    
  return (
    <div
      className="w-full h-screen bg-[#F1F2F4] pb-4 overflow-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex  gap-[1rem]">
        {/* left */}
        <div className="w-[14rem] flex gap-4 flex-col profile-left">
          {/* left-1 */}
          <div className="w-full h-[5rem] bg-[#fff] rounded-r-sm box-shadow flex gap-2 p-4">
            <div className="w-[50px]">
              <img
                src="https://ds.rokomari.store/rokomari110/user/user.png"
                alt=""
                className="w-full rounded-[100%]"
              />
            </div>
            <div className="flex flex-col text-[14px]">
              <p>Hello,</p>
              <h3 className="text-[#333] font-medium">Aminur</h3>
            </div>
          </div>
          {/* left-2 */}
          <div className="w-full  bg-[#fff] rounded-r-sm box-shadow flex  flex-col">
            <div
              className={
                activeSidebar === "account"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("account")}
            >
              <span>My Account</span>
            </div>
            <div
              className={
                activeSidebar === "order"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("order")}
            >
              <span>My Orders</span>
            </div>
            <div
              className={
                activeSidebar === "ebook"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("ebook")}
            >
              <span>My eBook Library</span>
            </div>
            <div
              className={
                activeSidebar === "list"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("list")}
            >
              <span>My Lists</span>
            </div>
            <div
              className={
                activeSidebar === "bookshelf"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("bookshelf")}
            >
              <span>My Bookshelf</span>
            </div>
            <div
              className={
                activeSidebar === "wishlist"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("wishlist")}
            >
              <span>My Wishlist</span>
            </div>
            <div
              className={
                activeSidebar === "interest"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("interest")}
            >
              <span>My Interests</span>
            </div>
            <div
              className={
                activeSidebar === "rating"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("rating")}
            >
              <span>Rating & Reviews</span>
            </div>
            <div
              className={
                activeSidebar === "balance"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("balance")}
            >
              <span>My Balance</span>
            </div>
            <div
              className={
                activeSidebar === "point"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("point")}
            >
              <span>My Points</span>
            </div>
            <div
              className={
                activeSidebar === "following"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("following")}
            >
              <span>My Following Authors</span>
            </div>
            <div
              className={
                activeSidebar === "course"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("course")}
            >
              <span>My Courses</span>
            </div>
            <div
              className={
                activeSidebar === "load"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("load")}
            >
              <span>Load Voucher</span>
            </div>
            <div
              className={
                activeSidebar === "bkash"
                  ? "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#5dc16d] text-base font-normal cursor-pointer bg-[#EFFFF2]"
                  : "w-full h-[3rem] bottom-border pl-[1rem] flex items-center text-[#333] text-base font-normal cursor-pointer hover:text-[#0397D3]"
              }
              onClick={() => setActiveSidebar("bkash")}
            >
              <span>My Bkash Account</span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full  bg-[#fff] rounded-r-sm box-shadow flex  flex-col gap-4 top-border p-4">

          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default Profile