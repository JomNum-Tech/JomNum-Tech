"use client"

import { Testimonial } from '@/types/TestimonialType';
import Image from 'next/image';
import React from 'react';
import { StarIcon } from '../Icon';

const testimonialData: Testimonial[] = [
    {
        img: {
            url: '/assets/mentorSpring.jpg',
        },
        text: "Best Platform Ever, support khmer product",
        user: "Chan Chhaya",
        profession: "Mentor",
    },
    {
        img: {
            url: '/assets/mentorSpring.jpg',
        },
        text: "Best Platform Ever, support khmer product",
        user: "Chan Chhaya",
        profession: "Mentor",
    },
    {
        img: {
            url: '/assets/mentorSpring.jpg',
        },
        text: "Best Platform Ever, support khmer product",
        user: "Chan Chhaya",
        profession: "Mentor",
    },
]

// Define props for the TestimonialItem component
interface TestimonialItemProps {
    data: Testimonial;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ data }) => {
    const { img, text, user, profession } = data;
    
    return (
        <div className="bg-white dark:bg-[#404156] shadow-xl rounded-b-xl h-full p-6 lg:p-12">
            <div className="w-full mx-auto flex justify-center">
                <div className="w-40 h-40 -mt-28 inline-flex justify-center items-center rounded-full border-4 border-white dark:border-[#404156] mx-auto overflow-hidden">
                    <Image 
                        src={img.url} 
                        width={500}
                        height={500}
                        alt={user}                        
                        className="rounded-full object-cover w-full h-full" 
                    />
                </div>
            </div>
            <div className="p-6 pb-0 text-center">
                <p className="text-[17px] leading-[1.7] opacity-60">{text}</p>
                <div className="flex justify-center align-center gap-2 pt-4">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <h4 className="text-xl font-medium mt-12 mb-2">{user}</h4>
                <h6 className="text-blue-600">{profession}</h6>
            </div>
        </div>
    );
};

const Testimonial: React.FC = () => {
    return (
        <section className="ezy__testimonial22_PUBEiADA py-14 md:py-24 bg-white dark:bg-[#2E2F41] text-zinc-900 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="max-w-2xl text-center">
                        <h2 className="text-3xl md:text-[35px] font-bold mb-6 text-green-500">
                            What People Says
                        </h2>
                        <div className="max-w-xl">
                            <p className="text-lg leading-6 opacity-60">
                                Experience from real customer
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {testimonialData.map((data, i) => (
                        <div className="col-span-3 md:col-span-1 mt-24 md:mt-12" key={i}>
                            <TestimonialItem data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;