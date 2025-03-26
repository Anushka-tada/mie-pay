"use client"
import { useState, useEffect } from "react"
import React from 'react'
import "./home.css"
import "../about/about.css"
import "../contact/contact.css"


const Home = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("home"); // Default is "home"

  const handleClick = (link) => {
    setActiveLink(link); // Update the active link state
  };

  return (
    <div className='relative'>
      <div className='homepage pb-24 ' id='home'>

        <div className={`navbar fixed top-0 left-0 w-full z-50 flex lg:flex-row justify-between px-5 lg:px-16  items-center transition-colors duration-300 ${isScrolled ? "bg-gray py-0 lg:py-0" : "bg-transparent py-3 lg:py-6"}`} >
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
            <a href="#home" onClick={() => handleClick("home")}>
              <li
                className={`text-white text-lg uppercase ${activeLink === "home" ? "clicked" : ""
                  }`}
              >
                Home
              </li>
            </a>
            <a href="#about" onClick={() => handleClick("about")}>
              <li
                className={`text-white text-lg uppercase ${activeLink === "about" ? "clicked" : ""
                  }`}
              >
                About
              </li>
            </a>
            <a href="#contact" onClick={() => handleClick("contact")}>
              <li
                className={`text-white text-lg uppercase ${activeLink === "contact" ? "clicked" : ""
                  }`}
              >
                Contact
              </li>
            </a>
          </ul>
        </div>



        <div className="herosection flex flex-col items-center pt-56 ">
          <img src="/assets/logocenter4.png" alt="Logo" className='logo-center' />
          <h1 className='font-bold xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white  mt-4'>Refer.Earn.Repeat</h1>
        </div>

        {/* <div className="social-media absolute">
        <ul className='flex flex-col gap-1 ms-10'>
            <li>  <img src="/assets/insta.png" alt="Logo" className='s-img' /></li>
            <li> <img src="/assets/tiktok.png" alt="Logo" className='s-img' /></li>
            <li>  <img src="/assets/youtube.png" alt="Logo"  className='s-img'/></li>
            <li> <img src="/assets/threads.png" alt="Logo" className='s-img' /></li>
            <li>  <img src="/assets/facebook.png" alt="Logo"className='s-img' /></li>
            <li> <img src="/assets/linkedin.png" alt="Logo"className='s-img' /></li>
        </ul>
     </div> */}

      </div>


      <div className='homepage relative py-16' id='about'>

        <div className="herosection flex flex-col items-center relative">
          <div className="images flex gap-4 justify-center  ">
            <img src="/assets/left.png" alt="Logo" className='mt-10 left-img' />
            <img src="/assets/center.png" alt="Logo" className=' center-img' />
            <img src="/assets/right.png" alt="Logo" className='mt-10 right-img' />
          </div>
          <img src="/assets/miePay.png" alt="Logo" className='absolute miepay' />
          <p className='text-zinc-400 text-lg xl:px-80 lg:px-72 md:px-40 sm:px-20 px-7 text-center mt-6'>Your secure digital wallet designed for seamless payments. We simplify transactions with transparent
            tracking and zero hidden fees. Soon expanding to multiple services, Mie Pay makes managing
            your money effortless and worry-free.
          </p>
          <div className='flex flex-wrap  gap-4 items-center justify-center mt-9 mb-9'>
            <p className='text-lg download '>DOWNLOAD NOW</p>
            <img src="/assets/app-store.png" alt="Logo" className='' />
            <img src="/assets/google-pay.png" alt="Logo" className='' />
          </div>
        </div>

      </div>



      <div className='homepage relative pb-72 pt-14' id='contact'>

        <div className="contact flex  flex-col items-center  pt-10 px-3">
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

      </div>
      <div className="social-media absolute">
        <ul className='flex flex-col gap-1 ms-10'>
          <li>  <img src="/assets/insta.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/tiktok.png" alt="Logo" className='s-img' /></li>
          <li>  <img src="/assets/youtube.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/threads.png" alt="Logo" className='s-img' /></li>
          <li>  <img src="/assets/facebook.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/linkedin.png" alt="Logo" className='s-img' /></li>
        </ul>
      </div>

    </div>


  )
}

export default Home
