
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "lucide-react";
import SidebarCourses from '@/components/sidebar/SidebarCourse';
import Link from 'next/link';

export const videos = [
  {
    slug: "react-hooks-explained",
    title: "React Hooks Explained",
    description: "A comprehensive guide to React Hooks and their usage.",
    link: "https://www.youtube.com/embed/SqcY0GlETPk?si=xshVEngOubG8eo9x",
  },
  {
    slug: "building-a-nextjs-app",
    title: "Building a Next.js App",
    description: "Step-by-step tutorial on creating a Next.js application.",
    link: "https://www.youtube.com/embed/example2",
  },
  {
    slug: "understanding-redux",
    title: "Understanding Redux",
    description: "Learn how to manage state in your React applications using Redux.",
    link: "https://www.youtube.com/embed/example3",
  },
  {
    slug: "css-grid-layout",
    title: "CSS Grid Layout",
    description: "A complete guide to CSS Grid Layout for responsive design.",
    link: "https://www.youtube.com/embed/example4",
  },
];

const VideosPage = () => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Video Tutorials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <Link href={`/learning/videos/${video.slug}`} key={video.slug}>
              <Card className="cursor-pointer hover:bg-gray-100 transition">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Video className="mr-2" /> {video.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{video.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideosPage;