import React from 'react'

const Voucher = () => {
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">Load Voucher Information</span>
      </div>
      <div className="border"></div>
      <div className=" flex flex-col gap-4 items-center justify-center">
        <h3 className="flex gap-2 items-center text-2xl text-[#444546]">
          <img
            src="https://www.rokomari.com/static/new/img/user/wallet.png"
            alt=""
          />
          আপনার রকমারি ব্যালেন্স এ ভাউচার লোড করুন !
        </h3>
        <p className="text-base text-[#5f6061] text-justify">
          {" "}
          ভাউচার আপনার রকমারি ব্যালেন্স এ লোড করতে ভাউচারের কোডটি নিচের বক্সে
          টাইপ করে সাবমিট করুন। যদি ভাউচারের কোড সঠিক হয় তবে ভাউচারের সমপরিমান
          টাকা আপনার রকমারি ব্যালেন্স এ জমা হবে। রকমারি ব্যালেন্স এ জমাকৃত টাকা
          দিয়ে আপনি পরবর্তী যে কোন অর্ডারে পেমেন্ট করতে পারবেন। রকমারি
          ব্যালেন্স এর অর্থ মূল্য আজীবন ব্যবহার যোগ্য। আপনার রকমারি ব্যালেন্স এর
          ব্যালেন্স অন্য একাউন্টে স্থানান্তর করা যাবে না এবং উপহার হিসেবে ভাউচার
          কিনে ব্যবহার করা যাবে না ।{" "}
        </p>
        <form action="" className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <p className="text-base text-[#444546]">
              ভাউচার কোড<span className="text-[red]">*</span>
            </p>
            <input
              type="text"
              placeholder="ভাউচার কোড"
              className="w-[300px] border border-[#CDCDCD] text-sm p-2 font-normal"
            />
          </div>
          <button className="bg-[#4fa23a] text-base font-normal text-white h-[40px] text-center rounded ">
            Apply to your Rokomari Balance
          </button>
        </form>
      </div>
    </div>
  );
}

export default Voucher