'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { headerData } from '@/lib/siteData';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const menuRef = useRef<any>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        }
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const handleToggle = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };


    // Toggle the navigation visibility
    const handleNavToggle = () => {
        setIsNavVisible(prev => !prev);
    };

    // Close the menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
            toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
            setIsNavVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative flex items-center h-14 lg:h-[72px]">
            {/* Nav */}
            <nav className="z-10 fixed top-0 flex items-center bg-white/90 h-14 lg:h-[72px] lg:px-7 rounded-b-[20px] backdrop-blur-md shadow-customShadow hover:shadow-customShadowHover transition ease-out duration-150 dark:bg-charcoal">
                {/* Desktop Additional Menu Toggle */}
                <button className="desktop-menu-toggle hidden lg:inline-flex group"
                    onClick={handleNavToggle}
                    ref={toggleRef}
                >
                    <span className="relative block w-5 h-[14px] me-5 before:content-[''] before:absolute before:top-0 before:left-0 before:w-5 before:h-1 before:rounded-md before:border before:border-charcoal before:transition before:ease-linear before:duration-75 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-5 after:h-1 after:rounded-md after:border after:border-charcoal after:transition after:ease-linear after:duration-75 group-hover:before:bg-charcoal group-hover:after:bg-charcoal dark:before:border-white dark:after:border-white dark:group-hover:before:bg-white dark:group-hover:after:bg-white"></span>
                </button>
                {/* Mobile Nav Toggle */}
                <button
                    onClick={handleNavToggle}
                    ref={toggleRef}
                    className={`mobile-nav-toggle inline-flex justify-center items-center group w-14 h-14 lg:hidden ${isNavVisible ? 'active' : ''}`}
                >
                    <span className="relative block w-5 h-[14px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-5 before:h-1 before:rounded-md before:border before:border-charcoal before:transition before:ease-linear before:duration-75 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-5 after:h-1 after:rounded-md after:border after:border-charcoal after:transition after:ease-linear after:duration-75 group-hover:before:bg-charcoal group-hover:after:bg-charcoal dark:before:border-white dark:after:border-white dark:group-hover:before:bg-white dark:group-hover:after:bg-white"></span>
                </button>

                {/* Nav */}
                <ul className={`nav-list absolute top-16 left-0 bg-white min-w-52 p-6 rounded-[20px] space-y-2 invisible opacity-0 transition-all ease-linear duration-100 shadow-customShadow lg:shadow-none lg:visible lg:opacity-100 lg:static lg:top-auto lg:left-auto lg:space-x-5 lg:space-y-0 lg:bg-transparent lg:p-0 lg:rounded-none font-outfit font-medium uppercase text-sm tracking-[0.5px] dark:bg-charcoal dark:lg:bg-transparent ${isNavVisible ? 'show' : ''}`} ref={menuRef} >
                    {headerData.navigation.map((item) => (
                        <li key={item.name} className="list-none block lg:inline-block">
                            <Link href={item.href} className="relative text-charcoal transition ease-linear duration-75 hover:text-black dark:text-white dark:hover:text-white lg:before:content-[''] lg:before:absolute lg:before:-bottom-[1px] lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black dark:lg:before:bg-white lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn">{item.name}</Link>
                        </li>
                    ))}

                    {/* Toggle Dark Theme */}
                    <li className="list-none block lg:inline-block">
                        <Link href="javascript:;" className="relative text-charcoal transition ease-linear duration-75 hover:text-black dark:text-white dark:hover:text-white lg:before:content-[''] lg:before:absolute lg:before:-bottom-[1px] lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black dark:lg:before:bg-white lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn" onClick={handleToggle}>
                            {darkMode ? 'Light Version' : 'Dark Version'}
                        </Link>
                    </li>
                </ul>

                {/* Toggle Menu (for Desktop) */}
                <div
                    className={`desktop-menu hidden lg:inline-block absolute top-20 left-0 bg-white p-7 rounded-[20px] w-[300px] invisible opacity-0 shadow-customShadow hover:shadow-customShadowHover transition ease-out duration-150 dark:bg-charcoal ${isNavVisible ? 'show' : ''}`}
                    ref={menuRef}
                >
                    <h6 id="phone" className="font-outfit font-semibold dark:text-white">Phone:</h6>
                    {headerData.phoneNumbers.map((phone, index) => (
                        <p key={index} className="text-pColor dark:text-white/80">{phone}</p>
                    ))}
                    <div className="mt-4">
                        <h6 id="email" className="font-outfit font-semibold dark:text-white">Email:</h6>
                        <p className="text-pColor dark:text-white/80">{headerData.email}</p>
                    </div>
                    {/* Social icons */}
                    <ul className="space-x-2 mt-4">
                        {headerData.socialLinks.map((item, index) => (
                            <li key={index} className="list-none inline-block">
                                <Link href={item.href} className="text-charcoal hover:text-black dark:text-white dark:hover:text-white">
                                    <i className={item.bootstrapIcons}></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            {/* Logo */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
{/*                <h3 className="text-2xl font-outfit font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-500"> */}
                   <h3 className="text-2xl text-blue-500 dark:text-blue-500" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    <Link href="/">
                        {headerData.logo}
                    </Link>
                    <span className="animate-cursor-blink" aria-hidden="true">_</span>
                </h3>
            </div>
        </div>
    );
};