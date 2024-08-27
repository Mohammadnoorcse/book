import React, { useState } from 'react'
import img1 from "../../assets/10071.jpg";
import {Link} from "react-router-dom"
const BookDetails = () => {
    const[wantRead,setReadWant] = useState(false);
  return (
    <div
      className="w-full h-screen bg-[#F1F2F4] pb-4 overflow-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col gap-4">
        {/* frist section */}
        <div className="flex bookdetails">
          {/* left */}
          <div className="w-full p-[1rem] bg-white shadow-md flex gap-4 bookdetails-left">
            {/* left 1 */}
            <div className="flex flex-col gap-4 items-center w-[18rem]  ">
              <div className="w-full h-[22rem] border flex flex-col gap-2 items-center pt-2">
                <p className="text-[red] font-bold">একটু পড়ে দেখুন</p>
                <div className="w-[14rem] h-[18rem] border border-[black] cursor-pointer">
                  <img src={img1} alt="book" className="w-full h-full" />
                </div>
              </div>
              <div className="flex gap-2">
                <div
                  className={
                    wantRead
                      ? "hidden"
                      : "w-[10rem] h-[2rem] bg-[#ebebeb] flex justify-center items-center rounded-sm cursor-pointer"
                  }
                  onClick={() => setReadWant(!wantRead)}
                >
                  <p className="text-[#737373] font-medium">Want to read</p>
                </div>
                <div
                  className={
                    wantRead
                      ? "hidden"
                      : "w-[2rem] h-[2rem] bg-[#ebebeb] flex justify-center items-center rounded-sm cursor-pointer"
                  }
                >
                  <i class="fa-solid fa-chevron-down text-[#737373] "></i>
                </div>
                <div
                  className={
                    wantRead
                      ? "w-[10rem] h-[2rem] border border-[#4398FE] text-[#4398FE] flex justify-center items-center rounded-sm cursor-pointer gap-2"
                      : "hidden"
                  }
                >
                  <i class="fa-solid fa-pen"></i>
                  <p>Want to read</p>
                </div>
              </div>
            </div>
            {/* left-2 */}
            <div className="flex flex-col gap-3 bookdetails-left-2">
              <h3 className="text-[#333] font-medium">
                মোটিভেশনাল মোমেন্টস-২ (হার্ডকভার)
              </h3>
              <p className="text-[#666] text-[14px]">
                by&nbsp;
                <Link to="/" className="text-[#0397d3] hover:underline">
                  মুফতি মেংক , এম এস আই সোহান (অনুবাদক) , প্রান্ত হাসান
                  (অনুবাদক)
                </Link>
              </p>
              <p className=" text-[14px]">
                Category:&nbsp;
                <Link to="/" className="text-[#0397d3] hover:underline">
                  ইসলামি বই: আত্ম উন্নয়ন
                </Link>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <i class="fa-solid fa-star text-[12px] text-[#f90]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#f90]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#f90]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#f90]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#f90]"></i>
                </div>
                <span>1 Rating | No Review</span>
              </div>
              <div className="flex items-center gap-2">
                <strike className="text-[#666] font-bold text-xl">
                  Tk. 360
                </strike>
                <span className="font-bold text-xl">Tk. 260</span>
                <span className="text-[#33c24d] text-[14px] font-medium">
                  You Save TK. 90 (25%)
                </span>
              </div>
              {/* edit */}
              <div className="flex gap-5 w-[35rem] h-[6rem] bg-[#F7F7F7] p-4 rounded-lg items-center productdetails-ebook">
                <div className="flex gap-3 items-center">
                  <div className="w-8">
                    <img src={img1} alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] text-[#666] font-bold">
                      Get eBook Version
                    </p>
                    <p className="text-[14px] text-[#333] font-bold">TK. 81</p>
                  </div>
                </div>
                <div className="w-[8rem] h-[2.5rem] border border-[#4398fe] text-[#4398fe] flex items-center justify-center gap-1 hover:bg-[#0397D3] hover:text-white cursor-pointer">
                  <i class="fa-solid fa-cloud-arrow-down"></i>
                  <span className="font-medium text-[14px]"> Buy to Read </span>
                </div>
              </div>
              {/* edit */}
              <div className="flex gap-2 p-2 border rounded-md border-[#33c24d] font-medium bg-[#F1FFF1] cursor-pointer">
                <img
                  src="https://www.rokomari.com/static/200/images/icons/rok-icon-discount-green.svg"
                  alt=""
                />
                <span className="text-[14px]">
                  InApp extra 3% off, use promocode: APPUSER{" "}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 flex-col">
                  <p className="text-[12px]">Book Length</p>
                  <img
                    src="https://www.rokomari.com/static/200/images/icons/svg/rok-icon-book-length.svg"
                    alt=""
                  />
                  <p className="text-[12px] capitalize">144 Pages</p>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <p className="text-[12px]">Edition</p>
                  <img
                    src="https://www.rokomari.com/static/200/images/icons/svg/rok-icon-edition.svg"
                    alt=""
                  />
                  <p className="text-[12px] capitalize">1st Edition 2023</p>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <p className="text-[12px]">Publication</p>
                  <img
                    src="https://www.rokomari.com/static/200/images/icons/svg/rok-icon-publication.svg"
                    alt=""
                  />
                  <p className="text-[12px] capitalize">অন্যধারা</p>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <p className="text-[12px]">ISBN</p>
                  <img
                    src="https://www.rokomari.com/static/200/images/icons/svg/rok-icon-qrcode.svg"
                    alt=""
                  />
                  <p className="text-[12px] capitalize">978-984-96994-5-3</p>
                </div>
              </div>
              {/* edit */}
              <div className="flex gap-2 p-2 border rounded-md  font-medium bg-[#F1FFF1] cursor-pointer">
                <img
                  src="https://www.rokomari.com/static/200/images/tag-icon.png"
                  alt=""
                  className="w-3"
                />
                <span className="text-[14px]">
                  নিশ্চিত ৫% ছাড়! (SELFHELP কোড ব্যবহারে){" "}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center ">
                  <img
                    src="https://www.rokomari.com/static/200/images/money-hand.png"
                    alt=""
                    className="w-[16px]"
                  />
                  <p className="text-[12px]">
                    বই হাতে পেয়ে মূল্য পরিশোধের সুযোগ
                  </p>
                </div>
                <div className="flex gap-1 items-center ">
                  <img
                    src="https://www.rokomari.com/static/200/images/happy-return-new.png"
                    alt=""
                    className="w-[16px]"
                  />
                  <p className="text-[12px]">৭ দিনের মধ্যে পরিবর্তনের সুযোগ</p>
                </div>
              </div>
              {/* edit */}
              <div className="flex gap-3">
                <div className="w-[10rem] h-[3rem] border border-[#33C24D] flex items-center justify-center text-[#33C24D] hover:bg-[#33C24D] hover:text-white cursor-pointer rounded-sm">
                  <span> একটু পড়ে দেখুন </span>
                </div>
                <div className="w-[10rem] h-[3rem] bg-[#4398fe] flex items-center justify-center text-white hover:bg-[#33C24D] hover:text-white cursor-pointer rounded-sm">
                  <span className="font-bold">Add to Cart</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex gap-2 items-center">
                  <i class="fa-regular fa-heart"></i>
                  <p className="hover:text-[#5F97DB] cursor-pointer">
                    {" "}
                    Add to Booklist{" "}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <i class="fa-solid fa-share-nodes"></i>
                  <p className="hover:text-[#5F97DB] cursor-pointer">
                    {" "}
                    Share This Book{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[15rem] bg-[#F7F7F7] p-4 flex flex-col gap-4 shadow-md overflow-auto bookdetails-right">
            <h1 className="text-[18px] font-medium">Related Products</h1>
            <div className="flex flex-col gap-4 bookdetails-right-1">
              <div className="flex gap-2 ">
                <div className="w-[3rem] h-[5rem]">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/The_Leadership_of_Muhammad_s-John_Adair-f926e-279369.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <p className="line-clamp text-[12px] text-[#6c757d] ">
                    {" "}
                    দ্য লিডারশিপ অব...{" "}
                  </p>
                  <p className="text-[12px] text-[#6c757d]">জন এডেয়ার </p>
                  <div className="flex gap-1 items-center">
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <span className="text-[10px] text-[#6c757d]">(1)</span>
                  </div>
                  <p className="text-[14px] text-[#6c757d]">
                    <strike>TK.300</strike> Tk.200
                  </p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex gap-2 ">
                <div className="w-[3rem] h-[5rem]">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/The_Leadership_of_Muhammad_s-John_Adair-f926e-279369.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <p className="line-clamp text-[12px] text-[#6c757d] ">
                    {" "}
                    দ্য লিডারশিপ অব...{" "}
                  </p>
                  <p className="text-[12px] text-[#6c757d]">জন এডেয়ার </p>
                  <div className="flex gap-1 items-center">
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <span className="text-[10px] text-[#6c757d]">(1)</span>
                  </div>
                  <p className="text-[14px] text-[#6c757d]">
                    <strike>TK.300</strike> Tk.200
                  </p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex gap-2 ">
                <div className="w-[3rem] h-[5rem]">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/The_Leadership_of_Muhammad_s-John_Adair-f926e-279369.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <p className="line-clamp text-[12px] text-[#6c757d] ">
                    {" "}
                    দ্য লিডারশিপ অব...{" "}
                  </p>
                  <p className="text-[12px] text-[#6c757d]">জন এডেয়ার </p>
                  <div className="flex gap-1 items-center">
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <span className="text-[10px] text-[#6c757d]">(1)</span>
                  </div>
                  <p className="text-[14px] text-[#6c757d]">
                    <strike>TK.300</strike> Tk.200
                  </p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex gap-2 ">
                <div className="w-[3rem] h-[5rem]">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/The_Leadership_of_Muhammad_s-John_Adair-f926e-279369.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <p className="line-clamp text-[12px] text-[#6c757d] ">
                    {" "}
                    দ্য লিডারশিপ অব...{" "}
                  </p>
                  <p className="text-[12px] text-[#6c757d]">জন এডেয়ার </p>
                  <div className="flex gap-1 items-center">
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <span className="text-[10px] text-[#6c757d]">(1)</span>
                  </div>
                  <p className="text-[14px] text-[#6c757d]">
                    <strike>TK.300</strike> Tk.200
                  </p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex gap-2 ">
                <div className="w-[3rem] h-[5rem]">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/The_Leadership_of_Muhammad_s-John_Adair-f926e-279369.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <p className="line-clamp text-[12px] text-[#6c757d] ">
                    {" "}
                    দ্য লিডারশিপ অব...{" "}
                  </p>
                  <p className="text-[12px] text-[#6c757d]">জন এডেয়ার </p>
                  <div className="flex gap-1 items-center">
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#f90]"></i>
                    <span className="text-[10px] text-[#6c757d]">(1)</span>
                  </div>
                  <p className="text-[14px] text-[#6c757d]">
                    <strike>TK.300</strike> Tk.200
                  </p>
                </div>
              </div>
              <div className="border"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default BookDetails