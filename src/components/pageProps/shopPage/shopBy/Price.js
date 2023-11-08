// import React from "react";
// import NavTitle from "./NavTitle";
// import {  useDispatch } from "react-redux";
// import { setPrice } from "../../../../statemanagment/reducers/filter.reducer";
// const Price = () => {
//   const dispatch = useDispatch()
//   const priceList = [
//     {
//       _id: 950,
//       priceOne: 0.0,
//       priceTwo: 49.99,
//     },
//     {
//       _id: 951,
//       priceOne: 50.0,
//       priceTwo: 99.99,
//     },
//     {
//       _id: 952,
//       priceOne: 100.0,
//       priceTwo: 199.99,
//     },
//     {
//       _id: 953,
//       priceOne: 200.0,
//       priceTwo: 399.99,
//     },
//     {
//       _id: 954,
//       priceOne: 400.0,
//       priceTwo: 599.99,
//     },
//     {
//       _id: 955,
//       priceOne: 600.0,
//       priceTwo: 1000.0,
//     },
//   ];

 
 
//   return (
//     <div className="cursor-pointer">
//       <NavTitle title="Shop by Price" icons={false} />
//       <div className="font-titleFont">
//         <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
//           {priceList.map((item) => (
//             <li
//               key={item._id}
//               className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
//               onClick={() => dispatch(setPrice(item))}
//             >
//               ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Price;



// import React from "react";
// import NavTitle from "./NavTitle";
// import { useDispatch, useSelector } from "react-redux";
// import { setPrice } from "../../../../statemanagment/reducers/filter.reducer";

// const Price = () => {
//   const dispatch = useDispatch();
//   const selectedPrice = useSelector((state) => state.rootReducer.filter.price);

//   const priceList = [
//     {
//       _id: 950,
//       priceOne: 0.0,
//       priceTwo: 49.99,
//     },
//     {
//       _id: 951,
//       priceOne: 50.0,
//       priceTwo: 99.99,
//     },
//     {
//       _id: 952,
//       priceOne: 100.0,
//       priceTwo: 199.99,
//     },
//     {
//       _id: 953,
//       priceOne: 200.0,
//       priceTwo: 399.99,
//     },
//     {
//       _id: 954,
//       priceOne: 400.0,
//       priceTwo: 599.99,
//     },
//     {
//       _id: 955,
//       priceOne: 600.0,
//       priceTwo: 1000.0,
//     },
//   ];

//   return (
//     <div className="cursor-pointer">
//       <NavTitle title="Shop by Price" icons={false} />
//       <div className="font-titleFont">
//         <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
//           <li
//             className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 ${
//               !selectedPrice ? 'font-bold' : ''
//             }`}
//             onClick={() => dispatch(setPrice(null)})
//           >
//             All Prices
//           </li>
//           {priceList.map((item) => (
//             <li
//               key={item._id}
//               className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 ${
//                 selectedPrice === item ? 'font-bold' : ''
//               }`}
//               onClick={() => dispatch(setPrice(item))}
//             >
//               ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Price;


import React from "react";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../../../statemanagment/reducers/filter.reducer";

const Price = () => {
  const dispatch = useDispatch();
  const selectedPrice = useSelector((state) => state.rootReducer.filter.price);
// console.log("here is selected Price  " , selectedPrice._id)
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 49.99,
    },
    {
      _id: 951,
      priceOne: 50.0,
      priceTwo: 99.99,
    },
    {
      _id: 952,
      priceOne: 100.0,
      priceTwo: 199.99,
    },
    {
      _id: 953,
      priceOne: 200.0,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ];

  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          <li
            className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 ${
              !selectedPrice ? 'font-bold' : ''
            }`}
            onClick={() => dispatch(setPrice(null))}
          >
            All Prices
          </li>
          {priceList.map((item) => (
            <li
              key={item._id}
              
              className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 ${
                selectedPrice?._id  === item._id ? 'font-bold' : ''
              }`}
              onClick={() => dispatch(setPrice(item))}
            >
              ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
