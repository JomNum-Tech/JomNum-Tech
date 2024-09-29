"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShapeSeven, Shapes } from '../Icon'
import TypingHeading from './TypingHeading'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, Rocket, Book } from 'lucide-react'

export const Header = () => {
	const [activeFeature, setActiveFeature] = useState(0)
	const features = [
		{ icon: <Rocket className="h-6 w-6" />, title: 'Automated Deployment', description: 'Streamline your CI/CD pipeline' },
		{ icon: <Code className="h-6 w-6" />, title: 'Easy Integration', description: 'Seamlessly integrate with your existing tools' },
		{ icon: <Book className="h-6 w-6" />, title: 'Comprehensive Docs', description: 'Detailed guides for smooth onboarding' },
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveFeature((prev) => (prev + 1) % features.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<header className="py-14 md:py-24 bg-background text-foreground relative overflow-hidden">
			<Shapes />

			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
					<div className="lg:col-span-7 xl:col-span-6 text-center lg:text-start mb-12 lg:mb-0">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<TypingHeading texts={[
								{ text: 'Say Goodbye To Manual' },
								{ text: 'Say Hello To Automation!', style: { color: 'rgb(34,197,94)' } }
							]} />
						</motion.div>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.5 }}
							className="text-lg leading-relaxed text-muted-foreground mt-6 mb-8 max-w-xl mx-auto lg:mx-0 text-center"
						>
							Automation CI/CD Pipeline, streamline your workflow process
						</motion.p>
						<div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mb-12">
							<Button asChild size="lg" className="bg-green-500 hover:bg-green-400 dark:text-white">
								<Link href="/deployment">
									Getting Started <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/document">
									Documentation <Book className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</div>

						<div className="hidden lg:block">
							<h3 className="text-xl font-semibold mb-4 text-center text-green-500">Key Features</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{features.map((feature, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 * index, duration: 0.5 }}
									>
										<Card className="p-4 h-full flex flex-col justify-between">
											<div className="flex items-center mb-2">
												{feature.icon}
												<h4 className="text-lg font-medium ml-2">{feature.title}</h4>
											</div>
											<p className="text-sm text-muted-foreground">{feature.description}</p>
										</Card>
									</motion.div>
								))}
							</div>
						</div>
					</div>
					<div className="lg:col-span-5 relative text-center">
						<ShapeSeven />
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="relative"
						>
							<Image
								src="/assets/springOps.jpg"
								width={400}
								height={400}
								alt="SpringOps Logo"
								className="max-w-full h-auto rounded-full mx-auto"
							/>
							<div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full -z-10"></div>
						</motion.div>
						<div className="mt-8 lg:hidden">
							<h3 className="text-xl font-semibold mb-4 text-center">Key Features</h3>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5, duration: 0.5 }}
								className="relative h-24 overflow-hidden"
							>
								{features.map((feature, index) => (
									<motion.div
										key={index}
										className="absolute inset-0 flex items-center justify-center"
										initial={{ opacity: 0, y: 20 }}
										animate={{
											opacity: activeFeature === index ? 1 : 0,
											y: activeFeature === index ? 0 : 20
										}}
										transition={{ duration: 0.5 }}
									>
										<Card className="p-4 w-full max-w-xs">
											<div className="flex items-center mb-2">
												{feature.icon}
												<h4 className="text-lg font-medium ml-2">{feature.title}</h4>
											</div>
											<p className="text-sm text-muted-foreground">{feature.description}</p>
										</Card>
									</motion.div>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
