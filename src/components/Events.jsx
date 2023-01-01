import React from 'react'
import Footer from './Footer';
import NavBar from './Navbar';

const Events = () => (
    <div>
        <NavBar />
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto max-w-screen-lg">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="max-w-2xl mx-auto  text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800 ">Our<span className='text-[#4d55bb] font-extrabold'> Initiatives</span></h1>
                </div>
                <div className="flex flex-wrap -m-4 mb-4">
                    <div className="p-4 md:w-1/2 w-auto mx-auto hvrgrow ">
                        <div className="h-full flex flex-col items-center text-center hover:shadow-2xl">
                            <img alt="team" className="flex-shrink-0 w-full h-72 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                            <div className="w-full">
                                <h2 className="title-font font-semibold text-xl text-gray-900">E-Summit</h2><br />
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-auto mx-auto hvrgrow">
                        <div className="h-full flex flex-col items-center text-center hover:shadow-2xl">
                            <img alt="team" className="flex-shrink-0 w-full h-72 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
                            <div className="w-full">
                                <h2 className=" title-font font-semibold text-xl text-gray-900">Hult Prize</h2><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 mb-4">
                    <div className="p-4 md:w-1/2 w-auto mx-auto hvrgrow ">
                        <div className="h-full flex flex-col items-center text-center hover:shadow-2xl">
                            <img alt="team" className="flex-shrink-0 w-full h-72 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                            <div className="w-full">
                                <h2 className="title-font font-semibold text-xl text-gray-900">Innompic Games</h2><br />
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-auto mx-auto hvrgrow">
                        <div className="h-full flex flex-col items-center text-center hover:shadow-2xl">
                            <img alt="team" className="flex-shrink-0 w-full h-72 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
                            <div className="w-full">
                                <h2 className=" title-font font-semibold text-xl text-gray-900">Innovation Calendar</h2><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);

export default Events
