import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Booked = () => {
  return (
    <div className='px-4 lg:px-0 w-full flex flex-col items-center justify-center h-[65vh]'>
      <h1 className='text-6xl lg:text-6xl text-blue-800'><BsFillPatchCheckFill/></h1>
      <h1 className='text-lg lg:text-2xl font-bold mt-3 '>Appointment Booked Successfully</h1>
      <h1 className='lg:text-md text-sm tracking-wide'>The invoice has been sent to your email</h1>
      <Link to={'/home'}>
      <button className='text-sm px-4 py-1 border border-gray-700 border-solid bg-gray-200 hover:bg-gray-100 mt-5 rounded-sm'>Return to Home Page</button>
      </Link>
      </div>
  )
}
 
export default Booked
