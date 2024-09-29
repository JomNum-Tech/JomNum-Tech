"use client";

import React, { useState } from 'react';
import { CloseIcon } from './Icon'; 

const BetaNotify: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="bg-yellow-500 text-black p-2 text-center">
        <span className="text-sm">
          ⚠️ This page is currently in beta and undergoing maintenance. Please bear with us!
        </span>
        <button 
          onClick={handleClose} 
          className="ml-4 text-black hover:text-gray-600"
          aria-label="Close notification"
        >
          <CloseIcon />
        </button>
      </div>
    )
  );
};

export default BetaNotify;