import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {
    const navigate = useNavigate();
    const navigateToBooked = () => {
        navigate('/booked')
    }
  return (
    <div className='flex justify-center items-center h-[60vh]'>
    <div className="flex flex-col justify-center mx-20 gap-5">
       <h1 className='text-2xl font-semibold'>Book Your Appointment</h1>
       <div className='flex flex-col gap- '>
            <h2 className=''>Dr. Sharma</h2>
            <h2 className=''>Xyz Hospital, Delhi</h2>
            <h2 className=''>Time: 10AM</h2>
            <h2 className='text-red-700 font-semibold'>Amount: ₹320</h2>
       </div>
       <button onClick={navigateToBooked} className="border border-solid border-gray-700 bg-gray-200 px-4 py-1 w-max rounded-sm hover:bg-gray-100">Confirm and Pay</button>
    </div>
    </div>
  )
}

export default BookAppointment
