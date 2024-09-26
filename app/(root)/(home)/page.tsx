import React from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/Header';
import Testimonial from '@/components/Testimonial';
import Client from '@/components/Client';
import Service from '@/components/Service';
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTopButton from '@/components/BackToTopButton'

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
    <>
      <ScrollProgressBar />
      <main>
        <Header />
        <Service />
        <Client />
        <Testimonial />
      </main>
      <BackToTopButton />
    </> 
  )
}
