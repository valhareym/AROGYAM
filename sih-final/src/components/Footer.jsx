import React from 'react'

const Footer = () => {
  return (
    <div className='w-full absolute bottom-0 px-8 gap-5 lg:gap-0 lg:px-0 lg:h-20 h-24 bg-blue-300 flex items-center justify-around'>
      {/* <h1 className="font-bold text-lg lg:text-xl">AROGYAM</h1> */}
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-6 text-xs lg:text-sm' >
        <a className='hover:underline' href='/'>Privacy Policy</a>
        <a className='hover:underline' href='/'>About Us</a>
        <a className='hover:underline' href='/'>Support</a>
      </div>
      <div className='text-sm lg:text-base'>
        Developed By : Valhalla
      </div>
    </div>
  )
}

export default Footer
