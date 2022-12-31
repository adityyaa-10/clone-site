import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'
import styles from '../index.css?inline'
import hero from '../assets/hero.png'
import who from '../assets/who.png'
const About = () => (
    <div>
        <NavBar />
        <section className="bg-white mt-0 md:mt-10 ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={who} alt="mockup" />
                </div>

                <div className="ml-auto place-self-center lg:col-span-7 ">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#4d55bb] ">Who<span className='font-light text-black'> are we?</span></h1>
                    <h3 className=' text-md md:text-2xl font-medium text-gray-600 mt-5'>A Team, A family. We are Team E-Cell</h3>
                    <p className=" max-w-xl mt-5 mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">The Entrepreneurship Cell of KIET Ghaziabad is a student body that strives to cater the needs of aspiring entrepreneurs as well as educate the student community about the latest happenings in the startup ecosystem.</p>
                    <p className=" max-w-xl mt-5 mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">E-Cell seeks to support the broader startup ecosystem in India by bringing together and establishing a community of dedicated students, professors, angel investors, and industry experts.</p>
                </div>
            </div>
        </section>

        <section className="bg-white mt-0 md:mt-11 ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                <div className="mr-auto place-self-center lg:col-span-7 ">
                    <h1 className="max-w-2xl mb-4 text-4xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl ">Keep <span className='text-[#4d55bb] font-bold'>Growing</span></h1>

                    <p className=" max-w-xl mt-5 mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">The Entrepreneurship Cell of KIET Ghaziabad is a student body that strives to cater the needs of aspiring entrepreneurs as well as educate the student community about the latest happenings in the startup ecosystem.</p>
                    <p className=" max-w-xl mt-5 mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">E-Cell seeks to support the broader startup ecosystem in India by bringing together and establishing a community of dedicated students, professors, angel investors, and industry experts.</p>
                    <a href="#" className="inline-flex items-center justify-center px-7 py-3 text-xl text-center text-[#4d55bb] border border-[#4d55bb] rounded-lg hover:text-white hvr-sweep-to-right ">
                        Register Now!
                    </a>
                </div>

                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={hero} alt="mockup" />
                </div>

            </div>
        </section>


        <Footer />
    </div>
)

export default About
