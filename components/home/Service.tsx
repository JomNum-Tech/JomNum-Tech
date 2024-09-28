"use client";

import { Service } from '@/types/ServiceType';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 

const serviceList: Service[] = [
    {
        color: "Yellow",
        title: "Deployment",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CI",
        },
        description: "Automation Continuous Integration",
    },
    {
        color: "Yellow",
        title: "Create Pipeline",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Automation Continuous Delivery",
    },
    {
        color: "Green",
        title: "Learning Platform",
        image: {
            url: "/assets/springOps.jpg",
            alt: "Learning",
        },
        description: "Automation Workflow",
    },
    {
        color: "Yellow",
        title: "Documentation",
        image: {
            url: "/assets/springOps.jpg",
            alt: "Docs",
        },
        description: "Cloud Storage Provider",
    },
    {
        color: "Blue",
        title: "Testing Environment",
        image: {
            url: "/assets/springOps.jpg",
            alt: "Testing",
        },
        description: "Cloud Storage Provider",
    },
    {
        color: "Red",
        title: "Automate Workflow",
        image: {
            url: "/assets/springOps.jpg",
            alt: "Automation",
        },
        description: "Cloud Storage Provider",
    },
];

// Define props for the ServiceItem component
interface ServiceItemProps {
    service: Service;
}

// Animation variants for Framer Motion
const serviceCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => (
    <motion.div
        className="bg-gray-100 border border-gray-200 dark:border-none dark:bg-slate-800 rounded-lg p-6 shadow-lg h-full
    hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-2xl"
        variants={serviceCardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }} // Framer Motion hover effect
    >
        <div
            className={`flex items-center justify-center w-50 h-50 bg-white shadow-xl dark:bg-slate-800 rounded-full text-3xl text-${service.color}-500`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={service.image.url}
                    width={500}
                    height={500}
                    alt=""
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy" // Lazy load images
                />
            </div>
        </div>
        <div className="mt-6 text-center">
            <h5 className="text-2xl font-medium mb-3 text-gray-800 dark:text-white">
                {service.title}
            </h5>
            <p className="text-base text-gray-600 dark:text-gray-300">
                {service.description}
            </p>
        </div>
    </motion.div>
);

// Define the main component
const Service: React.FC = () => {
    return (
        <section className="ezy__service23_YgEsPqCJ py-16 md:py-24 bg-gray-50 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="flex flex-wrap justify-center">
                    <div className="w-full text-center mb-12">
                        <h3 className="text-4xl font-bold md:text-[45px] mb-4 text-green-500">
                            Our Services
                        </h3>
                        <p className="opacity-80 text-lg mt-2 mx-auto max-w-md">
                            Continuous Integration And Continuous Delivery
                        </p>
                    </div>
                </div>
                {/* Grid Layout for Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceList.map((service, i) => (
                        <div className="flex" key={i}>
                            <ServiceItem service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
