"use client"

import React from 'react'
import "./home.css"
import  { useState } from "react";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='homepage relative'>
      
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
   <a href="/contact"><li className="text-white text-lg uppercase">Contact</li></a>
  </ul>
</div>


     <div className="herosection flex flex-col items-center mt-20">
     <img src="/assets/logocenter4.png" alt="Logo" className='logo-center' />
     <h1 className='font-bold xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white  mt-4'>Refer.Earn.Repeat</h1>
     </div>

     <div className="social-media absolute">
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

export default Home
