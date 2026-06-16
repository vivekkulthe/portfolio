import React from 'react'

export default function Loading() {
    return (
        <div className="preloader z-30 fixed top-0 left-0 bg-bodyBg w-full h-full text-center transition-all ease-out duration-500 dark:bg-darkBodyBg">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] aspect-[1] animate-loaderDots"></div>
        </div>
    )
}