import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("api/allproduct", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response;
});

export const fetchCarouselData = createAsyncThunk(
  "api/fetchcarousel",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    return response;
  }
);

export const fetchUser = createAsyncThunk("api/fetchUser", async () => {
  const response = await axios.get("https://fakestoreapi.com/users");
  return response;
});

export const fetchSearchProduct = createAsyncThunk(
  "api/fetchsearch",
  async (category) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return response;
  }
);

export const fetchSearchProducts = createAsyncThunk(
  "api/fetchsearchproduct",
  async (searchdynamicproduct) => {
    const response = await axios.get("");
    return response;
  }
);

export const fetchSortProduct = createAsyncThunk("api/fetchsort", async (sort) => {
  const response = await axios.get(`https://fakestoreapi.com/carts?sort=desc/${sort}`);
  return response;
});
