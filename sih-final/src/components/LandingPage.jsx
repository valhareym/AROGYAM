import React from 'react';
import img1 from '../assets/images/landingPageImg1.png';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='w-full h-[70vh] lg:h-[90vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-36 mt-16 lg:mt-[-40px]'>
      <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col items-start justify-center gap-2'>
        <h1 className='text-4xl lg:text-6xl font-bold tracking-wide'>Connect Patient And Healthcare Seamlessly</h1>
        <h3 className='text-lg lg:text-xl mt-5'>Login as</h3>
        <div className='flex gap-5'>
          <Link to={'/login-user'} className='font-semibold text-md lg:text-xl p-2 px-5 border border-solid border-black rounded-md hover:bg-black hover:text-white transition-all'>Patient</Link>
          <Link to={'/login-admin'} className='font-semibold text-md lg:text-xl p-2 px-5 border border-solid border-black rounded-md hover:bg-black hover:text-white transition-all '>Doctor</Link>
        </div>
      </div>
      
      
      <motion.div className='h-[80vh] lg:h-[65vh]' 
      animate={{
        translateY: "40px",

      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      >
        <img src={img1} alt='img' className='w-60 lg:w-96' />
      </motion.div>
      
    </div>
  )
}

export default LandingPage
