import { useState } from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import styles from '../index.css?inline'
import logo from '../assets/logo.jpg'

import { Link } from "react-router-dom"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);


    return (
        <nav className="w-full bg-white shadow sticky top-0 z-50">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-3 md:block">
                        <Link to="/">
                            <img src={logo} className='w-[100px]' alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li><Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="  font-[Poppins] hover:text-[#4d55bb]  inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-2xl font-light hvrgrow">
                                        Discover
                                        {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute z-10 mt-2 w-44 md:w-[600px] origin-center rounded-md bg-white shadow-lg ">
                                        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <Link to="/about" className="ml-2 md:-ml-[60%] md:mt-3 text-[#4d55bb] font-medium font-sans  md:text-2xl">About</Link>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]  hidden md:grid  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Know Us Better
                                                        </p>
                                                    </div>

                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <Link to="/gallery" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans md:text-2xl">Gallery</Link>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]   hidden md:grid   font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            A walk through e-Cell KIET's memory lane
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="  ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans  md:text-2xl">Speakers</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]  hidden md:grid font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Our past exemplar speakers
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans  md:text-2xl">Events</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb] hidden md:grid mb-3  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Get to know about the events E-Cell KIET conducts
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="/" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans md:text-2xl">Our Team</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb] hidden md:grid mb-3  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Here's our team amigos!
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="/" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans md:text-2xl">Associations</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb] hidden md:grid mb-3  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Get insights about our sponsors and collaborations
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            </li>

                            <li><Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="  font-[Poppins] hover:text-[#4d55bb]  inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-2xl font-light hvrgrow">
                                        Initiatives
                                        {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute z-10 mt-2 md:right-0 w-72 md:w-[900px] origin-center rounded-md bg-white shadow-lg ">
                                        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="ml-2 md:-ml-[60%] md:mt-3 text-[#4d55bb] font-medium font-sans  md:text-2xl">Idea Submission</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]  hidden md:grid  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Drop down your ideas to get mentored by skilled professionals
                                                        </p>
                                                    </div>

                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans md:text-2xl">Grow Your Startup </a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]   hidden md:grid   font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Get guidance from our mentors to upscale your startup
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="  ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans  md:text-2xl">Work with us</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]  hidden md:grid font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Our team would be more than happy to assist you!
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans  md:text-2xl">Internship Portal</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb] hidden md:grid mb-3  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Get the craziest internships of your choice to upskill yourselves
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="/" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans md:text-2xl">E-Community</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb] hidden md:grid mb-3  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Be the first to receive all the updates by joining our Discord community
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="/" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans md:text-2xl">Mentor Forum</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb] hidden md:grid mb-3  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Find a mentor who can best assist your requirements
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            </li>


                            <li><Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="  font-[Poppins] hover:text-[#4d55bb]  inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-2xl font-light hvrgrow">
                                        Learn
                                        {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute z-10 mt-2 md:right-0 w-44 md:w-[900px] origin-center rounded-md bg-white shadow-lg ">
                                        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="ml-2 md:-ml-[60%] md:mt-3 text-[#4d55bb] font-medium font-sans  md:text-2xl">Resource</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]  hidden md:grid  font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Resources to your rescue!
                                                        </p>
                                                    </div>

                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans md:text-2xl">Blog</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]   hidden md:grid   font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Go through out blogs on medium
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="hvr-wobble-horizontal cursor-pointer">
                                                        <div className="grid grid-cols-2">
                                                            <svg className="hidden md:flex w-10 ml-3 mt-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="BULB"><path d="m52.39 20.67a20.58 20.58 0 0 0 -19.39-19.4 20.43 20.43 0 0 0 -21.42 20.4 20.25 20.25 0 0 0 6.29 14.73 12.33 12.33 0 0 1 3.74 8.88 4.63 4.63 0 0 0 3.89 4.56v2.71h-1a.75.75 0 1 0 0 1.5h1v.74a3.39 3.39 0 0 0 2.65 3.31v.8a3.85 3.85 0 1 0 7.69 0v-.8a3.4 3.4 0 0 0 2.65-3.31v-.74h1.37a.75.75 0 0 0 0-1.5h-1.37v-2.71a4.63 4.63 0 0 0 3.89-4.56 12 12 0 0 1 3.62-8.77 20.42 20.42 0 0 0 6.39-15.84zm-18 38.23a2.35 2.35 0 1 1 -4.69 0v-.71h4.69zm2.61-4.11a1.9 1.9 0 0 1 -1.9 1.9h-6.2a1.9 1.9 0 0 1 -1.9-1.9v-.74h10zm-10-2.24v-2.63h10v2.63zm18-17.13a13.58 13.58 0 0 0 -4.1 9.86 3.15 3.15 0 0 1 -3.14 3.14h-11.51a3.15 3.15 0 0 1 -3.14-3.15 13.83 13.83 0 0 0 -4.2-10 18.93 18.93 0 0 1 .09-27.27 18.76 18.76 0 0 1 13-5.25h1a18.92 18.92 0 0 1 12 32.67z" /><path d="m32 26.43a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z" /><path d="m23.36 19.2a.75.75 0 0 0 0 1.06.78.78 0 0 0 .51.2.74.74 0 0 0 .55-.24 10.24 10.24 0 0 1 15.08 0 .75.75 0 1 0 1.1-1 11.74 11.74 0 0 0 -17.28 0z" /><path d="m32 20.92a6.26 6.26 0 0 0 -4.6 2 .75.75 0 0 0 .05 1.08.75.75 0 0 0 1.06 0 4.77 4.77 0 0 1 7 0 .74.74 0 0 0 1.06 0 .75.75 0 0 0 .05-1.06 6.25 6.25 0 0 0 -4.62-2.02z" /><path d="m32 8.07a13.6 13.6 0 1 0 13.6 13.6 13.61 13.61 0 0 0 -13.6-13.6zm0 25.69a12.1 12.1 0 1 1 12.1-12.09 12.1 12.1 0 0 1 -12.1 12.09z" /></g> </svg>
                                                            <a href="" className="  ml-2 md:-ml-[60%] -mt-3 md:mt-3 text-[#4d55bb] font-medium font-sans  md:text-2xl">FAQ</a>
                                                        </div>
                                                        <p

                                                            className={classNames(
                                                                active ? ' ' : '',
                                                                'text-[#4d55bb]  hidden md:grid font-medium md:text-black md:font-normal ml-1 md:ml-14  '
                                                            )}
                                                        >
                                                            Get your Queries answered.
                                                        </p>
                                                    </div>
                                                )}
                                            </Menu.Item>


                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            </li>
                            <li className="inline-flex font-[Poppins] w-full justify-center rounded-md bg-white px-4 py-2 text-2xl font-light hvrgrow hover:text-[#4d55bb]">
                                <a href="javascript:void(0)">Incubator</a>
                            </li>
                            <li className="inline-flex w-full font-[Poppins] justify-center rounded-md bg-white px-4 py-2 text-2xl font-light hvrgrow hover:text-[#4d55bb]">
                                <a href="javascript:void(0)">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}