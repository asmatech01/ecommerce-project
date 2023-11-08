import React from 'react'
import '../Return Policy/Returnpolicy.css';
import Returnbanner1 from '../../assets/images/Returnpolicy-banner1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Returnpolicy() {
  return (
    <div>
      
      {/* Return policy section 1 starts here */}
<div>
      <img src={Returnbanner1} alt="My Image" className='w-[100%]'/>
      <p className='w-[70%] text-center mx-auto text-xl md:text-3xl text-[gray] my-10'>If You Are Not 100% Satisfied With Your Purchase, Contact Us, We Will Accept Returns And Exchange The Product.</p>
      </div>
 {/* Return policy section 1 Ends here */}

  {/* Return policy section 2 starts here */}
<div className='my-10 bg-[#F5F5F3] py-10 px-4 md:px-20'>
<h1 className='font-bold md:text-3xl text-2xl '>Return & Exchange Eligibility</h1>
<hr className='p-[1px] bg-[gainsboro] mt-2 mb-8 w-[250px] rounded-full'></hr>
<div>

    <div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Return Within 30 Days From The Date Of Purchase</p>
    </div>

    <div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>In New Condition.</p>
    </div>

    <div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>In Their Original Packaging. Must Be Undamaged.</p>
    </div>

    <div className='flex  my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Must Include All Packing Material, Manuals, And Accessories (IF PROVIDED ANY).</p>
    </div>

    <div className='flex  my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Ship Via Insured Ground Service (TCS, LCS, MNP Or Pakistan Post) With A Tracking Number And Order Id Written On It.</p>
    </div>

    <div className='flex  my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Return Shipping Charges Are The Responsibility Of The Customer. We Are Not Responsible For Lost Or Damaged Packages.</p>
    </div>

</div>
    </div>
 {/* Return policy section 2 Ends here */}

{/* Return policy section 3 starts here */}
<div className='my-10 bg-[#F5F5F3] py-10 px-4 md:px-20'>
<h1 className='font-bold text-xl md:text-3xl text-center'>We Reserve The Right To Refuse Any Return/Exchange If There Are:</h1>
<hr className='p-[1px] bg-[gainsboro] mt-2 mb-16 w-[100px] mx-auto rounded-full'></hr>

<div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Parts Of The Item Are Missing, Including Tags, Manuals, Box Etc. (If Provided).</p>
    </div>

    <div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Any Damage To Product Or Packaging.</p>
    </div>

    <div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Adhering to our return policy's timeframe is vital. Returns requested outside of this period may be refused.</p>
    </div>

    <div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Please get in touch with our customer service before returning any item. Unauthorized returns may not be accepted.</p>
    </div>

    <div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Frequent and unjustified returns may result in us declining further requests. We encourage responsible use of our return policy.</p>
    </div>

    <div className='flex my-4'>
    <FontAwesomeIcon icon={faCheck} className='pt-[2px]'/>
    <p className='pl-4'>Any unauthorized modification to the product may result in refusal. Contact us for guidance on product modifications.</p>
    </div>

    </div>

{/* Return policy section 3 Ends here */}
<div className='my-10 bg-[#F5F5F3] py-10 px-4 md:px-20'>
<h1 className='font-bold text-lg md:text-3xl text-center'>What We Need To Process A Return/Exchange:</h1>
<hr className='p-[2px] bg-[gainsboro] mt-2 mb-16 w-[100px] mx-auto rounded-full'></hr>
<p className='md:text-2xl text-center w-[90%] mx-auto text-lg'>"Proof Of Purchase, Such As A Copy Of The Original Sales Receipt Or Packing Slip Invoice, Is Required For Reimbursement 
Of The Full Purchase Price In All Cases, Refunds Will Be Made In The Form Of The Original Payment"
</p>
</div>
{/* Return policy section 4 Starts here */}


    </div>
  )
}

export default Returnpolicy
