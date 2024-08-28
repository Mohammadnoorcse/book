import React, { useState } from "react";
import img from "../../assets/10071.jpg";
import { Link } from "react-router-dom";
const carddata = [
  {
    _id: 1,
    price: 140,
    discount: 5,
  },
  {
    _id: 2,
    price: 140,
    discount: 5,
  },
  {
    _id: 3,
    price: 140,
    discount: 5,
  },
];
const DetailsCart = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [selectitem,setSelectItem] = useState(0)
  const[price,setPrice] = useState(0);
  
   const handleCheckboxChange = () => {
     setIsChecked(!isChecked); // Toggle the checked state
   };

   const handleaddation = (id)=>{
    const filteredItems = carddata.filter((item) => item._id === id);
      if(filteredItems){
        setSelectItem(selectitem+1);
      }
   }


 



  

  return (
    <div
      className="w-full h-screen bg-[#F1F2F4] relative overflow-y-auto pb-4"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col gap-[1rem]">
        {/* first */}
        <div className="w-full h-[10rem] bg-[#FFFFEB] shadow-sm rounded-md flex flex-col gap-2 overflow-scroller p-4">
          <div className="flex justify-end ">
            <span className="text-[16px] font-bold cursor-pointer">x</span>
          </div>
          <p className="text-[13px] font-bold">প্রিয় গ্রাহক,</p>
          <p className="text-[13px]">
            {" "}
            বর্তমানে দেশের বিভিন্ন এলাকায় বন্যার কারণে অর্ডারকৃত পণ্যের
            ডেলিভারি দিতে কিছুটা বিলম্ব হতে পারে। আমরা আপনার অর্ডার যত দ্রুত
            সম্ভব পৌঁছে দেওয়ার জন্য কাজ করে যাচ্ছি। আপনাদের সকলের সহযোগিতা ও
            ধৈর্য্য কামনা করছি।{" "}
          </p>
          <p className="text-[13px]">
            সাময়িক অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত।
          </p>
        </div>
        {/* second */}
        <div className="flex gap-4">
          {/* left */}
          <div className="w-full flex flex-col gap-4">
            {/* seleted item */}
            <div className="w-full h-[4rem] bg-white shadow-sm rounded-md  flex justify-between items-center p-3">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="cursor-pointer"
                />
                <label for="vehicle1" className="text-[16px]">
                  {" "}
                  Select All(1)
                </label>
              </div>
              <div className={isChecked ? "flex gap-2" : "hidden"}>
                <p className="text-[14px] font-bold text-[#333]">
                  {" "}
                  Aminur, your total:{" "}
                  <strike className="text-[red]"> 380 Tk.</strike>
                  <span className="text-[#38c976]"> 342 Tk.</span>
                </p>
              </div>
            </div>
            {/* card */}

            {carddata.map((value) => (
              <div
                className="w-full p-4 flex justify-between bg-[#FFFAF4] shadow-sm rounded-md "
                key={value._id}
              >
                <div className="flex gap-4 items-center">
                  <div>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className=" w-[5rem] h-[7rem]">
                      <img src={img} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Link to="/" className="text-[17px] text-[#333]">
                        {" "}
                        এইচএসসি মানবিক সাজেশন্স{" "}
                      </Link>
                      <p className="text-[15px] text-[#666]">
                        {" "}
                        সৈয়দ সাকিব আলম{" "}
                      </p>
                      <div className="flex gap-4 items-center">
                        <div className="w-[1.2rem] h-[1.2rem] cursor-pointer">
                          <img
                            src="https://www.rokomari.com/static/200/images/icon_trash.png"
                            alt=""
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex gap-2 items-center cursor-pointer">
                          <img
                            src="https://www.rokomari.com/static/200/images/icon_wishlist.png"
                            alt=""
                            className="w-[1.2rem] h-[1.2rem]r"
                          />
                          <p> Wishlist </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#F0F0F0] pl-3 pr-3 text-[16px] font-bold cursor-pointer">
                    -
                  </span>
                  <span className="bg-[white] pl-3 pr-3 text-[14px] ">
                    { value._id}
                  </span>
                  <span
                    className="bg-[#F0F0F0] pl-3 pr-3 text-[16px] font-bold cursor-pointer"
                    onClick={() => handleaddation(value._id)}
                  >
                    +
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[17px] font-bold">340 TK.</span>
                  <p>
                    <strike className="text-[17px] font-bold text-[red]">
                      380 TK.
                    </strike>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* right */}
          <div className="w-[20rem] h-[2rem] border"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCart;
