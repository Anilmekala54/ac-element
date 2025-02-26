import React from 'react';
import Image from 'next/image';

export default function Revolution() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 bg-white w-full sm:max-w-[600px] h-auto justify-center rounded-xl shadow-lg text-center">
      <div>
        <Image src="/revlogo.svg" alt="thumb" width={175} height={125}  className="mx-auto sm:ml-[50px]" />
        <p className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-[16px] sm:text-[18px]">
          Revolutionizing Medical Education with AI
        </p>
      </div>
    </div>
  );
}
