// components/NavBar.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed z-[50] top-0 left-0 transition-all duration-300 ${isScrolled ? 'bg-transparent backdrop-blur-lg' : 'bg-black'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 py-4">
        <Link href="/">
          <h1 className="font-bold text-lg text-white">Parallel.</h1>
        </Link>

        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('about-us')}
            className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('release-notes')}
            className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition"
          >
            Release Notes
          </button>
          <button
            onClick={() => scrollToSection('submit-ticket')}
            className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition"
          >
            Submit A Ticket
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
