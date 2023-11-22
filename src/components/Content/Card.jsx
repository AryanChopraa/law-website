import React from 'react';
import Carousel from './Carousel';

const Card = () => {
  return (
    <div className="flex-1 min-h-full min-w-full rounded-[3rem] shadow-2xl bg-white text-gray-800 relative md:flex items-center justify-around py-12">
      <div className="w-full md:w-1/2">
        <Carousel />
      </div>
      <div className="w-full md:w-1/2">
        <div className="mb-10 md:mb-20 text-gray-600 font-light">
          <h1 className="font-semibold text-3xl lg:text-3xl text-black mb-10">
            Prelims QBank with Explanations in Visual Learning Format
          </h1>
          <ul className="list-disc pl-4 space-y-2">
            <li>High Yield Prelims Questions with Mains Explanations</li>
            <li>Visual Learning Format, Stories, Animations</li>
            <li>Precise, Qualitative & Effective with Proven Track Record Across Multiple Prelims Exams of Different States</li>
            <li>Extensive Subject Wise Coverage of Questions</li>
            <li>Goldmine for Your Success in Judiciary Exams</li>
          </ul>
          <button
            className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-white bg-[#01324E] px-6 py-4 rounded-2xl mt-10"
            aria-label="Download Free"
          >
            Download Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
