"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from './Icon';

const NotificationBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }} // Start above the screen with zero opacity
          animate={{ y: 0, opacity: 1 }}   // Slide in and become fully visible
          exit={{ y: -50, opacity: 0 }}    // Slide out upwards and fade 3
          transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
          className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:border-none dark:bg-gray-900 dark:from-blue-800 dark:via-blue-700 dark:to-blue-600 text-white dark:text-gray-200 p-4 mx-8 rounded-xl shadow-lg flex items-center justify-between mx-4 backdrop-blur-md bg-opacity-30 dark:bg-opacity-40 border border-white/20 dark:border-gray-700"
        >
          <span className="text-sm md:text-base font-medium tracking-wide">
            🌐 Level up your skills! Explore our open-source study resources and contribute to the future of tech.
          </span>
          <button 
            onClick={handleClose} 
            className="ml-4 text-white dark:text-gray-200 hover:text-gray-300 dark:hover:text-gray-400 transition duration-200 ease-in-out p-1"
            aria-label="Close notification"
          >
            <CloseIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;
