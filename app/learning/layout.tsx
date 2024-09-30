"use client";

import "@/app/globals.css";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import TelegramChat from "@/components/TelegramChat";
import TutorialPopUp from "@/components/TutorialPopUp";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import React from "react";

import Loading from "@/components/Loading";
import { Suspense } from 'react';
import NavBarLearning from "@/components/NavBarLearning";

const inter = Inter({ subsets: ["latin"] });

export default function LearningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <NavBarLearning />
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
