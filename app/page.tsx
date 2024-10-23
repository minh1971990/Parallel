"use client";
import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer-one";
import Hero from "@/components/home-page/home";
import {About}  from "@/components/home-page/members";
import GameImageCarousel from "@/components/home-page/intro";
import { useRef } from "react";

export default function Home() {
  const learnMoreRef = useRef<HTMLDivElement>(null);

  return (
    <Main>
      <Section>
        <Hero learnMoreRef={learnMoreRef} />
        <About learnMoreRef={learnMoreRef} />
        <Footer />
      </Section>
    </Main>
  );
}