'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (!hasVisited) {
      setIsOpen(true)
      localStorage.setItem('hasVisited', 'true')
    }
  }, [])

  const closeModal = () => setIsOpen(false)

  return (
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
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Welcome to SpringOps!</h2>
            <p className="mb-4">
              We are excited to have you here. SpringOps is your one-stop solution for automation deployment and cloud management.
            </p>
            <p className="mb-4">
              Explore our services, check out our client success stories, and do not hesitate to reach out if you have any questions.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary/90 transition duration-200"
            >
              Get Started
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeModal