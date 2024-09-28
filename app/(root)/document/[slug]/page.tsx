"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Sidebar from '@/components/sidebar/SidebarDocument'
import { ChevronRight, BookOpen, Link as LinkIcon } from 'lucide-react'

interface Section {
  title: string
  content: string
  video: {
    url: string | null
  }
  resources: {
    name: string
    link: string
  }[]
}

interface Content {
  title: string
  content: string
  sections: Section[]
}

const contentMap: Record<string, Content> = {
  'introduction': {
    title: 'DevOps Terminology',
    content: 'Learning Objective',
    sections: [
      { 
        title: 'I. Story of DevOps',
        content: 'The story of DevOps began in the late 2000s, as software development teams started to recognize the need for better collaboration between developers and operations teams. In 2007, Belgian IT consultant Patrick Debois noticed the growing disconnect between Dev and Ops, particularly during a large data center migration project where he was responsible for testing\tThe following year, at the 2008 Agile Conference, Andrew Shafer created a "birds of a feather" meeting to discuss "Agile Infrastructure", but no one showed up except Debois, who was looking for ways to make operations as agile as developers. This marked the beginning of the DevOps movement.',
        video: {
          url: "https://www.youtube.com/embed/kBV8gPVZNEE?si=vQPB49wPAvehYa90",
        },
        resources: [
          { name: 'SpringOps Overview', link: 'https://www.example.com/overview' },
          { name: 'Getting Started Guide', link: 'https://www.example.com/getting-started' },
        ]
      },
      { 
        title: 'II. What and Why DevOps?',
        content: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.',
        video: {
          url: "https://www.youtube.com/embed/kBV8gPVZNEE?si=vQPB49wPAvehYa90",
        },
        resources: [
          { name: 'DevOps Handbook', link: 'https://www.example.com/devops-handbook' },
          { name: 'Continuous Integration', link: 'https://www.example.com/ci' },
        ]
      },
    ]
  },
  // ... other content entries
}

function Section({ title, content, video, resources }: Section) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mb-12 scroll-mt-16"
      id={title.toLowerCase().replace(/\s+/g, '-')}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h2>
      <p className="text-gray-700 mb-6 dark:text-gray-300 leading-relaxed">{content}</p>
      
      {video.url && (
        <div className="mb-6">
          <iframe
            width="100%"
            height="315"
            src={video.url}
            title={title}
            frameBorder="0"
            allowFullScreen
            className="rounded-xl shadow-lg"
          />
        </div>
      )}

      {resources.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200 flex items-center">
            <BookOpen className="mr-2" size={20} />
            Resources
          </h3>
          <ul className="space-y-2">
            {resources.map((resource) => (
              <li key={resource.name}>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                >
                  <LinkIcon className="mr-2" size={16} />
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.section>
  )
}

function RightSidebar({ sections, activeSection }: { sections: Section[], activeSection: string }) {
  return (
    <nav className="hidden xl:block w-64 p-6 bg-gray-50 dark:bg-gray-800 overflow-auto sticky top-0 h-screen">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">On This Page</h3>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={index}>
            <Link 
              href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 ${
                activeSection === section.title.toLowerCase().replace(/\s+/g, '-') ? 'font-bold text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              <ChevronRight className="mr-2" size={16} />
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function DocumentPage({ params }: { params: { slug?: string } }) {
  const [activeSection, setActiveSection] = useState("");
  const slug = params.slug || "";
  const content = slug ? contentMap[slug] : undefined;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!content) {
    return <div className="flex items-center justify-center h-screen text-2xl text-gray-600 dark:text-gray-400">Page not found</div>;
  }

  return (
    <div className="flex bg-white dark:bg-gray-900 min-h-screen">
      <Sidebar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        >
          {content.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-400 mb-8"
        >
          {content.content}
        </motion.p>
        {content.sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </main>
      <RightSidebar sections={content.sections} activeSection={activeSection} /> {/* Pass activeSection here */}
    </div>
  );
}