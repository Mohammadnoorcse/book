import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import img1 from "../../assets/10054.png";
import { Link } from "react-router-dom";
const rows = [
  {
    id: 1,
    order: 12333,
    date: "12/12/2021",
    payment: "Paid",
    price: 100,
    status: "Delivery",
    
  },
];

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "order",
    headerName: "ORDER",
    flex: 1,
  },
  {
    field: "date",
    headerName: "DATE",
    flex: 1,
  },
  {
    field: "payment",
    headerName: "PAYMENT",
    flex: 1,
    renderCell: (params) => {
      if (params.value === "Cencel") {
        return (
          <span className="p-1 rounded text-[#8693A4] font-bold">
            {params.value}
          </span>
        );
      }
      if (params.value === "Pending") {
        return (
          <span className="p-1 rounded text-[#FFAB00] font-bold">
            {params.value}
          </span>
        );
      }
      if (params.value === "Paid") {
        return (
          <span className="p-1 rounded text-[#71DD37] font-bold">
            {params.value}
          </span>
        );
      }
    },
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => {
      if (params.value === "Delivery") {
        return (
          <span className="p-1 rounded text-[#71DD37] font-bold bg-[#E8FADF]">
            {params.value}
          </span>
        );
      }
      if (params.value === "Dispatched") {
        return (
          <span className="p-1 rounded text-[#ffab00] font-bold bg-[#fff2d6]">
            {params.value}
          </span>
        );
      }
      if (params.value === "Ready to Pickup") {
        return (
          <span className="p-1 rounded text-[#03c3ec] font-bold bg-[#d7f5fc]">
            {params.value}
          </span>
        );
      }
    },
  },
 
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: (params) => (
      <div className="flex items-center">
        <IconButton
          aria-label="delete"
          // onClick={() => handleDelete(params.row.id)}
        >
          <EditNoteIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

const handleDelete = (id) => {
  console.log("Delete row with id:", id);
  // Add logic to delete the row from the state or perform any other action
};

const paginationModel = { page: 0, pageSize: 5 };
const DashboardUserProfile = () => {
  return (
    <div className="w-full h-screen bg-[#F5F5F9] pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex  gap-[1rem] flex-col">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-base font-medium text-[#384551]">
              Customer ID #634759
            </h4>
            <p className="text-sm text-[#646e78]">Aug 17, 2020, 5:48 (ET)</p>
          </div>
          <button className="w-[10rem] h-[2.2rem] text-center text-[#ff3e1d] bg-[#ffe0db] rounded-md  text-sm font-medium ">
            Delete Customer
          </button>
        </div>
        <div className="w-full flex md:flex-row flex-col gap-4">
          <div className="border md:w-[35%] w-full h-[35rem] shadow-lg bg-white rounded-md p-4 flex flex-col gap-4">
            <div className="pt-4 flex flex-col gap-2 justify-center items-center">
              <img
                src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/1.png"
                alt=""
                className="w-[8rem] h-[8rem] rounded-md"
              />
              <h5 className="text-sm font-bold text-[#384551]">
                Lorine Hischke
              </h5>
              <span className="text-sm text-[#858d95]">
                Customer ID #634759
              </span>
            </div>
            {/* second section */}
            <div className="flex justify-center items-center gap-8">
              <div className="flex gap-3 items-center">
                <div className="p-1 bg-[#e7e7ff] rounded text-[#696cff] w-8 text-center">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-sm font-bold text-[#384551]">184</h5>
                  <span className="text-sm text-[#858d95]">Orders</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="p-1 bg-[#e7e7ff] rounded text-[#696cff] w-8 text-center">
                  <i class="fa-solid fa-dollar-sign"></i>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-sm font-bold text-[#384551]">184</h5>
                  <span className="text-sm text-[#858d95]">Spent</span>
                </div>
              </div>
            </div>
            {/* third section */}
            <div className="flex flex-col gap-4">
              <h4 className="mb-6 mt-4 text-sm font-bold text-[#384551] ">
                Details
              </h4>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <span className="text-sm font-bold text-[#858d95]">
                    Username:
                  </span>
                  <span className="text-sm text-[#858d95]">lorine.hischke</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-sm font-bold text-[#858d95]">
                    Email:
                  </span>
                  <span className="text-sm text-[#858d95]">
                    vafgot@vultukir.org
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-sm font-bold text-[#858d95]">
                    Contact:
                  </span>
                  <span className="text-sm text-[#858d95]">(123) 456-7890</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-sm font-bold text-[#858d95]">
                    Country:
                  </span>
                  <span className="text-sm text-[#858d95]">USA</span>
                </div>
              </div>
            </div>
            {/* edit button */}
            <button className="w-full h-[2.2rem] rounded-md bg-[#696cff] font-bold text-white">
              Edit Details
            </button>
          </div>
          <div className="border md:w-[65%] w-full  p-4 flex flex-col gap-4">
            {/* first section */}
            <div className="grid gap-4 md:grid-cols-2 grid-cols-4">
              {/* card */}
              <div className="shadow-lg bg-white rounded-md p-4 flex flex-col h-[10rem] gap-2">
                <div className="w-8 h-8 rounded flex justify-center items-center text-[#696cff] bg-[#e7e7ff]">
                  <i class="fa-solid fa-dollar-sign"></i>
                </div>
                <h5 className="text-sm font-bold text-[#858d95]">
                  Account Balance
                </h5>
                <h5 className="text-sm font-bold text-[#696CFF] flex gap-1">
                  $2345
                  <p className="text-[#858d95] font-normal"> Credit Left</p>
                </h5>
                <p className="text-[#858d95] text-sm font-medium w-full overflow-hidden text-ellipsis text-nowrap">
                  Account balance for next purchase
                </p>
              </div>
              {/* card */}
              <div className="shadow-lg bg-white rounded-md p-4 flex flex-col h-[10rem] gap-2">
                <div className="w-8 h-8 rounded flex justify-center items-center text-[#71dd37] bg-[#e8fadf]">
                  <i class="fa-solid fa-gift"></i>
                </div>
                <h5 className="text-sm font-bold text-[#858d95]">
                  Loyalty Program
                </h5>
                <h5 className="text-sm font-bold text-[#71dd37] flex gap-1">
                  3000
                  <p className="text-[#858d95] font-normal">
                    {" "}
                    points to next tier
                  </p>
                </h5>
                <p className="text-[#858d95] text-sm font-medium w-full overflow-hidden text-ellipsis text-nowrap">
                  Account balance for next purchase
                </p>
              </div>
              {/* card */}
              <div className="shadow-lg bg-white rounded-md p-4 flex flex-col h-[10rem] gap-2">
                <div className="w-8 h-8 rounded flex justify-center items-center text-[#ffab00] bg-[#fff2d6]">
                  <i class="fa-regular fa-star"></i>
                </div>
                <h5 className="text-sm font-bold text-[#858d95]">Wishlist</h5>
                <h5 className="text-sm font-bold text-[#ffab00] flex gap-1">
                  15
                  <p className="text-[#858d95] font-normal">
                    {" "}
                    Items in wishlist
                  </p>
                </h5>
                <p className="text-[#858d95] text-sm font-medium w-full overflow-hidden text-ellipsis text-nowrap">
                  Account balance for next purchase
                </p>
              </div>
              {/* card */}
              <div className="shadow-lg bg-white rounded-md p-4 flex flex-col h-[10rem] gap-2">
                <div className="w-8 h-8 rounded flex justify-center items-center text-[#03c3ec] bg-[#d7f5fc]">
                  <i class="fa-solid fa-crown"></i>
                </div>
                <h5 className="text-sm font-bold text-[#858d95]">Coupons</h5>
                <h5 className="text-sm font-bold text-[#03c3ec] flex gap-1">
                  21
                  <p className="text-[#858d95] font-normal"> Coupons you win</p>
                </h5>
                <p className="text-[#858d95] text-sm font-medium w-full overflow-hidden text-ellipsis text-nowrap">
                  Account balance for next purchase
                </p>
              </div>
            </div>
            {/* second section */}
            <div className="shadow-lg bg-white rounded-md p-4 flex flex-col gap-4">
              {/* item -1 */}
              <div className="flex justify-between items-center">
                <h5 className="text-sm font-bold text-[#384551]">
                  Orders placed
                </h5>
                <form action="">
                  <input
                    type="text"
                    placeholder="Search Order product"
                    className="w-[20rem] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6] focus:shadow-md"
                  />
                </form>
              </div>
              <div className="border"></div>
              {/* item-2 */}
              {/* table */}
              <Paper sx={{ height: 350, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{ pagination: { paginationModel } }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  sx={{ border: 0 }}
                />
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUserProfile