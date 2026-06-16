import { seoData } from "@/lib/seoData";
import { blogData } from "@/lib/siteData";
import { truncateText } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: seoData.blog.title,
    description: seoData.blog.description,
    openGraph: {
        title: seoData.blog.title,
        description: seoData.blog.description,
    },
    keywords: seoData.blog.keywords,
};

export default function BlogPage() {
    return (
        <div className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
            <div className="py-16 xl:py-[70px]">
                <h1 className="font-outfit font-medium text-charcoal text-6xl xl:text-7xl leading-[1.2] dark:text-white">Blog Posts</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-8 lg:mt-12">
                    {blogData.map(post => (
                        <div key={post.slug}>
                            <div>
                                <Link href={`/blog/${post.slug}`} className="block relative group">
                                    <div className="overflow-hidden rounded-lg group-hover:scale-[0.98] transition-all ease-custom duration-500">
                                        <Image
                                            src={post.thumbnail}
                                            alt={post.title}
                                            loading="lazy"
                                            width={660}
                                            height={330}
                                            className="aspect-[1/0.5] object-cover group-hover:scale-105 transition-all ease-custom duration-500"
                                        />
                                    </div>
                                    <div className="z-[1] absolute top-5 right-5 bg-charcoal/30 px-4 py-2 rounded-full backdrop-blur-[5px] font-outfit font-medium uppercase text-sm text-white tracking-[1px]">
                                        {post.category}
                                    </div>
                                </Link>
                                <div className="px-6 mt-6 space-y-3">
                                    <h3 className="font-outfit font-medium text-2xl lg:text-3xl">
                                        <Link href={`/blog/${post.slug}`} className="relative text-charcoal transition ease-linear duration-75 hover:text-black dark:text-white dark:hover:text-white lg:before:content-[''] lg:before:absolute lg:before:-bottom-[1px] lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black dark:lg:before:bg-white lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-pColor leading-7 dark:text-white/80">{truncateText(post.excerpt, 130)}</p>
                                    <div className="block italic text-sm text-charcoal/50 dark:text-white/50">
                                        Posted on {post.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
