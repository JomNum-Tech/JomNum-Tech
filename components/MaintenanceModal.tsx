import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MaintenanceModal: React.FC<MaintenanceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Add spring animation
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Optional Icon */}
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
            <path d="M12 2v10m0 10v-10m0 10h10m-10 0H2"/>
            <path d="M4.22 4.22a9 9 0 0112.56 12.56M19.78 4.22a9 9 0 00-12.56 12.56"/>
          </svg>
        </div>

        <h2 className="text-lg font-bold mb-2 text-center">Under Maintenance</h2>
        <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
          The SpringOps-GPT feature is currently under maintenance. Please check back later.
        </p>
        
        <button
          onClick={onClose}
          className="bg-green-500 text-primary-foreground w-full px-4 flex justify-center py-2 rounded-lg hover:bg-opacity-0 border border-green-500 hover:text-green-500 focus:outline-none transition duration-200 ease-in-out"
        >
          Notify Me
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MaintenanceModal;