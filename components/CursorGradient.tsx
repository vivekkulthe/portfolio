'use client';

import { useEffect } from 'react';

export default function CursorGradient() {
    useEffect(() => {
        const cursor = document.querySelector<HTMLDivElement>('.cursor-gradient');

        if (cursor) {
            const handleMouseMove = (e: MouseEvent) => {
                cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            };

            document.addEventListener('mousemove', handleMouseMove);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    return (
        <div className="cursor-gradient -z-[1] fixed top-0 left-0 translate-x-[-50%] -translate-y-1/2 opacity-40 flex justify-center items-center blur-[250px] bg-cursorGradient w-80 h-80 rounded-full pointer-events-none transition-all ease-out duration-100 dark:opacity-50"></div>
    );
};
