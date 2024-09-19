// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";

// Icon imports
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  image?: string;
};

const featureText: FeatureText[] = [
  {
    image: "/path/to/https://th.bing.com/th/id/OIP.kk1idYXmRvEULaD_cBA3UAHaIG?rs=1&pid=ImgDetMain", 
    title: "Minh Nguyen",
    href: "https://www.linkedin.com/in/minhnguyen25",
    description:
      "Web Developer",
    cta: "Connect",
  },
  {
    title: "Julius Hearns",
    href: "https://www.linkedin.com/in/julius-hearns/",
    description: "Game Developer",

    cta: "Connect",
  },
  {

    title: "Keane Albright",
    href: "https://www.linkedin.com/in/keane-albright/",
    description:
      "Game Developer",
    cta: "Connect",
  },
  {

    title: "Jackson Leeper",
    href: "https://www.linkedin.com/in/jackson-leeper/",
    description:
      "Game Developer",
    cta: "Connect",
  },
];

const Feature = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl text-center">
            <Balancer>
              Our Team
            </Balancer>
          </h3>
          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureText.map(
              ({ image,title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
