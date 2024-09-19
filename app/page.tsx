import { Container, Main, Section } from "@/components/craft";
import CTA from "@/components/home-page/cta";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import FeatureSet from "@/components/home-page/feature-set";
import Footer from "@/components/home-page/footer-one";
import Hero from "@/components/home-page/hero-two";
import Feature from "@/components/home-page/feature-two";

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
