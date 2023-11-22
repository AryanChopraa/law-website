import React from 'react';

const Header = () => {
  return (
    <div className='font-mono'>
      <section className="bg-[#012C45]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Turn Your Judiciary Dream Into Reality
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Revolutionize Your Prelims + Mains + Interview
            Preparation in an Integrated Manner.</p>
          
            <p className="inline-block p-2 border-2 border-white rounded-lg shadow-md bg-white text-black font-extrabold mb-5">
              <span className="font-extrabold">#1</span> Most Downloaded Judicial Services App
            </p>
            <div className='flex flex-row gap-4'>
            <a href="#" className="inline-flex border border-gray-300 rounded-lg ">
              <img
                  className=""
                  width="123"
                  height="48"
                  src="https://edzorblaw.com/wp-content/uploads/2023/07/Asset-9.png"
                  alt=""
                  decoding="async"
                  fetchpriority="high"
                
                />
              </a>
              <a href="#" className="inline-flex border border-gray-300 rounded-lg ">
              <img
                  className=""
                  width="123"
                  height="48"
                  src="https://edzorblaw.com/wp-content/uploads/2023/07/Asset-8.png"
                  alt=""edzorblaw
                  decoding="async"
                  fetchpriority="high"
                
                />
              </a>
            </div>
      
            
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
              className="w-full h-auto"
              src="https://edzorblaw.com/wp-content/uploads/2023/09/Asset-8-1.png"
              alt=""
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <p className="text-lg leading-relaxed bg-black text-center py-2 text-white">
        Why{' '}
        <span className="underline">
          <a href="https://play.google.com/store/apps/details?id=com.edzorblaw" className="text-white">
            Edzorb Law App
          </a>
        </span>{' '}
        is ❤ by Over 10,000+ Users.
        <img
          className="inline-block mt-[-5px]"
          decoding="async"
          src="https://edzorblaw.com/wp-content/uploads/2023/03/new-star2.png"
          width="100px"
          alt=""
        />
        <a href="https://edzorblaw.com/testimonials/" className="text-white underline">
          Read Reviews
        </a>
      </p>
    </div>
  );
};


export default Header;
