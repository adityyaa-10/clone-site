import React from 'react'
import styles from '../index.css?inline'
import info from '../assets/info.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

const Cards = () => (

    <section className=" bg-white mt-0 md:mt-10">
        <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-4xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl title-font mb-4 text-gray-900"><span className='text-[#4d55bb] font-bold'>What</span> we do</h1>
                <p className=" ml-0 md:ml-52 mr-0 md:mr-52 mt-11 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Through our vision of "Learn, Build and Scale" we implement various initiatives and events in KIET to foster entrepreneurial minds and create a culture of enthralling startups bound for success!</p>
            </div>


            <div className="flex flex-wrap mx-auto my-5 ">
                <div className="w-80 m-auto max-w-sm ">
                    <img src={card1} alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                    <div className="bg-white shadow-2xl rounded-b-3xl  w-[86%] md:w-[100%]">
                        <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">Ideate</h2>
                        <div className="w-5/6 m-auto">
                            <p className="text-center text-gray-500 pt-5 pb-5">To start your search for that drop-dead idea that's going to set the world on fire, open yourself to the possibilities and you will be bound to become a winner.</p>
                        </div>
                    </div>
                </div>

                <div className="w-80 m-auto max-w-sm mt-10 md:mt-0">
                    <img src={card2} alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                    <div className="bg-white shadow-2xl rounded-b-3xl  w-[86%] md:w-[100%]">
                        <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">Create</h2>
                        <div className=" w-5/6 m-auto">
                            <p className="text-center text-gray-500 pt-5 pb-5">Create an entrepreneurship community where we ideate, innovate and mold your idea into a full-fledged running venture.</p>
                       <br />
                        </div>
                    </div>
                </div><div className=" w-80 m-auto max-w-sm mt-10 md:mt-0">
                    <img src={card3} alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                    <div className="bg-white shadow-2xl rounded-b-3xl  w-[86%] md:w-[100%]">
                        <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">Incubate</h2>
                        <div className="w-5/6 m-auto">
                            <p className="text-center text-gray-500 pt-5 pb-5">Your idea needs to get nurtured in order to reach full strength and to be able to breathe and grow independently.</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
)
export default Cards