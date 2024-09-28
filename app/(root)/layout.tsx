"use client";

import "@/app/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider"
import TelegramChat from "@/components/TelegramChat";
import TutorialPopUp from "@/components/TutorialPopUp";
import BackToTopButton from "@/components/BackToTopButton";

import { Suspense } from 'react';
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
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
          <NavBar />
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
