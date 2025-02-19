import React, { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";

export default function Carrousel({projects} ) {

    let state = useOutletContext()

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Object.values(projects).length;
    const sliderRef = useRef(null);
  
    // Function to move to a specific slide
    const goToSlide = (index) => {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      setCurrentSlide(index);
    };
  
    // Auto-adjust slide position when currentSlide changes
    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    }, [currentSlide]);
  


//listens to state aka route changes
    useEffect(() => {
        goToSlide(0);
    }, [state]);
  



    return (
        <div className="relative w-full max-h-[1000px] p-10 mx-auto overflow-hidden">
          
          {/* Carousel Container */}
          <div className="overflow-hidden w-full">
            <div ref={sliderRef} className="flex transition-transform duration-500 ease-in-out">
           
         
                {Object.values(projects).map((project, index) => (
                
                <div key={index} className="min-w-full flex justify-center items-center">
                
                
                {/* Image */}
                    <img src={project.src} alt={`Slide ${index}`} className="max-h-[600px] object-cover rounded-lg mx-auto" />


                    {/* Caption */}
                    <div className="bodyCLI absolute bottom-0 w-full px-4 py-1 text-center bg-opacity-50 text-white">
                    {project.description}
                    </div>
                </div>

                ))}
         
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="cursor-pointer absolute left-10 top-1/2 -translate-y-1/2  text-white h-[40px] w-[40px] rounded-full text-center"
          >
            <svg class="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4"/>
            </svg>


          </button>
    
          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="cursor-pointer absolute right-20 top-1/2 -translate-y-1/2 text-white h-[40px] w-[40px] rounded-full text-center"
          >
            <svg class="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
            </svg>

          </button>
    
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Object.entries(projects).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-neutral-100" : "bg-neutral-700"
                }`}
              />
            ))}
          </div>
        </div>
      );
}


