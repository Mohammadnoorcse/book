import React from 'react'
import { Link } from "react-router-dom";

const OrderCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 bottom-border pb-4">
      <p className="text-base">
        {" "}
        Your Order ID:{" "}
        <em className="text-[#33c24d] font-normal">76121626699499</em>
        (1 items)
      </p>
      <div className="flex gap-4 items-center">
        <span className="p-1 text-[#28a745] border border-[#28a745] rounded">
          Completed
        </span>
        <Link
          to="/"
          className="flex gap-1 items-center  p-1 text-[#fff] bg-[#0397d3] rounded"
        >
          Track My Order
          <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div
        className="w-full h-[15rem] overflow-auto pt-1 border"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className=" w-full h-full grid gap-2 "
          style={{
            gridTemplateColumns: "repeat(auto-fill,minmax(12rem,1fr))",
            gridTemplateRows: "auto",
          }}
        >
          {/* card */}
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
          <div className="w-[12rem] h-[14rem] border flex flex-col gap-2 justify-center items-center p-3">
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Englishe_durbolder_jonno_English_Therapy-Saiful_Islam-4695a-215765.jpg"
              alt=""
              className="w-[7rem] h-[9rem]"
            />
            <p className="w-full text-ellipsis text-nowrap overflow-hidden text-[14px] text-[#343a40]">
              ইংলিশে দুর্বলদের জন্য - English Therapy
            </p>
            <p className="text-[14px] font-medium"> TK. 399 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard