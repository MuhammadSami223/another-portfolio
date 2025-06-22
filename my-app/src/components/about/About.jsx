import React from "react";

const About = () => {
  return (
    <div>
      <section className="py-20 px-6 sm:px-10 bg-[#060606] text-white">
        <div className="container w-full h-full mx-w-7xl flex flex-col  md:flex-row items-center justify-center gap-10 font-[Rajdhani]">
          {/* // left content // */}
          <div className="about-left w-full md:w-1/2 space-y-6 top-20 md:top-0">
            <div className="relative w-full flex justify-center items-center">
              {/* Glow Effect */}
              <div className="absolute -top-20 md:left-30 w-82 h-82 bg-yellow-500 rounded-full blur-2xl opacity-70 z-0"></div>

              {/* Foreground Content */}
              <div className="relative z-10 bg-black  text-white p-8 rounded-2xl -top-30 md:left-30 text-center">
                <h2 className="text-5xl font-bold text-[var(--primary-color)] ">02+</h2>
                <p className="text-3xl font-semibold">Years of Learning <br />Experience</p>
              </div>
              <div className="2-card">
              <div className="relative z-10 bg-black text-white p-8 rounded-2xl top-20 text-center">
                <h2 className="text-5xl font-bold">20+</h2>
                <p className="text-xl font-semibold">Project Completed</p>
              </div>
              </div>
            </div>
          </div>
          {/* // right content // */}
          <div className="about-right w-full md:w-1/2">
            <h2 className="text-xl text-[var(--primary-color)] font-bold">
              ABOUT ME
            </h2>
            <div className="para flex flex-col gap-5 text-lg text-[#9F9F9F] mt-5">
              <p className="font-semibold">
                Hi there! I'm Muhammad Sami, a passionate frontend developer
                dedicated to crafting captivating digital experiences. With a
                keen eye for design and a love for clean, efficient code, I
                specialize in bringing beautiful interfaces to life.
              </p>
              <p className="font-semibold">
                My journey in web development began with a curiosity for
                creating visually stunning websites that not only look great but
                also deliver seamless user experiences. Over the years, I've
                honed my skills in HTML, CSS,JavaScript and React to build
                responsive, dynamic web applications that engage and delight
                users.
              </p>
            </div>
            <div className="about-btn flex gap-5 mt-5">
              <button className="bg-[var(--primary-color)] hover:bg-transparent hover:border-2 cursor-pointer text-white px-10 md:px-10 lg:px-12 py-3 font-bold rounded-4xl lg:text-lg md:text-balance transition duration-300">
                Contact Me
              </button>
              <button className="bg-transparent border-2 hover:bg-[var(--primary-color)] cursor-pointer text-white px-10 md:px-10 lg:px-12 py-3 font-bold rounded-4xl lg:text-lg md:text-balance transition duration-300">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
