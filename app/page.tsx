import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import SlidingText from "@/components/SlidingText";

export default function Home() {
    return (
        <>
            <div className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
                {/* Hero */}
                <Hero />

                {/* Services */}
                <Services />

                {/* Experience */}
                <Experience />
            </div>


            {/* Portfolio */}
            <Portfolio />

            <div className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
                {/* Skills */}
                <Skills />

                {/* Resume */}
                <Resume />
            </div>


            <SlidingText />
        </>
    );
}
