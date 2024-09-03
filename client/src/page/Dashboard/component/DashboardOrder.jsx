import React, { useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import img1 from "../../../assets/10054.png";
import {Link} from "react-router-dom"


const DashboardOrder = () => {
  const[isEdit,setIsEdit] = useState(false);
  const [statusValue,setStatusValue]=useState("");
  const rows = [
    {
      id: 1,
      order: 12333,
      date: "12/12/2021",
      customer: { name: "aminur", imageUrl: img1 },
      payment: "Paid",
      price: 100,
      status: "Delivery",
      method: "cashondelivery",
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
      field: "customer",
      headerName: "CUSTOMERS",
      flex: 1,
      renderCell: (params) => (
        <Link
          className="flex items-center gap-1 hover:underline"
          to="/deshboard/profile/1"
        >
          <div className="w-8 h-8">
            <img
              src={params.value.imageUrl}
              alt={params.value.name}
              className="w-full h-full rounded-[100%]"
            />
          </div>
          <div className="flex flex-col">
            <span className="w-full text-ellipsis text-nowrap overflow-hidden">
              {params.value.name}
            </span>
          </div>
        </Link>
      ),
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
      field: "method",
      headerName: "METHOD",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center">
          <IconButton
            aria-label="edit"
            onClick={() => handleEdit(params.row.id)}
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
  };

  const handleEdit = (id) => {
    console.log("Delete row with id:", id);
    setIsEdit(true);
  };
   const statuscontent = [
     "Delivery",
     "Dispatched",
     "Ready to Pickup"
   ];

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div className="w-full flex flex-col gap-4 p-4 relative">
      <div className="flex items-center justify-between">
        <div>
          <form action="">
            <input
              type="text"
              placeholder="Search Order product"
              className="w-[20rem] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
            />
          </form>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1 bg-[#788393] w-[6rem] text-white text-base font-medium rounded-md">
            Export
          </button>
        </div>
      </div>

      {/* table */}
      <Paper sx={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
      {/* edit */}
      <div
        className={
          isEdit
            ? "absolute top-[20%] left-[20%] w-[14rem] h-[14rem] bg-[#9333EA] shadow-lg z-30  rounded-md text-white flex flex-col gap-[1rem] p-4"
            : "hidden"
        }
      >
        <h3 className="font-medium text-xl">Edit status</h3>
        <form action="">
          <select
            className="w-full h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
            onChange={(e) => setStatusValue(e.target.value)}
          >
            <option value="">Choose Category</option>
            {statuscontent.map((cate) => (
              <option key={cate} value={cate}>
                {cate}
              </option>
            ))}
          </select>
          <div className="flex justify-between items-center mt-[3rem] gap-4">
            <button className="w-full h-[2.2rem] bg-white text-green-500 font-medium rounded">
              Submit
            </button>
            <button
              className="w-full h-[2.2rem] bg-[red]  font-medium rounded"
              onClick={() => setIsEdit(false)}
            >
              Cencel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DashboardOrder