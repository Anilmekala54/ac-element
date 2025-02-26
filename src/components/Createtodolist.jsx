"use client"
import React, { useState } from 'react';
import { MoveLeft, MoveRight, PlusCircle, Check, CheckSquare } from 'lucide-react';
import Image from 'next/image';

export default function TaskManagerCarousel() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [email, setEmail] = useState('');
  
  
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };
  
 
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  
  // Functions to navigate slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };


  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        
        return (
          <>
            <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-2xl">
              Create To-Do list with your friends
            </h2>
            <p className='text-gray-400 mb-4'>Enter the task and tag your friends to help you finish them</p>
            
            <div className="flex items-center w-full max-w-md mb-6">
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
                <PlusCircle size={20} />
                <span className="ml-1">Add</span>
              </button>
            </div>
          </>
        );
        
      case 1:
       
        return (
          <>
            <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-2xl">
              Your To-Do List
            </h2>
            
            <div className="w-full max-w-md mb-4 max-h-48 overflow-y-auto">
              {tasks.length === 0 ? (
                <p className="text-gray-400 text-center py-4">No tasks added yet</p>
              ) : (
                <ul className="space-y-2">
                  {tasks.map((task, index) => (
                    <li key={index} className="flex items-center p-2 border border-gray-200 rounded-md">
                      <button 
                        onClick={() => toggleTask(index)}
                        className={`mr-2 p-1 rounded-full border ${task.completed ? 'bg-green-100 border-green-500' : 'border-gray-300'}`}
                      >
                        {task.completed && <Check size={16} className="text-green-500" />}
                      </button>
                      <span className={`flex-grow ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                        {task.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        );
        
      case 2:
      
        return (
          <>
            <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-2xl">
              Student Progress Tracker
            </h2>
            <div className="space-y-3 mb-4">
              {[
                "Total Hours spent",
                "Average hours spent on a single subject",
                "Friends You've collaborated with",
                "Total number of notes taken down",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4">
                  <input type='checkbox' className="text-purple-800 flex-shrink-0" />
                  <p className="text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </>
        );
        
      case 3:
    
        return (
          <>
            <h2 className="bg-gradient-to-r from-indigo-800 to-purple-800 text-transparent bg-clip-text py-3 text-2xl">
              Collaborative study
            </h2>
            <p className='text-gray-400 mb-4'>Collaborate with friends, create a virtual study group</p>
            
            <div className="flex flex-col items-center w-full">
              <h3 className="text-purple-800 text-lg mb-2">Invite Friends</h3>
              
              <div className="flex items-center border border-dashed border-gray-400 rounded-md p-2 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-grow outline-none px-2"
                />
              </div>
              
              <p className="text-gray-500 text-sm mt-2 self-end">1/3</p>
            </div>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white w-full max-w-xl h-96 justify-center rounded-2xl shadow-xl relative mt-10">
      <div className="mb-2">
   
        <div className="w-24 h-24 flex items-center justify-center">
          <img 
            src="/revlogo.svg  " 
            alt="Acolyte Logo" 
            className="w-[100px] h-[100px]"
           
          />
        </div>
      </div>
      
   
      <div className="flex flex-col items-center w-full">
        {renderSlideContent()}
      </div>
      
     
      <div className="flex justify-between w-full mt-auto px-4">
        <button 
          onClick={prevSlide}
          className="text-purple-800 cursor-pointer flex items-center gap-1"
        >
          <MoveLeft size={20} /> <span>Prev</span>
        </button>
        
        <button 
          onClick={nextSlide}
          className="text-purple-800 cursor-pointer flex items-center gap-1"
        >
          <span>{currentSlide === 3 ? "Finish" : "Next"}</span> <MoveRight size={20} />
        </button>
      </div>
      

      <div className="absolute bottom-[-30px] flex gap-2">
        {[0, 1, 2, 3].map((index) => (
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