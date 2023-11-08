import React from 'react'
import '../About/About.css';
import Aboutusimg1 from '../../assets/images/Aboutus-img1.jpg'
import Aboutusimg2 from '../../assets/images/Aboutus-img2.jpg'
import Aboutusimg3 from '../../assets/images/Aboutus-img3.jpg'
import Aboutusimg4 from '../../assets/images/Aboutus-img4.jpg'
import Aboutusimg5 from '../../assets/images/Aboutus-img5.jpg'
import Aboutusimg6 from '../../assets/images/Aboutus-img6.jpg'
import Aboutusimg7 from '../../assets/images/Aboutus-img7.jpg'

function About() {
  return (

    <div className='my-8 mx-4 lg:mx-20'>
     
<div className='flex'>
  <h1 className='text-[red]'>Home <span className='px-2 text-[black]'>-</span></h1>
  <p>About Us</p>
</div>
<hr className='h-[2px] mb-10 bg-black w-[150px]'></hr>

{/* About section 1 starts here */}
<div className='About-sec1-main'>
 <div className='w-[50%]'>
<h1 className='lg:text-5xl text-end  lg:leading-[50px]'>Happy Shoppy is Your Ultimate Shopping Destination & Community</h1>
</div>
</div> 
{/* About section 1 Ends here */}

{/* About section 2 starts here */}
<div className='my-10 bg-[#F5F5F3] py-6 text-center'>
  <h1 className='font-bold text-2xl'>Who we are</h1>
<p className='py-4 px-4 md:w-[60%] m-auto'>Happy Shoppy is your trusted online marketplace, offering a diverse range of quality products, unbeatable prices, and exceptional customer service. Join us in creating shopping joy!</p>
<p className='py-4 px-4 md:w-[60%] m-auto'>Discover a diverse range of products, from fashion to electronics. Our inventory is updated constantly to meet your evolving needs.</p>
<p className='py-4 px-4 md:w-[60%] m-auto'>We prioritize transparency, security, and top-notch customer service. Shop with confidence, knowing you're backed by a customer-centric approach.</p>
<p className='py-4 px-4 md:w-[60%] m-auto'>Happy Shoppy is not just a marketplace; it's a community. Join us for an exciting journey where happiness meets shopping.</p>
</div>
{/* About section 2 Ends here */}

{/* About section 3 Starts here */}
<div>

<div className='md:flex my-4'>
<img src={Aboutusimg1} alt="My Image" className='w-[100%] md:w-[50%] mr-4'/>
<div className='bg-[#F5F5F3] md:w-[50%] mt-4 md:mt-0 md:ml-4 py-10 px-10 flex items-center'>
  <div>
  <h1 className='font-bold text-3xl'>Our Mission</h1>
  <p className='py-8'>"At Happy Shoppy, we're dedicated to spreading joy through simplified e-commerce, making shopping an effortless and delightful experience for everyone."</p>
  <p className='py-8'>"We empower suppliers to access a global audience and help buyers discover products and suppliers swiftly, fostering seamless e-commerce connections."</p>
</div>
</div>
</div>

<div className='md:flex my-4 jusify-center'>
<div className='bg-[#F5F5F3] w-[100%] md:w-[50%] ml-0 py-10 px-10 flex items-center'>
  <div>
  <h1 className='font-bold text-3xl'>Anytime, Anywhere</h1>
  <p className='py-8'>"As a platform, we continue to develop services to help businesses do more and discover new opportunities."</p>
  <p className='py-8'>"At Happy Shoppy, we empower you to discover, shop, and connect effortlessly, making global e-commerce accessible in a way that suits you."</p>
</div>
</div>
<img src={Aboutusimg2} alt="My Image" className='w-[100%] mt-4 md:mt-0 md:w-[47%] ml-auto'/>
</div>

  </div>
{/* About section 3 Ends here */}

{/* About section 4 Starts here */}
<div className='md:flex justify-between mt-12 items-center'>

<div className='mt-4 md:mt-0'>
<div className='mx-auto w-[150px]'>
<img src={Aboutusimg3} alt="My Image"/>
</div>
<div className='justify-center mt-auto'>
<p className='text-center font-bold pt-4'>Fast Delivery</p>
</div>  
</div>

<div className='mt-4 md:mt-0'>
<div className='mx-auto w-[120px]'>
<img src={Aboutusimg4} alt="My Image"/>
</div>
<p className='text-center  font-bold'>100% Protected</p>
</div>

<div className='mt-4 md:mt-0'>
<div className='mx-auto w-[130px]'>
<img src={Aboutusimg5} alt="My Image"/>
</div>
<p className='text-center pt-4 font-bold'>Ease & Speed</p>
</div>

<div className='mt-4 md:mt-0'>
<div className='mx-auto w-[120px]'>
<img src={Aboutusimg6} alt="My Image"/>
</div>
<p className='text-center  font-bold'>Best Prices</p>
</div>

<div className='mt-4 md:mt-0'>
<div className='mx-auto w-[120px]'>
<img src={Aboutusimg7} alt="My Image"/>
</div>
<div className='flex justify-center items-center'>
<p className='text-center font-bold'>Biggest Variety</p>
</div>
</div>

</div>
{/* About section 4 Ends here */}

{/* About section 5 Starts here */}
<div className='About-sec5-main my-16'>
  <div className='md:w-[60%]'>
  <h1 className='text-2xl md:text-5xl'>We strive diligently to reduce errors to a minimum!</h1>
  <p className='md:text-xl pt-4'>When errors occur, we ensure they are corrected to 100% accuracy!</p>
  </div>
</div>
{/* About section 5 Ends here */}
    </div>
  )
}
export default About
