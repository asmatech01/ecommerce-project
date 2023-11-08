import { createSlice } from '@reduxjs/toolkit';
import { GetAllProductsAPI } from '../api/productApi';

const initialState = {
  product: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getProductsSuccess(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    getProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(getProductsStart());
    const response = await GetAllProductsAPI();
    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure(error.message));
  }
};

export default productSlice.reducer;
