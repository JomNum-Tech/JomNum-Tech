import ScrollProgressBar from '@/components/ScrollProgressBar';
import Team from '@/components/Team';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
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

export default function AboutPage() {
  return (
    <>
      <ScrollProgressBar />
      <main>
        <Team />
      </main>
    </>
    
  );
}