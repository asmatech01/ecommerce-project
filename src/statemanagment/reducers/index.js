import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer';
import orderReducer from './order.reducer';
import filterReducer from './filter.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
  filter: filterReducer,
  // Add other reducers here
});

export default rootReducer;
