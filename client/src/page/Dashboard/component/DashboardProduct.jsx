import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import img1 from "../../../assets/10054.png";
const rows = [
  {
    id: 1,
    product: { name: "Shirt", imageUrl: img1 }, // Include image URL
    category: "Clothing",
    stock: 35,
    price: 100,
    status: "Delivery",
  },
  {
    id: 2,
    product: { name: "Shirt", imageUrl: img1 }, // Include image URL
    category: "Clothing",
    stock: 35,
    price: 100,
    status: "Delivery",
  },
  {
    id: 3,
    product: { name: "Shirt", imageUrl: img1 }, // Include image URL
    category: "Clothing",
    stock: 35,
    price: 100,
    status: "Pending",
  },
  {
    id: 4,
    product: { name: "Shirt", imageUrl: img1 }, // Include image URL
    category: "Clothing",
    stock: 35,
    price: 100,
    status: "Pending",
  },
  {
    id: 5,
    product: { name: "Shirt", imageUrl: img1 }, // Include image URL
    category: "Clothing",
    stock: 35,
    price: 100,
    status: "Pending",
  },
  // Add more rows as needed...
];


const columns = [
  {
    field: "id",
    headerName: "ID",
    // width: 100,
    flex: 1,
  },
  {
    field: "product",
    headerName: "Product",
    // width: 300,
    flex: 1,

    renderCell: (params) => (
      <div className="flex items-center">
        <img
          src={params.value.imageUrl}
          alt={params.value.name}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
            borderRadius: "8px",
            padding: 10,
          }} // Style the image
        />
        <span>{params.value.name}</span>
      </div>
    ),
  },
  {
    field: "category",
    headerName: "Category",
    // width: 150,
    flex: 1,
  },
  {
    field: "stock",
    headerName: "Stock",
    // width: 150,
    flex: 1,
  },
  {
    field: "price",
    headerName: "Price",
    // width: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    // width: 150,
    flex: 1,
    renderCell: (params) => {
      if (params.value === "Delivery") {
        return (
          <span
            className="p-1 rounded"
            style={{ background: "#E8FADF", color: "#71DD37" }}
          >
            {params.value}
          </span>
        );
      } else {
        return (
          <span
            className="p-1 rounded"
            style={{ background: "red", color: "white" }}
          >
            {params.value}
          </span>
        );
      }
    },
  },
  {
    field: "action",
    headerName: "Action",
    // width: 150,
    flex: 1,

    renderCell: (params) => (
      <IconButton
        aria-label="delete"
        onClick={() => handleDelete(params.row.id)}
      >
        <DeleteIcon />
      </IconButton>
    ),
  },
];


const handleDelete = (id) => {
  console.log("Delete row with id:", id);
  // Add logic to delete the row from the state or perform any other action
};


const paginationModel = { page: 0, pageSize: 5 };

const DashboardProduct = () => {
  const[isaddproduct,setIsAddProduct] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4 p-4 relative">
      <div className="w-full flex flex-col gap-4 ">
        <h5 className="text-xl text-[#384551]">Filter</h5>
        <div className="flex justify-between">
          <select
            name="cars"
            id="cars"
            className="w-[30%] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <select
            name="cars"
            id="cars"
            className="w-[30%] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <select
            name="cars"
            id="cars"
            className="w-[30%] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="border"></div>
        <div className="flex items-center justify-between">
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Search Product"
                className="w-[20rem] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
              />
            </form>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-1 bg-[#788393] w-[6rem] text-white text-base font-medium rounded-md">
              Export
            </button>
            <button className="p-1 bg-[#5F61E6] w-[8rem] text-white text-base font-medium rounded-md" onClick={()=>setIsAddProduct(true)}>
              Add Product
            </button>
          </div>
        </div>
        {/* table */}
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
        {/* add button */}
        <div className={isaddproduct?"absolute top-0 left-0 w-full h-full bg-white z-10 flex flex-col gap-4 ":"hidden"}>
          <div className="flex justify-between items-center w-[30%]">
            <h5 className="text-base font-medium text-[#8592a3]">
              Product information
            </h5>
            <i class="fa-solid fa-xmark cursor-pointer" onClick={()=>setIsAddProduct(false)}></i>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label for="name">Product Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-[30%] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
              />
            </div>
            <div>
              <select
                name="cars"
                id="cars"
                className="w-[30%] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label for="price">Product Price:</label>
              <input
                type="Number"
                id="price"
                name="price"
                className="w-[30%] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label for="discount">Product discount(%):</label>
              <input
                type="Number"
                id="discount"
                name="discount"
                className="w-[30%] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label for="price">Product stock:</label>
              <input
                type="Number"
                id="price"
                name="price"
                className="w-[30%] h-[2.5rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label for="description">Product description:</label>
              <textarea
                type="text"
                id="description"
                name="description"
                className="w-[30%] h-[10rem] border border-[#ced1d5] p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6]"
              />
            </div>
            <div className="w-[30%] h-[5rem] border border-[#ced1d5] border-dashed p-1 rounded-md text-base font-normal text-[#384551] outline-[#5F61E6] flex justify-center items-center cursor-pointer">
              <div className="flex justify-center items-center">
                <span>Drag and drop your product image</span>
              </div>
            </div>
            <button className="w-[30%] h-[2.5rem] border border-[#ced1d5] rounded-md text-base font-normal text-[white] bg-[#5F61E6]">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
