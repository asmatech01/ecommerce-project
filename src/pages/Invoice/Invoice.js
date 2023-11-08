import React from 'react'
import { FaShoppingCart , FaMapMarker , FaPhone} from 'react-icons/fa';
import Customerdetails from './Customerdetails';

function Invoice() {
  return (
    <div className='h-[auto] bg-[#F5F5F3] my-10 mx-4 lg:mx-8 xl:mx-32 rounded-md py-8'>
      <h1 className='font-bold text-2xl md:text-4xl pl-8'>Happy Shoppy</h1>


{/* invoice section 1 starts here */}
<div className='flex items-center my-8'>
<div className='bg-[black] h-8 w-[70%]'></div>
<div><h1 className='text-2xl md:text-4xl px-4 font-bold'>INVOICE</h1></div>
<div className='bg-[black] h-8 w-[20%]'></div>
    </div>
{/* invoice section 1 Ends here */}

{/* invoice section 2 starts here */}
<div className='md:flex justify-between mx-4 md:mx-20'>

<div>
    <h1 className='text-2xl md:text-4xl font-bold'>Invoice To :</h1>
    <h1 className='text-lg md:text-xl font-bold py-2'>Sami Ahmed</h1>
    <p className='text-[gray]'>House Number 123 , qadimi mohallah , <br className='hidden md:flex'></br>shershah colony karachi</p>
</div>

<div className='my-auto'>

<div className='flex items-center mt-4 md:mt-0'>
    <h1 className='text-xl font-bold pr-4'>Invoice #</h1>
    <p>1291921</p>
    </div>

    <div className='flex items-center'>
    <h1 className='text-xl font-bold pr-4'>Date :</h1>
    <p>10 / 21 / 2023</p>
    </div>

    </div>
    </div>
{/* invoice section 2 Ends here */}

{/* invoice section 3 Starts here */}
<div className='border pb-20 border-[black] mt-8 mx-2 md:mx-4 lg:mx-20 rounded-sm'>

<div className='bg-[black] flex py-2 text-[white] px-4'>

    <div className='w-[10%]'>
<h1>SN.</h1>
    </div>

    <div className='w-[40%]'>
<h1>Item Describtion</h1>
    </div>

    <div className='w-[20%]'>
<h1>Price</h1>
    </div>

    <div className='w-[20%]'>
<h1>Qty.</h1>
    </div>

    <div className='w-[20%]'>
<h1>Total</h1>
    </div>

    </div>

<Customerdetails/>
<Customerdetails/>
<Customerdetails/>
<Customerdetails/>
<Customerdetails/>
<Customerdetails/>
<Customerdetails/>

</div>


{/* invoice section 3 Ends here */}

{/* invoice section 4 Starts here */}
<div className='lg:flex justify-between mt-12'>

<div className='md:mx-20'>
    <h1 className='font-bold pb-8 text-xl px-2 md:px-0'>Thank You For Your Business</h1>
    <h1 className='font-bold pb-2 px-2 md:px-0'>Terms & Conditions</h1>
    <p className='px-2 md:px-0'>Adding Random Para For Now But Will change <br className='hidden md:flex'></br>it Later into real original one</p>
    </div>

<div>

<div className='flex justify-between mx-4 md:mx-20 mt-8 lg:mt-0'>
<h1 className='font-bold pr-4'>Sub Total</h1>
<p>30000 PKR</p>
</div>

<div className='flex justify-between mx-4 md:mx-20'>
<h1 className='font-bold pr-4'>Tax</h1>
<p>0.00 PKR</p>
</div>

<div className='bg-[black] h-10 px-4 items-center mt-10 text-center text-[white] flex justify-between'>
    <h1>Total :</h1>
    <p>12000 PKR</p>
    </div>

</div>

</div>
{/* invoice section 4 Ends here */}

{/* invoice section 5 starts here */}
<div className='flex items-center mt-12'>
<div className='bg-[black] h-[5px] w-[20%]'></div>
<div className='bg-[black] h-[5px] mx-4 w-[20%]'></div>
<div className='bg-[black] h-[5px] w-[60%]'></div>
    </div>
    {/* invoice section 5 ends here */}
{/* invoice section 6 starts here */}
<div className='lg:flex items-center my-4'>

<div className='lg:h-[2px] lg:w-[20%]'>
<div className='flex items-center pl-2 md:pl-4 lg:justify-center'>  
<FaShoppingCart size={25} className="pr-2" />
<p>Happy Shoppy</p>
</div>
</div>  

<div className='lg:h-[2px] lg:w-[20%]'>
<div className='flex items-center pl-2 my-4 md:pl-4  lg:my-0 lg:justify-center'>  
<FaPhone size={25} className="pr-2" />
<p>0314-12212882</p>
</div>
</div>

<div className='lg:h-[2px] lg:w-[60%]'>
<div className='flex items-center pl-2 lg:justify-center md:pl-4'>  
<FaMapMarker size={25} className="pr-2" />
<p className='text-sm'>Office No 144 , Sp Chamber Near Habib Bank , Karachi pakistan</p>
</div>
</div>

    </div>
    {/* invoice section 6 ends here */}

    </div>
  )
}

export default Invoice
