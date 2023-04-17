/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFiltersPizza = createAsyncThunk(
  "menu/fetchFiltersPizza",
  async () => {
    const { data } = await axios.get("http://localhost:3001/ingridients_pizza");
    return data;
  }
);

export const fetchFiltersSushi = createAsyncThunk(
  "menu/fetchFiltersSushi",
  async () => {
    const { data } = await axios.get("http://localhost:3001/ingridients_sushi");
    return data;
  }
);

export const fetchSushi = createAsyncThunk("menu/fetchSushi", async () => {
  const { data } = await axios.get("http://localhost:3001/sushi");
  return data;
});

export const fetchPizza = createAsyncThunk("menu/fetchPizza", async () => {
  const { data } = await axios.get("http://localhost:3001/pizza");
  return data;
});

const menu = createSlice({
  name: "menu",
  initialState: {
    pizza: [],
    sushi: [],
    filtersPizza: {},
    filtersSushi: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiltersPizza.fulfilled, (state, action) => {
        state.filtersPizza = action.payload;
      })
      .addCase(fetchFiltersSushi.fulfilled, (state, action) => {
        state.filtersSushi = action.payload;
      })
      .addCase(fetchSushi.fulfilled, (state, action) => {
        state.sushi = (action.payload);
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.pizza = (action.payload);
      });
  },
});

export default menu.reducer;
