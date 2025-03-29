// "use client"
// import { useState, useEffect } from "react"
// import React from 'react'
// import "./home.css"
// import "./about.css"
// import "./contact.css"
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Home = () => {

//   const [isScrolled, setIsScrolled] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Name is required'),
//       email: Yup.string().email('Invalid email address').required('Email is required'),
//       subject: Yup.string().required('Subject is required'),
//       message: Yup.string().required('Message is required'),
//     }),
//     onSubmit: async (values) => {
//       console.log('Form Submitted:', values);

//       try {
//         let response = await axios.post("https://api.miepay.ca/api/store-query", { ...values, first_name: values.name })
//         console.log(response)

//         if (response.data.statusCode == 200) {
//           toast.success(response.data.message)
//         }


//       }
//       catch (error) {
//         toast.error("Internal server error")
//       }
//     },
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const [activeLink, setActiveLink] = useState("home"); // Default is "home"

//   const handleClick = (link) => {
//     setActiveLink(link); // Update the active link state
//   };

//   return (
     
//     <div className='relative'>

//       {/* hompage  */}
//       <div className='homepage relative' id='home'>

//         <div className={`navbar absolute top-0 w-full  flex lg:flex-row justify-between px-5 lg:px-16  items-start transition-colors duration-300  pt-7 lg:py-12`} >
//           <img src="/assets/logo.png" alt="Logo" className="nav-logo" />
//           <button
//             className="lg:hidden block text-white text-3xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </button>
//           <ul
//             className={`flex flex-col lg:flex-row gap-4 lg:gap-16 items-center ${isMenuOpen ? "block" : "hidden lg:flex"
//               }`}
//           >
//             <a href="#home" onClick={() => handleClick("home")}>
//               <li
//                 className={`nav-link ${activeLink === "home" ? "clicked" : ""
//                   }`}
//               >
//                 Home
//               </li>
//             </a>
//             <a href="#about" onClick={() => handleClick("about")}>
//               <li
//                 className={` nav-link ${activeLink === "about" ? "clicked" : ""
//                   }`}
//               >
//                 About us
//               </li>
//             </a>
//             <a href="#contact" onClick={() => handleClick("contact")}>
//               <li
//                 className={` nav-link ${activeLink === "contact" ? "clicked" : ""
//                   }`}
//               >
//                 Contact
//               </li>
//             </a>
//           </ul>
//         </div>



//         <div className="herosection flex flex-col items-center ">
//           <img src="/assets/logocenter4.png" alt="Logo" className='logo-center' />
//           <h1 className='refer-earn mt-5'>Refer. Earn. Repeat</h1>
//         </div>

//         <div className="home-social-media absolute">
//           <ul className='social-media-inner flex flex-col gap-4 ms-10'>
//             <li>  <img src="/assets/instagram2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/tik-tok2.png" alt="Logo" className='s-img' /></li>
//             <li>  <img src="/assets/youtube2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/twitter2.png" alt="Logo" className='s-img' /></li>
//             <li>  <img src="/assets/facebook2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/linkedin2.png" alt="Logo" className='s-img' /></li>
//           </ul>
//         </div>

//         <div className="scroll absolute">
//           <p className="scroll-text">Scrool</p>
//           <div className="line"></div>
//         </div>

//       </div>


//       {/* aboutpage */}


//       <div className='aboutpage relative ' id='about'>


//         <div className={`navbar absolute top-0 w-full  flex lg:flex-row justify-between px-5 lg:px-16 px-5 items-start transition-colors duration-300  pt-7 lg:py-12`} >
//           <img src="/assets/logo.png" alt="Logo" className="nav-logo" />
//           <button
//             className="lg:hidden block text-white text-3xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </button>
//           <ul
//             className={`flex flex-col lg:flex-row gap-4 lg:gap-16 items-center ${isMenuOpen ? "block" : "hidden lg:flex"
//               }`}
//           >
//             <a href="#home" onClick={() => handleClick("home")}>
//               <li
//                 className={`nav-link ${activeLink === "home" ? "clicked" : ""
//                   }`}
//               >
//                 Home
//               </li>
//             </a>
//             <a href="#about" onClick={() => handleClick("about")}>
//               <li
//                 className={` nav-link ${activeLink === "about" ? "clicked" : ""
//                   }`}
//               >
//                 About us
//               </li>
//             </a>
//             <a href="#contact" onClick={() => handleClick("contact")}>
//               <li
//                 className={` nav-link ${activeLink === "contact" ? "clicked" : ""
//                   }`}
//               >
//                 Contact
//               </li>
//             </a>
//           </ul>
//         </div>



//         <div className="herosection flex flex-col items-center relative">
//           <div className="images flex gap-4 justify-center items-center ">
//             <img src="/assets/left.png" alt="Logo" className='mt-10 left-img' />
//             <img src="/assets/center.png" alt="Logo" className=' center-img' />
//             <img src="/assets/right.png" alt="Logo" className='mt-10 right-img' />
//           </div>
//           <img src="/assets/miePay.png" alt="Logo" className='absolute miepay mt-8' />
//           <p className='about-text text-center'>Your secure digital wallet designed for seamless payments. We simplify transactions with transparent
//             tracking and zero hidden fees. Soon expanding to multiple services, Mie Pay makes managing
//             your money effortless and worry-free.
//           </p>
//           <div className='flex flex-wrap  gap-4 items-center justify-center  mt-9'>
//             <p className='text-lg download '>DOWNLOAD NOW</p>
//             <a href="https://apps.apple.com/ca/app/mie-pay/id6742891477" target="blank"><img src="/assets/app-store.png" alt="Logo" className='app-store' /></a>
//             <a href="https://play.google.com/store/apps/details?id=com.app.miepay" target="blank"> <img src="/assets/google-pay.png" alt="Logo" className='google-pay' /></a>
//           </div>
//         </div>
            
//         <div className="about-social-media absolute">
//           <ul className='social-media-inner flex flex-col gap-4 ms-10'>
//           <li>  <img src="/assets/instagram2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/tik-tok2.png" alt="Logo" className='s-img' /></li>
//             <li>  <img src="/assets/youtube2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/twitter2.png" alt="Logo" className='s-img' /></li>
//             <li>  <img src="/assets/facebook2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/linkedin2.png" alt="Logo" className='s-img' /></li>
//           </ul>
//         </div>

//         <div className="about-scroll absolute">
//         <div className="line"></div>
//           <p className="scroll-text">Scrool</p>
//           <div className="line"></div>
//         </div>


//       </div>


// {/* contact page */}


//       <div className='contactpage relative ' id='contact'>

//         <div className={`navbar absolute top-0 w-full  flex lg:flex-row justify-between px-5 lg:px-16  items-start transition-colors duration-300  pt-7 lg:py-12`} >
//           <img src="/assets/logo.png" alt="Logo" className="nav-logo" />
//           <button
//             className="lg:hidden block text-white text-3xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </button>
//           <ul
//             className={`flex flex-col lg:flex-row gap-4 lg:gap-16 items-center ${isMenuOpen ? "block" : "hidden lg:flex"
//               }`}
//           >
//             <a href="#home" onClick={() => handleClick("home")}>
//               <li
//                 className={`nav-link ${activeLink === "home" ? "clicked" : ""
//                   }`}
//               >
//                 Home
//               </li>
//             </a>
//             <a href="#about" onClick={() => handleClick("about")}>
//               <li
//                 className={` nav-link ${activeLink === "about" ? "clicked" : ""
//                   }`}
//               >
//                 About us
//               </li>
//             </a>
//             <a href="#contact" onClick={() => handleClick("contact")}>
//               <li
//                 className={` nav-link ${activeLink === "contact" ? "clicked" : ""
//                   }`}
//               >
//                 Contact
//               </li>
//             </a>
//           </ul>
//         </div>

//         <div className="contact mt-5  flex  flex-col items-center ">
//           <div className="contact-sections flex flex-wrap justify-center  xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center gap-20">
//             <div className="contact-text flex flex-col gap-4 items-center text-center">
//               <img src="/assets/contact.png" alt="Logo" className="contact-h" />
//               <h3 className='text-xl text-white font-semibold'>Have any questions about Mie Pay?</h3>
//               <p className='text-zinc-400 text-1'>Our dedicated team is ready to assist you anytime! Reach us at.</p>
//               <div>
//                 <h3 className='text-2xl text-white font-bold'>Email</h3>
//                 <p className='text-2xl text-white '>info@miepay.ca</p>
//               </div>
//               <div>
//                 <h3 className='text-2xl text-white font-bold'>Call</h3>
//                 <p className='text-2xl text-white '>+1 (416)827-0039</p>
//               </div>
//               <p className='text-zinc-400 text-1'>for instant support with your digital wallet needs.</p>


//             </div>
//             <div className="contact-form p-9 rounded-4xl flex flex-col justify-center">
//               <div className='flex justify-center'>
//                 {/* <img src="/assets/contact-us.png" alt="Logo" className='mb-8 contact-us' /> */}
//                 <h1 className="contact-us font-extralight mb-4">Contact us</h1>
//               </div>
//               <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2'>
//                 <div className="input flex flex-col gap-1">
//                   <label htmlFor="name" className='text-zinc-400 text-lg font-semibold'>Your name</label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.name}
//                     className={formik.touched.name && formik.errors.name ? 'border-red-500' : 'text-white'}
//                   />
//                   {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
//                 </div>

//                 <div className="input flex flex-col gap-1">
//                   <label htmlFor="email" className='text-zinc-400 text-lg font-semibold'>Your email</label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="text"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.email}
//                     className={formik.touched.email && formik.errors.email ? 'border-red-500' : 'text-white'}
//                   />
//                   {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
//                 </div>

//                 <div className="input flex flex-col gap-1">
//                   <label htmlFor="subject" className='text-zinc-400 text-lg font-semibold'>Subject</label>
//                   <input
//                     id="subject"
//                     name="subject"
//                     type="text"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.subject}
//                     className={formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'text-white'}
//                   />
//                   {formik.touched.subject && formik.errors.subject ? <div className="text-red-500">{formik.errors.subject}</div> : null}
//                 </div>

//                 <div className="input flex flex-col gap-1">
//                   <label htmlFor="message" className='text-zinc-400 text-lg font-semibold'>Message</label>
//                   <input
//                     id="message"
//                     name="message"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.message}
//                     className={formik.touched.message && formik.errors.message ? 'border-red-500' : 'text-white'}
//                   />
//                   {formik.touched.message && formik.errors.message ? <div className="text-red-500">{formik.errors.message}</div> : null}
//                 </div>

//                 <div className='flex justify-center mt-7'>
//                   <button type="submit" className="send-button py-3 flex justify-center rounded-lg">
//                     <p className='text-lg text-white font-semibold'>Send</p>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//         </div>
//         <div className="contact-social-media absolute">
//         <ul className='social-media-inner flex flex-col gap-4 ms-10'>
//         <li>  <img src="/assets/instagram2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/tik-tok2.png" alt="Logo" className='s-img' /></li>
//             <li>  <img src="/assets/youtube2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/twitter2.png" alt="Logo" className='s-img' /></li>
//             <li>  <img src="/assets/facebook2.png" alt="Logo" className='s-img' /></li>
//             <li> <img src="/assets/linkedin2.png" alt="Logo" className='s-img' /></li>
//         </ul>
//       </div>

//       <div className="contact-scroll absolute">
//         <div className="line"></div>
//           <p className="scroll-text">Scrool</p>
//           <div className="line"></div>
//         </div>

//       </div>
      

//       <ToastContainer />

//     </div>


//   )
// }

// export default Home






"use client"
import { useState, useEffect } from "react"
import React from 'react'
import "./home.css"
import "./about.css"
import "./contact.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullpage.css';
import 'fullpage.js';


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

      try {
        let response = await axios.post("https://api.miepay.ca/api/store-query", { ...values, first_name: values.name })
        console.log(response)

        if (response.data.statusCode == 200) {
          toast.success(response.data.message)
        }


      }
      catch (error) {
        toast.error("Internal server error")
      }
    },
  });

  useEffect(() => {
    // FullPage.js initialization
    const fullPageInstance = $('#fullpage').fullpage({
      autoScrolling: true,
      navigation: false,
      anchors: ['home', 'about', 'contact'],
    });
  
    // Scroll detection logic
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
  
      // Destroy FullPage.js instance if needed
      if ($.fn.fullpage && $.fn.fullpage.destroy) {
        $.fn.fullpage.destroy('all');
      }
    };
  }, []);
  
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("home"); // Default is "home"

  const handleClick = (link) => {
    setActiveLink(link); // Update the active link state
  };

  return (
     
    <div className='relative' id="fullpage">

      {/* hompage  */}
      <div className='homepage relative section' data-anchor='home'>

        <div className={`navbar absolute top-0 w-full  flex lg:flex-row justify-between px-5 lg:px-16  items-start transition-colors duration-300  pt-7 lg:py-12`} >
          <img src="/assets/logo.png" alt="Logo" className="nav-logo" />
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
                className={`nav-link ${activeLink === "home" ? "clicked" : ""
                  }`}
              >
                Home
              </li>
            </a>
            <a href="#about" onClick={() => handleClick("about")}>
              <li
                className={` nav-link ${activeLink === "about" ? "clicked" : ""
                  }`}
              >
                About us
              </li>
            </a>
            <a href="#contact" onClick={() => handleClick("contact")}>
              <li
                className={` nav-link ${activeLink === "contact" ? "clicked" : ""
                  }`}
              >
                Contact
              </li>
            </a>
          </ul>
        </div>



        <div className="herosection flex flex-col items-center ">
          <img src="/assets/logocenter4.png" alt="Logo" className='logo-center' />
          <h1 className='refer-earn mt-5'>Refer. Earn. Repeat</h1>
        </div>

        <div className="home-social-media absolute">
          <ul className='social-media-inner flex flex-col gap-4 ms-10'>
            <li>  <img src="/assets/instagram2.png" alt="Logo" className='s-img' /></li>
            <li> <img src="/assets/tik-tok2.png" alt="Logo" className='s-img' /></li>
            <li>  <img src="/assets/youtube2.png" alt="Logo" className='s-img' /></li>
            <li> <img src="/assets/twitter2.png" alt="Logo" className='s-img' /></li>
            <li>  <img src="/assets/facebook2.png" alt="Logo" className='s-img' /></li>
            <li> <img src="/assets/linkedin2.png" alt="Logo" className='s-img' /></li>
          </ul>
        </div>

        <div className="scroll absolute">
          <p className="scroll-text">Scrool</p>
          <div className="line"></div>
        </div>

      </div>


      {/* aboutpage */}


      <div className='aboutpage relative section' data-anchor='about'>

        <div className="herosection flex flex-col items-center relative">
          <div className="images flex gap-4 justify-center items-center ">
            <img src="/assets/left.png" alt="Logo" className='mt-10 left-img' />
            <img src="/assets/center.png" alt="Logo" className=' center-img' />
            <img src="/assets/right.png" alt="Logo" className='mt-10 right-img' />
          </div>
          <img src="/assets/miePay.png" alt="Logo" className='absolute miepay mt-8' />
          <p className='about-text text-center'>Your secure digital wallet designed for seamless payments. We simplify transactions with transparent
            tracking and zero hidden fees. Soon expanding to multiple services, Mie Pay makes managing
            your money effortless and worry-free.
          </p>
          <div className='flex flex-wrap  gap-4 items-center justify-center  mt-9'>
            <p className='text-lg download '>DOWNLOAD NOW</p>
            <a href="https://apps.apple.com/ca/app/mie-pay/id6742891477" target="blank"><img src="/assets/app-store.png" alt="Logo" className='app-store' /></a>
            <a href="https://play.google.com/store/apps/details?id=com.app.miepay" target="blank"> <img src="/assets/google-pay.png" alt="Logo" className='google-pay' /></a>
          </div>
        </div>


      </div>


{/* contact page */}


      <div className='contactpage relative section ' anchor='contact'>

        <div className="contact mt-5  flex  flex-col items-center ">
          <div className="contact-sections flex flex-wrap justify-center  xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center gap-20">
            <div className="contact-text flex flex-col gap-4 items-center text-center">
              <img src="/assets/contact.png" alt="Logo" className="contact-h" />
              <h3 className='text-xl text-white font-semibold'>Have any questions about Mie Pay?</h3>
              <p className='text-zinc-400 text-1'>Our dedicated team is ready to assist you anytime! Reach us at.</p>
              <div>
                <h3 className='text-2xl text-white font-bold'>Email</h3>
                <p className='text-2xl text-white '>info@miepay.ca</p>
              </div>
              <div>
                <h3 className='text-2xl text-white font-bold'>Call</h3>
                <p className='text-2xl text-white '>+1 (416)827-0039</p>
              </div>
              <p className='text-zinc-400 text-1'>for instant support with your digital wallet needs.</p>


            </div>
            <div className="contact-form p-9 rounded-4xl flex flex-col justify-center">
              <div className='flex justify-center'>
                {/* <img src="/assets/contact-us.png" alt="Logo" className='mb-8 contact-us' /> */}
                <h1 className="contact-us font-extralight mb-4">Contact us</h1>
              </div>
              
            </div>
          </div>

        </div>
        <div className="contact-social-media absolute">
        <ul className='social-media-inner flex flex-col gap-4 ms-10'>
        <li>  <img src="/assets/instagram2.png" alt="Logo" className='s-img' /></li>
            <li> <img src="/assets/tik-tok2.png" alt="Logo" className='s-img' /></li>
            <li>  <img src="/assets/youtube2.png" alt="Logo" className='s-img' /></li>
            <li> <img src="/assets/twitter2.png" alt="Logo" className='s-img' /></li>
            <li>  <img src="/assets/facebook2.png" alt="Logo" className='s-img' /></li>
            <li> <img src="/assets/linkedin2.png" alt="Logo" className='s-img' /></li>
        </ul>
      </div>

      <div className="contact-scroll absolute">
        <div className="line"></div>
          <p className="scroll-text">Scrool</p>
          <div className="line"></div>
        </div>

      </div>
      

      <ToastContainer />

    </div>


  )
}

export default Home