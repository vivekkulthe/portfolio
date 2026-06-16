import { blogData } from '@/lib/siteData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import GalleryWrapper from '@/components/GalleryWrapper';
import { getBlogPostSEO } from '@/lib/seoData';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    const post = blogData.find(p => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const seo = getBlogPostSEO(slug, post.title, post.excerpt);

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: 'article',
            authors: [post.author.label],
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title,
            description: seo.description,
        },
    };
}

export default async function BlogPost({ params, }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const post = blogData.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto px-7">
            <GalleryWrapper>
                {/* Blog Title */}
                <div className="py-16 xl:py-[70px]">
                    <div className="lg:flex space-y-12 lg:space-x-10 lg:space-y-0">
                        <div className="lg:w-2/3 space-y-4">
                            <div className="inline-block bg-white/30 px-6 py-3 rounded-full border border-charcoal/20 border-dashed italic text-sm text-charcoal/60 dark:bg-charcoal/30 dark:border-white/30 dark:text-white/60">
                                Posted on: {post.date}
                            </div>
                            <h1 className="font-outfit font-medium text-charcoal text-5xl md:text-6xl xl:text-7xl leading-[1.2] dark:text-white">{post.title}</h1>
                            <p className="text-pColor dark:text-white/80">{post.excerpt}</p>
                        </div>
                        <div className="lg:w-1/3 bg-white lg:h-fit p-8 md:p-10 xl:p-12 rounded-3xl shadow-customShadow hover:shadow-customShadowHover transition ease-out duration-150 dark:bg-charcoal">
                            <h5 className="font-outfit font-medium text-xl dark:text-white">Category:</h5>
                            <p className="text-pColor dark:text-white/80">{post.category}</p>
                            <div className="mt-5">
                                <h5 className="font-outfit font-medium text-xl text-charcoal dark:text-white">Posted by:</h5>
                                <a className="relative text-charcoal lg:before:content-[''] lg:before:absolute lg:before:-bottom-[1px] lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn dark:text-white dark:before:bg-white" href={post.author.url}>{post.author.label}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-16 xl:pb-[70px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {post.images.map((image, index) => (
                            <div className="group" key={index}>
                                <a className="block glightbox" href={image}>
                                    <div className="overflow-hidden rounded-3xl">
                                        <Image
                                            src={image}
                                            alt={post.title}
                                            loading="lazy"
                                            width={660}
                                            height={396}
                                            data-gallery="gallery"
                                            className="group-hover:scale-105 transition-all ease-custom duration-500"
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: post.content }} className="mt-8 lg:mt-12" />

                    {post.video && (
                        <div className="mt-8 lg:mt-12">
                            <div className="relative overflow-hidden rounded-3xl group">
                                <Image
                                    src={post.video.thumbnail}
                                    alt={post.title}
                                    loading="lazy"
                                    width={1280}
                                    height={500}
                                    className="group-hover:scale-105 transition-all ease-custom duration-500"
                                />

                                <a className="glightbox absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center w-[70px] h-[70px] rounded-full backdrop-blur-[5px] text-xl text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[70px] before:h-[70px] before:rounded-full before:bg-gradient-to-tr before:from-white before:to-transparent before:transition before:ease-linear before:duration-100 before:opacity-10 hover:before:opacity-30" href={post.video.url} data-gallery="video">
                                    <i className="bi bi-play"></i>
                                </a>
                            </div>
                        </div>
                    )}
                    <div className="mt-8 lg:mt-12">
                        <div dangerouslySetInnerHTML={{ __html: post.content2 }} />
                    </div>
                </div>
            </GalleryWrapper>
        </div>
    );
}
