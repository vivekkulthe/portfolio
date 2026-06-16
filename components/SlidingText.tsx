'use client';

import { slidingTextData } from '@/lib/siteData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

export default function SlidingText() {
    return (
        <div className="py-12">
            <Swiper
                slidesPerView="auto"
                spaceBetween={70}
                speed={20000}
                loop={true}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="sliding-text"
                wrapperClass="ease-linear"
            >
                {slidingTextData.map((text, index) => (
                    <SwiperSlide key={index} className="!w-auto">
                        <h2 className="font-poppins font-semibold stroke-text text-5xl md:text-6xl xl:text-7xl leading-tight md:leading-tight xl:leading-tight opacity-25">
                            {text}
                        </h2>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}