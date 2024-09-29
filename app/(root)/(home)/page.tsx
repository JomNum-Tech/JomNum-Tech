"use client";

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
    </>
  );
}
