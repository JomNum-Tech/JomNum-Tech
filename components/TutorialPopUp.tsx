'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const tutorialSteps = [
  {
    title: "Welcome to SpringOps",
    content: "Let's take a quick tour of our website and its features.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Our Services",
    content: "Explore our range of automation and deployment services.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Client Showcase",
    content: "See how we've helped businesses like yours succeed.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Testimonials",
    content: "Read what our satisfied clients have to say about us.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Get in Touch",
    content: "Ready to start? Contact us to begin your journey with SpringOps.",
    image: "/placeholder.svg?height=200&width=300"
  }
]

const TutorialPopUp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial')
    if (!hasSeenTutorial) {
      setIsOpen(true)
    }
  }, [])

  const closeTutorial = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenTutorial', 'true')
  }

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      closeTutorial()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Open Tutorial"
      >
        ?
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative"
            >
              <button
                onClick={closeTutorial}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Close tutorial"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="mb-4">
                <img
                  src={tutorialSteps[currentStep].image}
                  alt={tutorialSteps[currentStep].title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">{tutorialSteps[currentStep].title}</h2>
              <p className="mb-4">{tutorialSteps[currentStep].content}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-sm text-gray-500">
                  {currentStep + 1} / {tutorialSteps.length}
                </span>
                <button
                  onClick={nextStep}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground"
                  aria-label={currentStep === tutorialSteps.length - 1 ? "Finish tutorial" : "Next step"}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TutorialPopUp;