import React from 'react';
import Image from 'next/image';
import { heroData } from '@/lib/siteData';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="about" className="md:flex pt-16 xl:pt-[70px] space-y-6">
            <div className="md:w-2/6 xl:w-1/4 md:ml-6 lg:ml-8 xl:ml-10 text-right md:order-2">
                <div className="relative inline-block max-w-[480px] md:max-w-[270px] before:content-[''] before:-z-[1] before:absolute before:-top-4 before:right-4 before:-bottom-4 before:-left-4 before:bg-white/30 before:border before:border-charcoal/20 before:border-dashed before:rounded-tl-[50%] before:rounded-bl-[50%] dark:before:bg-charcoal/30 dark:before:border-white/30">
                    <Image src={heroData.avatarSrc} alt="Avatar" loading="lazy" width={300} height={300} className="rounded-tl-[50%] rounded-bl-[50%]" />
                    <ul className="absolute bottom-5 left-2 space-x-1">
                        {heroData.socialLinks.map((item, index) => (
                            <li key={index} className="list-none inline-block">
                                <Link href={item.href} className="inline-flex justify-center items-center w-11 h-11 bg-charcoal/40 rounded-full backdrop-blur-[5px] text-white transition ease-linear duration-75 hover:bg-charcoal/30">
                                    <i className={item.bootstrapIcons}></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="md:w-4/6 xl:w-3/4 space-y-5 md:order-1">
                {/* <h1 className="font-outfit font-medium text-charcoal text-5xl leading-[1.2] dark:text-white">{heroData.title}</h1> */}
                <h1 className="font-outfit font-medium text-5xl leading-[1.2] text-transparent [-webkit-text-stroke:1.5px_#1f2937] dark:[-webkit-text-stroke:1.5px_#ffffff]"> {heroData.title} </h1>
                   <a href={heroData.resumeUrl} download className="inline-flex items-center bg-white/30 px-6 py-3 rounded-full border border-charcoal/20 border-dashed text-blue-500 dark:bg-charcoal/30 dark:border-white/30 dark:text-blue-500/80">
                    <span className="relative inline-block w-2 h-2 bg-green-400 rounded-full me-3 before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-green-400 before:rounded-full before:animate-hireDot"></span> 
                    <span>{heroData.hireStatus}</span>
                    </a>
            </div>
        </section>
    );
};