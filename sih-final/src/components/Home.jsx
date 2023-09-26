import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {hospitalsArray} from './hospitals.js';
import { Link, useNavigate } from 'react-router-dom';
import {BsChatRightTextFill} from 'react-icons/bs';

const Home = () => {

  const navigate = useNavigate();
  const navigateToChat = () => {
    navigate('/chat');
  };
  return (

    <>
    <div className='flex items-center justify-center'>
    <div className='flex flex-col items-start w-full lg:w-2/5 lg:h-[80vh] h-[60vh] gap-2 justify-center mx-10 '>
      <h1 className='font-bold mt-12 lg:mt-0 text-xl lg:text-2xl'>Hello User</h1>
      <div className='flex items-center rounded-sm border border-solid border-black w-full px-4  '>
        <i><AiOutlineSearch size={'18'}/></i>
        <input type="text" placeholder='Search for Hospitals' className='w-full py-2 px-4 border-none outline-none'/>
      </div>
      
      <div className='border border-solid border-gray-700 bg-gray-200 rounded-sm px-5 py-1 mt-1 text-xs'>
        Search for Hospitals to Book an Appointment
      </div>

      <div className='border border-solid border-black w-full mt-5 h-[50vh] overflow-auto rounded-sm px-4 py-2'>
      {hospitalsArray.map(function(data) {
      return (
        <>
        <Link to={'/hospital/'+data.id}>
        <div className='text-xs lg:text-base cursor-pointer px-4 py-1 border-gray-700 flex items-center w-full lg:w-4/5 justify-between my-2 hover:bg-gray-200 rounded-sm'>
          <h1>{data.name}</h1>
          <h1>{data.address}</h1>
        </div>
        </Link>
        <hr/>
        </>
      )
    })}
        
        
      </div>
      <button onClick={navigateToChat} className='border border-gray-700 bg-gray-200 text-black p-4 rounded-full fixed bottom-28  text-2xl right-8 lg:right-28 hover:bg-gray-100 shadow-md'><BsChatRightTextFill/></button>
    </div>
    </div>
    </>
  )
}

export default Home
