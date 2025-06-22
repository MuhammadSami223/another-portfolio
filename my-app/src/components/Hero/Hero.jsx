import React from 'react'
import Bg from '../../assets/bg.png'
import Boy from '../../assets/boy.jpeg'
const Hero = () => {
  return (
    <div>
        <section className="bg-[var(--bg-color)] py-20 px-6 sm:px-10">
           
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content (Text) */}
     
        <div className="w-full md:w-1/2 space-y-6">
         <h2 className="text-2xl sm:text-4xl leading-0.5 text-[var(--primary-color)]   font-bold" style={{ fontFamily: 'var(--heading-font)' }}>
            Web Developer
          </h2>
          <h1 className="text-4xl md:text-7xl lg:text-8xl leading-[100%] text-white   font-extrabold" style={{ fontFamily: 'var(--heading-font)' }}>
            Muahmmad Sami
          </h1>
          <p className="text-lg text-gray-400">
            I'm freelance frontend developer based in Pakistan, and I'm very passionate and dedicated to my work.
          </p>
          <button className="bg-[var(--primary-color)] hover:bg-blue-700 text-white px-13 py-3 font-bold rounded-4xl text-lg transition duration-300">
          View Portfolio
          </button>
        </div>

        {/* Right Content (Image) */}
        <div className=" w-full md:w-1/2 bg-cover mx-auto overflow-hidden bg">
          <img
            src={Boy}
            alt="Hero"
            className="sm:w-[500px] sm:h-[700px] w-[400px] h-[340px] max-h-[500px]  object-cover rounded-[240px] shadow-xl border-2 text-center justify-center items-center" s  style={{ borderColor: 'var(--primary-color)' }}
          />
        </div>

      </div>
        <div className='absolute top-0 left-0 z[-1]'>
          <img src={Bg} alt="" />
        </div>
    </section>

    </div>
  )
}

export default Hero