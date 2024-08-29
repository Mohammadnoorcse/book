import React, { useEffect, useState } from "react";
import img from "../../assets/10071.jpg";
import { Link } from "react-router-dom";
const data = [
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
  const [carddata, setCardData] = useState(data); // Initialize card data state
  const [isChecked, setIsChecked] = useState(true);

  const [checkedItems, setCheckedItems] = useState(() =>
    carddata.reduce((acc, item) => {
      acc[item._id] = true;
      return acc;
    }, {})
  );
  const [itemQuantities, setItemQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscount] = useState(0);

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => {
      const updatedCheckedItems = {
        ...prev,
        [id]: !prev[id],
      };

      // // If the item is unchecked, remove it from the carddata
      // if (!updatedCheckedItems[id]) {
      //   setCardData((prevCardData) =>
      //     prevCardData.filter((item) => item._id !== id)
      //   );
      // }

      return updatedCheckedItems;
    });
  };

  const handleAddition = (id) => {
    setItemQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleSubtraction = (id) => {
    setItemQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 0),
    }));
  };

  useEffect(() => {
    // Calculate total price with discount only for checked items
    const total = carddata.reduce((acc, item) => {
      if (checkedItems[item._id]) {
        // Only include checked items
        const quantity = itemQuantities[item._id] || 1;
        const discountedPrice = item.price * (1 - item.discount / 100);
        return acc + quantity * discountedPrice;
      }
      return acc;
    }, 0);

    // Calculate total price with discount only for checked items
    const discount = carddata.reduce((dcc, item) => {
      if (checkedItems[item._id]) {
        // Only include checked items
        const quantity = itemQuantities[item._id] || 1;
        
        return dcc + quantity * item.price ;
      }
      return dcc;
    }, 0);

    setTotalPrice(total.toFixed(2));
    setDiscount(discount.toFixed(2));
  }, [itemQuantities, checkedItems, carddata]);

  // Calculate the number of selected items
  const selectedLength = Object.values(checkedItems).filter(Boolean).length;

  const [shippModel,setShippModel] = useState(false);

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
        <div className="flex gap-4 cart-second">
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
                  Select All({selectedLength})
                </label>
              </div>
              <div className={isChecked ? "flex gap-2" : "hidden"}>
                <p className="text-[14px] font-bold text-[#333]">
                  {" "}
                  Aminur, your total:{" "}
                  <strike className="text-[red]"> {discountPrice} Tk.</strike>
                  <span className="text-[#38c976]"> {totalPrice} Tk.</span>
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
                      id={value._id}
                      name={value._id}
                      checked={!!checkedItems[value._id]}
                      onChange={() => handleCheckboxChange(value._id)}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex gap-4 ">
                    <div className=" w-[5rem] h-[7rem] cart-card-img">
                      <img src={img} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Link
                        to="/"
                        className="text-[17px] text-[#333] cart-card-text-1 "
                      >
                        {" "}
                        এইচএসসি মানবিক সাজেশন্স{" "}
                      </Link>
                      <p className="text-[15px] text-[#666] cart-card-text-2">
                        {" "}
                        সৈয়দ সাকিব আলম{" "}
                      </p>
                      <div className="flex gap-4 items-center cart-card-text-3">
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
                  <span
                    className="bg-[#F0F0F0] pl-3 pr-3 text-[16px] font-bold cursor-pointer cart-card-text-4"
                    onClick={() => handleSubtraction(value._id)}
                  >
                    -
                  </span>
                  <span className="bg-[white] pl-3 pr-3 text-[14px] ">
                    {itemQuantities[value._id] || 1}
                  </span>
                  <span
                    className="bg-[#F0F0F0] pl-3 pr-3 text-[16px] font-bold cursor-pointer cart-card-text-4"
                    onClick={() => handleAddition(value._id)}
                  >
                    +
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[17px] font-bold cart-card-text-5">
                    {(itemQuantities[value._id]
                      ? value.price * itemQuantities[value._id]
                      : value.price) *
                      (1 - value.discount / 100)}{" "}
                    TK.
                  </span>
                  <p>
                    <strike className="text-[17px] font-bold text-[red] cart-card-text-5">
                      {value.price * itemQuantities[value._id] || value.price}{" "}
                      TK.
                    </strike>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* right */}
          <div className="w-[20rem]  flex flex-col gap-4">
            {/* right-1 */}
            <div className="w-full flex flex-col gap-2 bg-white shadow-sm rounded-md p-4">
              <h4 className="text-[20px] font-medium">Shipping Address</h4>
              <div className="border"></div>
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    checked
                  />
                  <label for="html" className="text-[14px]">
                    {" "}
                    ধানমন্ডি{" "}
                  </label>
                  <span className="text-[14px] text-[#929292]">(HOME)</span>
                </div>
                <div className="flex gap-1 items-center">
                  <i class="fa-solid fa-pencil text-[14px]"></i>
                  <Link
                    to="/"
                    className="text-[#007bff] text-[14px] font-medium"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <p className="text-[14px]">Name : Aminur</p>
              <p className="text-[14px]">Phone: 8801775296704,</p>
              <p className="text-[14px] text-[#929292]">শুক্রবাদ 25/A</p>
              <p className="text-[14px] text-[#929292]">ধানমন্ডি , ঢাকা,</p>
              <div className="w-full text-center">
                <Link to="/" className="text-[#007bff]">
                  See All Addresses
                </Link>
              </div>
              <div className="w-full text-center">
                <button
                  className="text-[#007bff]"
                  onClick={() => setShippModel(true)}
                >
                  Add new address
                </button>
              </div>
            </div>
            {/* right-2 */}
            <div className="w-full flex flex-col gap-2 bg-white shadow-sm rounded-md p-4">
              <h4 className="text-[20px] font-medium">Checkout Summary</h4>
              <div className="border"></div>
              <div className="flex justify-between items-center">
                <p className="text-[15px] text-[#333] font-normal">Subtotal </p>
                <p className="text-[15px] text-[#333] font-normal">342 TK.</p>
              </div>
              <div className="border border-[#d9d9d9] border-dashed "></div>
              <div className="flex justify-between items-center">
                <p className="text-[15px] text-[#333] font-normal">Shipping </p>
                <p className="text-[15px] text-[#333] font-normal">48 TK.</p>
              </div>
              <div className="border border-[#d9d9d9] border-dashed "></div>
              <div className="flex justify-between items-center">
                <p className="text-[15px] text-[#333] font-normal">Total </p>
                <p className="text-[15px] text-[#333] font-normal">390 TK.</p>
              </div>
              <div className="border border-[#d9d9d9] border-dashed "></div>
              <div className="flex justify-between items-center">
                <p className="text-[15px] text-[#333] font-medium">
                  Payable Total{" "}
                </p>
                <p className="text-[15px] text-[#333] font-medium">390 TK.</p>
              </div>
              <div className="border border-[#d9d9d9] border-dashed "></div>
              <button className="w-full h-[2.5rem] rounded-md text-white font-medium bg-[#4398FE]">
                CheckOut
              </button>
            </div>
          </div>
        </div>

        {/* shapping model */}
        <div
          className={
            shippModel
              ? "fixed left-[30%] w-[23rem] h-auto bg-white  z-40 shadow-md rounded-md p-4 flex flex-col gap-3 shapping-model"
              : "hidden"
          }
        >
          <div className="flex justify-between items-center">
            <h4 className="text-[14px] font-bold text-[#333]">Shipping Info</h4>
            <span
              className="text-[14px] text-[#0397d3] font-bold underline cursor-pointer"
              onClick={() => setShippModel(false)}
            >
              Cancel
            </span>
          </div>
          <div className="border"></div>
          <form action="" className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-[#333]">Received From: </p>
              <p className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                  className="scale-150 cursor-pointer"
                />
                <label for="html" className="text-[14px] text-[#333] font-sm">
                  Home
                </label>
              </p>
              <p className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                  className="scale-150 cursor-pointer"
                />
                <label for="html" className="text-[14px] text-[#333] font-sm">
                  Office
                </label>
              </p>
            </div>
            <div className="flex justify-between items-center gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-[50%] h-[2.5rem] border outline-1 p-2 text-[14px] "
              />
              <input
                type="text"
                placeholder="Number"
                className="w-[50%] h-[2.5rem] border outline-1 p-2 text-[14px] "
              />
            </div>
            <div className="flex justify-between items-center gap-3">
              <input
                type="text"
                placeholder="City"
                className="w-[50%] h-[2.5rem] border outline-1 p-2 text-[14px] "
              />
              <input
                type="text"
                placeholder="Area"
                className="w-[50%] h-[2.5rem] border outline-1 p-2 text-[14px] "
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                placeholder="বাসা/ফ্ল্যাট নম্বর, পাড়া-মহল্লার নাম, পরিচিতির এলাকা উল্লেখ করুন"
                className="w-full h-[4.5rem] border outline-1 text-[14px] p-2"
              ></textarea>
            </div>
            <button className="w-full h-[2.5rem] rounded-md text-white font-medium bg-[#0397d3]">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsCart;
