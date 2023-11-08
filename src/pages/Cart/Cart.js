import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link only once, remove the extra import
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../statemanagment/reducers/cart.reducer";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faPhone,
  faBuilding,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
import { useNavigate } from "react-router-dom"; // Only import useHistory
import { createOrder } from "../../statemanagment/reducers/order.reducer";

const Cart = () => {
  const [section1Filled, setSection1Filled] = useState(false);
  const [section2Disabled, setSection2Disabled] = useState(true);
  const [section3Disabled, setSection3Disabled] = useState(true);
  const [email, setEmail] = useState(""); // Track email input
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [showLearnMessage, setShowLearnMessage] = useState(false);

  const Navigate = useNavigate();

  const handleSection1Submit = () => {
    if (!email.trim().toLowerCase().endsWith("@gmail.com")) {
      alert("Please enter a valid Gmail address.");
      return; // Don't proceed if it's not a valid Gmail address
    }

    // When the user submits section 1 with a valid Gmail address, update the states to enable section 2 and disable section 1.
    setSection1Filled(true);
    setSection2Disabled(false);
  };

  // Function to handle changes in input fields
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    // Remove any non-numeric characters from the input
    const cleanedValue = e.target.value.replace(/\D/g, "");

    // Limit the value to exactly 11 digits
    const limitedValue = cleanedValue.slice(0, 11);

    // Update the phoneNumber state with the limited value
    setPhoneNumber(limitedValue);

    // Check if the phone number is valid (11 digits)
    if (limitedValue.length === 11) {
      setIsPhoneNumberValid(true);
      setShowLearnMessage(false); // Hide the "Learn" message
    } else {
      setIsPhoneNumberValid(false);
      setShowLearnMessage(true); // Show the "Learn" message
    }
  };

  const isShippingInfoValid = name && address && phoneNumber && city;

  const handleSection2Submit = () => {
    // When the user submits section 2, update the states to enable section 3 and disable section 2.
    setSection3Disabled(false);
    setSection2Disabled(true);
  };

  const handleSection3Submit = () => {
    setSection3Disabled(true);
    // You can add your own logic here when the section 3 is submitted.
    // For example, you can dispatch an action or perform any other actions.
  };

  // ...

  const dispatch = useDispatch();
  const products = useSelector((state) => state.rootReducer.cart.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  const [paymentData, setPaymentData] = useState({
    accountNumber: "",
    useShippingAddress: "",
  });

// console.log(products)

  const handleAccountNumberChange = (e) => {
    setPaymentData({ ...paymentData, accountNumber: e.target.value });
  };

  const handleUseShippingAddressChange = (e) => {
    setPaymentData({ ...paymentData, useShippingAddress: e.target.value });
  };

  const isPaymentInfoValid =
    paymentData.accountNumber && paymentData.useShippingAddress;

  useEffect(() => {
    let price = 0;
    products.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  // Input change handler for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const resetForm = () => {
    setSection1Filled(false);
    setSection2Disabled(true);
    setSection3Disabled(true);
    setEmail("");
    setName("");
    setAddress("");
    setPhoneNumber("");
    setPaymentData({
      accountNumber: "",
      useShippingAddress: "",
    });
  };

  const placed = useSelector((state) => state.rootReducer.order.status)

  
  console.log(placed)
  const handleProceedToCheckout = () => {
    const order = {
      shippingInfo: {
         email,
         name,
         city,
         address,
         phoneNumber
      },
      orderItems: products,
      totalPrice: totalAmt,
      shippingCharge: shippingCharge, 
    }

    dispatch(
      createOrder( order  )
    )
  };

  return (
    <div className="max-w-container mx-auto px-2 lg:px-4">
      {products.length > 0 ? (
        <div className="media_query pb-10 flex flex-col gap-3">
          <div className="xl:mr-2">
            <div className="flex my-8">
              <h1 className="text-[red]">
                Home <span className="px-2 text-[black]">-</span>
              </h1>
              <p>Cart</p>
            </div>
            <div className="w-full py-4 rounded-full bg-[#F5F5F3] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
              <h2 className="col-span-2">Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Sub Total</h2>
            </div>
            <div className="mt-5">
              {products.map((item) => (
                <div key={item._id}>
                  <ItemCard item={item} />
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => dispatch(resetCart())}
                className="py-2 px-12 rounded-md bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
              >
                Reset cart
              </button>
            </div>
          </div>

          <div className="bg-[#F5F5F3] mt-10 p-[1px]"></div>

          <div className="max-w-7xl gap-4 h-[100%] justify-end mt-10 xl:ml-10">
            <div>
              <div className="my-1 bg-[#F5F5F3] py-2 rounded-xl">
                <div className={`px-2`}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-black px-4 py-2 text-lg font-bold">
                      Guest Checkout
                    </h1>
                    {section1Filled ? (
                      <FontAwesomeIcon
                        icon={faEdit}
                        className={`mr-2 text-black cursor-pointer`}
                        onClick={() => {
                          if (section1Filled) {
                            // If the form is filled (disabled), enable the form and disable the edit icon
                            setSection1Filled(false);
                          } else {
                            // If the form is enabled, disable the form and enable the edit icon
                            setSection1Filled(true);
                          }
                        }}
                      />
                    ) : null}
                  </div>
                  <form
                    className={`py-2 px-4 flex flex-col gap-1${
                      !section1Filled ? "" : "opacity-50"
                    }`}
                  >
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon
                          icon={faAt}
                          className={`text-gray ${
                            section1Filled ? "opacity-30" : ""
                          }`}
                        />
                      </span>
                      <input
                        className={`checkout-input w-full text-black py-1 px-2 pl-8 bg-transparent
                         border-2 border-gray focus:outline-none ${
                           section1Filled ? "opacity-30" : ""
                         }`}
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your Email"
                        disabled={section1Filled}
                      />
                    </div>
                    <div className="flex justify-end">
                      {!section1Filled ? (
                        <button
                          className="bg-primeColor cursor-pointer text-white py-0.4 mt-1 px-8 rounded-xl"
                          onClick={() => {
                            handleSection1Submit();
                          }}
                          disabled={section1Filled || !email}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="bg-primeColor text-white py-1 rounded-lg"
                          disabled
                        ></button>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              <div className={`my-4 bg-[#F5F5F3] py-2 px-4 rounded-xl`}>
                <div className="rounded-lg">
                  <div className="flex items-center	justify-between">
                    <h1 className="text-black px-4 p-2 text-lg font-bold">
                      Shipping information
                    </h1>
                    {section2Disabled ? (
                      <FontAwesomeIcon
                        icon={faEdit}
                        className={`mr-2 text-black cursor-pointer ${
                          name === "" || address === "" || phoneNumber === ""
                            ? "pointer-events-none"
                            : ""
                        }`}
                        onClick={() => {
                          if (
                            section2Disabled &&
                            name !== "" &&
                            address !== "" &&
                            phoneNumber !== ""
                          ) {
                            // If the form is filled (disabled), enable the form and disable the edit icon
                            setSection2Disabled(false);
                          }
                        }}
                      />
                    ) : null}
                  </div>

                  <form
                    className={`py-2 px-2 flex flex-col gap-1 ${
                      section2Disabled ? "opacity-40" : ""
                    }`}
                  >
                    <div className="relative mb-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-primeColor"
                        />
                      </span>
                      <input
                        className={`w-full checkout-input text-black py-1 px-2 pl-8 bg-transparent border-2 border-gray focus:outline-none ${
                          section2Disabled ? "" : ""
                        }`}
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Your Full Name"
                        disabled={section2Disabled}
                      />
                    </div>

                    <div className="relative mb-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="text-primeColor"
                        />
                      </span>
                      <input
                        className={`w-full checkout-input text-black py-1 px-2 pl-8 bg-transparent border-2 border-gray focus:outline-none ${
                          section2Disabled ? "" : ""
                        }`}
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        placeholder="Your City"
                        disabled={section2Disabled}
                      />
                    </div>

                    <div className="relative mb-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon
                          icon={faMapMarker}
                          className="text-gray"
                        />
                      </span>
                      <input
                        className={`w-full checkout-input text-black py-1 px-2 pl-8 bg-transparent border-2 border-gray focus:outline-none ${
                          section2Disabled ? "" : ""
                        }`}
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                        placeholder="Your Full Address"
                        disabled={section2Disabled}
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon icon={faPhone} className="text-gray" />
                      </span>
                      <input
                        className={`w-full checkout-input text-black py-1 px-2 pl-8 bg-transparent border-2 border-gray focus:outline-none ${
                          section2Disabled ? "" : ""
                        }`}
                        type="number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="Phone Number"
                        disabled={section2Disabled}
                      />
                    </div>
                    {showLearnMessage && (
                      <p className="text-red-500 text-sm mt-1">
                        Please enter a valid 11-digit phone number.
                      </p>
                    )}
                    <div className="flex justify-end">
                      {!section2Disabled ? (
                        <button
                          className="bg-primeColor cursor-pointer text-white py-0.4 mt-1 px-8 rounded-xl"
                          onClick={() => {
                            handleSection2Submit();
                          }}
                          disabled={
                            section2Disabled ||
                            !isShippingInfoValid ||
                            !isPhoneNumberValid
                          }
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="bg-primeColor text-white py-1 rounded-lg"
                          disabled
                        ></button>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              <div className="bg-[#F5F5F3] py-2 px-4 rounded-xl mb-4">
                <h1 className="text-black px-4 p-2 text-lg font-bold">
                  Payment Options
                </h1>
                <div className="flex items-center px-4 py-2 text-[gray]">
                  <FontAwesomeIcon icon={faTruck} className="text-[gray]" />
                  <h1 className="pl-4">Cash on Delivery Only</h1>
                </div>
              </div>

              <div className="w-[100%] lg:w-96 flex flex-col gap-4">
                <div>
                  <p className="flex items-center justify-between  border-b-0 py-1.5 text-lg px-4 font-medium">
                    Subtotal
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${totalAmt}
                    </span>
                  </p>
                  <p className="flex items-center justify-between  border-b-0 py-1.5 text-lg px-4 font-medium">
                    Shipping Charge
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${shippingCharge}
                    </span>
                  </p>
                  <p className="flex items-center justify-between  py-1.5 text-lg px-4 font-medium">
                    Total
                    <span className="font-bold tracking-wide text-lg font-titleFont">
                      ${totalAmt + shippingCharge}
                    </span>
                  </p>
                </div>
                <hr></hr>
                <div className="flex justify-end">
                  <div>
                    <button
                      className="w-52 py-1 rounded-md px-2 h-10 bg-primeColor text-white hover:bg-black duration-300"
                      onClick={handleProceedToCheckout}
                    >
                      Place an order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center w-[100%] items-center gap-4 py-4 md:py-28"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-2 md:px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
