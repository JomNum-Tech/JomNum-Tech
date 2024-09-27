import SidebarCourses from '@/components/sidebar/SidebarCourse'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoursesPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>DevOps Terminology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Overview of DevOps</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Operating System Concept</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Understanding processing of OS</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          <Card>
            <CardHeader>
              <CardTitle>Managing Server</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Deep dive with server</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shell Scripting</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Basic of bash shell scripting language</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}