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
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Apps', href: '/services/mobile-apps' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
        { name: 'Consulting', href: '/services/consulting' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Newsletter', href: '/newsletter' },
        { name: 'Events', href: '/events' },
        { name: 'Help Center', href: '/help' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
    { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
    { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-gray-300 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
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