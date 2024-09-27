"use client"

import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Section {
  title: string;
  content: string;
  video: {
    url: string | null;
  };
  resources: {
    name: string;
    link: string;
  }[];
}

interface Content {
  title: string;
  content: string;
  sections: Section[];
}

const contentMap: Record<string, Content> = {
  'introduction': {
    title: 'DevOps Terminology',
    content: 'What is DevOps?',
    sections: [
      { 
        title: 'I. DevOps Meaning',
        content: 'Our platform is a revolutionary...',
        video: {
          url: "https://www.youtube.com/embed/Me3ea4nUt0U", // Use embed URL
        },
        resources: [
          { name: 'SpringOps Overview', link: 'https://www.example.com/overview' },
          { name: 'Getting Started Guide', link: 'https://www.example.com/getting-started' },
        ]
      },
    ]
  },
  'getting-started': {
    title: 'Getting Started',
    content: 'Here\'s how to get started with our product...',
    sections: [
      { 
        title: 'Installation', 
        content: 'To install our product, follow these steps...',
        video: { url: null }, // No video for this section
        resources: [
          { name: 'Installation Guide', link: 'https://www.example.com/installation-guide' },
          { name: 'Configuration Tips', link: 'https://www.example.com/configuration-tips' }
        ]
      },
      { 
        title: 'Configuration', 
        content: 'After installation, you need to configure...',
        video: { url: null }, // No video for this section
        resources: []
      },
    ]
  },
  // Additional sections...
};

function Section({ title, content, video, resources }: Section) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      
      {/* Render Video if available */}
      {video.url && (
        <div className="mb-4">
          <h3 className="text-lg font-medium">Watch Video:</h3>
          <iframe
            width="100%"
            height="315"
            src={video.url}
            title={title}
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      )}

      {/* Render Resources if available */}
      {resources.length > 0 && (
        <div>
          <h3 className="text-lg font-medium">Resources:</h3>
          <ul className="list-disc list-inside">
            {resources.map((resource) => (
              <li key={resource.name}>
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.section>
  );
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
      <article className="max-w-3xl mx-auto py-6 flex-1 ml-8">
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
          <Section key={index} title={section.title} content={section.content} video={section.video} resources={section.resources} />
        ))}
      </article>
    </main>
  )
}