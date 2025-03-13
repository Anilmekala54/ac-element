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
        <div className="flex flex-col items-center p-4 sm:p-8 bg-white w-full sm:max-w-[600px] h-[300px] justify-center rounded-xl relative">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              <h2 className="font-rubik text-[32px] sm:text-[40px] bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text">
                GET STARTED
              </h2>
              <p className="font-rubik text-[24px] sm:text-[30px] bg-gradient-to-r from-indigo-800 to-green-800 bg-clip-text text-transparent p-1">
                With Acolyte
              </p>
            </div>
            <div>
              <Image src="/hii.svg" alt="thumb" width={100} height={100} className="w-[80px] sm:w-[100px] h-auto" />
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
            <Image src="/revlogo.svg" alt="thumb" width={175} height={125} className="w-[120px] sm:w-[175px] h-auto" />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      component: (
        <div className="flex flex-col items-center p-6 bg-white w-full max-w-xl h-[400px] justify-center rounded-2xl relative m-9">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={100} height={100} />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-center">
            Revolutionizing Medical Education with AI
          </h2>
        </div>
      ),
    },
    {
      id: 4,
      component: (
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white w-full sm:max-w-[600px] h-[350px] justify-center rounded-xl text-center">
          <div>
            <Image src="/revlogo.svg" alt="thumb" width={175} height={125} className="mx-auto sm:ml-[50px]" />
            <p className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-[16px] sm:text-[18px]">
              Revolutionizing Medical Education with AI
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      component: (
        <div className="flex flex-col items-center p-6 w-full max-w-xl h-[350px] justify-center rounded-2xl relative ">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={100} height={100} />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3">
            Revolutionizing Medical Education with AI
          </h2>
          <p className="text-gray-400">
            Learn and grow with AI-powered education.
          </p>
          <div className="flex flex-col items-center mt-6">
            <h2 className="text-purple-800 text-lg">Invite Friends</h2>
            <div className="flex items-center border border-dashed border-gray-400 rounded-md p-2 w-80 mt-2 max-w-[98%]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow outline-none px-2"
              />
            </div>
            <p className="text-gray-500 text-sm mt-2 self-end">1/3</p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      component: (
        <div className="flex flex-col items-center p-6  w-full max-w-xl h-[400px] justify-center rounded-2xl relative ">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={100} height={100} />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-2xl">
            Student Progress Tracker
          </h2>
          <div className="space-y-3">
            {[
              "Total Hours spent",
              "Average hours spent on a single subject",
              "Friends You've collaborated with",
              "Total number of notes taken down",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-4">
                <input type="checkbox" className="accent-green-600 flex-shrink-0" />
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 7,
      component: (
        <div className="flex flex-col items-center p-6 w-[75%] max-w-xl h-[400px] justify-center rounded-2xl relative mb-10">
          <div>
            <Image src="/revlogo.svg" alt="Acolyte Logo" width={100} height={100} />
          </div>
          <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-2xl">
            To-Do List
          </h2>
          <div className="w-full max-w-md mb-4 max-h-48 overflow-y-auto">
            {tasks.length === 0 ? (
              <p className="text-gray-400 text-center py-4">No tasks added yet</p>
            ) : (
              <ul className="space-y-2">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 border border-gray-200 rounded-md"
                  >
                    <button
                      onClick={() => toggleTask(index)}
                      className={`mr-2 p-1 rounded-full border ${
                        task.completed ? "bg-green-100 border-green-500" : "border-gray-300"
                      }`}
                    >
                      {task.completed && <Check size={16} className="text-green-500" />}
                    </button>
                    <span
                      className={`flex-grow ${
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
          <div className="flex items-center w-full max-w-md mb-8">
          <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task..."
                className="flex-grow p-2 border border-gray-300 rounded-l-md outline-none"
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
              />
            <button
              onClick={addTask}
              className="bg-purple-800 text-white p-2 rounded-r-md flex items-center"
            >
              <PlusCircle size={20}  />
              <span className="ml-1">Add</span>
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative flex flex-col items-center p-4 sm:p-6 bg-white w-full sm:max-w-[600px] h-[300px] justify-center rounded-xl">
        {slides[currentIndex].component}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between p-4">
          <button
            onClick={prevSlide}
            className="text-purple-800 hover:text-indigo-800 transition-colors flex items-center gap-1 rounded-full px-3 py-1"
          >
            <MoveLeft size={20} /> <span>Prev</span>
          </button>
          <button
            onClick={nextSlide}
            className="text-purple-800 hover:text-indigo-800 transition-colors flex items-center gap-1 rounded-full px-3 py-1"
          >
            <span>Next</span> <MoveRight size={20} />
          </button>
        </div>
        <div className="absolute bottom-1 flex gap-2 pb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-indigo-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}