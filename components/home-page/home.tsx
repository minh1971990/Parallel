"use client";
// React and Next.js imports
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { BsDownload } from "react-icons/bs";
import { RoboModel } from './Scene';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { TbNotes } from "react-icons/tb";
import { Section, Container } from "@/components/craft";

// Asset imports
import Logo from "@/public/logo.svg";
import { Suspense } from "react";

const Hero = ({ learnMoreRef }: { learnMoreRef: React.RefObject<HTMLDivElement> }) => {
  const typedElementRef1 = useRef(null);
  const typedElementRef2 = useRef(null);

  // Typing effect with useEffect
  useEffect(() => {
    const options1 = {
      strings: ['A 2D Retro Top-Down thriller game project'],
      typeSpeed: 20,
      backSpeed: 40,
      cursorChar: ' ',
      loop: false,
      onComplete: () => {
        new Typed(typedElementRef2.current, {
          strings: ['by <span class="text-red-600 font-bold">Wabash.</span> Computer Science seniors.'],
          typeSpeed: 20,
          backSpeed: 40,
          loop: false,
        });
      },
    };

    const typed1 = new Typed(typedElementRef1.current, options1);

    return () => {
      typed1.destroy();
    };
  }, []);

  const scrollToLearnMore = () => {
    if (learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section className="flex flex-col items-center justify-center min-h-screen">
      <Container className="flex flex-col items-center justify-center text-center w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-0 w-full lg:gap-16">
          <div className="card p-10 rounded-lg min-h-[500px] lg:min-h-[500px] min-w-[500px] lg:min-w-[800px] flex flex-col items-center justify-center lg:w-1/2">
            <h1 className="font-bold text-4xl lg:text-5xl tracking-wider mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-50 via-gray-400 to-gray-800">Parallel</span>
            </h1>

            {/* Typing effect */}
            <h3 className="text-muted-foreground !mt-0 text-lg lg:text-2xl">
              <Balancer>
                <span ref={typedElementRef1} className="text-gradient-shadow"></span>
                <br />
                <span ref={typedElementRef2} className="text-gradient-shadow"></span>
              </Balancer>
            </h3>

            <div className="not-prose mt-6 flex gap-8 md:mt-12">
              <button onClick={scrollToLearnMore} className="hover-button">
                <Link href="/" className="flex items-center space-x-2">
                  <BsDownload className="mr-2" />
                  <span>Download</span>
                </Link>
              </button>
              <button onClick={scrollToLearnMore} className="hover-button">
                Learn More -&gt;
              </button>
            </div>
            <div className="mt-4">
              <Link href="/release-notes">
                <span className="flex items-center underline text-sm text-gray-400 cursor-pointer hover:text-gray-300 transition">
                  <TbNotes className="mr-1 text-lg" />
                  <span>Release Notes</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:ml-8 lg:w-1/2 flex justify-center items-center">
            <RoboModel />
          </div>
        </div>

        <style jsx>{`
          .hover-button {
            position: relative;
            z-index: 1;
            padding: 0.4rem 0.8rem;
            font-size: 1rem;
            letter-spacing: 0.15rem;
            text-transform: uppercase;
            color: black;
            background-color: yellow !important;
            border-radius: 0.5rem;
            overflow: hidden;
            transition: color 0.3s ease;
          }

          .hover-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: #00bfff;
            transition: width 0.3s ease;
            z-index: -1;
          }

          .hover-button:hover::before {
            width: 100%;
          }

          .hover-button:hover {
            color: white !important;
          }

          .text-gradient-shadow {
            background: linear-gradient(to right, #2bc0e4, #b2e4a1, #eaecc6);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }

          .card {
            background: rgba(255, 255, 255, 0);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            padding: 2rem;
            margin-top: 2rem;
          }
        `}</style>
      </Container>
    </Section>
  );
};

export default Hero;
