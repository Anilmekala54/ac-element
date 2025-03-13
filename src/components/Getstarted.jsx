"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight, PlusCircle, Check } from "lucide-react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");

      const todoListSlideIndex = slides.findIndex((slide) => slide.id === 7);
      setCurrentIndex(todoListSlideIndex);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const slides = [
    {
      id: 1,
      component: (
        <div className="flex flex-col items-center p-4 sm:p-8 bg-white w-full sm:max-w-[600px] h-[300px] sm:h-[500px] justify-center rounded-xl relative">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              <h2 className="font-rubik text-[24px] xs:text-[28px] sm:text-[40px] bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text">
                GET STARTED
              </h2>
              <p className="font-rubik text-[18px] xs:text-[22px] sm:text-[30px] bg-gradient-to-r from-indigo-800 to-green-800 bg-clip-text text-transparent p-1">
                With Acolyte
              </p>
            </div>
            <div>
              <Image src="/hii.svg" alt="thumb" width={100} height={100} className="w-[60px] xs:w-[80px] sm:w-[100px] h-auto" priority />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      component: (
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white w-full sm:max-w-[600px] h-[300px] justify-center rounded-xl relative">
          <div>
            <Image src="/revlogo.svg" alt="thumb" width={175} height={125} className="w-[120px] sm:w-[175px] h-auto" priority />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      component: (
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white w-full max-w-xl h-[300px] sm:h-[400px] justify-center rounded-2xl relative mx-2 sm:m-9 gap-4 sm:gap-8">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={175} height={120} className="w-[120px] sm:w-[175px] h-auto" priority />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-2 sm:py-3 text-center text-lg sm:text-xl md:text-2xl px-2">
            Revolutionizing Medical Education with AI
          </h2>
        </div>
      ),
    },
    {
      id: 4,
      component: (
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white w-full max-w-xl h-[300px] sm:h-[400px] justify-center rounded-2xl relative mx-2 sm:m-9 gap-4 sm:gap-8">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={175} height={120} className="w-[120px] sm:w-[175px] h-auto" priority />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-2 sm:py-3 text-center text-lg sm:text-xl md:text-2xl px-2">
            Revolutionizing Medical Education with AI
          </h2>
        </div>
      ),
    },
    {
      id: 5,
      component: (
        <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-xl h-[300px] sm:h-[350px] justify-center rounded-2xl relative">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={120} height={89} className="w-[80px] sm:w-[120px] h-auto" priority />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-2 sm:py-3 text-xl sm:text-[32px] text-center px-2">
            Collaborative study
          </h2>
          <p className="text-gray-400 text-base sm:text-[22px] text-center px-2">
            Collaborate with friends, create a virtual study group
          </p>
          <div className="flex flex-col items-center mt-3 sm:mt-6 w-full px-2">
            <h2 className="text-purple-800 text-sm sm:text-[17px] font-Rubik">Invite Friends</h2>
            <div className="flex items-center border border-dashed border-gray-400 rounded-md p-2 w-full sm:w-80 mt-2 max-w-[95%]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow outline-none px-2 text-sm sm:text-base w-full"
              />
            </div>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 self-end">1/3</p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      component: (
        <div className="flex flex-col items-center p-4 w-full max-w-xl h-[300px] sm:h-[400px] justify-center rounded-2xl relative">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={100} height={100} className="w-[60px] sm:w-[100px] h-auto" priority />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-2 sm:py-3 text-xl sm:text-2xl text-center">
            Student Progress Tracker
          </h2>
          <div className="space-y-2 sm:space-y-3 px-2">
            {[
              "Total Hours spent",
              "Average hours spent on a single subject",
              "Friends You've collaborated with",
              "Total number of notes taken down",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-4">
                <input type="checkbox" className="accent-green-600 flex-shrink-0" />
                <p className="text-gray-400 text-sm sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 7,
      component: (
        <div className="flex flex-col items-center p-4 sm:p-6 w-[85%] sm:w-[75%] max-w-xl h-[300px] sm:h-[400px] justify-center rounded-2xl relative mb-6 sm:mb-10">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={100} height={100} className="w-[60px] sm:w-[100px] h-auto" priority />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-2 sm:py-3 text-xl sm:text-2xl">
            To-Do List
          </h2>
          <div className="w-full max-w-md mb-3 sm:mb-4 max-h-32 sm:max-h-48 overflow-y-auto">
            {tasks.length === 0 ? (
              <p className="text-gray-400 text-center py-2 sm:py-4 text-sm sm:text-base">No tasks added yet</p>
            ) : (
              <ul className="space-y-1 sm:space-y-2">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex items-center p-1 sm:p-2 border border-gray-200 rounded-md"
                  >
                    <button
                      onClick={() => toggleTask(index)}
                      className={`mr-2 p-1 rounded-full border ${
                        task.completed ? "bg-green-100 border-green-500" : "border-gray-300"
                      }`}
                    >
                      {task.completed && <Check size={14} className="text-green-500" />}
                    </button>
                    <span
                      className={`flex-grow text-sm sm:text-base ${
                        task.completed ? "line-through text-gray-400" : "text-gray-700"
                      }`}
                    >
                      {task.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center w-full max-w-md mb-4 sm:mb-8">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task..."
              className="flex-grow p-1 sm:p-2 border border-gray-300 rounded-l-md outline-none text-sm sm:text-base"
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
            />
            <button
              onClick={addTask}
              className="bg-purple-800 text-white p-1 sm:p-2 rounded-r-md flex items-center"
            >
              <PlusCircle size={16} className="sm:hidden" />
              <PlusCircle size={20} className="hidden sm:block" />
              <span className="ml-1 text-sm sm:text-base">Add</span>
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative flex flex-col items-center p-2 sm:p-4 md:p-6 bg-white w-[95%] sm:w-full sm:max-w-[800px] h-[400px] sm:h-[350px] md:h-[400px]  justify-center rounded-xl overflow-hidden">
        {slides[currentIndex].component}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex justify-between p-2 sm:p-4">
          <button
            onClick={prevSlide}
            className="text-purple-800 hover:text-indigo-800 transition-colors flex items-center gap-1 rounded-full px-2 sm:px-3 py-1 text-sm sm:text-base"
          >
            <MoveLeft size={16} className="sm:hidden" />
            <MoveLeft size={20} className="hidden sm:block" />
            <span className=" ">Prev</span>
          </button>
          <button
            onClick={nextSlide}
            className="text-purple-800 hover:text-indigo-800 transition-colors flex items-center gap-1 rounded-full px-2 sm:px-3 py-1 text-sm sm:text-base"
          >
            <span className="">Next</span>
            <MoveRight size={16} className="sm:hidden" />
            <MoveRight size={20} className="hidden sm:block" />
          </button>
        </div>
        <div className="absolute bottom-0 flex gap-1 sm:gap-2 pb-2 sm:pb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-indigo-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}