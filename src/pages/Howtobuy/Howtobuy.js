import React from 'react'
import howtoimg1 from '../../assets/images/howto-img1.png'
import '../Howtobuy/Howtobuy.css';
import { Link } from 'react-router-dom';

function Howtobuy() {
    return (
        <div className="mx-4 md:mx-10 lg:mx-20 my-10">
            <div className='flex'>
                <h1 className='text-[red]'>Home <span className='px-2 text-[black]'>-</span></h1>
                <p>How To Buy</p>
            </div>
            <div className='howtobuy-banner1'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold lg:pt-8'>How do I place an order on Happy Shoppy?</h1>
                    <p className='md:text-xl lg:w-[40%] pt-3'>Shopping on happy shoppy is super easy. you don't have to register an account just choose your favourite thing and start shopping!</p>
                </div>
            </div>
            <h2 className='font-bold pt-12 text-xl'>Please refer to the Image below for instructions on how to place an order:</h2>

            {/* how to buy section 1 starts here */}
            <div className='my-10 md:flex items-center justify-around bg-[#F5F5F3] py-10 rounded-md'>

                <div className='md:w-[40%] '>
                    <img src={howtoimg1} alt="My Image" className='w-[200px] mx-auto' />
                </div>

                <div className=' px-4 md:px-0 mt-8 md:mt-0 md:w-[40%] mx-auto'>
                    <div className='text-center flex items-center justify-center mb-10 bg-[black] mx-auto md:mx-1 w-[50px] rounded-full h-[50px] w-[50px]'>
                        <p className='text-[white] font-bold text-2xl'>1</p>
                    </div>
                    <h1 className='text-xl md:text-2xl font-bold'>Once You have Found The Product Tap On Add To Cart, And If You Are Making Multiple Purchases, Apply Same method Add To cart . And Then Click on Buy Now Which is on your screen at right .</h1>
                </div>
            </div>
            {/* how to buy section 1 Ends here */}

            {/* how to buy section 2 starts here */}
            <div className='my-10 md:flex items-center justify-around bg-[#F5F5F3] py-10 rounded-md'>

                <div className='md:w-[40%] px-4 md:px-0 mx-auto'>
                    <div className='text-center mx-auto md:mx-1 flex items-center justify-center mb-10 bg-[black] w-[50px] rounded-full h-[50px] w-[50px]'>
                        <p className='text-[white] font-bold text-2xl'>2</p>
                    </div>
                    <h1 className='text-xl md:text-2xl font-bold'>After Clicking On Buy Now , you will go to Cart Page Where you can see your products and prices ! in bottom of the page there is a button of "Proceed To Checkout" Click on it .</h1>
                </div>

                <div className='mt-8 md:mt-0 md:w-[40%]'>
                    <img src={howtoimg1} alt="My Image" className='w-[200px] mx-auto' />
                </div>

            </div>
            {/* how to buy section 2 Ends here */}

            {/* how to buy section 3 starts here */}
            <div className='my-10 md:flex items-center justify-around bg-[#F5F5F3] py-10 rounded-md'>

                <div className='md:w-[40%]'>
                    <img src={howtoimg1} alt="My Image" className='w-[200px] mx-auto' />
                </div>

                <div className='mx-4 md:mx-1 md:w-[40%] mt-8 md:mt-0 mx-auto'>
                    <div className='mx-auto md:mx-0 text-center flex items-center justify-center mb-10 bg-[black] w-[50px] rounded-full h-[50px] w-[50px]'>
                        <p className='text-[white] font-bold text-2xl'>3</p>
                    </div>
                    <h1 className='text-xl md:text-2xl font-bold'>Once You have Found The Product Tap On Add To Cart, And If You Are Making Multiple Purchases, Apply Same method Add To cart . And Then Click on Buy Now Which is on your screen at right .</h1>
                </div>
            </div>
            {/* how to buy section 3 Ends here */}

            {/* how to buy section 4 starts here */}
            <div className='my-10 md:flex items-center justify-around bg-[#F5F5F3] py-10 rounded-md'>

                <div className='mx-4 md:mx-0 md:w-[40%] mx-auto'>
                    <div className='text-center mx-auto md:mx-0 flex items-center justify-center mb-10 bg-[black] w-[50px] rounded-full h-[50px] w-[50px]'>
                        <p className='text-[white] font-bold text-2xl'>4</p>
                    </div>
                    <h1 className='text-xl md:text-2xl font-bold'>Once You have Found The Product Tap On Add To Cart, And If You Are Making Multiple Purchases, Apply Same method Add To cart . And Then Click on Buy Now Which is on your screen at right .</h1>
                </div>

                <div className='mt-8 md:mt-0 md:w-[40%]'>
                    <img src={howtoimg1} alt="My Image" className='w-[200px] mx-auto' />
                </div>

            </div>
            {/* how to buy section 4 Ends here */}

            {/* how to buy section 5 starts here */}
            <div className='howtobuy-banner2 px-4 lg:pl-10'>
                <div className='md:w-[50%] drop-shadow-2xl'>
                    <h1 className='font-bold text-2xl md:text-5xl pb-4 text-white'>That's it</h1>
                    <p className='text-[white]'>This is how you can place your order in happy shoppy ! But if you still having issues in placing the order than please feel free to contact us .</p>
                    <div className='mt-10  bg-[black] w-[200px] text-[white] text-center py-2 rounded-md'>
                        <Link to="/Contact"><p>Contact Us</p></Link>
                    </div>
                </div>
            </div>
            {/* how to buy section 5 ends here */}

        </div>
    )
}

export default Howtobuy
