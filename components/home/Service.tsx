"use client"

import { Service } from '@/types/ServiceType'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

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
]

interface ServiceItemProps {
  service: Service
}

const serviceCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="h-full"
      variants={serviceCardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full">
        <CardContent className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={service.image.url}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">                           
            <h3 className="text-2xl font-semibold mb-2">               
                {service.title}
            </h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-muted-foreground mb-4">
                    Additional details about {service.title} service. This could include features, benefits, or any other relevant information.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" /> Less Info
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" /> More Info
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Service() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous Integration And Continuous Delivery
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceItem service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}