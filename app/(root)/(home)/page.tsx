import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Learn more about our team and what we do at Your Company Name.',
  keywords: 'Home, HomePage, SpringOp HomePage',
  openGraph: {
    title: 'SpringOps',
    description: 'Learn more about our team and what we do at Your Company Name.',
    images: [
      {
        url: '/assets/springOps.ico', // Correct path to the image
        width: 1200,
        height: 630,
        alt: 'SpringOps automation deployment', 
      },
    ],
  }
};

export default function HomePage() {
  return (
    <main className="h-screen w-full grid place-content-center hover:cursor-pointer bg-black text-gray-100 hover:bg-gray-600 transition-all ease-in-out">
        <h1>This is Home Page</h1>
    </main>
  )
}
