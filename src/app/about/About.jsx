"use client"

import React from 'react'
import "./about.css"
import  { useState } from "react";

const About = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='homepage'>
      
      <div className="navbar flex  lg:flex-row justify-between px-6 lg:px-16 py-4 lg:py-7 items-center">
  <img src="/assets/logomain.png" alt="Logo"  />
  <button
    className="lg:hidden block text-white text-3xl"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    ☰
  </button>
  <ul
    className={`flex flex-col lg:flex-row gap-4 lg:gap-16 items-center ${
      isMenuOpen ? "block" : "hidden lg:flex"
    }`}
  >
<a href="/homepage"> <li className="text-white text-lg uppercase">Home</li></a>
 <a href="/about">   <li className="text-white text-lg uppercase">About</li></a>
    <li className="text-white text-lg uppercase">Contact</li>
  </ul>
</div>
  

     <div className="herosection flex flex-col items-center ">
    <div className="images flex gap-4 justify-center relative ">
    <img src="/assets/left.png" alt="Logo" className='mt-10' />
     <img src="/assets/center.png" alt="Logo" className='' />
     <img src="/assets/right.png" alt="Logo" className='mt-10' />
    </div>
    <img src="/assets/miePay.png" alt="Logo" className='absolute miepay' />
    <p className='text-zinc-400 text-lg xl:px-80 lg:px-72 md:px-40 sm:px-20 px-7 text-center '>Your secure digital wallet designed for seamless payments. We simplify transactions with transparent
         tracking and zero hidden fees. Soon expanding to multiple services, Mie Pay makes managing
        your money effortless and worry-free.
    </p>
    <p className='text-lg download mt-5'>DOWNLOAD NOW</p>
     </div>

     <div className="social-media">
        <ul className='flex flex-col gap-1 ms-16'>

            <li>  <img src="/assets/insta.png" alt="Logo" className='s-img' /></li>
            <li> <img src="/assets/tiktok.png" alt="Logo" className='s-img' /></li>
            <li>  <img src="/assets/youtube.png" alt="Logo"  className='s-img'/></li>
            <li> <img src="/assets/threads.png" alt="Logo" className='s-img' /></li>
            <li>  <img src="/assets/facebook.png" alt="Logo"className='s-img' /></li>
            <li> <img src="/assets/linkedin.png" alt="Logo"className='s-img' /></li>

        </ul>
     </div>

    </div>
  )
}

export default About
