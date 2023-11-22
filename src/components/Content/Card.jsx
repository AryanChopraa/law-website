import React from 'react';
import Carousel from './Carousel';


const Card = () => {
  return (
  
      <div className="flex-1 min-h-full min-w-full rounded-3xl shadow-2xl bg-white  p-10 lg:p-10 text-gray-800 relative md:flex items-center justify-between text-center md:text-left">
          <div className="w-full md:w-1/2 text-center">
         <Carousel/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-10 lg:mb-20">
            <svg
              id="logoipsum"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="15 30 147.778 40"
              className="w-48"
            >
              {/* ... (SVG path data) */}
            </svg>
          </div>
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font font-semibold text-3xl lg:text-3xl text-black mb-10">
            Prelims QBank with Explanations in Visual Learning Format

            </h1>
            <p>The page you're looking for isn't available.</p>
            <p>Try searching again or use the Go Back button below.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600">
              <i className="mdi mdi-arrow-left mr-2"></i>Go Back
            </button>
          </div>
        </div>
      
      </div>
 
  );
};

export default Card;
