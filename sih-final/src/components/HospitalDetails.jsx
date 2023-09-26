import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {VscTriangleRight} from 'react-icons/vsc';
import {hospitalsArray} from './hospitals.js';
import { Link } from 'react-router-dom';

const HospitalDetails = () => {
  return (
    <>
    <div className='flex items-center justify-center'>
    <div className='flex flex-col items-start w-full lg:w-2/5 lg:h-[80vh] h-[60vh] gap-2 justify-center mx-10 '>
      <h1 className='font-bold mt-12 lg:mt-0 text-xl lg:text-2xl'>Hospital Name </h1>
      <h1 className='font-semibold text-sm lg:text-md'>Address </h1>
      <div className='flex mt-4 items-center rounded-sm border border-solid border-black w-full px-4  '>
        <i><AiOutlineSearch size={'18'}/></i>
        <input type="text" placeholder='Search for Doctors' className='w-full py-2 px-4 border-none outline-none'/>
      </div>

      <div className='border border-solid border-black w-full mt-5 h-[50vh] overflow-auto rounded-sm px-4 py-2'>
        {hospitalsArray.map(function(data) {
      return (
        <>
        
        <Link to={'/book-appointment'}>
        <div className='text-xs lg:text-base cursor-pointer px-4 py-1 border-gray-700 flex items-center w-full lg:w-4/5 justify-between my-2 hover:bg-gray-200 rounded-sm'>
          <h1>{data.doctors.doctorName}</h1>
          <h1>{data.doctors.doctorSpeciality}</h1>
          <VscTriangleRight size={'18'}/>
        </div>
        </Link>
        <hr/>
        </>
      )
    })}
        
      </div>
    </div>
    </div>
    </>
  )
}

export default HospitalDetails
