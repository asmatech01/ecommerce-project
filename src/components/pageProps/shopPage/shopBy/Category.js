// import React, { useState } from "react";
// // import { FaPlus } from "react-icons/fa";
// import { ImPlus } from "react-icons/im";
// import NavTitle from "./NavTitle";
// import { useSelector, useDispatch } from "react-redux";
// import { setCategory } from "../../../../statemanagment/reducers/filter.reducer";
// const Category = () => {
//   const dispatch = useDispatch()
//   const products = useSelector((state) => state.rootReducer.product?.product?.products )
//   const selectedCategory = useSelector((state) => state.rootReducer.filter.category);

//   const uniqueCategory = [...new Set(products.map((item) => item.category.name))];

//   return (
//     <div className="w-full">
//       <NavTitle title="Shop by Category" icons={false} />
//       <div>
//         <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
//           {uniqueCategory?.map((name) => (
//             <li
//               onClick={() => dispatch(setCategory(name))}
//               // key={_id}
//               className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between ${
//                 selectedCategory === name ? 'font-bold' : ''
//               }`}
//             >
//               {name}
//               {/* {icons && (
//                 <span
//                   onClick={() => setShowSubCatOne(!showSubCatOne)}
//                   className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
//                 >
//                   <ImPlus />
//                 </span>
//               )} */}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Category;


import React from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../../../statemanagment/reducers/filter.reducer";

const Category = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.rootReducer.product?.product?.products);
  const selectedCategory = useSelector((state) => state.rootReducer.filter.category);

  const uniqueCategory = ["All Categories", ...new Set(products.map((item) => item.category.name))];

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {uniqueCategory?.map((name) => (
            <li
              onClick={() => {
                if (name === "All Categories") {
                  dispatch(setCategory(null)); // Clear the selected category
                } else {
                  dispatch(setCategory(name));
                }
              }}
              className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between ${
                selectedCategory === name || (!selectedCategory && name === "All Categories") ? 'font-bold' : ''
              }`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
