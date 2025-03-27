"use client"
import { useState, useEffect } from "react"
import React from 'react'
import "./home.css"
import "../about/about.css"
import "../contact/contact.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

  const [isScrolled, setIsScrolled] = useState(false);

   const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      validationSchema: Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required'),
      }),
      onSubmit: async (values) => {
        console.log('Form Submitted:', values);

        try{
          let response = await axios.post("https://api.miepay.ca/api/store-query" , {...values , first_name: values.name})
          console.log(response)

          if(response.data.statusCode == 200){
                toast.success(response.data.message)
          }


        }
        catch(error){
          toast.error( "Internal server error")
        }
      },
    });

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
      <div className='homepage ' id='home'>

        <div className={`navbar absolute top-0 w-full  flex lg:flex-row justify-between px-5 lg:px-16  items-center transition-colors duration-300  py-3 lg:py-6`} >
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



        <div className="herosection flex flex-col items-center ">
          <img src="/assets/logocenter4.png" alt="Logo" className='logo-center' />
          <h1 className='font-bold xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white  mt-4'>Refer.Earn.Repeat</h1>
        </div>

      </div>


      <div className='aboutpage relative ' id='about'>

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
          <div className='flex flex-wrap  gap-4 items-center justify-center mt-6'>
            <p className='text-lg download '>DOWNLOAD NOW</p>
            <a href="https://apps.apple.com/ca/app/mie-pay/id6742891477" target="blank"><img src="/assets/app-store.png" alt="Logo" className='' /></a>
           <a href="https://play.google.com/store/apps/details?id=com.app.miepay" target="blank"> <img src="/assets/google-pay.png" alt="Logo" className='' /></a>
          </div>
        </div>

      </div>



      <div className='contactpage relative ' id='contact'>

        <div className="contact  flex  flex-col items-center ">
          <div className="contact-sections flex flex-wrap justify-center  xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center gap-20">
            <div className="contact-text flex flex-col gap-3 items-center text-center">
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
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
              <div className="input flex flex-col gap-1">
                <label htmlFor="name" className='text-zinc-400 text-lg font-semibold'>Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={formik.touched.name && formik.errors.name ? 'border-red-500' : 'text-white'}
                />
                {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
              </div>

              <div className="input flex flex-col gap-1">
                <label htmlFor="email" className='text-zinc-400 text-lg font-semibold'>Your email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={formik.touched.email && formik.errors.email ? 'border-red-500' : 'text-white'}
                />
                {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
              </div>

              <div className="input flex flex-col gap-1">
                <label htmlFor="subject" className='text-zinc-400 text-lg font-semibold'>Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className={formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'text-white'}
                />
                {formik.touched.subject && formik.errors.subject ? <div className="text-red-500">{formik.errors.subject}</div> : null}
              </div>

              <div className="input flex flex-col gap-1">
                <label htmlFor="message" className='text-zinc-400 text-lg font-semibold'>Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={formik.touched.message && formik.errors.message ? 'border-red-500' : 'text-white'}
                />
                {formik.touched.message && formik.errors.message ? <div className="text-red-500">{formik.errors.message}</div> : null}
              </div>

              <div className='flex justify-center mt-7'>
                <button type="submit" className="send-button py-3 flex justify-center rounded-lg">
                  <p className='text-lg text-white font-semibold'>Send</p>
                </button>
              </div>
            </form>
          </div>
          </div>

        </div>

      </div>
      <div className="social-media absolute">
        <ul className='social-media-inner flex flex-col gap-1 ms-10'>
          <li>  <img src="/assets/insta.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/tiktok.png" alt="Logo" className='s-img' /></li>
          <li>  <img src="/assets/youtube.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/threads.png" alt="Logo" className='s-img' /></li>
          <li>  <img src="/assets/facebook.png" alt="Logo" className='s-img' /></li>
          <li> <img src="/assets/linkedin.png" alt="Logo" className='s-img' /></li>
        </ul>
      </div>

      <ToastContainer/>

    </div>


  )
}

export default Home
