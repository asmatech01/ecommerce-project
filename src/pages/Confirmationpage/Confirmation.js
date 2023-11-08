// import React from 'react'
// import myImage from '../../assets/images/confirmation-img.jpg'; 
// import { Link } from 'react-router-dom';


// function Confirmation() {
//   return (
//     <div className='flex px-2 flex-col justify-center gap-5 py-5 lg:flex-row'>
      

// <div className='w-[100%] my-auto text-center lg:w-[50%]'>
//     <h1 className='font-bold text-xl pb-8 sm:text-4xl'>Thanks For Your Purchase !</h1>
//     <p className='lg:w-[70%] mx-auto text-lg'>You will receive an order Confirmation message with Details of your order .</p>


// <div className='md:flex items-center justify-center mx-auto mt-8 gap-x-2.5'>
//     <Link to="/shop" className='bg-[black] rounded-lg'><p className='ease-in-out duration-300 hover:border hover:border-[black] border hover:text-[black]  hover:bg-[white] bg-[black] w-[200px] mx-auto text-[white] py-2 rounded-lg'>Continue Shopping</p></Link>
//     <button className='bg-[black] rounded-lg'><p className='ease-in-out duration-300 hover:border hover:border-[black] border hover:text-[black] hover:bg-[white] bg-[black] w-[200px] mx-auto text-[white] py-2 rounded-lg'>My Invoice</p></button>
//     </div>

// </div>

//       <div className='mx-auto lg:ml-auto xl:mx-auto'>
//       <img src={myImage}/>
//     </div>

//     </div>
//   )
// }

// export default Confirmation




import React from 'react';
import { useSelector } from 'react-redux';
import myImage from '../../assets/images/confirmation-img.jpg';
import { Link } from 'react-router-dom';

function Confirmation() {
  // Access the pdfData from your Redux store
  const pdfData = useSelector((state) => state.rootReducer.order.pdfData);
console.log(pdfData)
  // Function to handle the PDF download
  const handleDownloadInvoice = () => {
    if (pdfData) {
      // Create a Blob from the PDF data
      const blob = new Blob([pdfData], { type: 'application/pdf' });

      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element for downloading the PDF
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invoice.pdf';

      // Trigger a click event on the anchor to start the download
      a.click();

      // Clean up resources
      window.URL.revokeObjectURL(url);
    } else {
      console.log('PDF data is missing.');
    }
  };

  return (
    <div className='flex px-2 flex-col justify-center gap-5 py-5 lg:flex-row'>
      <div className='w-[100%] my-auto text-center lg:w-[50%]'>
        <h1 className='font-bold text-xl pb-8 sm:text-4xl'>Thanks For Your Purchase!</h1>
        <p className='lg:w-[70%] mx-auto text-lg'>You will receive an order Confirmation message with Details of your order.</p>
        <div className='md:flex items-center justify-center mx-auto mt-8 gap-x-2.5'>
          <Link to="/shop" className='bg-[black] rounded-lg'>
            <p className='ease-in-out duration-300 hover:border hover:border-[black] border hover:text-[black] hover:bg-[white] bg-[black] w-[200px] mx-auto text-[white] py-2 rounded-lg'>Continue Shopping</p>
          </Link>
          <button className='bg-[black] rounded-lg' onClick={handleDownloadInvoice}>
            <p className='ease-in-out duration-300 hover:border hover:border-[black] border hover:text-[black] hover:bg-[white] bg-[black] w-[200px] mx-auto text-[white] py-2 rounded-lg'>My Invoice</p>
          </button>
        </div>
      </div>
      <div className='mx-auto lg:ml-auto xl:mx-auto'>
        <img src={myImage} alt="Confirmation Image" />
      </div>
    </div>
  );
}

export default Confirmation;
