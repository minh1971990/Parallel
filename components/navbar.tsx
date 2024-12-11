// components/NavBar.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = ['about-us', 'release-notes', 'submit-ticket'];
      let currentSection = '';
      
      // Find which section is most visible in the viewport
      let maxVisibility = 0;
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibility = Math.max(0, visibleHeight / windowHeight);
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed z-[50] top-0 left-0 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B0C10]/80 backdrop-blur-lg' : 'bg-[#0B0C10]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 py-4">
        <Link href="/">
          <h1 className="font-bold text-lg text-[#66FCF1]">Parallel.</h1>
        </Link>

        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('about-us')}
            className={`text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#1F2833] px-4 py-2 rounded transition ${
              activeSection === 'about-us' ? 'bg-[#66FCF1]/20' : ''
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('release-notes')}
            className={`text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#1F2833] px-4 py-2 rounded transition ${
              activeSection === 'release-notes' ? 'bg-[#66FCF1]/20' : ''
            }`}
          >
            Release Notes
          </button>
          <button
            onClick={() => scrollToSection('submit-ticket')}
            className={`text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#1F2833] px-4 py-2 rounded transition ${
              activeSection === 'submit-ticket' ? 'bg-[#66FCF1]/20' : ''
            }`}
          >
            Submit A Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
