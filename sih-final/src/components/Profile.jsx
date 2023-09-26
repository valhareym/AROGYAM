import React from 'react'

const Profile = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='flex flex-col items-start justify-center mt-12 w-full lg:w-1/2 px-4 lg:px-0'>
      <h1 className='text-xl lg:text-2xl font-bold '>Your Profile</h1>
        <table className='mt-6 text-md lg:text-lg w-full'>
          <tr className=''>
            <td className='p-1 font-semibold'>Name:</td>
            <td className='px-8'><input type='text' value='Abhyudyay Singh Taragi' className='w-full border border-solid border-gray-400 p-1 px-2 rounded-sm' /></td>
          </tr>
          <tr className=''>
            <td className='py-3 p-1 font-semibold'>Phone:</td>
            <td className='px-8'><input type='tel' value='9856705620' className='w-full border border-solid border-gray-400 p-1 px-2 rounded-sm' /></td>
          </tr>
          <tr>
            <td className='py-3 p-1 font-semibold'>Email:</td>
            <td className='px-8'><input type='email' value='taragi_abhyudyay@gmail.com' className='w-full border border-solid border-gray-400 p-1 px-2 rounded-sm' /></td>
          </tr>
          <tr>
            <td className='py-3 p-1 font-semibold'>Age:</td>
            <td className='px-8'><input type='number' value='20' className='w-full border border-solid border-gray-400 p-1 px-2 rounded-sm' /></td>
          </tr>
          <tr>
            <td className='py-3 p-1 font-semibold'>Height:</td>
            <td className='px-8'><input type='text' value='183cm' className='w-full border border-solid border-gray-400 p-1 px-2 rounded-sm' /></td>
          </tr>
          <tr>
            <td className='py-3 p-1 font-semibold'>Weight:</td>
            <td className='px-8'><input type='text' value='65kg' className='w-full border border-solid border-gray-400 p-1 px-2 rounded-sm' /></td>
          </tr>
          <tr>
            <td className='py-3 p-1 font-semibold'>Blood Group:</td>
            <td className='px-8'><input type='text' value='A+' className='w-full border border-solid border-gray-400 p-1 px-2 rounded-sm' /></td>
          </tr>
          
        </table>
        <button className='mt-5 border border-solid border-black w-full py-2 bg-black text-white hover:bg-white hover:text-black transition-all cursor-pointer rounded-sm'>Save and Update</button>
    
    </div>
    </div>
  )
}

export default Profile
