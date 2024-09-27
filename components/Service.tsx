import { Service } from '@/types/ServiceType';
import React from 'react';

const serviceList: Service[] = [
    {
        color: "yellow",
        title: "Product Design",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        color: "orange",
        title: "Photography",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        color: "blue",
        title: "Coding",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        color: "green",
        title: "Content Writing",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        color: "violet",
        title: "Branding",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        color: "red",
        title: "Data Entry",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
];

// Define props for the ServiceItem component
interface ServiceItemProps {
    service: Service;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-12 h-full">
        <div
            className={`flex items-center w-20 h-20 bg-white shadow-xl dark:bg-slate-800 rounded-full justify-center p-5 text-3xl text-${service.color}-500`}
        >           
        </div>
        <div className="mt-4">
            <h5 className="text-2xl font-medium mb-3">{service.title}</h5>
            <p className="opacity-80 mb-0">{service.description}</p>
        </div>
    </div>
);

// Define the main component
const Service23_YgEsPqCJ: React.FC = () => {
    return (
        <section className="ezy__service23_YgEsPqCJ py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full text-center mb-12">
                        <h3 className="text-3xl font-bold md:text-[45px] mb-2">
                            Our Services
                        </h3>
                        <p className="opacity-80 text-[17px] mt-4 mx-auto max-w-md">
                            Assumenda non repellendus distinctio nihil dicta sapiente,
                            quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
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

export default Service23_YgEsPqCJ;