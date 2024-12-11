"use client";
// React and Next.js imports
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { BsDownload, BsPlayCircle, BsGithub } from "react-icons/bs";
import Typed from 'typed.js';
import { useEffect, useRef, useState } from 'react';
import { TbNotes } from "react-icons/tb";
import { Section, Container } from "@/components/craft";

// Asset imports
import Logo from "@/public/logo.svg";
import { Suspense } from "react";

const Hero = ({ learnMoreRef }: { learnMoreRef: React.RefObject<HTMLDivElement> }) => {
  const [showVideo, setShowVideo] = useState(false);
  const typedElementRef1 = useRef(null);
  const typedElementRef2 = useRef(null);
  const [isTypedInitialized, setIsTypedInitialized] = useState(false);

  useEffect(() => {
    if (typedElementRef1.current) {
      const typed1 = new Typed(typedElementRef1.current, {
        strings: ['A 2D Retro Top-Down thriller game project'],
        typeSpeed: 20,
        backSpeed: 40,
        cursorChar: '',
        loop: false,
        onComplete: () => {
          if (typedElementRef2.current) {
            new Typed(typedElementRef2.current, {
              strings: ['by <span class="text-red-600 font-bold">Wabash.</span> Computer Science seniors.'],
              typeSpeed: 20,
              backSpeed: 40,
              loop: false,
              cursorChar: '',
            });
          }
        },
      });

      return () => {
        typed1.destroy();
      };
    }
  }, []);

  const scrollToLearnMore = () => {
    if (learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <Section className="flex flex-col items-center justify-center min-h-screen bg-[#1F2833]">
      <Container className="flex flex-col items-center justify-center text-center w-full border-1 border-[#66FCF1]/20 p-8">
        <div className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-0 w-full lg:gap-16">
          <div className="card p-10 rounded-lg min-h-[500px] lg:min-h-[500px] min-w-[800px] lg:min-w-[900px] flex flex-col items-center justify-center lg:w-1/2 bg-[#0B0C10] border-2">
            <h1 className="parallel-text font-extrabold text-8xl lg:text-9xl tracking-wider mb-12">
              PARALLEL
            </h1>

            <p ref={typedElementRef1} className="description-text text-lg lg:text-xl max-w-2xl mb-8"></p>
            <p ref={typedElementRef2} className="description-text text-lg lg:text-xl max-w-2xl mb-8"></p>

            <div className="video-container mt-6 relative">
              {!showVideo ? (
                <div 
                  onClick={handlePlayClick}
                  className="cursor-pointer relative w-[560px] h-[315px] flex flex-col items-center justify-center bg-[#236360] rounded-lg"
                >
                  <BsPlayCircle className="w-16 h-16 text-[#66FCF1] hover:text-[#1F2833] transition-colors" />
                  <p className="mt-4 text-[#66FCF1] text-sm">Click here to view demo</p>
                </div>
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fFSlqyemCxw?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              )}
            </div>
            <div className="not-prose mt-6 flex gap-8 md:mt-12">
              <button className="hover-button">
                <Link 
                  href="https://github.com/keen-25/Senior-Seminar-Game" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2"
                >
                  <BsDownload className="mr-2" />
                  <span>Download</span>
                </Link>
              </button>
              <button className="hover-button">
                <Link 
                  href="https://github.com/keen-25/Senior-Seminar-Game" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center"
                >
                  <BsGithub className="mr-2" />
                  <span>Github</span>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

          .card {
            background: rgba(11, 12, 16, 0.7);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 5px solid rgba(102, 252, 241, 0.1);
          }

          .parallel-text {
            font-family: 'Montserrat', sans-serif;
            color: #66FCF1;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }

          .description-text {
            font-family: 'Montserrat', sans-serif;
            color: #C5C6C7;
            font-weight: 400;
            line-height: 1.6;
          }

          .hover-button {
            font-family: 'Montserrat', sans-serif;
            position: relative;
            z-index: 1;
            padding: 0.6rem 1.2rem;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #0B0C10;
            background-color: #66FCF1 !important;
            border: 2px solid #66FCF1;
            border-radius: 4px;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .hover-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background: #45A29E;
            transition: width 0.3s ease;
            z-index: -1;
          }

          .hover-button:hover::before {
            width: 100%;
          }

          .hover-button:hover {
            color: #C5C6C7 !important;
            border-color: #45A29E;
          }

          .video-container {
            width: 560px;
            height: 315px;
            border-radius: 0.5rem;
            overflow: hidden;
          }

          .video-container iframe {
            width: 100%;
            height: 100%;
          }
        `}</style>
      </Container>
    </Section>
  );
};

export default Hero;
