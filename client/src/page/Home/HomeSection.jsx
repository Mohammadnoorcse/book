import React from 'react'
import { Link } from "react-router-dom";
import img21 from "../../assets/10067.jpg";
import HomeSectionCard from './HomeSectionCard';
import { homesectiondata } from './data';
const HomeSection = ({bg,height,text,data}) => {
     const stock = true;
  return (
    <div
      className="w-full shadow-md flex flex-col gap-1 p-3 relative"
      style={{ height: `${height}`, background: `${bg}` }}
    >
      <div className="w-full flex justify-between ">
        <h3 className="text-[18px] font-medium text-[#333]">{text}</h3>
        <Link
          to={`/${text}`}
          className="p-1 border-[1px] border-[#0397D3] text-[#0397D3] hover:bg-[#0397D3] hover:text-[white]"
        >
          View All
        </Link>
      </div>

      <div
        className="w-full h-full overflow-auto pt-1 "
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className=" divSilder w-full h-full grid gap-2 "
          style={{
            gridTemplateColumns: "repeat(auto-fill,minmax(14rem,1fr))",
            gridTemplateRows: "auto",
          }}
        >
          {data.map((value) => (
            <HomeSectionCard key={value._id} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSection