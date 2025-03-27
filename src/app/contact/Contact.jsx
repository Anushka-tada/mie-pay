"use client"

import React from 'react'
import "./contact.css"
import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
    },
  });

  return (
    <div className='homepage relative'>

      {/* <div className="navbar flex  lg:flex-row justify-between px-4 lg:px-16 py-4 lg:py-7 items-center">
        <img src="/assets/logomain.png" alt="Logo" />
        <button
          className="lg:hidden block text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >☰</button>
        <ul
          className={`flex flex-col lg:flex-row gap-4 lg:gap-16 items-center ${isMenuOpen ? "block " : "hidden lg:flex"
            }`}
        >
          <a href="/homepage"> <li className="text-white text-lg uppercase">Home</li></a>
          <a href="/about">   <li className="text-white text-lg uppercase">About</li></a>
          <a href="/contact"><li className="text-white text-lg uppercase">Contact</li></a>
        </ul>
      </div> */}


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
                  className={formik.touched.name && formik.errors.name ? 'border-red-500' : ''}
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
                  className={formik.touched.email && formik.errors.email ? 'border-red-500' : ''}
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
                  className={formik.touched.subject && formik.errors.subject ? 'border-red-500' : ''}
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
                  className={formik.touched.message && formik.errors.message ? 'border-red-500' : ''}
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

      {/* <div className="social-media absolute">
        <ul className='flex flex-col gap-1 ms-10'>
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

export default Contact
