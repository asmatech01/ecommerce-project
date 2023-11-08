// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import NavTitle from "./NavTitle";
// import { useSelector, useDispatch } from "react-redux";
// import { setBrand } from "../../../../statemanagment/reducers/filter.reducer";
// const Brand = () => {
//   const dispatch = useDispatch()
//   const [showBrands, setShowBrands] = useState(true);
 
//   const products = useSelector((state) => state.rootReducer.product?.product?.products);
//   const selectedBrand = useSelector((state) => state.rootReducer.filter.brand);
// console.log(selectedBrand)
//   const uniqueBrands = ["All Brands", ...new Set(products.map((item) => item.brand))];
// console.log("uniqueBrands:", uniqueBrands)
 

//   return (
//     <div>
//       <div
//         onClick={() => setShowBrands(!showBrands)}
//         className="cursor-pointer"
//       >
//         <NavTitle title="Shop by Brand" icons={true} />
//       </div>
//       {showBrands && (
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
//             {uniqueBrands?.map((item) => (
//               <li
//               onClick={() => {
//                 if (item === "All Brands") {
//                   dispatch(setBrand(null)); // Clear the selected category
//                 } else {
//                   dispatch(setBrand(item));
//                 }
//               }}
//                 // key={item._id}
//                 className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300  ${selectedBrand === item || (!selectedBrand && item === "All Brand") ? 'font-bold' : ''
//               }`}>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Brand;


import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { useSelector, useDispatch } from "react-redux";
import { setBrand } from "../../../../statemanagment/reducers/filter.reducer";

const Brand = () => {
  const dispatch = useDispatch();
  const [showBrands, setShowBrands] = useState(true);

  const products = useSelector((state) => state.rootReducer.product?.product?.products);
  const selectedBrand = useSelector((state) => state.rootReducer.filter.brand);
  console.log(selectedBrand);
  // const uniqueBrands = ["All Brands", ...new Set(products.map((item) => item.brand))];
  const uniqueBrands = ["All Brands", ...new Set(products.map((item) => item.brand).filter(Boolean))];
  console.log("uniqueBrands:", uniqueBrands);

  return (
    <div>
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Brand" icons={true} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {uniqueBrands?.map((item) => (
              <li
                onClick={() => {
                  if (item === "All Brands") {
                    dispatch(setBrand(null)); // Clear the selected category
                  } else {
                    dispatch(setBrand(item));
                  }
                }}
                // key={item._id}
                className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300  ${
                  selectedBrand === item || (!selectedBrand && item === "All Brands") ? 'font-bold' : ''
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
