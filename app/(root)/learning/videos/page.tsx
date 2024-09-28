// app/learning/videos/page.tsx

"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Clock, Calendar } from "lucide-react";
import SidebarCourses from '@/components/sidebar/SidebarCourse';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

// Sample video data
export const videos = [
  {
    slug: "react-hooks-explained",
    title: "React Hooks Explained",
    description: "A comprehensive guide to React Hooks and their usage.",
    youtubeId: "SqcY0GlETPk",
    duration: 3600, // 1 hour in seconds
    date: "2023-06-15"
  },
  {
    slug: "building-a-nextjs-app",
    title: "Building a Next.js App",
    description: "Step-by-step tutorial on creating a Next.js application.",
    youtubeId: "mTz0GXj8NN0",
    duration: 5400, // 1.5 hours in seconds
    date: "2023-07-01"
  },
  {
    slug: "understanding-redux",
    title: "Understanding Redux",
    description: "Learn how to manage state in your React applications using Redux.",
    youtubeId: "poQXNp9ItL4",
    duration: 2700, // 45 minutes in seconds
    date: "2023-07-15"
  },
  {
    slug: "css-grid-layout",
    title: "CSS Grid Layout",
    description: "A complete guide to CSS Grid Layout for responsive design.",
    youtubeId: "68O6eOGAGqA",
    duration: 3000, // 50 minutes in seconds
    date: "2023-07-30"
  },
];

const VideosPage = () => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Video Tutorials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
              <div className="aspect-w-16 aspect-h-9">
                <Image 
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                  width={500}
                  height={500}
                  alt={video.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <Video className="mr-2 h-5 w-5 text-blue-500" /> 
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{video.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {Math.floor(video.duration / 60)} mins
                  </span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(video.date).toLocaleDateString()}
                  </span>
                </div>
                <Link href={`/learning/videos/${video.slug}`} passHref>
                  <Button className="w-full">
                    Watch Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideosPage;