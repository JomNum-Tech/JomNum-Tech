"use client";

import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import SidebarCourses from '@/components/sidebar/SidebarCourse';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List } from 'lucide-react';
import Link from 'next/link';
import { videos } from '@/data/videos'; 

interface Video {
  slug: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: number; // in seconds
  date: string; // ISO date string
}

const VideoPage = ({ params }: { params: { slug: string } }) => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [activeTab, setActiveTab] = useState('video');

  useEffect(() => {
    const video = videos.find(v => v.slug === params.slug);
    
    if (!video) {
      notFound();
      return;
    }
    
    setCurrentVideo(video);
    
  }, [params.slug]);

  if (!currentVideo) return null; // or a loading state

  const currentIndex = videos.findIndex(v => v.slug === currentVideo.slug);
  const prevVideo = videos[currentIndex - 1];
  const nextVideo = videos[currentIndex + 1];

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">{currentVideo.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{currentVideo.description}</p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="related">Related</TabsTrigger>
          </TabsList>

          <TabsContent value="video">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={`https://www.youtube.com/embed/${currentVideo.youtubeId}`} 
                    title={currentVideo.title} 
                    allowFullScreen 
                    className="w-full h-screen rounded-lg"
                  ></iframe>
                </div>                
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comments Tab */}
          <TabsContent value="comments">
            {/* Comment section code here */}
            {/* Similar to previous implementation */}
            <p>Comments section coming soon!</p>
          </TabsContent>

          {/* Related Videos Tab */}
          <TabsContent value="related">
            {/* You can list related videos here */}
            <p>Related videos section coming soon!</p>
          </TabsContent>
        </Tabs>

        {/* Navigation Buttons for Previous/Next Videos */}
        <div className="mt-6 flex justify-between">
          {prevVideo && (
            <Link href={`/learning/videos/${prevVideo.slug}`}>
              <Button variant="outline">Previous Video</Button>
            </Link>
          )}
          {nextVideo && (
            <Link href={`/learning/videos/${nextVideo.slug}`}>
              <Button>Next Video</Button>
            </Link>
          )}
        </div>
      </div>

      {/* Right Sidebar for All Videos */}
      <aside className="w-full md:w-[300px] p-4 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto sticky top-0 h-screen">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
          <List className="mr-2" />
          All Videos
        </h2>
        <div className="space-y-4">
          {videos.map((video) => (
            video.slug !== currentVideo.slug && (
              <Link key={video.slug} href={`/learning/videos/${video.slug}`}>
                <Card className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{video.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          ))}
        </div>
      </aside>

    </main>
  );
};

export default VideoPage;