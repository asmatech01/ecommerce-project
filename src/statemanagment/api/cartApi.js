import API from "./index";

// Example of fetching cart data from the backend
export const fetchCartData = async () => {
  try {
    const response = await API.get("/api/cart/get");
    return response.data; // Assuming the response contains the cart data
  } catch (error) {
    throw error; // Handle errors in your component
  }
};

// Example of adding an item to the cart
export const orderCreate = async (order) => {
  try {
    const response = await API.post("/api/order/create", { order });
    return response.data; // Assuming the response contains the updated cart data
  } catch (error) {
    throw error; // Handle errors in your component
  }
};

// Example of updating a cart item
export const updateCartItem = async (productId, quantity) => {
  try {
    const response = await API.put("/api/cart/update", { productId, quantity });
    return response.data; // Assuming the response contains the updated cart data
  } catch (error) {
    throw error; // Handle errors in your component
  }
};

// Example of deleting an item from the cart
export const deleteCartItem = async (productId) => {
  try {
    const response = await API.delete(`/api/cart/delete/${productId}`);
    return response.data; // Assuming the response contains the updated cart data
  } catch (error) {
    throw error; // Handle errors in your component
  }
};
