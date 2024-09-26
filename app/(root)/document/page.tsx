
import React from 'react'
import { Metadata } from 'next'
import Sidebar from '@/components/Sidebar';

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
    <main className="flex ">
      <Sidebar />
      <div className="max-w-3xl mx-auto w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Documentation</h1>
        <p>Please select a topic from the sidebar to get started.</p>
      </div>
    </main>
  )
}
