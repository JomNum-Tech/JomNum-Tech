"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const tableOfContents = [
  { title: 'Introduction', slug: 'introduction', icon: '📚' },
  { title: 'Getting Started', slug: 'getting-started', icon: '🚀' },
  { title: 'Advanced Concepts', slug: 'advanced-concepts', icon: '🧠' },
  { title: 'API Reference', slug: 'api-reference', icon: '🔧' },
  { title: 'Troubleshooting', slug: 'troubleshooting', icon: '🔍' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white shadow-lg p-6 overflow-auto">
      <nav>
        <ul className="space-y-2">
          {tableOfContents.map((item) => (
            <motion.li 
              key={item.slug}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={`/document/${item.slug}`}
                className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                  pathname === `/documents/${item.slug}`
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2 text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}