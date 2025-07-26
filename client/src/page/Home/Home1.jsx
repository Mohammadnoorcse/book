import { useState } from "react";
import Slider from "@mui/material/Slider";
import { Box, Typography } from "@mui/material";
import HomeSection from "./HomeSection";
import { homesectiondata } from "./data";

const Home1 = () => {
    const [priceRange, setPriceRange] = useState([100, 1000]);

    // Filtered products based on price range
    // const filteredProducts = products.filter(
    //   (product) =>
    //     product.price >= priceRange[0] && product.price <= priceRange[1]
    // );

    const handlePriceChange = (event, newValue) => {
      setPriceRange(newValue);
    };
  

  return (
    <div
      className="w-full h-screen bg-[#F1F2F4] pb-4 overflow-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex  gap-[1rem]">
        {/* left */}
        <div className="w-[18rem]  flex flex-col gap-[1rem]">
          <div className="w-full h-auto bg-white shadow-md p-2 rounded-md flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium text-[#333333]">Sort</h3>
              <span className="font-medium text-[#22BDFB] cursor-pointer">
                Reset Sort
              </span>
            </div>
            <div className="border"></div>
            <div className="flex gap-3 items-center pl-3">
              <input
                type="radio"
                id="bestseller"
                name="sorts"
                value="Best Seller"
                className="scale-[1.2]"
              />
              <label for="bestseller" className="text-sm text-[#333]">
                Best Seller
              </label>
            </div>
            <div className="flex gap-3 items-center pl-3">
              <input
                type="radio"
                id="released"
                name="sorts"
                value="New Released"
                className="scale-[1.2]"
              />
              <label for="released" className="text-sm text-[#333]">
                New Released
              </label>
            </div>
            <div className="flex gap-3 items-center pl-3">
              <input
                type="radio"
                id="pricelowtohigh"
                name="sorts"
                value="Price - Low to High"
                className="scale-[1.2]"
              />
              <label for="pricelowtohigh" className="text-sm text-[#333]">
                Price - Low to High
              </label>
            </div>
            <div className="flex gap-3 items-center pl-3">
              <input
                type="radio"
                id="pricehightolow"
                name="sorts"
                value="Price - High to Low"
                className="scale-[1.2]"
              />
              <label for="pricehightolow" className="text-sm text-[#333]">
                Price - High to Low
              </label>
            </div>
            <div className="flex gap-3 items-center pl-3">
              <input
                type="radio"
                id="lowtohigh"
                name="sorts"
                value="Discount - Low to High"
                className="scale-[1.2]"
              />
              <label for="lowtohigh" className="text-sm text-[#333]">
                Discount - Low to High
              </label>
            </div>
            <div className="flex gap-3 items-center pl-3">
              <input
                type="radio"
                id="discounthightolow"
                name="sorts"
                value="Discount - High to Low"
                className="scale-[1.2]"
              />
              <label for="discounthightolow" className="text-sm text-[#333]">
                Discount - High to Low
              </label>
            </div>
          </div>
          <div className="w-full h-auto bg-white shadow-md p-2 rounded-md flex flex-col gap-[1rem]">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium text-[#333333]">Filter</h3>
              <span className="font-medium text-[#22BDFB] cursor-pointer">
                Reset filter
              </span>
            </div>
            <div className="border"></div>
            <div className="flex flex-col gap-3 ">
              <p className="text-[14px] font-bold text-[#333]">Category</p>
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-[2rem] rounded-[1rem] border-none bg-[#EFEFEF] outline-[#80BDFF] focus:bg-white p-2 relative"
                />
                <i class="fa-solid fa-magnifying-glass absolute right-3 top-2"></i>
              </div>
              <div
                className="flex flex-col gap-3 w-full h-[12rem] overflow-y-auto pl-2"
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
              </div>
            </div>
            <div className="border"></div>

            <div className="flex flex-col gap-3 ">
              <p className="text-[14px] font-bold text-[#333]">Author</p>
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-[2rem] rounded-[1rem] border-none bg-[#EFEFEF] outline-[#80BDFF] focus:bg-white p-2 relative"
                />
                <i class="fa-solid fa-magnifying-glass absolute right-3 top-2"></i>
              </div>
              <div
                className="flex flex-col gap-3 w-full h-[12rem] overflow-y-auto pl-2"
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
              </div>
            </div>
            <div className="border"></div>

            <div className="flex flex-col gap-3 ">
              <p className="text-[14px] font-bold text-[#333]">Publisher</p>
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-[2rem] rounded-[1rem] border-none bg-[#EFEFEF] outline-[#80BDFF] focus:bg-white p-2 relative"
                />
                <i class="fa-solid fa-magnifying-glass absolute right-3 top-2"></i>
              </div>
              <div
                className="flex flex-col gap-3 w-full h-[12rem] overflow-y-auto pl-2"
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
              </div>
            </div>
            <div className="border"></div>
            <div className="flex flex-col gap-3 ">
              <p className="text-[14px] font-bold text-[#333]">Price</p>
              <Box>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={2000}
                  step={50}
                  marks
                  sx={{ marginBottom: 2 }}
                />
              </Box>
            </div>
            <div className="border"></div>

            <div className="flex flex-col gap-3 ">
              <p className="text-[14px] font-bold text-[#333]">By Languages</p>
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-[2rem] rounded-[1rem] border-none bg-[#EFEFEF] outline-[#80BDFF] focus:bg-white p-2 relative"
                />
                <i class="fa-solid fa-magnifying-glass absolute right-3 top-2"></i>
              </div>
              <div
                className="flex flex-col gap-3 w-full h-[12rem] overflow-y-auto pl-2"
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label
                    for="vehicle1"
                    className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                  >
                    I have a bike
                  </label>
                </div>
              </div>
            </div>
            <div className="border"></div>
            <div className="flex flex-col gap-3 ">
              <p className="text-[14px] font-bold text-[#333]">Discount</p>
              <Box>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={2000}
                  step={50}
                  marks
                  sx={{ marginBottom: 1 }}
                />
              </Box>
            </div>
            <div className="border"></div>
            <div className="flex flex-col gap-3 ">
              <p className="text-[14px] font-bold text-[#333]">Ratings</p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="5"
                />
                {/* <label
                  for="vehicle1"
                  className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                >
                  I have a bike
                </label> */}
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="4"
                />
                {/* <label
                  for="vehicle1"
                  className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                >
                  I have a bike
                </label> */}
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="3"
                />
                {/* <label
                  for="vehicle1"
                  className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                >
                  I have a bike
                </label> */}
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="2"
                />
                {/* <label
                  for="vehicle1"
                  className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                >
                  I have a bike
                </label> */}
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="1"
                />
                {/* <label
                  for="vehicle1"
                  className="text-sm text-[#333] text-ellipsis text-nowrap overflow-hidden"
                >
                  I have a bike
                </label> */}
                <i class="fa-solid fa-star text-sm text-[#ffc107]"></i>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full h-auto  flex flex-col gap-[1rem]">
          <HomeSection
            bg="#FFFFEB"
            height="25rem"
            text="Recently sold ebook products"
            data={homesectiondata}
          />
          <HomeSection
            bg="white"
            height="auto"
            text="eBooks"
            data={homesectiondata}
          />
        </div>
      </div>
    </div>
  );
}

export default Home1