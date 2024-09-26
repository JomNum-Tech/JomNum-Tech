import React from 'react'
import { ShapeSeven, Shapes } from './Icon';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<Shapes />

			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 items-center">
					<div className="col-span-12 lg:col-span-7 xl:col-span-6 text-center lg:text-start mb-12 lg:mb-0">
						<h2 className="text-3xl font-bold leading-tight tracking-wide lg:text-7xl mb-6">
							Say Goodbye To Manual
						</h2>
						<div className="max-w-xl">
							<p className="text-[17px] leading-relaxed opacity-80 my-12">
								Automation CI/CD Pipeline, streamline your workflow process
							</p>
						</div>
						<main className="flex justify-between gap-12 w-full px-8">                                  
                            <Link href="/deployment" className="w-[50%] text-center py-3 px-8 font-medium text-white bg-blue-600 hover:bg-opacity-70 rounded-full transition-all ease-in-out">
                                <button>Getting Started</button>
                            </Link>         
                            <Link href="/document" className="w-[50%] text-center py-3 px-8 font-medium text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white border hover:bg-opacity-90 rounded-full transition-all ease-in-out">
                                <button>Documentation</button>
                            </Link>
                        </main>
                        
					</div>
					<div className="col-span-12 lg:col-span-5 relative text-center">
						<ShapeSeven />

						<div className="relative">
							<Image
								src="/assets/springOps.jpg"
                                width={600}
                                height={600}
								alt=""
								className="max-w-full h-auto rounded-full mx-auto"
							/>
							<div className="absolute w-[500px] h-[500px] left-0 top-0 bg-slate-100 dark:bg-slate-800 rounded-full -z-20"></div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};