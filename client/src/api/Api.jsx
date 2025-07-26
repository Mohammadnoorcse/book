// api/Api.jsx
import axios from "axios";

// register api
export const Register = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    // Success: return structured response
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    // Extract meaningful error info
    let errorMessage = "An unknown error occurred";
    if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage,
      status: error.response?.status || null,
      data: error.response?.data || null,
    };
  }
};


// login api

export const Login = async (data) => {
  try {
    // Step 1: Get CSRF cookie from Laravel Sanctum
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });

    // Step 2: Send login POST request
    const response = await axios.post("http://localhost:8000/login", data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", // correct header casing
      },
      withCredentials: true,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    let errorMessage = "An unknown error occurred";
    if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage,
      status: error.response?.status || null,
      data: error.response?.data || null,
    };
  }
};
