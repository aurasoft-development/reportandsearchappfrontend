import React from "react";
import axios from "axios";
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
})
// Common function to make api request
const commonApiRequest = async (method, url, data = null) => {

  try {
    if (!navigator.onLine) {
      throw new Error('Internet connection issue. Please check your connection.');
    }
    const response = await api[method](url, data);
    return response;
  } catch (error) {
    if (error.response) {
      console.error('Request error:', error.response.data);
    }
    else if (error.request) {
      console.error('No response received :', error.request);
    } else {
      console.error('Request setup error: ', error.message);
    }
    throw error;
  }
};

export default commonApiRequest;
