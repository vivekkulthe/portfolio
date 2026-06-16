'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/lib/siteData';
import Link from 'next/link';

export default function PortfolioPage() {
    const portfolioRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let mixer: any;

        const initMixitup = async () => {
            if (typeof window !== 'undefined') {
                const mixitupModule = await import('mixitup');
                const mixitup = mixitupModule.default;

                if (portfolioRef.current) {
                    mixer = mixitup(portfolioRef.current, {
                        selectors: {
                            target: '.portfolio-item'
                        },
                        animation: {
                            duration: 250
                        }
                    });
                }
            }
        };

        initMixitup();

        return () => {
            if (mixer) {
                mixer.destroy();
            }
        };
    }, []);

    return (
        <section className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
            <div className="py-16 xl:py-[70px]">
                <div className="lg:flex lg:justify-between lg:items-end space-y-4 lg:space-y-0">
                    <div>
                        <h1 className="font-outfit font-medium text-charcoal text-6xl xl:text-7xl leading-[1.2] dark:text-white">Latest Works</h1>
                    </div>
                    <div>
                        <ul className="filter space-x-1">
                            {portfolioData.filterCategories.map((category, index) => (
                                <li
                                    key={index}
                                    data-filter={index === 0 ? 'all' : `.${category}`}
                                    className="list-none inline-block bg-charcoal/90 px-6 py-3 rounded-full text-white cursor-pointer transition ease-linear duration-75 hover:bg-charcoal dark:bg-white/10 dark:hover:bg-white/15"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div ref={portfolioRef} className="portfolio-grid grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-8 lg:mt-12">
                    {portfolioData.projects.map((project) => (
                        <div key={project.slug} className={`portfolio-item ${project.category}`}>
                            <Link href={`/portfolio/${project.slug}`} className="relative group block">
                                <div className="overflow-hidden rounded-lg group-hover:scale-[0.98] transition-all ease-custom duration-500">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        width={660}
                                        height={396}
                                        layout="responsive"
                                        className="aspect-[1/0.6] object-cover group-hover:scale-105 transition-all ease-custom duration-500"
                                    />
                                </div>
                                <div className="z-[1] absolute top-5 right-5 bg-charcoal/30 px-4 py-2 rounded-full backdrop-blur-[5px] font-outfit font-medium uppercase text-sm text-white tracking-[1px] invisible opacity-0 transition-all ease-linear duration-100 group-hover:visible group-hover:opacity-100">
                                    {project.category}
                                </div>
                                <div className="z-[1] absolute right-5 bottom-5 left-5 opacity-50 transition ease-linear duration-75 group-hover:opacity-100">
                                    <h2 className="font-outfit font-semibold text-3xl text-white">{project.title}</h2>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}