"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ParticleProps {
  index: number;
}

const Particle = ({ index }: ParticleProps) => {
  return (
    <div
      className="absolute h-2 w-2 rounded-full bg-blue-400 opacity-75"
      style={{
        left: `${index * 10}%`,
        animation: `float 3s infinite ${index * 0.2}s`,
      }}
    />
  );
};

const Web3ScrollProgressBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 5px #3B82F6, 0 0 10px #3B82F6, 0 0 15px #3B82F6; }
            50% { box-shadow: 0 0 10px #3B82F6, 0 0 20px #3B82F6, 0 0 25px #3B82F6; }
            100% { box-shadow: 0 0 5px #3B82F6, 0 0 10px #3B82F6, 0 0 15px #3B82F6; }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 0.8; }
            100% { opacity: 0.4; }
          }
        `}
      </style>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 z-50 overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {/* Particle effects */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
        
        {/* Main progress bar */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"
          style={{
            scaleX,
            transformOrigin: "0%",
            animation: "glow 2s infinite, pulse 2s infinite",
          }}
        />
        
        {/* Highlight effect */}
        <motion.div
          className="absolute inset-0 bg-white opacity-20"
          style={{
            scaleX,
            transformOrigin: "0%",
          }}
        />
      </motion.div>
    </>
  );
};

export default Web3ScrollProgressBar;