import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGradient from "@/components/CursorGradient";
import { seoData } from "@/lib/seoData";

export const metadata: Metadata = {
    title: seoData.home.title,
    description: seoData.home.description,
    openGraph: {
        title: seoData.home.title,
        description: seoData.home.description,
    },
    keywords: seoData.home.keywords,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="z-[1] overflow-x-hidden bg-bodyBg font-opensans dark:bg-darkBodyBg">

                <div className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
                    {/* Header */}
                    <Header />
                </div>

                {children}

                {/* Footer */}
                <Footer />

                {/* Cursor Gradient */}
                <CursorGradient />
            </body>
        </html>
    );
}
