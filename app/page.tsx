import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer-one";
import Hero from "@/components/home-page/home";
import {About}  from "@/components/home-page/members";
import GameImageCarousel from "@/components/home-page/intro";


export default function Home() {
  return (
      <Main>
        <Section>
          <Container>
            <Hero />
            <About/>
            <Footer />
          </Container>
        </Section>
      </Main>
  );
}
