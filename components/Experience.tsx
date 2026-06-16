'use client';

import { experienceData, clientsData, testimonialsData } from '@/lib/siteData';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Experience() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    return (
        <section>
            {/* About */}
            <div className="lg:flex pt-16 xl:pt-[70px] space-y-6 lg:space-x-10 lg:space-y-0">
                <div className="lg:w-1/6 lg:text-center space-y-2 lg:space-y-3.5">
                    <div className="font-outfit font-medium text-7xl dark:text-white">
                        {experienceData.yearsOfExperience}
                    </div>
                    <p className="text-pColor dark:text-white/80">Years of Experience</p>
                </div>
                <div className="lg:w-5/6">
                    <h2 className="font-outfit font-medium text-4xl text-charcoal leading-[1.2] dark:text-white">
                        {experienceData.description}
                    </h2>
                </div>
            </div>

            {/* Clients/Testimonial */}
            <div className="xl:flex py-16 xl:py-[70px] space-y-6 xl:space-x-10 xl:space-y-0">
                <div className="xl:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                    {clientsData.map((client, index) => (
                        <div key={index} className="bg-white/30 p-6 md:p-7 border border-charcoal/20 border-dashed rounded-3xl dark:bg-charcoal/30 dark:border-white/30">
                            <Link href={client.url} className="opacity-50 transition ease-out duration-[120ms] hover:opacity-100">
                                <Image
                                    src={client.logoDark}
                                    alt="Client Logo"
                                    loading="lazy"
                                    width={163}
                                    height={54}
                                    className="hidden dark:inline-block"
                                />
                                <Image
                                    src={client.logoLight}
                                    alt="Client Logo"
                                    loading="lazy"
                                    width={163}
                                    height={54}
                                    className="inline-block dark:hidden"
                                />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="xl:w-5/12 relative bg-white rounded-3xl p-8 pr-14 md:px-10 md:py-12 xl:px-12 xl:py-14 shadow-customShadow hover:shadow-customShadowHover transition ease-out duration-150 dark:bg-charcoal">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            el: '.testimonial-pagination',
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000
                        }}
                        modules={[Pagination, Autoplay]}
                        className="testimonial-slider"
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index} className="space-y-3">
                                <div className="text-yellow-400">
                                    <i className="bi bi-star-fill text-golden-yellow"></i>
                                    <i className="bi bi-star-fill text-golden-yellow"></i>
                                    <i className="bi bi-star-fill text-golden-yellow"></i>
                                    <i className="bi bi-star-fill text-golden-yellow"></i>
                                    <i className="bi bi-star-fill text-golden-yellow"></i>
                                </div>
                                <p className="text-pColor leading-7 dark:text-white/80">{testimonial.quote}</p>
                                <h5 className="font-outfit font-medium text-xl text-charcoal dark:text-white">{testimonial.author}</h5>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute right-0 bottom-0 bg-charcoal p-3.5 rounded-tl-[20px] rounded-br-[20px] dark:bg-white/10">
                        <div className="testimonial-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}