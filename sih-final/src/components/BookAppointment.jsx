import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const doctor = location.state?.doctor;

  if (!doctor) {
    return <div>Error: No doctor selected!</div>;
  }

  const navigateToBooked = () => {
    navigate('/booked');
  };

  return (
    <div className='flex justify-center items-center h-[60vh]'>
      <div className="flex flex-col justify-center mx-20 gap-5">
        <h1 className='text-2xl font-semibold'>Book Your Appointment</h1>
        <div className='flex flex-col gap- '>
          <h2 className=''>{doctor.Name}</h2>
          <h2 className=''>{doctor.Hospital}</h2>
          <h2 className=''>Time: {doctor.Timings}</h2>
          <h2 className='text-red-700 font-semibold'>Amount: ₹{doctor.Amount}</h2>
        </div>
        <button onClick={navigateToBooked} className="border border-solid border-gray-700 bg-gray-200 px-4 py-1 w-max rounded-sm hover:bg-gray-100">Confirm and Pay</button>
      </div>
    </div>
  );
};

export default BookAppointment;
