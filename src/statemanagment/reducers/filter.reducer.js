import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "product",
  initialState: {
    brand: "",
    category: "",
    color: "",
    price: "",
  },
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setBrand, setCategory, setColor, setPrice } = filterSlice.actions;
export default filterSlice.reducer;
