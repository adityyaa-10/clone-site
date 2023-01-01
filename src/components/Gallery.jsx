import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'
import styles from '../index.css?inline'

const Gallery = () => {
    return (
        <div>
            <NavBar />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-11 flex-wrap">
                        <h1 className="max-w-2xl mx-auto  text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 ">Photo<span className='text-[#4d55bb] font-extrabold'> Gallery</span></h1>
                    </div>
                    <div class="flex flex-wrap ">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow " src="https://dummyimage.com/500x300" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/501x301" />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/601x361" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/502x302" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/503x303" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap ">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/500x300" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/501x301" />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/601x361" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/502x302" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/503x303" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap ">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/500x300" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/501x301" />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block hvrgrow" src="https://dummyimage.com/601x361" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/502x302" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block hvrgrow" src="https://dummyimage.com/503x303" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Gallery
