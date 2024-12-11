"use client";
import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer-one";
import Hero from "@/components/home-page/home";
import {About}  from "@/components/home-page/members";
import { useRef } from "react";
import ReleaseNotes from "@/components/home-page/release-notes";
export default function Home() {
  const learnMoreRef = useRef<HTMLDivElement>(null);

  return (
    <Main>
      <Section>
        <Hero learnMoreRef={learnMoreRef} />
        <About learnMoreRef={learnMoreRef} />
        <ReleaseNotes />
        <Footer />
      </Section>
    </Main>
  );
}