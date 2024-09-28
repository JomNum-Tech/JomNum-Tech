"use client"

import Image from 'next/image';
import Link from 'next/link';
import { ShapeSeven, Shapes } from '../Icon';
import TypingHeading from './TypingHeading';

export const Header = () => {
	return (
		<header className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden">
			<Shapes />

			<div className="container px-4 mx-auto ">
				<div className="grid grid-cols-12 gap-6 items-center">
					<div className="col-span-12 lg:col-span-7 xl:col-span-6 text-center lg:text-start mb-12 lg:mb-0">
						<TypingHeading texts={['Say Goodbye To Manual', 'Say Hello To Automation!']} />
						<div className="max-w-xl w-full ">
							<p className="text-[17px] leading-relaxed opacity-80 my-12 w-full text-center">
								Automation CI/CD Pipeline, streamline your workflow process
							</p>
						</div>
						<main className="flex justify-between gap-12 w-full px-8">
							<Link href="/deployment" className="w-[50%] text-center py-3 px-8 font-medium border border-green-500 text-white bg-green-500 hover:bg-opacity-70 rounded-full transition-all ease-in-out dark:bg-green-500 dark:hover:bg-opacity-0 hover:bg-white dark:hover:text-white hover:text-green-500">
								<button>Getting Started</button>
							</Link>
							<Link href="/document" className="w-[50%] text-center py-3 px-8 font-medium text-green-500 border border-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-90 rounded-full transition-all ease-in-out dark:text-white dark:border-green-500 dark:hover:bg-green-600 dark:hover:text-white">
								<button>Documentation</button>
							</Link>
						</main>

					</div>
					<div className="col-span-12 lg:col-span-5 relative text-center">
						<ShapeSeven />

						<div className="relative">
							<Image
								src="/assets/springOps.jpg"
								width={400}
								height={400}
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