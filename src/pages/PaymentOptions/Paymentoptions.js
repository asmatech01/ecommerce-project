import React from 'react'
import '../PaymentOptions/paymentoptions.css';
import { Link } from 'react-router-dom';
import paymeninfobank1 from '../../assets/images/UBL-img.jpg'
function Paymentoptions() {
    return (

        <div className="mx-4 lg:mx-4 xl:mx-32 my-10">

            <div className='flex'>
                <h1 className='text-[red]'>Home <span className='px-2 text-[black]'>-</span></h1>
                <p>Payments</p>
            </div>

            {/* payment options section1 starts here */}
            <div className='mt-4 payment-banner1'>
                <h1 className='md:w-[50%] px-4 md:pl-10 font-bold md:text-xl text-[white] payment-head1'>At happy shoppy, we want to make your online shopping experiences the most enjoyable ever. That’s why we focus all our brands and policies around you, including payment.</h1>
            </div>
            {/* payment options section1 Ends here */}

            {/* payment options section2 starts here */}
            <div className='bg-[#F5F5F3] py-8 px-4 md:p-10 mt-10 rounded-md'>

                <div>
                    <h1 className='font-bold text-xl'>How do I pay for a Happy Shoppy purchase?</h1>
                    <p className='w-[100%] md:w-[90%] py-4'>Happy Shoppy is delighted to provide you with the convenient Cash on Delivery payment method. We understand that flexibility and ease of payment are essential to our valued customers, and that's why we offer this hassle-free payment option. With Cash on Delivery, you can shop with confidence, knowing that you can pay for your purchases when they arrive at your doorstep. This payment method not only simplifies your shopping experience but also ensures your satisfaction with our products and services. Happy Shoppy is committed to making your shopping experience enjoyable and stress-free, and offering Cash on Delivery is just one of the many ways we strive to meet your needs. So, go ahead and explore our wide range of products, and choose the payment method that suits you best – we're here to make your shopping experience as happy as can be!</p>
                </div>

                <div>
                    <h1 className='font-bold text-xl mt-10'>Payment Policy</h1>
                    <p className='md:[90%] w-[100%] py-4'>Happy Shoppy can change the price of the ordered, the price fluctuation can be due to currency devaluation, shortage of product or any other unforseen incident. In such case happy shoppy will let the customer know the new price and if the customer agrees then only Happy Shoppy will dispatch the product.</p>
                </div>

                <div className='mt-10'>
                    <h1 className='font-bold text-xl'>Cash on Delivery</h1>
                    <p className='w-[100%] md:w-[90%] py-4'>We know the easiest way to pay for your online shopping in Pakistan and online deals are with cash. To enjoy this payment option, simply select the “Cash on Delivery” option when you book your order. You will receive a call from customer care before your product is sent to your door, giving you more than enough time to have the cash ready.</p>
                    <p className='w-[100%] md:w-[90%]'>Our Customer Support Representative might ask you to submit a certain portion of the total amount as advance payment on selected products for confirmation purpose.</p>
                </div>

                <div className='mt-10'>
                    <h1 className='font-bold text-xl'>Are there any hidden charges when I make a purchase on Happy Shoppy ?</h1>
                    <p className='w-[100%] md:w-[90%] py-4'>There are NO hidden charges when you make a purchase on Happy Shoppy. The prices listed for all the items are final and all-inclusive. The price you see on the product page is exactly what you pay.</p>
                    <p className='w-[100%] md:w-[90%]'>Delivery charges may be extra depending on Your Location .</p>
                </div>

                <div className='mt-10'>
                    <h1 className='text-2xl pb-2 font-bold'>Note :</h1>
                    <p className=' pt-2 md:w-[90%] w-[100%] '>Happy Shoppy may ask customers to deposit payment in advance (partial or full) for certain products as an assurance for the order.</p>
                </div>

            </div>
            {/* payment options section2 Ends here */}


            {/* payment options section3 starts here */}
            <div className='paymentinfo-sec7'>
                <div className='w-[100%] md:w-[70%] px-2 md:pl-12'>
                    <p className='pt-2 text-xl md:text-2xl font-bold'>If you would like further clarification about Happy Shoppy’s payment options, feel free to contact us .</p>
                    <div className='mt-10  bg-[white] w-[200px] text-[black] text-center py-2 rounded-md'>
                        <Link to="/Contact"><p>Contact Us</p></Link>
                    </div>
                </div>
            </div>

            {/* payment options section3 Ends here */}

        </div>
    )
}

export default Paymentoptions
