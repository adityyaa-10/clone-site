import React from 'react'
import styles from '../index.css?inline'
import hero from '../assets/hero.png'

const Hero = () => (
    <section className="bg-white mt-0 md:mt-11 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
            <div className="mr-auto place-self-center lg:col-span-7 ">
                <h1 className="max-w-2xl text-center sm:text-left mb-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl ">Get Ready to <span className='text-[#4d55bb] font-extrabold'>Boost</span> <br />
                    your Startup</h1>

                <p className="max-w-xl mt-11 mb-6 text-center sm:text-left font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">Get a cohort facilitated by a personal accountability partner, one to one guidance session, and a structured road map uniquely designed for your idea to build your startup and get funding at the end of the program.</p>
                <a href="#" className="inline-flex items-center justify-center px-7 py-3 text-xl text-center mx-3 sm:mx-auto text-[#4d55bb] border border-[#4d55bb] rounded-lg hover:text-white hvr-sweep-to-right ">
                    Register Now!
                </a>
            </div>

            <div className="lg:mt-0 lg:col-span-5 lg:flex">
                <img src={hero} alt="mockup" />
            </div>

        </div>
    </section>
)


export default Hero