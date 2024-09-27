import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from "lucide-react"
import SidebarCourses from '@/components/sidebar/SidebarCourse'

export default function VideosPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Video Tutorials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="mr-2" /> React Hooks Explained
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>A comprehensive guide to React Hooks and their usage.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="mr-2" /> Building a Next.js App
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Step-by-step tutorial on creating a Next.js application.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}