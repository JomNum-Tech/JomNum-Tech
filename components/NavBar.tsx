"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from '@/components/ModeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Deployment', path: '/deployment' },
    { name: 'Document', path: '/document' },
    { name: 'About', path: '/about' },
    { name: 'Overview', path: '/overview' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/assets/springOps.jpg" aria-label="Your Logo" className="text-xl font-bold text-gray-800 flex items-center gap-4">           
              <Image
                src="/assets/springOps.jpg"
                width={40}
                height={40}
                alt="SpringOps Logo"
                className="rounded-full aspect-square object-cover"
              />
              <span className="ml-2 text-white gap-4">SpringOps</span>  
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-gray-100 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ${pathname === item.path ? 'bg-black border-gray-100 border' : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium ${pathname === item.path ? 'bg-gray-100' : ''
                  }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
