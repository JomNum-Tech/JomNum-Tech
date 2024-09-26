import Contact from '@/components/Contact'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact',
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

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  )
}
