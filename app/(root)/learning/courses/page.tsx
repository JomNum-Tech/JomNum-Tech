// app/courses/page.tsx

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoursesPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/learning/courses/devops-terminology">
            <Card>
              <CardHeader>
                <CardTitle>DevOps Terminology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Overview of DevOps</p>
              </CardContent>
            </Card>
          </Link>
          {/* Add more course cards with appropriate links */}
        </div>
      </div>
    </main>
  );
}