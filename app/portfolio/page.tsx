import { Metadata } from "next";
import { seoData } from '@/lib/seoData';
import PortfolioPage from "./client-page";

export const metadata: Metadata = {
    title: seoData.portfolio.title,
    description: seoData.portfolio.description,
    openGraph: {
        title: seoData.portfolio.title,
        description: seoData.portfolio.description,
    },
    keywords: seoData.portfolio.keywords,
};

export default function Page() {
    return <PortfolioPage />;
}