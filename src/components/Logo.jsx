import React from 'react';
import Image from 'next/image'; // ✅ Import Next.js Image

export default function Logo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 relative ">
    <div className=" flex-col   items-center  p-8 flex bg-white w-[600px] h-[250px] justify-center rounded-xl absolute top-10">
   
      <div className='flex flex-wrap  gap-4'>
      <div className=" ">
        <h2 className="font-rubik text-[40px] bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text">
          GET STARTED
        </h2>
        <p className="font-rubik text-[30px] bg-gradient-to-r from-indigo-800 to-green-800 bg-clip-text text-transparent p-1">With Acolyte</p>
      </div>

     
      <div>
        <Image src="/hii.svg" alt="thumb" width={100} height={100} />
      </div>
      </div>
    </div>
    </div>
  );
}
