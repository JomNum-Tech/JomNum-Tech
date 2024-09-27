import React from 'react';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon, GitHubIcon } from '@/components/Icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      title: 'Resources',
      links: [
        { name: 'Amazon Web Service', href: '#' },
        { name: 'Google Cloud', href: '#' },
        { name: 'Digital Ocean', href: '#' },
        { name: 'Azure', href: '#' },
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
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: 'https://istad.co' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://istad.co' },
    { name: 'Twitter', icon: TwitterIcon, href: 'https://istad.co' },
    { name: 'GitHub', icon: GitHubIcon, href: 'https://istad.co' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover:text-gray-400 dark:hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} SpringOps By ISTAD. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 dark:hover:text-gray-300 transition-colors"
                >
                  <Icon />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;