import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram , FaTruck } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { Link } from 'react-router-dom';
const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="w-full bg-[#F5F5F3] pt-20 pb-4 px-4 ">
      <div className="max-w-container mx-auto sm:grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" More about Happy Shoppy" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Your destination for smiles. Discover quality products, unbeatable prices, and top-notch service. Join us in celebrating the joy of shopping!
            </p>

            <ul className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaWhatsapp />
                </li>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaInstagram />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div className="my-4 md:my-0">
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">

            <Link to="/About">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                About Us
              </li>
            </Link>

            <Link to="/Contact">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Contact Us
            </li>
            </Link>

            <Link to="/TermsConditions">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Terms & Conditions
              </li>
            </Link>

            <Link to="/PrivicyPolicy">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Privicy Policy
              </li>
            </Link>

            <Link to="/shop">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Products
              </li>
            </Link>

            <Link to="/Faq">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                FAQ
              </li>
            </Link>

          </ul>
        </div>


      
        <div className="my-4 md:my-0">
          <FooterListTitle title="Customer Care" />
          <ul className="flex flex-col gap-2">

            <Link to="/HelpCenter">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Help center
              </li>
            </Link>

            <Link to="/security">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Purchase Protection
              </li>
            </Link>

            <Link to="/Returnpolicy">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Return Policy
              </li>
            </Link>


            <Link to="/Howtobuy">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              How To Buy
            </li>
</Link>

            <Link to="/Paymentoptions">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Payments
            </li>
            </Link>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full xl:px-4">
          <div className=" w-[100%] xl:flex xl:justify-center xl:text-center">
          <FooterListTitle title="Payment Options" className="xl:text-center"/>
          </div>
          <div className="w-full">
            <p className="xl:text-center mb-4 xl:w-[100%] sm:w-[70%]">
            We offer a convenient Cash on Delivery payment option for your shopping ease.
            </p>
            <div className="flex xl:justify-center">
            <FaTruck  size={50} className=""/>
            </div>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600 hidden"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4 hidden">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 hidden border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            )}

            {/* <Image
              className={`w-[80%] lg:w-[60%] mx-auto ${subscription ? "mt-2" : "mt-6"
                }`}
              imgSrc={paymentCard}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
