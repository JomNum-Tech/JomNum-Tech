"use client";

import React, { useState } from 'react';
import { CloseIcon } from './Icon';

const NotificationBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="bg-green-500 text-white p-2 text-center">
        <span className="text-sm">🚀 Exciting updates coming soon! Stay tuned for our new features.</span>
        <button 
          onClick={handleClose} 
          className="ml-4 text-white hover:text-gray-200"
          aria-label="Close notification"
        >
          <CloseIcon />
        </button>
      </div>
    )
  );
};

export default NotificationBar;