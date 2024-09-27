import { Service } from '@/types/ServiceType';
import React from 'react';
import Image from 'next/image';

const serviceList: Service[] = [
    {
        color: "Yellow",
        title: "CI",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CI",
        },
        description: "Automation Continuous Integration",
    },
    {
        color: "Yellow",
        title: "CD",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Automation Continuous Delivery",
    },
    {
        color: "Automate",
        title: "Cloud",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Automation Workflow",
    },
    {
        color: "Yellow",
        title: "Deloyment",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Cloud Storage Provider",
    },
    {
        color: "Yellow",
        title: "Testing",
        image: {
            url: "/assets/springOps.jpg",
            alt: "CD",
        },
        description: "Cloud Storage Provider",
    },
    {
        color: "Yellow",
        title: "Environment",
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
        className="bg-white border border-gray-400 dark:border-none dark:bg-slate-800 rounded-lg p-4 md:p-12 h-full
    hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
    >
        <div
            className={`flex items-center w-20 h-20 bg-white shadow-xl dark:bg-slate-800 rounded-full justify-center p-0 text-3xl text-${service.color}-500`}
        >
            <Image
                src={service.image.url}
                width={100}
                height={100}
                alt="CI"
                className="rounded-full object-cover w-full h-full"
            />
        </div>
        <div className="mt-4">
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
                        <h3 className="text-3xl font-bold md:text-[45px] mb-2">
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