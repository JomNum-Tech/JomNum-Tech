import React from 'react';

interface ButtonProps {
  title: string;
}

export default function Button1({ title }: ButtonProps) {
  return (
    <div>
      <button className="text-16px text-center px-4 py-2 rounded-lg bg-white">
        {title}
      </button>
    </div>
  );
}
