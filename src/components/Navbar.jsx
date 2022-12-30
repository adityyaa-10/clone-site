import { useState } from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import styles from '../index.css?inline'
import logo from '../assets/logo.jpg'

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
                        <a href="javascript:void(0)">
                            <img src={logo} className='w-[100px]' alt="" />
                        </a>
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
                        className={`flex-1 justify-self-center pb-3 mt-8 ml-36 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li><Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className=" hover:text-[#4d55bb]  inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-2xl font-light hvrgrow">
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
                                    <Menu.Items className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal '
                                                        )}
                                                    >
                                                        Who we are?
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Gallery
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Past Speakers
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Events
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Our Team
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Associations
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            </li>
                            <li><Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className=" hover:text-[#4d55bb] inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-2xl font-light hvrgrow">
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
                                    <Menu.Items className="hover:text[#4d55bb] absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Idea Submission
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Grow Your Startup
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Work with us
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Internship Portal
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        E-Community
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Mentor Forum
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            </li><li><Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className=" hover:text-[#4d55bb] inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-2xl font-light hvrgrow">
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
                                    <Menu.Items className="hover:text[#4d55bb] absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Resource
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        Blog
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#4d55bb]' : '',
                                                            'block px-4 py-2 text-md hvr-wobble-horizontal'
                                                        )}
                                                    >
                                                        FAQ
                                                    </a>
                                                )}
                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            </li>
                            <li className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-2xl font-light hvrgrow hover:text-[#4d55bb]">
                                <a href="javascript:void(0)">Incubator</a>
                            </li>
                            <li className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-2xl font-light hvrgrow hover:text-[#4d55bb]">
                                <a href="javascript:void(0)">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}