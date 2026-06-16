/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { portfolioData } from '@/lib/siteData';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Portfolio() {
    const sliderRef = useRef<any>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const updateNavigation = (swiper: any) => {
        if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
        }
    }, []);

    // Limit the number of projects to 8
    const projects = portfolioData.projects.slice(0, 8);

    return (
        <div id="portfolio" className="container max-w-[1600px] mx-auto px-7 min-[1400px]:px-14">
            <div className="bg-charcoal overflow-hidden w-full py-[70px] rounded-3xl">
                <div className="container max-w-[1320px] mx-auto px-7">
                    <div className="space-y-4 xl:space-y-0 xl:flex xl:justify-between xl:items-end">
                        <h2 className="relative font-poppins font-semibold text-5xl md:text-6xl xl:text-7xl leading-tight stroke-text-white after:content-[''] after:absolute after:top-0 after:right-0 after:-bottom-[9px] after:left-0 after:bg-gradient-to-t after:from-charcoal after:to-transparent">
                            {portfolioData.title}
                        </h2>

                        <div className="space-x-1">
                            <button className="portfolio-prev list-none inline-flex justify-center items-center relative w-12 h-12 rounded-full text-white cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-12 before:h-12 before:rounded-full before:bg-gradient-to-tr before:from-white before:to-transparent before:transition before:ease-linear before:duration-100 before:opacity-10 hover:before:opacity-30" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                <i className="bi bi-caret-left"></i>
                            </button>
                            <button className="portfolio-next list-none inline-flex justify-center items-center relative w-12 h-12 rounded-full text-white cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-12 before:h-12 before:rounded-full before:bg-gradient-to-tr before:from-white before:to-transparent before:transition before:ease-linear before:duration-100 before:opacity-10 hover:before:opacity-30" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                <i className="bi bi-caret-right"></i>
                            </button>
                        </div>
                    </div>
                    {/* Portfolio Slider */}
                    <Swiper
                        onSwiper={(swiper) => {
                            sliderRef.current = swiper;
                            swiper.on('init', () => {
                                updateNavigation(swiper);
                            });
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            // when window width is >= 992px
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="portfolio-slider overflow-visible mt-12"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="portfolio-box">
                                    <Link href={`/portfolio/${project.slug}`} className="relative group block">
                                        <div className="overflow-hidden rounded-lg group-hover:scale-[0.98] transition-all ease-custom duration-500">
                                            <Image
                                                src={project.thumbnail}
                                                alt={project.title}
                                                loading="lazy"
                                                width={620}
                                                height={407}
                                                className="aspect-[1/0.6] object-cover group-hover:scale-105 transition-all ease-custom duration-500"
                                            />
                                        </div>
                                        <div className="z-[1] absolute top-5 right-5 bg-charcoal/30 px-4 py-2 rounded-full backdrop-blur-[5px] font-outfit font-medium uppercase text-sm text-white tracking-[1px] invisible opacity-0 transition-all ease-linear duration-100 group-hover:visible group-hover:opacity-100">{project.category}</div>
                                        <div className="z-[1] absolute right-5 bottom-5 left-5 opacity-50 transition ease-linear duration-75 group-hover:opacity-100">
                                            <h2 className="font-outfit font-semibold text-3xl text-white">{project.title}</h2>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    )
}