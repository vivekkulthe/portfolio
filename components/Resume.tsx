import { resumeData } from '@/lib/siteData';

export default function Resume() {
    return (
        <section id="resume" className="pt-16 xl:pt-[70px] space-y-12 xl:flex xl:space-x-10 xl:space-y-0">
            <div className="xl:w-2/3 space-y-6">
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="lg:flex space-y-2 lg:space-x-6 lg:space-y-0">
                        <div className="lg:min-w-52 lg:text-right">
                            <span className="inline-block bg-white/30 px-6 py-3 rounded-full border border-charcoal/20 border-dashed font-outfit font-medium uppercase text-sm tracking-[1px] text-pColor dark:bg-charcoal/30 dark:border-white/30 dark:text-white/80">
                                {job.period}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-outfit font-semibold text-charcoal text-2xl mb-2 dark:text-white">
                                {job.title}
                                <span className="font-medium italic text-charcoal/30 dark:text-white/30">@{job.company}</span>
                            </h4>
                            <p className="text-pColor leading-7 dark:text-white/80">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="xl:w-1/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="bg-steelBlue p-8 md:p-10 xl:p-12 rounded-3xl shadow-customShadow hover:shadow-customShadowHover transition ease-out duration-150 dark:bg-steelBlueDarker">
                        <div className="bg-theme-secondary border-radius box-shadow p-4 p-md-5 icon-3xl">
                            <div className="text-white/50 text-4xl mb-8">
                                <i className={` ${edu.icon} text-white-50`}></i>
                            </div>
                            <h5 className="font-outfit font-medium text-xl text-white mb-1">{edu.degree}</h5>
                            <p className="text-white/80">{edu.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}