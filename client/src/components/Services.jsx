import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../index.css"
import webapp from '../assets/img/services/webapp.jpg'
import mobileapp from '../assets/img/services/mobileapp.jpg'
import uiux from '../assets/img/services/uiux.jpg'
import qatesting from '../assets/img/services/qatesting.jpg'
import maintancesupport from '../assets/img/services/maintanancesupport.jpg'
import BlogBtn from './BlogBtn';

const services_data = [
    {
        'service_head': "Web App Development",
        'service_desc': "We create modern web applications tailored to meet your unique business requirements. Our team specializes in building responsive, secure, and high-performing web apps that deliver exceptional user experiences across devices and platforms.",
        'img_url': webapp,
        'button_context': "Schedule Meeting"
    },
    {
        'service_head': "Mobile App Development",
        'service_desc': "We specialize in creating innovative mobile applications tailored to your business needs. Our expertise spans both native and hybrid app development, ensuring your app is optimized for iOS, Android, or cross-platform solutions.",
        'img_url': mobileapp,
        'button_context': "Schedule Meeting"
    },
    {
        'service_head': "UI/UX Design",
        'service_desc': "Our UI/UX design services focus on creating visually stunning and user-friendly interfaces. By blending aesthetics with functionality, we ensure your product resonates with your target audience. Our designs are research-driven, emphasizing usability, accessibility, and a seamless user journey to maximize engagement and satisfaction.",
        'img_url': uiux,
        'button_context': "Schedule Meeting"
    },
    {
        'service_head': "QA & Testing",
        'service_desc': "Ensure your software performs seamlessly under all conditions with our comprehensive QA and testing services. From functional and performance testing to security and usability assessments, our team employs the latest tools and methodologies to detect and resolve issues early. We ensure your product is launch-ready and exceeds quality expectations.",
        'img_url': qatesting,
        'button_context': "Schedule Meeting"
    },
    {
        'service_head': "Maintenance and Support",
        'service_desc': "Our maintenance and support services offer peace of mind with regular updates, bug fixes, and performance optimization. We proactively monitor and enhance your software to adapt to evolving business needs and technologies, ensuring uninterrupted operation and long-term success.",
        'img_url': maintancesupport,
        'button_context': "Schedule Meeting"
    }
]

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,

        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Ensure this is true
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        arrows: false
    };

    return (
        <div className='container max-w-2xl  px-4 py-8'>
            <Slider {...settings}>
                {services_data.map((service, index) => (
                    <div key={index} className='flex p-4 max-w-xl bg-[#2A2A2A] rounded-lg text-white'>
                        <div className='flex flex-col lg:flex-row min-h-[650px] lg:min-h-[300px] max-h-[600px]'>
                            <div className='flex-1 p-4'>
                                <h1 className='text-2xl  font-bold mb-2'>{service.service_head}</h1>
                                <p className='text-sm'>{service.service_desc}</p>
                            </div>
                            <div className='flex-1  max-w-96 p-4 space-y-10'>
                                <img src={service.img_url} alt={service.service_head} className='mb-4 rounded-lg' />
                                <button class="cursor-pointer font-semibold overflow-hidden relative z-100 active:scale-105 transform ease-in-out duration-100 rounded-lg border border-white group px-8 py-2">
                                    <span class="relative z-10 text-white group-hover:text-black  duration-500">Schedule Meet</span>
                                    <span class="absolute w-full h-full bg-white -left-36 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                    <span class="absolute w-full h-full bg-white -right-36 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Services