import React from 'react'
import Navbar from '../components/Navbar'
import hero from '../assets/img/hero1.webp'

const Blog = () => {
    return (
        <div>
            <Navbar />
            <section id='aboutus' className='text-black px-10 py-24 lg:py-40'>
                <div className='secContainer'>
                    <div className='subHeadSec'>
                        <span>About Us</span>
                    </div>
                    <div className='flex-1'>
                        <div className='md:w-3/4 py-10'>
                            <img src={hero} alt="" className='rounded-2xl' />
                        </div>
                        <div className='max-w-3xl'>
                            <h1 className='heading'>Aproach and Philosophy</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog