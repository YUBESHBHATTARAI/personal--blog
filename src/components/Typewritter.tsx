'use client';
import { useState, useEffect } from 'react';

export default function Typewriter({ text = "Hi, I'm John Doe.", speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="font-mono text-2xl sm:text-2xl text-black dark:text-white border-r-2 border-orange-500 pr-1 animate-pulse">
      {displayedText}
    </h1>
  );
}
