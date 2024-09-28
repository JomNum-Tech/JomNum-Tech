import BackToTopButton from '@/components/BackToTopButton';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Client from '@/components/home/Client';
import { Header } from '@/components/home/Header';
import Service from '@/components/home/Service';
import Testimonial from '@/components/home/Testimonial';
import { Metadata } from 'next';
// import WelcomeModal from '@/components/WelcomeModal'
import TelegramChat from '@/components/TelegramChat';
import TutorialPopUp from '@/components/TutorialPopUp';

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
      {/* <WelcomeModal /> */}
      <TutorialPopUp />
      <TelegramChat />
    </> 
  )
}
