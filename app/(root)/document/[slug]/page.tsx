import Sidebar from '@/components/Sidebar';
import { notFound } from 'next/navigation';

const contentMap: Record<string, { title: string; content: string }> = {
  introduction: {
    title: 'Introduction',
    content: 'Welcome to our documentation. This is the introduction page.',
  },
  'getting-started': {
    title: 'Getting Started',
    content: "Here's how to get started with our product...",
  },
  'advanced-concepts': {
    title: 'Advanced Concepts',
    content: "Once you're familiar with the basics, you can explore these advanced concepts...",
  },
  'api-reference': {
    title: 'API Reference',
    content: 'Detailed information about our API endpoints and how to use them.',
  },
  troubleshooting: {
    title: 'Troubleshooting',
    content: 'Having issues? Check out our troubleshooting guide.',
  },
};

export default function DocumentPage({ params }: { params: { slug: string } }) {
  const content = contentMap[params.slug];

  if (!content) {
    notFound();
    return null; 
  }

  return (
    <main className="flex">
        <Sidebar />
        <article className="max-w-3xl mx-auto w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
            <p>{content.content}</p>
        </article>
    </main>
  );
}