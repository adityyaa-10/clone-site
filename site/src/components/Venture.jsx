import React from 'react'
import styles from '../index.css'
import venture from '../assets/venture.png'
const Venture = () => (
    <section className="bg-white mt-0 md:mt-10 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
                <img src={venture} alt="mockup" />
            </div>

            <div className="ml-auto place-self-center lg:col-span-7 ">
                <h1 className="max-w-2xl mb-4 text-4xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl ">Start your <span className='text-[#4d55bb] font-bold'>Venture!</span></h1>

                <p className="max-w-xl mt-11 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"> <span className='font-medium'>Starting a new business? </span>Find out where to begin and how to achieve success. Your business plan is the foundation of your business. It's a roadmap for how to structure, run, and grow your new business as a whole.</p>


                <a href="#" className="inline-flex items-center justify-center px-7 py-3 text-xl text-center text-[#4d55bb] border border-[#4d55bb] rounded-lg hover:text-white hvr-sweep-to-right ">
                    Get Started!
                </a>
                <a href="#" className="inline-flex  ml-5 items-center justify-center px-7 py-3 text-xl text-center text-[#4d55bb] border border-[#4d55bb] rounded-lg hover:text-white hvr-sweep-to-right ">
                    Incubator
                </a>

            </div>
        </div>
    </section>
)



export default Venture
