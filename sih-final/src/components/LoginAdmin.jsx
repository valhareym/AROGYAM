import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/home');
  }
  return (
    <div className='w-full h-[70vh] justify-center items-center flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Login As Doctor</h1>

      <a href='/' className='border border-solid border-black px-6 py-2 rounded-sm flex items-center gap-2 text-lg mt-4 w-80 justify-center'>SIGN IN WITH <FcGoogle size={20} /></a>
      <h2>or</h2>
      <div className='flex flex-col gap-3 '>
          <input type="email" placeholder='name@gmail.com' className='border border-solid border-black px-5 py-2 w-80 rounded-sm' />
          <input type="password" placeholder='********' className='border border-solid border-black px-5 py-2 w-80 rounded-sm' />
          <button onClick={navigateHome} className='border border-solid border-black px-5 py-2 bg-black text-white hover:bg-white hover:text-black transition-all cursor-pointer w-80 rounded-sm' >Login</button>
      </div>
    </div>
  )
}

export default LoginAdmin
