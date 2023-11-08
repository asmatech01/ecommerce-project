import React from 'react'
import '../FAQ/faq.css';

function Faq() {
  return (

    <div className="mx-4 lg:mx-20 my-10">

<div className='flex'>
                <h1 className='text-[red]'>Home <span className='px-2 text-[black]'>-</span></h1>
                <p>FAQ</p>
            </div>

      {/* FAQ section 1 starts here */}
      <div>

        <div className='faq-sec1-main'>
          <div>
        <h1 className='text-2xl md:text-3xl text-center font-bold text-[white]'>FREQUENTLY ASKED QUESTIONS</h1>
        <hr className='mt-2 w-[150px] mx-auto'></hr>
        </div>
        </div>

        <div className='md:flex  items-center mt-12 gap-x-3.5 basis-1'>

          <div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8 md:h-[240px]  flex items-center'>
            <div>
            <h1 className='font-bold pb-4 text-xl'>How Can I Place An Order?</h1>
            <p>You can order your desired product via our website, social media platforms (i.e., Facebook, Instagram,), email, WhatsApp at +03232-31159989, or by calling us at +9221-8219201.</p>
          </div>
          </div>

          <div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8 mt-4 md:mt-0  md:h-[240px] flex items-center'>
            <div>
            <h1 className='font-bold pb-4 text-xl'>What’s The Estimated Delivery Time Of An Order?</h1>
            <p>The estimated delivery time for orders within Karachi is 2-3 working days, outside of Karachi is 4-5 working days.</p>
          </div>
          </div>

        </div>





        <div className='md:flex items-center gap-x-3.5'>

<div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8  md:h-[240px] flex items-center mt-4'>
  <div>
  <h1 className='font-bold pb-4 text-xl'>What Mode Of Payments Available For Customer?</h1>
  <p className='font-bold'>You can pay Via: Cash On Delivery. Debit/Credit Card.</p>
  <p className='font-bold pt-2'>Note :<span className='font-thin pl-2'>While placing an order Customer have to provide active Mobile number only with active email address.</span></p>
</div>
</div>

<div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8 md:h-[240px]  flex items-center mt-4'>
  <div>
  <h1 className='font-bold pb-4 text-xl'>Do I Need To Open An Account To Place An Order?</h1>
  <p>No, you do not need to register to the website to make purchases. You can check out as a guest each time. However, setting up an account with us will allow you to order without entering your details every time.</p>
</div>
</div>

</div>   





 <div className='md:flex items-center gap-x-3.5'>

<div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8 md:h-[320px]  flex items-center mt-4'>
  <div>
  <h1 className='font-bold pb-4 text-xl'>How Do I Create An Account?</h1>
  <p>To create an account with Happy Shoppy, click on "Login/Register," In the Navbar Profile icon "Create an Account," and fill in your personal details.</p>
</div>
</div>

<div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8 flex md:h-[320px]  items-center mt-4'>
  <div>
  <h1 className='font-bold pb-4 text-xl'>How Do I Place An Order On Website?</h1>
  <p>To place an order on the Happy Shoppy website, select the items you want, add them to your shopping cart. After you have finished shopping, proceed to your cart and check out, ensuring that all information is correct before confirming your purchases and payment. Active mobile numbers are required for order confirmation.</p>
</div>
</div>

</div>




<div className='md:flex items-center gap-x-3.5'>

<div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8 md:h-[260px] flex items-center mt-4'>
  <div>
  <h1 className='font-bold pb-4 text-xl'>How Can I Track My Order?</h1>
  <p>To track your order, call or WhatsApp us with your order picture and mobile number.</p>
  
</div>
</div>

<div className='w-[100%] lg:w-[50%]  bg-[#F5F5F3] py-4 px-8 md:h-[260px] flex items-center mt-4'>
  <div>
  <h1 className='font-bold pb-4 text-xl'>What To Do If There Is A Missing Item In My Order?</h1>
  <p>We apologize for the inconvenience caused by the missing item in your order. To resolve this issue, kindly contact our Customer Care Team at +04030211 or WhatsApp at +46-737-35119.</p>
</div>
</div>

</div>   



<div className='md:flex items-center gap-x-3.5'>

<div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8 flex md:h-[260px]  items-center mt-4'>
  <div>
  <h1 className='font-bold pb-4 text-xl'>What Should I Do If I Haven't Received My Parcel?</h1>
  <p>If you have not received your parcel within four working days, please send an email to our Customer Care Team at happyshoppy@gmail.com, or message us on WhatsApp at +92-27-359989. We will assist you in tracking your parcel.</p>
</div>
</div>

<div className='w-[100%] lg:w-[50%] bg-[#F5F5F3] py-4 px-8 flex md:h-[260px]  items-center mt-4'>
  <div>
  <h1 className='font-bold pb-4 text-xl'>Will There Be Any Extra Charges For Re-Delivery?</h1>
  <p>We do not charge any additional fees for re-delivering a product. Rest assured, we will do our best to fulfill your request without any extra cost.</p>
</div>
</div>
</div>   

      </div>


    </div>
  )
}

export default Faq
