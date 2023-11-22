import React, { useState } from 'react';

const images = [
  'https://edzorblaw.com/wp-content/uploads/2023/11/landscape-scroll-kickout-2.jpg',
  'https://edzorblaw.com/wp-content/uploads/2023/11/landscape-scroll-dekstop.jpg',
  'https://edzorblaw.com/wp-content/uploads/2023/11/landscape-scroll-kickout-2.jpg',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative w-72 h-96 mx-auto overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out transform translate-x[-100%]"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0${index === currentImage ? ' active' : ''}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 transition-opacity duration-500 ease-in-out">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full bg-gray-500 cursor-pointer transition-opacity ease-in-out${
              index === currentImage ? ' bg-gray-800 opacity-100' : ' opacity-50 hover:opacity-75'
            }`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
