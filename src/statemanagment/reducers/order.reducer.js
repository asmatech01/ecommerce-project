import { createSlice } from "@reduxjs/toolkit";
import { orderCreate } from "../api/cartApi";
import { saveAs } from "file-saver"; // Import saveAs from file-saver

const initialState = {
  order: [],
  status: ""
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: async (state, action) => {
      try {
        // state.order.push(action.payload);
        const response = await orderCreate(action.payload);
        // console.log(response.data)
        // console.log(response)
        if (response) {
           state.status = "placed"
            // Assuming the response contains the PDF data
            const pdfData = response;
            console.log(pdfData)
            // Trigger the file download
            const blob = new Blob([pdfData], { type: 'application/pdf' });

            // Create a URL for the Blob
            const url = window.URL.createObjectURL(blob);
      
            // Create an anchor element for downloading the PDF
            const a = document.createElement('a');
            a.href = url;
            a.download = 'invoice.pdf';
      
            // Trigger a click event on the anchor to start the download
            a.click();
      
            // Clean up resources
            window.URL.revokeObjectURL(url);
          } else {
            console.log("Invalid response or PDF data missing.");
          }
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { createOrder } = orderSlice.actions;

export default orderSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { orderCreate } from "../api/cartApi";
// import { saveAs } from "file-saver";

// const initialState = {
//   order: [],
// };

// export const orderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//     createOrder: (state, action) => {
//       try {
//         if (!state.order) {
//           state.order = []; // Ensure that 'order' property is defined as an array
//         }
//         state.order.push(action.payload);
//         orderCreate(action.payload)
//           .then((response) => {
//             console.log(response.data);
//             console.log(response);
//             if (response && response) {
//               const pdfData = response;
//               const blob = new Blob([pdfData], { type: "application/pdf" });
//               saveAs(blob, "invoice.pdf");
//             } else {
//               console.log("Invalid response or PDF data missing.");
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   },
// });



// export const { createOrder } = orderSlice.actions;

// export default orderSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { orderCreate } from "../api/cartApi";

// const initialState = {
//   order: [],
//   pdfData: null, // Add a new property to store the PDF data
// };

// export const orderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//     createOrder: (state, action) => {
//       try {
//         if (!state.order) {
//           state.order = []; // Ensure that 'order' property is defined as an array
//         }
//         state.order.push(action.payload);
//      orderCreate(action.payload)
//           .then((response) => {
//             console.log(response.data);
//             console.log(response);
//             if (response) {
//               const encoder = new TextEncoder();
//               const pdfData = btoa(String.fromCharCode.apply(null, encoder.encode(response))); // ... Convert the ... response to ... base64 string
//               // const pdfData = btoa(response);
//               state.pdfData = pdfData; // Store the PDF data in the Redux store
//             } else {
//               console.log("Invalid response or PDF data missing.");
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   },
// });

// export const { createOrder } = orderSlice.actions;

// export default orderSlice.reducer;
