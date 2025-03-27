"use client"

import React from 'react'
import "./about.css"
import { useState } from "react";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='homepage relative'>

      {/* <div className="navbar flex  lg:flex-row justify-between px-6 lg:px-16 py-4 lg:py-7 items-center">
        <img src="/assets/logomain.png" alt="Logo" />
        <button
          className="lg:hidden block text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul
          className={`flex flex-col lg:flex-row gap-4 lg:gap-16 items-center ${isMenuOpen ? "block" : "hidden lg:flex"
            }`}
        >
          <a href="/homepage"> <li className="text-white text-lg uppercase">Home</li></a>
          <a href="/about">   <li className="text-white text-lg uppercase">About</li></a>
          <a href="/contact"><li className="text-white text-lg uppercase">Contact</li></a>
        </ul>
      </div> */}


      <div className="herosection flex flex-col items-center relative">
        <div className="images flex gap-4 justify-center  ">
          <img src="/assets/left.png" alt="Logo" className='mt-10 left-img' />
          <img src="/assets/center.png" alt="Logo" className=' center-img' />
          <img src="/assets/right.png" alt="Logo" className='mt-10 right-img' />
        </div>
        <img src="/assets/miePay.png" alt="Logo" className='absolute miepay' />
        <p className='text-zinc-400 text-lg xl:px-80 lg:px-72 md:px-40 sm:px-20 px-7 text-center '>Your secure digital wallet designed for seamless payments. We simplify transactions with transparent
          tracking and zero hidden fees. Soon expanding to multiple services, Mie Pay makes managing
          your money effortless and worry-free.
        </p>
        <div className='flex flex-wrap  gap-4 items-center justify-center mt-9 mb-9'>
          <p className='text-lg download '>DOWNLOAD NOW</p>
          <img src="/assets/app-store.png" alt="Logo" className='' />
          <img src="/assets/google-pay.png" alt="Logo" className='' />
        </div>
      </div>

      {/* <div className="social-media absolute ">
        <ul className='flex flex-col gap-1 ms-10 '>

          <li>  <img src="/assets/insta.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/tiktok.png" alt="Logo" className='s-img' /></li>
          <li>  <img src="/assets/youtube.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/threads.png" alt="Logo" className='s-img' /></li>
          <li>  <img src="/assets/facebook.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/linkedin.png" alt="Logo" className='s-img' /></li>

        </ul>
      </div> */}

    </div>
  )
}

export default About
