import { skillsData } from '@/lib/siteData';

export default function Skills() {
    return (
        <section className="pt-16 xl:pt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
                <div key={index}>
                    <h6 className="font-outfit font-medium uppercase text-sm tracking-[1px] mb-2 dark:text-white">{skill.name}</h6>
                    <div className="animated-progress relative bg-charcoal/10 h-1 mt-1 rounded-md dark:bg-white/10">
                        <div data-progress={skill.progress} className="absolute block bg-charcoal w-[10%] h-full rounded-md text-charcoal transition-all ease-custom duration-700 dark:bg-white after:absolute after:-top-7 after:right-0 after:opacity-0 after:font-outfit after:font-medium after:transition-all after:ease-out after:duration-150 dark:after:text-white dark:after:font-normal progress-show" style={{ width: `${skill.progress}%` }}></div>
                    </div>
                </div>
            ))}
        </section>
    )
}