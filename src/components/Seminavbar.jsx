"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RefreshCcwDot, Menu, X } from "lucide-react";

export default function Seminavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">

      <div className="bg-black p-4 flex items-center justify-between text-white relative w-full">

        <div className="flex-shrink-0">
          <Image src="/revlogo.svg" alt="Rev Logo" width={100} height={40} className="h-auto " />
        </div>

      
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      
        <div
          className={`absolute md:static bg-black md:bg-transparent w-full md:w-auto top-full left-0 p-4 md:p-0 shadow-md md:shadow-none z-50 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:justify-end md:space-x-4 lg:space-x-8`}
        >
        
          <div className="flex items-center gap-2 mb-4 md:mb-0  justify-center">
            <RefreshCcwDot size={18} />
            <span className="font-rubik text-sm ">Sync is on</span>
          </div>

       
          <div className="text-center font-rubik mb-4 md:mb-0">
            <p className="text-base lg:text-lg">Heart Analogy</p>
            <p className="text-xs lg:text-sm text-gray-200">
              Last Update: <span className="text-gray-400">25 August 2024 at 12:15 PM</span>
            </p>
          </div>

         
          <div className="flex items-center gap-2 mb-4 md:mb-0 justify-center">
            <div className="flex -space-x-2 md:-space-x-3">
              {["add", "men1", "women1", "women2", "men2"].map((img, index) => (
                <Image 
                  key={index} 
                  src={`/${img}.svg`} 
                  alt={img} 
                  width={32} 
                  height={32} 
                  className="rounded-full border border-black w-8 h-8 md:w-10 md:h-10" 
                />
              ))}
            </div>
            <p className="text-sm lg:text-base">+2 more</p>
          </div>

          <div className="flex gap-4 lg:gap-6 justify-center">
            {["dropdown", "Frame", "Frame 1", "Frame 2"].map((img, index) => (
              <Image
                key={index}
                src={`/${img}.svg`}
                alt={img}
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
                onClick={() => img === "Frame" && setShowPopup(true)}
              />
            ))}
          </div>
        </div>
      </div>

 
      <div className="flex flex-col md:flex-row flex-grow mt-2 md:mt-10">
      
        <div className="px-4 md:px-6 lg:px-10 flex md:flex-col justify-between md:justify-start">
      
          <div className="flex md:flex-col gap-3 md:gap-10 overflow-x-auto md:overflow-visible py-2 md:py-0 mt-3">
            {["home", "pdf", "Notes", "Acolyte", "frame3", "arrows", "com"].map((img, index) => (
              <div key={index} className="flex-shrink-0">
                <Image 
                  src={`/${img}.svg`} 
                  alt={img} 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 md:w-10 md:h-10" 
                />
              </div>
            ))}
          </div>

         
          <div className="hidden md:flex flex-col gap-8 mt-8">
            <Image src="/component1.svg" alt="Component 1" width={40} height={40} className="w-10 h-10" />
            <p className="text-sm">
              Page: 8/<span className="text-gray-300">125</span>
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/file.svg" alt="File" width={14} height={14} className="w-4 h-4" /> 
              <span>125 Pages</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/Vector.svg" alt="Vector" width={14} height={14} className="w-4 h-4" /> 
              <span>125 Annotations</span>
            </div>
          </div>
        </div>

  
        <div className="flex-grow flex justify-center items-start p-2 md:p-4 overflow-auto">
          <div className="max-w-full">
            <Image 
              src="/large.svg" 
              width={850} 
              height={700} 
              alt="Notes" 
              className="w-full h-auto object-contain" 
              priority
            />
          </div>
        </div>
      </div>

     
      {showPopup && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-4 md:p-6">
            <button 
              className="absolute top-2 right-2 text-gray-800 hover:text-red-800 focus:outline-none" 
              onClick={() => setShowPopup(false)}
            >
              <X size={20} />
            </button>

            <div className="flex items-center justify-center py-2">
              <Image 
                src="/notify1.svg" 
                alt="Notification" 
                width={400} 
                height={300} 
                className="w-full h-auto max-h-[60vh]" 
              />
            </div>

            <div className="text-right mt-4">
              <button 
                className="bg-purple-600 text-white px-4 py-2 text-sm md:text-base rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}