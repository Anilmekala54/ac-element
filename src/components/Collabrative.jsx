"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { MoveRight, MoveLeft } from 'lucide-react';

export default function CollaborativeCarousel() {
  // Define all slides for the carousel
  const slides = [
    // {
    //   id: 1,
    //   image: "/revlogo.svg",
    //   title: "Welcome to Acolyte",
    //   description: "AI-powered medical education platform",
    //   altText: "Acolyte Logo"
    // },
    {
      id: 2,
      image: "/revlogo.svg",
      title: "Collaborative study",
      description: "Collaborate with friends, create a virtual study group",
      inputField: true,
      altText: "Acolyte Logo"
    },
    {
      id: 3,
      image: "/revlogo.svg",
      title: "Ready to get started",
      description: "Your personalized learning journey begins now",
      altText: "Acolyte Logo"
    }
  ];

  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(1); // Start with collaborative slide
  const [email, setEmail] = useState('');

  // Functions to navigate slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white w-full max-w-xl h-96 justify-center rounded-2xl shadow-xl relative mt-10">
      <div>
        <Image src={slides[currentSlide].image} alt={slides[currentSlide].altText} width={100} height={100} />
      </div>

      <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3">
        {slides[currentSlide].title}
      </h2>
      
      <p className='text-gray-400'>
        {slides[currentSlide].description}
      </p>

     
      {slides[currentSlide].inputField && (
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-purple-800 text-lg">Invite Friends</h2>
          
          <div className="flex items-center border border-dashed border-gray-400 rounded-md p-2 w-80 mt-2  max-w-[98%]">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className="flex-grow outline-none px-2 :"
            />
          </div>
          
          <p className="text-gray-500 text-sm mt-2 self-end">1/3</p>
        </div>
      )}

      
      <div className='flex justify-between w-full mt-8 px-4'>
        <button 
          onClick={prevSlide}
          className="text-purple-800 cursor-pointer flex items-center gap-1"
          aria-label="Previous slide"
        >
          <MoveLeft size={20} /> <span>Prev</span>
        </button>
        
        <button 
          onClick={nextSlide}
          className="text-purple-800 cursor-pointer flex items-center gap-1"
          aria-label="Next slide"
        >
          <span>{currentSlide === slides.length - 1 ? "Finish" : "Skip"}</span> <MoveRight size={20} />
        </button>
      </div>

     
      <div className="absolute bottom-[-30px] flex gap-2">
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