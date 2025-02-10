"use client";

import "@/app/globals.css";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import TelegramChat from "@/components/TelegramChat";
import TutorialPopUp from "@/components/TutorialPopUp";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from 'next/font/google';
import React from "react";

import Loading from "@/components/Loading";
import { Suspense } from 'react';
import NavBarRoot from "@/components/NavBarRoot";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${poppins.className} h-full overflow-y-scroll bg-gray-50 fade-in`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <div style={{ position: 'relative' }}>
            <NavBarRoot />
            <ScrollProgressBar />
          </div>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <TutorialPopUp />
          <BackToTopButton />
          <TelegramChat />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
