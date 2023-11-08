import React from 'react';
import '../HelpCenter/Helpcenter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTruck, faCreditCard, faExchangeAlt, faInfoCircle, faHeadset, faTags } from '@fortawesome/free-solid-svg-icons';
import Helpcenterimg1 from '../../assets/images/Helpcenter-img1.png'

function HelpCenter() {


  return (
    <div>

      {/* Help center section 1 starts here */}
      <div className='Helpcenter-sec1-main'>

        <div className='mx-12'>
          <h1 className='font-bold text-6xl'>We are here to help!</h1>
          <p className='text-2xl pt-8'>Have questions? Search through our Help Center.</p>
        </div>

        <div className='helpcenter-sec1 px-4 md:px-8'>
          <input type='search' placeholder='Start Typing Your Search' className='w-[100%] md:w-[80%] h-[50px] outline-none mr-8 bg-transparent'></input>
          <div className='bg-[black] hidden md:block text-white h-[50px] px-10 rounded-full md:flex items-center'>
            <a href='#' className='gap-x-1 flex items-center'>
              <FontAwesomeIcon icon={faSearch} />
              <h1>SEARCH</h1>
            </a></div>
        </div>

      </div>

      {/* Help center section 1 Ends here */}

      {/* Help center section 2 starts here */}

      <div className='bg-[#F5F5F3] text-center py-10'>
        <h2 className='pb-4 lg:pb-8 text-xl md:text-2xl'>Got Any Questions ?</h2>
        <h1 className='md:text-5xl font-bold text-3xl'>We've Got Answers</h1>


        <div className='md:flex mx-4 md:mx-4 lg:mx-12 gap-x-1.5 mt-10'>
          <div className='bg-[white] px-4 lg::px-8 py-8 rounded-[20px] w-[100%] md:w-[33.33%]'>
            <FontAwesomeIcon icon={faCreditCard} className='text-2xl pb-2' />
            <h1 className='font-bold text-xl lg:text-2xl pb-4'>Ordering and Payment</h1>
            <p> Learn how to place an order on our website and explore the various payment options available, including credit/debit cards, PayPal, and more.</p>
          </div>

          <div className='bg-[white] px-4 lg::px-8 py-8 rounded-[20px] w-[100%] mt-4 md:mt-0 md:w-[33.33%]'>
            <FontAwesomeIcon icon={faTruck} className='text-2xl pb-2' />
            <h1 className='font-bold text-xl lg:text-2xl pb-4'>Shipping and Delivery</h1>
            <p> Find out about our shipping policies, estimated delivery times, and how to track your order as it makes its way to your doorstep.</p>
          </div>

          <div className='bg-[white] px-4 lg:px-8 py-8 rounded-[20px] w-[100%] mt-4 md:mt-0 md:w-[33.33%]'>
            <FontAwesomeIcon icon={faExchangeAlt} className='text-2xl pb-2' />
            <h1 className='font-bold text-xl lg:text-2xl pb-4'>Returns and Refunds</h1>
            <p> Discover our return policy, how to initiate a return or exchange, and the refund process, ensuring a hassle-free shopping experience.</p>
          </div>

        </div>


        <div className='md:flex mx-4 md:mx-4 lg:mx-12 mt-4 gap-x-1.5 md:mt-10'>

          <div className='bg-[white] px-4 lg:px-8 py-8 rounded-[20px] w-[100%] md:w-[33.33%]'>
            <FontAwesomeIcon icon={faInfoCircle} className='text-2xl pb-2' />
            <h1 className='font-bold text-xl lg:text-2xl pb-4'>Product Info & Features</h1>
            <p> Learn where to find detailed product information, specifications, and the unique features of our products to make informed purchasing decisions.</p>
          </div>

          <div className='bg-[white] px-4 lg::px-8 py-8 rounded-[20px] w-[100%] mt-4 md:mt-0 md:w-[33.33%]'>
            <FontAwesomeIcon icon={faHeadset} className='text-2xl pb-2' />
            <h1 className='font-bold text-xl lg:text-2xl pb-4'>Customer Support </h1>
            <p> Get in touch with our customer support team for any questions, concerns, or assistance you may need. Find our contact information and operating hours here.</p>
          </div>

          <div className='bg-[white] px-4 lg:px-8 py-8 rounded-[20px] w-[100%] md:mt-0 mt-4 md:w-[33.33%]'>
            <FontAwesomeIcon icon={faTags} className='text-2xl pb-2' />
            <h1 className='font-bold lg:text-2xl pb-4 text-xl'>Promotions & Discounts</h1>
            <p> Stay updated on our latest promotions, discounts, and special offers. Learn how to apply coupon codes, participate in loyalty programs, and take advantage of exclusive deals to save on your purchases.</p>
          </div>

        </div>

        <p className='pt-8 px-4 md:pt-16 text-lg md:text-3xl w-[100%] w-[80%] mx-auto text-[gray]'>If you have an issue within 14 days which we can’t solve via support, you’re more than welcome to a full refund!</p>

      </div>

      {/* Help center section 2 Ends here */}

  {/* Help center section 3 starts here */}

   
   <div className='bg-[white] w-[80%] mt-12 lg:mt-32 mx-auto relative top-8 Helpcenter-lastsec-main flex items-center py-8 rounded-[10px] justify-between px-4 lg:px-20'>

<div className='my-4'>
  <h1 className='font-bold text-2xl lg:text-5xl'>Still Have Questions?</h1>
  <p className='pt-4 text-xl mb-8'>Our customer care team is here for you!</p>
  <a href="#" className='bg-black text-[white] py-2 px-8 rounded-[10px]'>Contact Us</a>
</div>

<div className='mr-10 hidden md:block'>
<img src={Helpcenterimg1} alt="My Image"/>
</div>

   </div>



































































































































































































    </div>
  )
}

export default HelpCenter
