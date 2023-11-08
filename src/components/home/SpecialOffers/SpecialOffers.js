import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";
import Slider from "react-slick";
import SampleNextArrow from "../NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../NewArrivals/SamplePrevArrow";
import { useSelector } from "react-redux";

const SpecialOffers = () => {

  const products = useSelector((state) => state.rootReducer.product.product.products);

  const specialoffer =  products?.filter((product) => product.category.name === "Special Offers");
 
 
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
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <Slider {...settings}>
      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10"> */}
      {specialoffer &&
          specialoffer.map((product) => (
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
      {/* </div> */}
      </Slider>
    </div>
  );
};

export default SpecialOffers;
