import React, { useRef, useState } from 'react'
import img1 from "../../assets/10071.jpg";
import {Link,useParams} from "react-router-dom"
import HomeSection from '../Home/HomeSection';
import { homesectiondata } from '../Home/data';
import { addItemToLocalStorage } from '../Cart/cartlocal';
const BookDetails = () => {
    const[wantRead,setReadWant] = useState(false);
    const [summaryBtn,setSummaryBtn] = useState("summary");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [ratingmodel,setRatingModel] = useState(false);
     const fileInputRef = useRef(null);
     const handleImageClick = () => {
       fileInputRef.current.click();
     };
     const hadleRatingModel = () =>{
      setRatingModel(false);
      setRating(0);
      setHover(0);
     }
     const comment = true;
   const handleAddItem = (id) => {
     if (id !== "") {
       addItemToLocalStorage("cartItem", id);
     }
    
   };
  return (
    <div
      className={
        ratingmodel
          ? "w-full h-auto bg-[#F1F2F4] pb-4 overflow-auto relative bookdetails-page"
          : "w-full h-screen bg-[#F1F2F4] pb-4 overflow-auto relative"
      }
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
                <div
                  className="w-[10rem] h-[3rem] bg-[#4398fe] flex items-center justify-center text-white hover:bg-[#33C24D] hover:text-white cursor-pointer rounded-sm"
                  onClick={() => handleAddItem(1)}
                  // onClick={() => handleAddItem(value._id)}
                >
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

        {/* second section */}
        <div
          className="w-full grid gap-4  overflow-auto"
          style={{
            gridTemplateColumns: "repeat(3,minmax(18rem,1fr))",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
          }}
        >
          <div className="w-full h-[3rem] border border-[#00b2ff] rounded-md flex gap-3 items-center justify-center bg-[#FFFFFF]">
            <span>সমগ্র বাংলাদেশে হোম ডেলিভারি </span>
            <img
              src="https://www.rokomari.com/static/200/images/deatails-page-icon/delivary-icon.svg"
              alt=""
            />
          </div>
          <div className="w-full h-[3rem] border border-[#00b2ff] rounded-md flex gap-3 items-center justify-center bg-[#FFFFFF] ">
            <span>কিভাবে রকমারিতে অর্ডার করবেন</span>
            <img
              src="https://www.rokomari.com/static/200/images/deatails-page-icon/play-button.svg"
              alt=""
            />
          </div>
          <div className="w-full h-[3rem] border border-[#00b2ff] rounded-md flex gap-3 items-center justify-center bg-[#FFFFFF] ">
            <span>পণ্য কিনে পয়েন্টস জিতুন </span>
            <img
              src="https://www.rokomari.com/static/200/images/deatails-page-icon/rokomari-logo.svg"
              alt=""
            />
          </div>
        </div>
        {/* third section */}
        <div className="w-full h-[5rem]">
          <img
            src="https://ds.rokomari.store/rokomari110/banner/DESKTOPdf6ce99c-b822-4e35-a3e5-8ded5dfdbc10.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        {/* four section */}
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="Similar Category eBooks"
          data={homesectiondata}
        />
        {/* five section */}
        <HomeSection
          bg="#FFFFFF"
          height="25rem"
          text="Customers Also Bought"
          data={homesectiondata}
        />
        {/* section six */}
        <div className="w-full shadow-md flex flex-col gap-3 p-3 bg-white">
          <h3 className="text-[18px] font-medium text-[#333]">
            Product Specification & Summary
          </h3>
          <div className="flex flex-col">
            <div className="flex gap-4 items-center ">
              <div
                className="w-[5rem] h-[2.3rem]  relative flex justify-center items-center text-center cursor-pointer"
                onClick={() => setSummaryBtn("summary")}
              >
                <span> Summary </span>
                <div
                  className={
                    summaryBtn === "summary"
                      ? "absolute top-0 left-0 w-[5rem] h-[2.4rem] bg-white product-summary rounded-sm text-[#33c24d] "
                      : "hidden"
                  }
                >
                  <span> Summary </span>
                </div>
              </div>
              <div
                className="w-[7rem] h-[2.3rem]  relative flex justify-center items-center text-center cursor-pointer"
                onClick={() => setSummaryBtn("specification")}
              >
                <span>Specification</span>
                <div
                  className={
                    summaryBtn === "specification"
                      ? "absolute top-0 left-0 w-[7rem] h-[2.4rem] bg-white product-summary rounded-sm text-[#33c24d] "
                      : "hidden"
                  }
                >
                  <span> Specification </span>
                </div>
              </div>
              <div
                className="w-[5rem] h-[2.3rem]  relative flex justify-center items-center text-center cursor-pointer "
                onClick={() => setSummaryBtn("author")}
              >
                <span> Author </span>
                <div
                  className={
                    summaryBtn === "author"
                      ? "absolute top-0 left-0 w-[5rem] h-[2.4rem] bg-white product-summary rounded-sm text-[#33c24d] "
                      : "hidden"
                  }
                >
                  <span> Author </span>
                </div>
              </div>
            </div>
            <div className="border"></div>

            <div className="pt-4">
              {summaryBtn === "summary" ? (
                <>
                  <div className="w-full max-h-[15rem] overflow-scroller">
                    <p className="text-justify text-[#555] text-[14px]">
                      আমি আশাবাদ ব্যক্ত করছি যে, মোটিভেশনাল মোমেন্টস পুস্তকটিকে
                      আপনারা জ্ঞানগর্ভ এক আলোচনা হিসেবে গ্রহণ করেছেন এবং এই
                      আলোচনাকে আপনার জীবনে যে সকল মানুষ গুরুত্ব বহন করে চলে
                      তাদের সঙ্গে ভাগ করে নেবেন। এই গ্রন্থটিকে বিশেষ করে তাদের
                      প্রতি উৎসর্গ করা হয়েছে যারা এই বইয়ে থাকা উক্তিগুলোকে পোস্ট
                      করার সঙ্গে সঙ্গে লাইক করেছেন, রিটুইট করেছেন এবং শেয়ার করে
                      ছড়িয়ে দিয়েছেন। পোস্টকৃত উক্তিগুলোতে আপনাদের করা কিছু
                      মন্তব্য আমাকে রীতিমতো ছুঁয়ে গেছে। ‘মুফতি মেংক, আপনার
                      পোস্টগুলো পড়ার পূর্বমুহূর্ত পর্যন্ত আমি অন্ধকারে ছিলাম।
                      এখন এই উক্তিগুলো আমার দৈনন্দিন জীবনের অত্যাবশ্যকীয়
                      বিষয়গুলোর মতোই হয়ে গিয়েছে।’ ‘আমি সত্যি সত্যিই এমনটা
                      চাচ্ছিলাম যে, আমার জীবনকে শেষ করে ফেলি। আমি খুবই
                      হতাশাগ্রস্ত ছিলাম। আমার একজন বন্ধু আমাকে আপনার পেজের
                      সন্ধান দেয়। আমি এখন আমার জীবনকে ভিন্নভাবে দেখি।’ ‘আমার
                      নিজের প্রতি করুণা হতো আর আমার নিজের প্রতি কোনো বিশ^াস ছিল
                      না। আপনার উক্তিগুলো আমার দৃষ্টিভঙ্গি পরিবর্তনে সাহায্য
                      করেছে। আপনার উক্তিগুলো ইতিবাচক হওয়ার ধারণা দেয়।’
                      উদ্ধৃতিগুলো প্রায়শই পাঠ করুন এবং গুরুত্ব সহকারে সেগুলো
                      নিয়ে চিন্তা-ভাবনা করুন। অবশ্যই, কাজ না করলে কথার কোনো
                      মূল্য থাকবে না। আমি আশাবাদী, উক্তিগুলো আপনার লক্ষ্যে
                      পৌঁছানোর জন্য আপনার প্রেরণা বৃদ্ধিতে সহায়তা করতে পারবে।
                    </p>
                  </div>
                </>
              ) : summaryBtn === "specification" ? (
                <>
                  <div className="w-full max-h-[15rem] overflow-scroller ">
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        Title
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        মোটিভেশনাল মোমেন্টস-২
                      </div>
                    </div>
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        Author
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        মুফতি মেংক
                      </div>
                    </div>
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        Translator
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        এম এস আই সোহান , প্রান্ত হাসান
                      </div>
                    </div>
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        Publisher
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        অন্যধারা
                      </div>
                    </div>
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        ISBN
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        978-984-96994-5-3
                      </div>
                    </div>
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        Edition
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        1st Edition 2023
                      </div>
                    </div>
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        Number of Pages
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        144
                      </div>
                    </div>
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        Country
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        বাংলাদেশ
                      </div>
                    </div>
                    <div className="flex text-[14px]">
                      <div className="w-[10rem] h-[2.5rem] border pl-3 pt-1 bg-[#F1F2F4]">
                        Language
                      </div>
                      <div className="w-full h-[2.5rem] border pl-3 pt-1">
                        বাংলা
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full max-h-[15rem] overflow-scroller flex items-center justify-center  gap-3 flex-col ">
                    <div className="w-[8rem] h-[8rem] ">
                      <img
                        src={img1}
                        alt=""
                        className="w-full h-full rounded-[100%]"
                      />
                    </div>
                    <span>27 followers</span>
                    <button className="w-[5rem] h-[2rem] bg-[#0397D3] font-medium text-white">
                      Follow
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* rating */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[16px] font-medium text-[#333]">
              Reviews and Ratings
            </h3>
            {/* edit */}
            <div className="flex items-center justify-between rating-sytem">
              <div className="flex flex-col gap-2">
                <h5 className="text-[18px] ">Rate this product</h5>
                <div className="flex flex-col gap-3 items-center">
                  <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;

                      return (
                        <span
                          key={index}
                          className={`fa-solid fa-star ${
                            ratingValue <= (hover || rating) ? "checked" : ""
                          }`}
                          onClick={() => setRating(ratingValue)}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(rating)}
                        ></span>
                      );
                    })}
                  </div>
                  <button
                    className="p-2 border border-[#0397d3] text-[14px] text-[#0397d3]"
                    onClick={() => setRatingModel(true)}
                  >
                    {" "}
                    রিভিউ লিখুন{" "}
                  </button>
                </div>
              </div>
              <div className="flex gap-4 rating-sytem-2">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold">5.0</h3>
                  <div className="flex">
                    <i class="fa-solid fa-star text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[#f90]"></i>
                    <i class="fa-solid fa-star text-[#f90]"></i>
                  </div>
                  <p className="text-[14px] text-[#666]">
                    {" "}
                    1 Rating and 0 Review{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <div className="flex">
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>

                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                    </div>
                    <div className="flex items-center gap-1 ">
                      <div className="w-[12rem] h-[0.5rem] rounded-[1rem] bg-[#f90]"></div>
                      <p className="text-[14px] text-[#666]">1</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex">
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>

                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>
                    </div>
                    <div className="flex items-center gap-1 ">
                      <div className="w-[12rem] h-[0.5rem] rounded-[1rem] bg-[#f90]"></div>
                      <p className="text-[14px] text-[#666]">0</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex">
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>

                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>
                    </div>
                    <div className="flex items-center gap-1 ">
                      <div className="w-[12rem] h-[0.5rem] rounded-[1rem] bg-[#f90]"></div>
                      <p className="text-[14px] text-[#666]">0</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex">
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>

                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>
                    </div>
                    <div className="flex items-center gap-1 ">
                      <div className="w-[12rem] h-[0.5rem] rounded-[1rem] bg-[#f90]"></div>
                      <p className="text-[14px] text-[#666]">0</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex">
                      <i class="fa-solid fa-star text-[#f90] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>

                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>
                      <i class="fa-solid fa-star text-[#ccc] text-[12px]"></i>
                    </div>
                    <div className="flex items-center gap-1 ">
                      <div className="w-[12rem] h-[0.5rem] rounded-[1rem] bg-[#f90]"></div>
                      <p className="text-[14px] text-[#666]">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* comment */}
            <div className="w-full max-h-[12rem] overflow-scroller flex flex-col gap-4 border p-3">
              {comment ? (
                <div className="flex flex-col gap-4">
                  <h3 className="text-[16px] font-medium text-[#333]">
                    comment
                  </h3>
                  {/* single comment card */}
                  <div className="flex gap-4 items-center">
                    <div className="w-[2rem] h-[2rem]">
                      <img
                        src={img1}
                        alt=""
                        className="w-full h-full rounded-[100%]"
                      />
                    </div>
                    <p className="text-[16px] text-[#555] text-justify">
                      very nice
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-[2rem] h-[2rem]">
                      <img
                        src={img1}
                        alt=""
                        className="w-full h-full rounded-[100%]"
                      />
                    </div>
                    <p className="text-[16px] text-[#555] text-justify">
                      very nice
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-[#555] text-[16px] font-bold text-center">
                  No comments
                </p>
              )}
            </div>
          </div>
        </div>
        {/* rating model */}
        <div
          className={
            ratingmodel || rating > 0
              ? "w-[30rem] h-[30rem] bg-white shadow-md fixed  top-[30%] left-[40%] z-50 border p-4 rounded-md flex flex-col gap-4 rating-model"
              : "hidden"
          }
        >
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="w-[4rem] h-[5rem]">
                <img src={img1} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col ">
                <span className="text-[15px]">মোটিভেশনাল মোমেন্টস-২</span>
                <p className="text-[14px]">Rate this product</p>
              </div>
            </div>
            <div>
              <i
                class="fa-solid fa-xmark cursor-pointer text-[18px] font-bold"
                onClick={() => hadleRatingModel()}
              ></i>
            </div>
          </div>
          <div className="model-rating justify-center ">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <span
                  key={index}
                  className={`fa-solid fa-star ${
                    ratingValue <= (hover || rating) ? "checked" : ""
                  }`}
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(rating)}
                ></span>
              );
            })}
          </div>
          <form action="" className="flex flex-col gap-4">
            <textarea
              className="w-full h-[7rem] border text-[#495057] rounded outline-none p-3 border-[#495057]"
              placeholder="Descripe your expericed(optional)"
            ></textarea>
            <div
              className="w-full h-[5rem] border-dotted border border-[#495057] rounded flex justify-center items-center cursor-pointer"
              onClick={handleImageClick}
            >
              <div className="flex flex-col items-center">
                <i class="fa-solid fa-camera text-[#495057]"></i>
                <p className="text-[#495057] text-[12px]">upload photo(0/5)</p>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                // onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            <div className="border"></div>
            <div className="flex justify-end">
              <button
                type="submit"
                className=" p-2 bg-[#0397D3] text-white w-[7rem]"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookDetails