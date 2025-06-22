import React from "react";

const Portfoliotext = () => {
  return (
    <div>
<section className="min-h-[60vh] md:min-h-[40vh] lg:min-h-[80vh]  flex items-center justify-center bg-[#060606] px-6 py-10 md:py-0 pb-30 ">
      <div className="max-w-7xl text-center space-y-1 md:space-y-4 text-white font-semibold leading-tight font-[Rajdhani]">
        <p className="text-3xl md:text-5xl text-gray-400  lg:text-5xl ">
          A personal <span className="text-yellow-600">portfolio</span> is a collection of your  work, showcasing 
        </p>
        <p className="text-3xl md:text-4xl text-gray-400 lg:text-5xl ">
          your growth, experience, and the journey as a 
        </p>
        <p className="text-3xl md:text-4xl">
          <span className="text-yellow-600"> frontend developer</span>
        </p>
        <p className="text-3xl md:text-4xl text-gray-400 lg:text-5xl">
          It highlights your  <span className="text-yellow-500">achivements,</span>technical skills, and 
        </p>
        <p className="text-3xl md:text-4xl font-bold lg:text-5xl">
          passion for <span className="text-yellow-500">web design</span> and development 
        </p>
      </div>
    </section>
  
    </div>
  );
};

export default Portfoliotext;
