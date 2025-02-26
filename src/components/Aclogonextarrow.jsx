"use client"
import React, { useState } from "react";
import Image from "next/image";
import { MoveRight, MoveLeft } from 'lucide-react';

export default function AcolyteCarousel() {
  // Define your slides content
  const slides = [
    {
      image: "/revlogo.svg",
      title: "Revolutionizing Medical Education with AI",
      altText: "Acolyte Logo"
    },
   
  ];

 
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white w-full max-w-xl h-64 justify-center rounded-2xl shadow-xl relative m-9">
     
      <button 
        onClick={prevSlide}
        className="absolute left-4 bottom-0 transform -translate-y-1/2 text-purple-800 hover:text-indigo-800 transition-colors"
        aria-label="Previous slide"
      >
        <MoveLeft size={24} />
      </button>

     
      <div className="transition-opacity duration-500 flex flex-col items-center">
        <div>
          <Image 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].altText} 
            width={100} 
            height={100} 
          />
        </div>

        <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-center">
          {slides[currentSlide].title}
        </h2>
      </div>

    
      <button 
        onClick={nextSlide}
        className="absolute right-4 bottom-0 transform -translate-y-1/2 text-purple-800 hover:text-indigo-800 transition-colors flex items-center gap-2 cursor-pointer"
        aria-label="Next slide"
      >
        <span>Next</span> <MoveRight size={20} />
      </button>

     
      <div className="absolute bottom-[-20px] flex gap-2">
        {slides.map((e, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-purple-800" : "bg-gray-400"
            } transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}