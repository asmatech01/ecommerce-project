import React from 'react'
import '../Security/Security.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle , faShieldAlt , faUndo} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Security() {
  return (
    <div className="mx-4 md:mx-8 lg:mx-20 my-10">
      
      <div className='flex'>
  <h1 className='text-[red]'>Home <span className='px-2 text-[black]'>-</span></h1>
  <p>Purchase Protection</p>
</div>

{/* Security section 1 starts here */}

<div className='Security-sec1-main'>
<div className='w-[100%] px-4 md:w-[60%] md:pl-10'>
    <h1 className='text-3xl lg:text-6xl S-h1'>Safe and Secure Shopping</h1>
    <p className='pt-4 drop-shadow-xl text-lg S-h1'>
"Enjoy peace of mind with our comprehensive purchase protection, ensuring your online shopping experience is safe and secure."</p>
    </div>
</div>

{/* Security section 1 Ends here */}

{/* Security section 2 starts here */}
<div className='md:flex gap-x-1.5 item-center mt-16 '>

<div className='w-[100%] md:w-[33.33%] bg-[#F5F5F3] px-2 lg:px-8 py-8 rounded-[5px]'>
<FontAwesomeIcon icon={faCheckCircle} className='text-5xl pb-4'></FontAwesomeIcon>
    <h1 className='font-bold pb-4 lg:text-2xl text-xl'>Genuine Products</h1>
    <p>We have made it to our mission to offer only genuine products in the original packaging on Happy Shoppy. We work hard to provide you with the largest selection of authentic and brand new product at the highest quality</p>
</div>

<div className='w-[100%] md:w-[33.33%] md:mt-0 mt-4 bg-[white] border border-1 border-black shadow offset-x-2 offset-y-2 blur-1 text-black px-2 lg:px-8 py-8 rounded-[5px]'>
<FontAwesomeIcon icon={faShieldAlt} className='text-5xl pb-4'/>
    <h1 className='font-bold pb-4 text-lg lg:text-2xl'>Safe & Secure Payments</h1>
    <p>Whether you pay on delivery or conveniently with one of our digital payment methods, your privacy is important to us and we keep your data secure.</p>
</div>

<div className='md:w-[33.33%] w-[100%] md:mt-0 mt-4 bg-[#F5F5F3] px-2 lg:px-8 py-8 rounded-[5px]'>
<FontAwesomeIcon icon={faUndo} className='text-5xl pb-4'/>
    <h1 className='font-bold pb-4 text-lg lg:text-2xl'>Free & Easy Returns</h1>
    <p>Returns are easy and free of charges. For further information on the detailed term, aswell as on how to return your product, please visit our <span className='font-bold underline'><Link to="/Returnpolicy">Return & Refunds Page</Link></span></p>
</div>

</div>
{/* Security section 2 Ends here */}

{/* Security section 3 Starts here */}

<div className='Security-sec3-main rounded-md'>
<div>
    <h1 className='shadow-text w-[100%] md:w-[80%] mx-auto text-xl md:text-4xl pb-4 font-bold text-[white]'>PURCHASE PROTECTION IS OUR BIGGEST COMMITMENT</h1>
    <p className='shadow-text md:text-xl text-md text-[white] w-[100%] md:w-[60%] mx-auto'>At Happy Shoppy, we take pride in ensuring our customer's privacy and safeguard them
against low quality products and sellers</p>
</div>
</div>



































































































































































































































































































    </div>
  )
}

export default Security
