"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Book, Rocket, Brain, Wrench, Search, ChevronRight } from 'lucide-react'

const tableOfContents = [
  { title: 'Introduction', slug: 'introduction', icon: Book },
  { title: 'Getting Started', slug: 'getting-started', icon: Rocket },
  { title: 'Advanced Concepts', slug: 'advanced-concepts', icon: Brain },
  { title: 'API Reference', slug: 'api-reference', icon: Wrench },
  { title: 'Troubleshooting', slug: 'troubleshooting', icon: Search },
]

export default function SidebarDocument() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg p-6 overflow-auto sticky top-0 h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Documentation</h2>
        <div className="h-1 w-20 bg-green-500 rounded"></div>
      </div>
      <nav>
        <ul className="space-y-3">
          {tableOfContents.map((item) => {
            const Icon = item.icon
            const isActive = pathname === `/document/${item.slug}`
            return (
              <motion.li 
                key={item.slug}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={`/document/${item.slug}`}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-green-500 dark:bg-gray-700 dark:text-green-500 shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}`} />
                  <span className="flex-grow">{item.title}</span>
                  {isActive && <ChevronRight className="h-5 w-5 text-green-500" />}
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>
      <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Our support team is always here to assist you.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Contact Support
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </aside>
  )
}