"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RefreshCcwDot, Menu, X } from "lucide-react";

export default function Seminavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>

      <div className="bg-black p-4 flex items-center justify-between text-white relative">
  
        <div>
          <Image src="/revlogo.svg" alt="Rev Logo" width={100} height={100} className="max-w-full h-auto" />
        </div>

       
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

  
        <div
          className={`absolute lg:static bg-black lg:bg-transparent w-full lg:w-auto top-[60px] left-0 p-4 lg:p-0 transition-all ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-10`}
        >
          <div className="flex items-center gap-2">
            <RefreshCcwDot />
            <span className="font-rubik">Sync is on</span>
          </div>

          <div className="text-center font-rubik">
            <p className="text-lg">Heart Analogy</p>
            <p className="text-sm text-gray-200">
              Last Update: <span className="text-gray-400">25 August 2024 at 12:15 PM</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-3 gap-2">
              {["add", "men1", "women1", "women2", "men2"].map((img, index) => (
                <Image key={index} src={`/${img}.svg`} alt={img} width={40} height={40} className="max-w-full h-auto" />
              ))}
            </div>
            <p className="text-lg">+2 more</p>
          </div>

          <div className="flex gap-6">
            {["dropdown", "Frame", "Frame 1", "Frame 2"].map((img, index) => (
              <Image
                key={index}
                src={`/${img}.svg`}
                alt={img}
                width={40}
                height={40}
                className="max-w-full h-auto cursor-pointer"
                onClick={() => img === "Frame" && setShowPopup(true)}
              />
            ))}
          </div>
        </div>
      </div>

   
      <div className="flex flex-col lg:flex-row gap-10 mt-5">
        <div className="mx-10">
          <div className="flex flex-col gap-6">
            {["home", "pdf", "Notes", "Acolyte", "frame3", "arrows", "com"].map((img, index) => (
              <Image key={index} src={`/${img}.svg`} alt={img} width={50} height={48} className="max-w-full h-auto" />
            ))}
          </div>

          <div className="flex flex-col gap-6 mt-10">
            <Image src="/component1.svg" alt="Component 1" width={50} height={48} className="max-w-full h-auto" />
            <p>
              Page: 8/<span className="text-gray-300">125</span>
            </p>
            <div className="flex gap-2">
              <Image src="/file.svg" alt="File" width={16} height={16} className="max-w-full h-auto" /> <span>125 Pages</span>
            </div>
            <div className="flex gap-2">
              <Image src="/Vector.svg" alt="Vector" width={16} height={16} className="max-w-full h-auto" /> 125 Annotations
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Image src="/large.svg" width={850} height={700} alt="Notes" className="max-w-full h-auto" />
        </div>
      </div>

  
      {showPopup && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center">
          <div className="p-4 rounded-lg shadow-lg w-[90%] md:w-[500px] relative bg-white px-10 py-4">
            <button className="absolute top-2 right-2 text-gray-800 hover:text-red-800" onClick={() => setShowPopup(false)}>
              ✖
            </button>

            <div className="flex items-center justify-center">
              <Image src="/notify1.svg" alt="User Avatar" width={800} height={600} className="max-w-full h-auto rounded-full" />
            </div>

            <div className="text-right mt-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700" onClick={() => setShowPopup(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
