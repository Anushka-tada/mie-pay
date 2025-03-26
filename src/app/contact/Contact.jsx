"use client"

import React from 'react'
import "./contact.css"
import  { useState } from "react";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
     <div className='homepage relative'>
       
       <div className="navbar flex  lg:flex-row justify-between px-4 lg:px-16 py-4 lg:py-7 items-center">
   <img src="/assets/logomain.png" alt="Logo"  />
   <button
     className="lg:hidden block text-white text-3xl"
     onClick={() => setIsMenuOpen(!isMenuOpen)}
   >☰</button>
   <ul
     className={`flex flex-col lg:flex-row gap-4 lg:gap-16 items-center ${
       isMenuOpen ? "block " : "hidden lg:flex"
     }`}
   >
    <a href="/homepage"> <li className="text-white text-lg uppercase">Home</li></a>
    <a href="/about">   <li className="text-white text-lg uppercase">About</li></a>
     <a href="/contact"><li className="text-white text-lg uppercase">Contact</li></a>
   </ul>
 </div>
 
 
      <div className="contact flex  flex-col items-center  mt-10 px-3">
       <div className="contact-sections flex flex-wrap justify-center  xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center gap-20">
            <div className="contact-text flex flex-col gap-4 items-center text-center">
            <img src="/assets/contact.png" alt="Logo" />
                <h3 className='text-xl text-white font-semibold'>Have any questions about Mie Pay?</h3>
                <p className='text-zinc-400 text-2xl'>Our dedicated team is ready to assist you anytime! Reach us at.</p>
               <div>
               <h3 className='text-2xl text-white font-bold'>Email</h3>
               <p className='text-2xl text-white '>info@miepay.ca</p>
               </div>
                <div>
                <h3 className='text-2xl text-white font-bold'>Call</h3>
                <p className='text-2xl text-white '>+1 (416)827-0039</p>
                </div>
                <p className='text-zinc-400 text-2xl'>for instant support with your digital wallet needs.</p>
           

            </div>
            <div className="contact-form p-12 rounded-4xl flex flex-col justify-center">
           <div className='flex justify-center'>
           <img src="/assets/contact-us.png" alt="Logo" className='mb-8 contact-us' />
           </div>
            <form action="" className='flex flex-col gap-4'>
                <div className="input flex flex-col gap-1">
                <label htmlFor="" className='text-zinc-400 text-lg font-semibold'>Your name</label>
                <input type="text" />
                </div>
                <div className="input flex flex-col gap-1">
                     <label htmlFor="" className='text-zinc-400 text-lg font-semibold'>Your email</label>
                     <input type="text" />
                </div>
                <div className="input flex flex-col gap-1">
                    <label htmlFor="" className='text-zinc-400 text-lg font-semibold'>Subject</label>
                    <input type="text" />
                </div>
                <div className="input flex flex-col gap-1">
                    <label htmlFor="" className='text-zinc-400 text-lg font-semibold'>Message</label>
                    <input type="text" />
                </div>

              <div className='flex justify-center mt-7'> 
              <div className="send-button py-3 flex justify-center rounded-lg">
                    <p className='text-lg text-white font-semibold'>Send</p>
                </div>
              </div>
            </form>
            </div>
       </div>
      
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

export default Contact
