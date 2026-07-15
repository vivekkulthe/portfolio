import { Metadata } from "next";
import { seoData } from '@/lib/seoData';
import PortfolioPage from "./client-page";

export const metadata: Metadata = seoData.portfolio;

export default function Page() {
    return <PortfolioPage />;
}