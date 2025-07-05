// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--bg-color)]  text-white sticky top-0 z-50 ">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xl font-bold"
        style={{ fontFamily: "var(--heading-font)" }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div  data-aos='zoom-in-right' className="Name flex-shrink-0 text-3xl font-bold text-[var(--primary-color)]">
            Sami
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" data-aos="zoom-out" className="hover:text-[#FDC448] transition">
              Home
            </a>
            <a href="#aboutcontainer" data-aos="zoom-out" className="hover:text-[#FDC448] transition">
              About
            </a>
            <a href="#services" data-aos="zoom-out" className="hover:text-[#FDC448] transition">
              Services
            </a>
            <a href="#contact" data-aos="zoom-out" className="hover:text-[#FDC448] transition">
              Contact
            </a>
       
     <a href="https://www.linkedin.com/in/muhammad-sami-b0814027a/"target='_blank'>
                <p className="text-[#FDC448] text-3xl  transition">
                  <ion-icon name="logo-linkedin" ></ion-icon>
                  </p>
            </a>
   <a href="https://github.com/MuhammadSami223"target='_blank'>
                <p className="text-[#FDC448] text-3xl  transition">
                  <ion-icon name="logo-Github" ></ion-icon>
                  </p>
            </a>            

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link to="#" className="block hover:text-blue-400">
              Home
            </Link>
            <Link to="#" className="block hover:text-blue-400">
              About
            </Link>
            <Link to="#" className="block hover:text-blue-400">
              Services
            </Link>
            <Link to="#" className="block hover:text-blue-400">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
