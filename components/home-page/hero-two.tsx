// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/public/logo.svg";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">

        <h1 className="!mb-0">
          <Balancer>
            Parallel
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            A 2D Retro Top-Down thriller game project by <span className="text-red-600 font-bold text-10x2">Wabash</span> Computer Science seniors. 
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              Download
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Learn More -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
