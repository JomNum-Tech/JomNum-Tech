import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SidebarCourses from '@/components/sidebar/SidebarCourse'

export default function PracticePage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Practice Exercises</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Todo List App</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Build a simple Todo List application using React.</p>
              <Button className="mt-4">Start Exercise</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>API Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Practice integrating a REST API into a React application.</p>
              <Button className="mt-4">Start Exercise</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}