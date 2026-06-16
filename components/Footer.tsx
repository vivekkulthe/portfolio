import { footerData } from '@/lib/siteData';

export default function Footer() {
    return (
        <footer>
            <div className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
                <div className="md:flex md:justify-between bg-charcoal p-8 md:p-10 xl:p-12 rounded-t-3xl text-white/80 space-y-2 md:space-y-0">
                    <div className="text-center md:text-left">
                        {footerData.copyright}
                    </div>
                    <div className="text-center md:text-right">
                        <a href="#" className="relative text-white lg:before:content-[''] lg:before:absolute lg:before:-bottom-[1px] lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-white lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn">{footerData.scrollToTopText}</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}