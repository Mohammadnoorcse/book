import React from 'react'
import img from "../../../assets/10071.jpg";
const Following = () => {
  return (
    <div className="w-full h-[72vh] flex  flex-col gap-4 overflow-scroller  ">
      {/* header */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">My Following Authors Information</span>
      </div>
      <div className="border"></div>
      <div className="w-full">
        <table className="w-full">
          <thead className="border w-full text-base p-2">
            <tr className="text-base font-normal">
              <th className="text-sm ">Image</th>
              <th className="text-sm ">Author Name</th>
              <th className="text-sm ">Following From</th>
              <th className="text-sm ">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="flex justify-center p-1">
                <img src={img} alt="" className="w-[3rem]" />
              </td>
              <td className="text-center p-1">Noor</td>
              <td className="text-center p-1">aminur</td>
              <td className="text-center p-1">follower</td>
            </tr>
            <tr className="border">
              <td className="flex justify-center p-1">
                <img src={img} alt="" className="w-[3rem]" />
              </td>
              <td className="text-center p-1">Noor</td>
              <td className="text-center p-1">aminur</td>
              <td className="text-center p-1">follower</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Following