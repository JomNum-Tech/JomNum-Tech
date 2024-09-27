"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const tableOfContents = [
  { title: 'Overview', slug: 'introduction', icon: '>' },
  { title: 'Getting Started', slug: 'getting-started', icon: '>' },
]

export default function SidebarCourses() {
  const pathname = usePathname()

  return (
    <aside className="w-64 dark:bg-gray-800 bg-white shadow-lg p-6 overflow-auto sticky top-0 h-screen">
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
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-2 text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      {/* <div className="mt-4 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Sub Content</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Here you can add any additional information or links related to the selected document.
        </p>
      </div> */}
    </aside>
  )
}