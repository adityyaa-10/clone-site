import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'
import styles from '../index.css?inline'

const Gallery = () => (
    <div>
        <NavBar />
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto flex flex-wrap">
                <div className="flex w-full mb-11 flex-wrap">
                    <h1 className="max-w-2xl mx-auto  text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 ">Photo<span className='text-[#4d55bb] font-extrabold'> Gallery</span></h1>
                </div>
                <div className="flex flex-wrap ">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow " src="https://dummyimage.com/500x300" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/501x301" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/600x360" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/601x361" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/502x302" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/503x303" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap ">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/500x300" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/501x301" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/600x360" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/601x361" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/502x302" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/503x303" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap ">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/500x300" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/501x301" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/600x360" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/601x361" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/502x302" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/503x303" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);

export default Gallery
