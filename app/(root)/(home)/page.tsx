import React from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Learn more about our team and what we do at Your Company Name.',
  keywords: 'Home, HomePage, SpringOp HomePage',
  openGraph: {
    title: 'SpringOps',
    description: 'Learn more about our team and what we do at Your Company Name.',
    images: [
      {
        url: '/assets/springOps.ico',
        width: 1200,
        height: 630,
        alt: 'SpringOps automation deployment',
      },
    ],
  }
};

export default function HomePage() {
  return (
    <Header />
  )
}
