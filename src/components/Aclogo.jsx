import React from 'react';
import Image from 'next/image';

export default function Aclogo() {
  return (
    <div className="flex flex-col   items-center p-4 sm:p-6 bg-white w-full sm:max-w-[600px] h-auto sm:h-[250px] justify-center rounded-xl shadow-lg">
      <div>
        <Image 
          src="/revlogo.svg" alt="thumb"  width={175} height={125}  className="w-[120px] sm:w-[175px] h-auto"
        />
      </div>
    </div>
  );
}
