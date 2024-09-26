"use client"

import Link from 'next/link'

const tableOfContents = [
  { title: 'Introduction', slug: 'introduction' },
  { title: 'Getting Started', slug: 'getting-started' },
  { title: 'Advanced Concepts', slug: 'advanced-concepts' },
  { title: 'API Reference', slug: 'api-reference' },
  { title: 'Troubleshooting', slug: 'troubleshooting' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-6 overflow-auto">
      <nav>
        <ul className="space-y-2">
          {tableOfContents.map((item) => (
            <li key={item.slug}>
              <Link 
                href={`/document/${item.slug}`}
                className="text-blue-600 hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}