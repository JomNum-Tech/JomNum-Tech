import { Service } from '@/types/ServiceType';
import React from 'react';
import Image from 'next/image';

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
        color: "Automate",
        title: "Learning Platform",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Automation Workflow",
    },
    {
        color: "Yellow",
        title: "Documentation",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Cloud Storage Provider",
    },
    {
        color: "Yellow",
        title: "Testing Environment",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Cloud Storage Provider",
    },
    {
        color: "Yellow",
        title: "Automate Workflow",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Cloud Storage Provider",
    },
];

// Define props for the ServiceItem component
interface ServiceItemProps {
    service: Service;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => (
    <div
        className="bg-gray-100 border border-gray-200 dark:border-none dark:bg-slate-800 rounded-lg p-4 md:p-12 h-full
    hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
    >
        <div className={`flex items-center justify-center w-50 h-50 bg-white shadow-xl dark:bg-slate-800 rounded-full text-3xl text-${service.color}-500`}>       
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={service.image.url}
                    width={500}
                    height={500}
                    alt="CI"
                    className="rounded-lg object-cover w-full h-    "
                />
            </div>     
        </div>
        <div className="mt-4 text-center">
            <h5 className="text-2xl font-medium mb-3">{service.title}</h5>
            <p className="opacity-80 mb-0">{service.description}</p>
        </div>
    </div>
);

// Define the main component
const Service: React.FC = () => {
    return (
        <section className="ezy__service23_YgEsPqCJ py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full text-center mb-12">
                        <h3 className="text-3xl font-bold md:text-[45px] mb-2 text-green-500">
                            Our Services
                        </h3>
                        <p className="opacity-80 text-[17px] mt-4 mx-auto max-w-md">
                            Continuous Integration And Continuous Delivery
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap">
                    {serviceList.map((service, i) => (
                        <div className="w-full md:w-1/2 lg:w-1/3 mt-4 px-2 h-full" key={i}>
                            <ServiceItem service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;