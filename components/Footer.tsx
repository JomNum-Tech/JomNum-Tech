"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Github, ArrowRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Source Control Management', href: '#' },
      { name: 'Continuous Integration', href: '#' },
      { name: 'Continuous Delivery & Deployment', href: '#' },
      { name: 'Infrastructure as Code', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Accessibility', href: '#' },
    ],
  },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://istad.co' },
  { name: 'Instagram', icon: Instagram, href: 'https://istad.co' },
  { name: 'Twitter', icon: Twitter, href: 'https://istad.co' },
  { name: 'GitHub', icon: Github, href: 'https://istad.co' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">SpringOps</h2>
            <p className="mb-4">Empowering your development workflow with cutting-edge CI/CD solutions.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button type="submit">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} SpringOps By ISTAD. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer