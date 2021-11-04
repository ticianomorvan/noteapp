import { FaTasks, FaArrowDown } from 'react-icons/fa';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Title() {
    const titleElements: Array<{id: string, options: Object}> = [
        {
            id: 'title-tasks-icon',
            options: {
                delay: 900,
                distance: '-4em'
            }
        },
        {
            id: 'title-h1',
            options: {
                delay: 500,
                distance: '1em'
            }
        },
        {
            id: 'title-h2',
            options: {
                delay: 700,
                distance: '0.85em'
            }
        },
        {
            id: 'title-start',
            options: {
                delay: 1500
            }
        },
    ]

    useEffect(() => {
        titleElements.forEach((item) => {
            ScrollReveal().reveal(`#${item.id}`, item.options);
        })
    }, [])
    return (
        <section id="section-title" className="h-screen flex flex-col items-center justify-center">
            <span id="title-tasks-icon" className="p-3 border-4 rounded-lg">
                <FaTasks className="text-2xl" />
            </span>
            <h1 id="title-h1" className="font-gilroy-bold text-primary text-5xl p-2">Note app</h1>
            <h2 id="title-h2" className="font-gilroy-medium text-xl">For all of your chores.</h2>
            <span id="title-start" className="flex flex-col items-center relative top-36">
                <p className="font-gilroy-regular text-primary">Start working!</p>
                <FaArrowDown className="text-primary m-2" />
            </span>
        </section>
    )
}