// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";

// Icon imports
import { Coins, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

type FeatureText = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  image?: string;
};

const featureText: FeatureText[] = [
  {
    image: "/Minh.jpg", 
    title: "Minh Nguyen",
    href: "https://www.linkedin.com/in/minhnguyen25",
    description: "Web Developer",
    cta: "Connect",
  },
  {
    image: "/Julius.jpg",
    title: "Julius Hearns",
    href: "https://www.linkedin.com/in/julius-hearns/",
    description: "Game Developer",
    cta: "Connect",
  },
  {
    image: "/Keane.jpg",
    title: "Keane Albright",
    href: "https://www.linkedin.com/in/keane-albright/",
    description: "Game Developer",
    cta: "Connect",
  },
  {
    image: "/Jackson.jpg",
    title: "Jackson Leeper",
    href: "https://www.linkedin.com/in/jackson-leeper/",
    description: "Game Developer",
    cta: "Connect",
  },
];

const Feature = () => {
  return (
    <Section id="about-us" className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl text-center">
            <Balancer>Our Team</Balancer>
          </h3>
          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureText.map(({ image, title, description, href, cta }, index) => (
              <Link
                href={`${href}`}
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security feature when opening new tabs
                className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                key={index}
              >
                <div className="grid gap-4">
                  <h4 className="text-xl text-primary">{title}</h4>
                  {image && (
                    <div className="relative w-full h-40"> {/* Adjust height as needed */}
                      <Image
                        src={image}
                        alt={title}
                        layout="fill" // Ensures the image fills the container
                        objectFit="cover" // Makes sure the image scales properly
                        className="rounded-md" // Optional: adds rounded corners
                      />
                    </div>
                  )}
                  <p className="text-base opacity-75">{description}</p>
                </div>
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold">
                    <FaLinkedin className="mr-2 h-4 w-4" />
                    <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
