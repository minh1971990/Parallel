"use client";
// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { BsDownload } from "react-icons/bs";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RoboModel } from './Scene';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react'; // Import useEffect and useRef

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/public/logo.svg";
import { Suspense } from "react";

const Hero = () => {
  const typedElementRef1 = useRef(null); // Create a reference for the first part
  const typedElementRef2 = useRef(null); // Create a reference for the second part

  // Add typing effect with useEffect
  useEffect(() => {
    const options1 = {
      strings: [
        'A 2D Retro Top-Down thriller game project', // First part of the sentence
      ],
      typeSpeed: 20,
      backSpeed: 40,
      cursorChar: ' ',
      loop: false,
      onComplete: () => {
        const typed2 = new Typed(typedElementRef2.current, {
          strings: ['by <span class="text-red-600 font-bold">Wabash</span> Computer Science seniors.'], // Second part of the sentence
          typeSpeed: 20,
          backSpeed: 40,
          loop: false,
        });
      },
    };

    const typed1 = new Typed(typedElementRef1.current, options1);

    // Clean up both Typed.js instances
    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <h1 className="!mb-15">
          <Balancer>Parallel</Balancer>
        </h1>
        <RoboModel />

        {/* Use the refs for the two parts of the typing effect */}
        <h3 className="text-muted-foreground !mt-0">
          <Balancer>
            {/* First part of the sentence */}
            <span ref={typedElementRef1}></span>
            <br /> {/* Line break */}
            {/* Second part of the sentence */}
            <span ref={typedElementRef2}></span>
          </Balancer>
        </h3>

        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              <BsDownload className="mr-2" />
              Download
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Learn More -&gt;</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
