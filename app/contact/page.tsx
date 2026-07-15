import Contact from '@/components/Contact';
{/*import Map from '@/components/Map';*/}
import { seoData } from '@/lib/seoData';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = seoData.contact;

export default function ContactPage() {
    return (
        <section className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
            <div className="py-16 xl:py-[70px]">
                <Contact />
                {/*<Map />*/}
            </div>
        </section>
    )
}