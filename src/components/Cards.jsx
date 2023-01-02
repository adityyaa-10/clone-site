import React from 'react'
import styles from '../index.css?inline'
import info from '../assets/info.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

const Cards = () => (

    <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto ">
                <div className="flex flex-col text-center w-full mb-20 max-w-screen-2xl">
                    <div className="flex flex-col text-center w-full ">
                        <h1 className="text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl title-font mb-4 text-gray-900"><span className='text-[#4d55bb] font-extrabold'>What</span> we do</h1>
                        <p className=" ml-0 md:ml-52 mr-0 md:mr-52 mt-11  font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">Through our vision of "Learn, Build and Scale" we implement various initiatives and events in KIET to foster entrepreneurial minds and create a culture of enthralling startups bound for success!</p>
                    </div>
                </div>
                <div className='max-w-7xl mx-auto'>
                    <div className="flex px-10 flex-wrap -m-4 mb-4">
                        <div className="p-4 md:w-1/3 max-w-xs mx-auto hvrgrow mb-5 md:mb-1 ">
                            <div className="h-full flex flex-col items-center text-center shadow-xl rounded-2xl">
                                <img alt="team" className="flex-shrink-0 w-full h-52 object-cover object-center mb-4 rounded-t-2xl " src={card1} />
                                <div className="w-full">
                                    <h2 className="title-font font-semibold text-xl text-gray-900">Ideate</h2>
                                    <p className="text-gray-600 ml-3 my-3 text-left">To start your search for that drop-dead idea that's going to set the world on fire, open yourself to the possibilities and you will be bound to become a winner.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 max-w-xs mx-auto hvrgrow ">
                            <div className="h-full flex flex-col items-center text-center shadow-xl rounded-2xl">
                                <img alt="team" className="flex-shrink-0 w-full h-52 object-cover object-center mb-4 rounded-t-2xl" src={card2} />
                                <div className="w-full">
                                    <h2 className=" title-font font-semibold text-xl text-gray-900">Create</h2>
                                    <p className="text-gray-600 ml-5 mt-3 text-left">Create an entrepreneurship community where we ideate, innovate and mold your idea into a full-fledged running venture.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 max-w-xs mx-auto hvrgrow ">
                            <div className="h-full flex flex-col items-center text-center shadow-xl rounded-2xl">
                                <img alt="team" className="flex-shrink-0 w-full h-52 object-cover object-center mb-4 rounded-t-2xl " src={card3} />
                                <div className="w-full">
                                    <h2 className="title-font font-semibold text-xl text-gray-900">Incubate</h2>
                                    <p className="text-gray-600 ml-5 mt-3 text-left">Your idea needs to get nurtured in order to reach full strength and to be able to breathe and grow independently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
export default Cards