import { Container, Main, Section } from "@/components/craft";
import CTA from "@/components/home-page/cta";
import Footer from "@/components/home-page/footer-one";
import Hero from "@/components/home-page/home";
import Feature from "@/components/home-page/aboutus";
import {About}  from "@/components/home-page/members";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
         <Hero />
         <Feature/>
         <Footer />
        </Container>
      </Section>
    </Main>
  );
}
