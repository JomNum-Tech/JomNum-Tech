"use client"

import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Section {
  title: string;
  content: string;
}

interface Content {
  title: string;
  content: string;
  sections: Section[];
}

const contentMap: Record<string, Content> = {
  'introduction': {
    title: 'Introduction To SpringOps',
    content: 'Welcome to our documentation. This is the introduction page.',
    sections: [
      { title: 'What is SpringOps?', content: 'Our platform is a revolutionary...' },
      { title: 'Why use SpringOps?', content: 'Our platform offers unique features...' },
    ]
  },
  'getting-started': {
    title: 'Getting Started',
    content: 'Here\'s how to get started with our product...',
    sections: [
      { title: 'Installation', content: 'To install our product, follow these steps...' },
      { title: 'Configuration', content: 'After installation, you need to configure...' },
    ]
  },
  'advanced-concepts': {
    title: 'Advanced Concepts',
    content: 'Once you\'re familiar with the basics, you can explore these advanced concepts...',
    sections: [
      { title: 'Advanced Feature 1', content: 'This feature allows you to...' },
      { title: 'Advanced Feature 2', content: 'Another powerful feature is...' },
    ]
  },
  'api-reference': {
    title: 'API Reference',
    content: 'Detailed information about our API endpoints and how to use them.',
    sections: [
      { title: 'Authentication', content: 'To authenticate your API requests...' },
      { title: 'Endpoints', content: 'Here are the available API endpoints...' },
    ]
  },
  'troubleshooting': {
    title: 'Troubleshooting',
    content: 'Having issues? Check out our troubleshooting guide.',
    sections: [
      { title: 'Common Issues', content: 'Here are some common issues and their solutions...' },
      { title: 'Contact Support', content: 'If you can\'t find a solution, contact our support team...' },
    ]
  }
}

function Section({ title, content }: Section) {
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
      className="mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </motion.section>
  )
}

interface DocumentPageProps {
  params: {
    slug?: string; // Make slug optional for safety
  };
}

export default function DocumentPage({ params }: DocumentPageProps) {
  const slug = params.slug || ""; // Default to an empty string if slug is undefined
  const content = slug ? contentMap[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!content) {
    return <div>Page not found</div>;
  }

  return (
    <main className="flex">
      <Sidebar />
      <article className="max-w-3xl mx-auto h-screen grid place-content-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          {content.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          {content.content}
        </motion.p>
        {content.sections.map((section, index) => (
          <Section key={index} title={section.title} content={section.content} />
        ))}
      </article>
    </main>
  )
}

