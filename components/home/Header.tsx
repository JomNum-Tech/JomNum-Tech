"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import TypingHeading from "./TypingHeading"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, Rocket, Book } from "lucide-react"

export const Header = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const features = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Automated Deployment",
      description: "Streamline your CI/CD pipeline",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools",
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Comprehensive Docs",
      description: "Detailed guides for smooth onboarding",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-background text-foreground relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto lg:mx-0"
            >
              <TypingHeading
                texts={[
                  { text: "Sharing is Caring" },
                  { text: "IT Khmer Community", style: { color: "rgb(59, 130, 246)" } },
                ]}
                
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-center leading-relaxed text-muted-foreground mt-6 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Moving forward together in the age of technology
            </motion.p>

			{/* Buttons */}
			<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
			  <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-400 dark:text-white w-full sm:w-auto">
				<Link href="#">
				  Getting Started <ArrowRight className="ml-2 h-4 w-4" />
				</Link>
			  </Button>
			  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
				<Link href="#">
				  Documentation <Book className="ml-2 h-4 w-4" />
				</Link>
			  </Button>
			</div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <Image
                src="https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/jomnum-tech/JomNumTech-El1XBQ46OC1eci4SAFFyiOAM6nikG1.png"
                width={400}
                height={400}
                alt="JomNum-Tech Logo"
                className="rounded-full z-10 relative"
                priority
              />
              <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-500">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Card className="p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h4 className="text-lg font-medium ml-3">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>     
    </header>
  )
}