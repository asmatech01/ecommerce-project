import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { useSelector } from "react-redux";
const NewArrivals = () => {
  const products = useSelector((state) => state.rootReducer.product.product.products);

  // Filter products with "red" color


  const NewArrivals =  products?.filter((product) => product.category.name === "New Arrivals");

  
  
  
  // const redProducts = products.length > 0
  // ? products.filter((product) => product.color === "red")
  // : [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {NewArrivals &&
          NewArrivals?.map((product) => (
            <div className="px-2" key={product._id}>
              <Product
                _id={product._id}
                // img={`https://cute-blue-bonobo-cuff.cyclic.app/images/${product.productImage[0].img}`}
                img={`http://192.168.100.5:443/images/${product.productImage[0].img}`}
                productName={product.name}
                price={product.price}
                color={product.color}
                des={product.description}
              />
            </div>
          ))}
        {/* {products.length > 0 ? (
          products.map((product) => (
            <div className="px-2" key={product._id}>
              <Product
                _id={product._id}
                img={`https://cute-blue-bonobo-cuff.cyclic.app/images/${product.productImage[0].img}`}
                productName={product.name}
                price={product.price}
                color={product.color}
                des={product.description}
              />
            </div>
          ))
        ) : (
          <div className="px-2">No products available</div>
        )} */}
      </Slider>
    </div>
  );
};

export default NewArrivals;
