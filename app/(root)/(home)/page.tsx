
import React from 'react';
import BackToTopButton from '@/components/BackToTopButton';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Client from '@/components/home/Client';
import { Header } from '@/components/home/Header';
import Service from '@/components/home/Service';
import Testimonial from '@/components/home/Testimonial';
import TelegramChat from '@/components/TelegramChat';
import TutorialPopUp from '@/components/TutorialPopUp';
import NotificationBar from '@/components/NotificationBar';
import { Metadata } from 'next';
import WelcomeModal from '@/components/WelcomeModal';

export const metadata: Metadata = {
  title: 'Home',
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

export default function HomePage() {

  return (
    <>
      <ScrollProgressBar />
      <NotificationBar />
      <main>
        <Header />
        <Service />
        <Client />
        <Testimonial />
      </main>
      <BackToTopButton />
      <TutorialPopUp />
      <TelegramChat />
      <WelcomeModal />
    </>
  );
}
