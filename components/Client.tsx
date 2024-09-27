import { Clients } from '@/types/ClientsType';
import Image from 'next/image';
import React from 'react';

const client: Clients[] = [
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
        alt: "Client Logo 1",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
        alt: "Client Logo 2",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
        alt: "Client Logo 3",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
        alt: "Client Logo 4",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
        alt: "Client Logo 5",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
        alt: "Client Logo 6",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
        alt: "Client Logo 7",
    },
    {
        logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
        alt: "Client Logo 8",
    },
];

const Client: React.FC = () => {
    return (
        <section className="ezy__clients8_SH7pOgCq w-full flex justify-center py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4">
                <div className="grid grid-cols-12 justify-center mb-16">
                    <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
                        <h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-6">
                            Meet Our Clients & Partners
                        </h2>
                        <p className="text-lg leading-6 opacity-70">
                            Create amazing carousel to display your client or partner logos
                            with extensive design controls.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6 justify-center text-center">
                    {client.map((client, i) => (
                        <div
                            className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
                            key={i}
                        >
                            <div className="bg-slate-100 dark:bg-[#1E2735] rounded-lg h-full grid place-items-center p-4 lg:p-12">
                                <Image
                                    src={client.logo}
                                    width={100}
                                    height={100}
                                    alt={client.alt}
                                    className="max-h-[50px] h-auto max-w-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Client;