import React from 'react'

// Components import
import { Navbar } from '../components/Navbar';
import { BottomNavbar } from '../components/BottomNavbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import BlogBtn from '../components/BlogBtn';
import '../style/home.css'

// Images Imports
import stone1 from '../assets/img/stone1.png'
import stone2 from '../assets/img/stone2.png'
import hero1 from '../assets/img/hero1.webp'
import flower from '../assets/img/flower.webp'



// Icons Import
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineDiscord } from "react-icons/ai";
import html from '../assets/img/skills/html.png'
import css from '../assets/img/skills/css.png'
import git from '../assets/img/skills/git.png'
import express from '../assets/img/skills/express.png'
import java from '../assets/img/skills/java.png'
import js from '../assets/img/skills/js.png'
import mongodb from '../assets/img/skills/mongodb.png'
import mysql from '../assets/img/skills/mysql.png'
import python from '../assets/img/skills/python.png'
import nodejs from '../assets/img/skills/nodejs.png'
import react from '../assets/img/skills/react.png'
import bootstrap from '../assets/img/skills/bootstrap.png'
import github from '../assets/img/skills/github.png'
import tailwind from '../assets/img/skills/tailwind.png'
import Services from '../components/Services';
import BlogScroll from '../components/BlogScroll';



export const Home = () => {
  return (
    <div className='flex flex-col'>
      {/* Menu Bars */}
      <Navbar />
      <BottomNavbar />

      {/* Hero Section Starts */}
      <section id='home' className='text-black'>
        <div className='relative min-h-screen align-middle  overflow-hidden'>
          <div className='absolute z-10 md:left-40 lg:left-[64] md:right-40 lg:right-[64] top-28 p-10'>
            <div className='py-5 px-5 rounded-3xl backdrop-blur-md mt-28'>
              <h1 className='text-4xl font-bold sm:font-normal sm:text-6xl md:text-7xl lg:text-8xl '>Welcome to PSS</h1>
              <p className='text-2xl mt-10'>Empowering businesses with innovative tech solutions. <br /> Creativity meets technology at PSS.</p>
            </div>
          </div>
          <div className='absolute -z-10 right-[-200px] md:right-[-100px] top-[-150px] md:top-[-50px]'>
            <img src={stone1} alt="" className='' />
          </div>
          <div className='absolute -z-10 left-[-300px] md:left-[-200px] bottom-[-100px] md:bottom-[-50px]'>
            <img src={stone2} alt="" />
          </div>
        </div>
      </section >
      {/* Hero section ends */}

      {/* Services Section Starts */}
      <section id='services' className='text-black px-10 py-16 lg:py-40'>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <span>Services</span>
          </div>
          <div className='flex-1'>
            <div className='lg:mb-14'>
              <h1 className='heading'>Services Provided by PSS</h1>
            </div>
            <div className=''>
              <Services />
            </div>
          </div>
        </div>

      </section>
      {/* Services section ends */}

      {/* About Us Section Starts */}
      <section id='aboutus' className='text-black px-10 py-16 lg:py-40'>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <span>About Us</span>
          </div>
          <div className='flex-1'>
            <div className='max-w-3xl'>
              <h1 className='heading'>Aproach and Philosophy</h1>
            </div>
            <div className='md:w-3/4 py-10'>
              <img src={hero1} alt="" className='rounded-2xl' />
            </div>
            <div className='flex flex-col md:flex-col md:w-3/4'>
              <div className='p-5 md:p-0'>
                <p className='md:pr-20 mb-4 text-sm'>At <span className='font-bold'>Padma Sphere Services</span > we are passionate about turning ideas into reality through innovative technology solutions. Founded with the vision to empower businesses, we specialize in delivering high-quality software and application development services that cater to diverse needs, whether you’re a startup seeking to make your mark or an established organization aiming to enhance your digital presence. <br /> Our team comprises talented developers, designers, and strategists committed to crafting tailored solutions. From web and mobile applications to intuitive UI/UX designs, we prioritize user-centric approaches and cutting-edge technologies to ensure your business achieves its goals effectively. </p>
                <p className='md:pr-20 text-sm  mb-8 '>Our mission is to help businesses succeed by leveraging technology, creating meaningful experiences for users, and fostering growth. With a focus on transparency and collaboration, we aim to build lasting relationships with our clients.
                </p>
                {/* <button className='py-6 px-14 border-2 rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-300 hover:scale-[1.2]'>Download CV</button> */}
              </div>
              <div className='flex flex-col md:justify-start md:items-start p-5 md:p-0 min-w-64'>
                <h3 className='text-3xl font-bold'>Why choose us?</h3>
                <ul className='space-y-6 pl-4 mt-4'>
                  <li><span className='font-bold'>Client-Centric Approach:</span> Your vision is at the core of everything we do.</li>
                  <li><span className='font-bold'>Expert Team:</span> A dedicated team with expertise across various domains and technologies.</li>
                  <li><span className='font-bold'>End-to-End Solutions:</span> From ideation to execution and beyond, we cover it all.</li>
                  <li><span className='font-bold'>Innovation & Quality:</span> We thrive on creativity and deliver products with uncompromised quality.</li>
                </ul>
                <p className='mt-10 font-extrabold text-xl'>Let’s shape the future together.</p>
                <p className='font-bold mt-4'>Padma Sphere Services – Transforming ideas into impactful solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us section ends */}

      {/* Technologies Section starts */}
      <section id='technologies' className='text-black px-10 py-16 lg:py-40'>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <p>Technologies</p>
          </div>
          <div className='flex 1'>
            <div>
              <div>
                <h1 className='heading'>Tech Stack</h1>
                <div className='py-16' >
                  <ul className='grid grid-cols-5 gap-4 gap-y-14'>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={html} alt="" /></li>
                      <span
                        className='skillSpan'
                      >HTML5</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={bootstrap} alt="" /></li>
                      <span
                        className='skillSpan'
                      >BOOTSTRAP</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={tailwind} alt="" /></li>
                      <span
                        className='skillSpan'
                      >TAILWIND</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={css} alt="" /></li>
                      <span
                        className='skillSpan'
                      >CSS</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={js} alt="" /></li>
                      <span
                        className='skillSpan'
                      >JAVASCRIPT</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={react} alt="" /></li>
                      <span
                        className='skillSpan'
                      >React.JS</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={nodejs} alt="" /></li>
                      <span
                        className='skillSpan'
                      >Node.JS</span>
                    </div>

                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={express} alt="" /></li>
                      <span
                        className='skillSpan'
                      >Express.JS</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={java} alt="" /></li>
                      <span
                        className='skillSpan'
                      >JAVA</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={python} alt="" /></li>
                      <span
                        className='skillSpan'
                      >PYTHON</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={mongodb} alt="" /></li>
                      <span
                        className='skillSpan'
                      >MONGODB</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={mysql} alt="" /></li>
                      <span
                        className='skillSpan'
                      >MySQL</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={git} alt="" /></li>
                      <span
                        className='skillSpan'
                      >GIT</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={github} alt="" /></li>
                      <span
                        className='skillSpan'
                      >GITHUB</span>
                    </div>
                  </ul>
                </div>
              </div>
              <div>
                <h1 className='text-3xl mb-4'>What We Do Best?</h1>
                <p className='max-w-2xl'>As a dedicated and skilled team, we excel in creating dynamic and responsive applications. Our expertise spans across various technologies and methodologies, enabling we to deliver high-quality solutions tailored to meet the unique needs of each project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies section ends */}

      {/* Blogs section starts */}
      <section id='blogs' className='text-black px-10 py-16 lg:py-40 '>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <span>Blogs</span>
          </div>
          <div className='flex-1'>
            <div className='max-w-3xl'>
              <h1 className='heading'>Tech & Some Magic</h1>
            </div>
            <div className='sm:w-3/4 py-14 md:py-20 space-y-28'>
              <BlogScroll />
            </div>

          </div>
        </div>
      </section>
      {/* Services section ends */}



      {/* Contact Us section starts */}
      <section id='contact' className='text-black px-10 py-16 lg:py-40'>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <span>Connect Us</span>
          </div>
          <div className='flex-1'>
            <div className='max-w-3xl'>
              <h1 className='heading'>Just Say Hello!</h1>
            </div>
            <div className='md:w-3/4 py-10'>
              <img src={hero1} alt="" className='rounded-2xl' />
            </div>
            <div className="max-w-3xl">
              <div>
                <div>
                  <h3 className="text-4xl font-semibold mb-2">Get in Touch</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
                <div>

                  <p className="text-lg mb-4">Want to know more about us, have a project in mind? Drop us a line and we will get back as soon as possible.</p>
                </div>

              </div>
              <div>
                <ContactForm />
                <div className='flex justify-center items-center p-10 mt-5'>
                  <ul className='flex justify-around w-full'>
                    <li>
                      <div className="group relative inline-block">
                        <button class="focus:outline-none">
                          <LuLinkedin size={36} className="btnSocial" />
                        </button>
                        <span
                          className='btnSpan'
                        >LinkedIn</span>
                      </div>
                    </li>
                    <li>
                      <div class="group relative inline-block">
                        <button class="focus:outline-none">
                          <RiTwitterXFill size={36} className="btnSocial" />
                        </button>
                        <span
                          className='btnSpan'
                        >X</span>
                      </div>
                    </li>
                    <li>
                      <div class="group relative inline-block">
                        <button class="focus:outline-none">
                          <LuGithub size={36} className="btnSocial" />
                        </button>
                        <span
                          className='btnSpan'
                        >Github</span>
                      </div>
                    </li>
                    <li>
                      <div class="group relative inline-block">
                        <button class="focus:outline-none">
                          <BsInstagram size={36} className="btnSocial" />
                        </button>
                        <span
                          className="btnSpan"
                        >Instagram</span>
                      </div>
                    </li>
                    <li>
                      <div class="group relative inline-block">
                        <button class="focus:outline-none">
                          <AiOutlineDiscord size={36} className="btnSocial" />
                        </button>
                        <span
                          className="btnSpan"
                        >Discord</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col justify-center items-center space-y-2">
                    <li>
                      {/* <span className="font-semibold mr-2">Email:</span> */}
                      <a href="mailto:hello@example.com" className="text-primary hover:underline">
                        padmasphereservices@gmail.com
                      </a>
                    </li>
                    <li>
                      {/* <span className="font-semibold mr-2">Phone:</span> */}
                      <a href="tel:+123456789" className="text-primary hover:underline">
                        +91 922640 6267
                      </a>
                    </li>
                    <li className='flex justify-center'>
                      {/* <span className="font-semibold mr-2">Location:</span> */}
                      <span>Solapur-413006, Bharat</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </div >
  )
}
export default Home;