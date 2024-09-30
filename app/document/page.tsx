

import BetaNotify from '@/components/BetaNotify';
import Sidebar from '@/components/sidebar/SidebarDocument';
import { Metadata } from 'next';
import { FaBookOpen } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Document',
  description: 'Learn more about our team and what we do at Your Company Name.',
  keywords: 'Home, HomePage, SpringOp HomePage',
  openGraph: {
    title: 'SpringOps',
    description: 'Learn more about our team and what we do at Your Company Name.',
    images: [
      {
        url: '/assets/springOps.jpg',
        width: 800,
        height: 600,
        alt: 'SpringOps automation deploy',
      },
    ],
  }
};


export default function DocumentPage() {

  return (

    <>
      <BetaNotify />
      <main className="flex">
        <Sidebar />
        
        <div className="max-w-3xl mx-auto w-full h-screen flex flex-col justify-center items-center p-4">

          {/* Hero Section */}
          <div className="relative w-full mb-6 animate-fade-in"> {/* Added animation class */}
            <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-lg"></div>
            <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center z-10 transform transition-transform duration-300 hover:scale-105"> {/* Added hover scale effect */}
              <h1 className="text-4xl font-bold mb-2 text-green-500 flex items-center justify-center">
                <FaBookOpen className="mr-2" /> {/* Icon added */}
                Welcome to the Documentation
              </h1>
              <p className="text-lg dark:text-white">Your guide to understanding our services.</p>
              <p className="mt-4 text-md dark:text-gray-300">Explore our resources to get started quickly!</p>

              {/* Call-to-Action Button */}
              <a href="/getting-started" className="mt-4 inline-block px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                Get Started
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <p>Please select a topic from the sidebar to get started.</p>
        </div>
      </main>
    </>
      
  );
}