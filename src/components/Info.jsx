import React from 'react'
import styles from '../index.css?inline'
import info from '../assets/info.png'
const Info = () => (
    <section className="bg-white mt-0 md:mt-10 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
            <div className="lg:mt-0 lg:col-span-5 lg:flex md:mx0auto">
                <img src={info} alt="mockup" />
            </div>

            <div className="ml-auto place-self-center lg:col-span-7 ">
                <h1 className="max-w-2xl mb-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-center sm:text-left ">What is <span className='text-[#4d55bb] font-extrabold'>E-Cell ?</span></h1>

                <p className=" max-w-xl mt-11 mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl text-center sm:text-left">KIET E-Cell is a student body of KIET, formed in 2014 with the aim to promote an entrepreneurial culture among the young minds of today's generation, and to encourage an entrepreneurial mindset in an aspiring individual to convert their "Drop of an Idea into an Ocean of Reality".</p>
                <a href="#" className="inline-flex items-center justify-center px-7 py-3 text-xl text-center text-[#4d55bb] border border-[#4d55bb] rounded-lg hover:text-white hvr-sweep-to-right ">
                    Learn More!
                </a>
            </div>
        </div>
    </section>
)


export default Info