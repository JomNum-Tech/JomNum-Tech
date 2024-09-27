import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SidebarCourses from '@/components/sidebar/SidebarCourse'

export default function QuizzesPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>JavaScript Fundamentals</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Test your knowledge of JavaScript basics.</p>
              <Button className="mt-4">Start Quiz</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>React Component Lifecycle</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Challenge yourself on React component lifecycle methods.</p>
              <Button className="mt-4">Start Quiz</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}