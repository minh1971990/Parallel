"use client"
import React from 'react';
import Image from 'next/image';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef } from 'react'; 
import { FaLinkedin } from "react-icons/fa";


const teamMembers = [
  {
    name: "Minh Nguyen",
    title: "Software Developer | Web Developer",
    imageSrc: "/Minh.jpg",
    href: "https://www.linkedin.com/in/minhnguyen25",
    description: [
      "Hey, I’m Minh, and I’m passionate about web development and building interactive websites.",
      "Thanks for stopping by our project. Let’s connect and dive into the endless possibilities of technology and coding!"
    ],
  },
  {
    name: "Julius Hearns",
    title: "Game Developer",
    imageSrc: "/Julius.jpg", // Replace with actual image
    href: "https://www.linkedin.com/in/julius-hearns/",
    description: [
      "Hi, I’m Julius, and I’m passionate about game development and building interactive worlds.",
      "Thanks for stopping by our project. Let’s connect and dive into the endless possibilities of technology and coding!"

    ],
  },
  {
    name: "Keane Albright",
    title: "Game Developer",
    imageSrc: "/Keane.jpg", // Replace with actual image
    href: "https://www.linkedin.com/in/keane-albright/",
    description: [
      "Hi, I’m Keane, and I enjoy designing and creating immersive gaming experiences.",
      "Thanks for stopping by our project. Let’s connect and dive into the endless possibilities of technology and coding!"   
    ],
  },
  {
    name: "Jackson Leeper",
    title: "Game Developer",
    imageSrc: "/Jackson.jpg", 
    href: "https://www.linkedin.com/in/jackson-leeper/",
    description: [
      "Hi, I’m Jackson, and I enjoy designing and creating immersive gaming experiences.",
      "Thanks for stopping by our project. Let’s connect and dive into the endless possibilities of technology and coding!"
    ],
  },
];


export const About = ({ learnMoreRef }: { learnMoreRef: React.RefObject<HTMLDivElement> }) => {
  const scrollToLearnMore = () => {
    if (learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about-us"
      className="about flex flex-col justify-center items-center w-full h-auto mt-16 lg:h-auto lg:flex lg:flex-col lg:items-center lg:justify-evenly"
    >
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className={`container w-full h-auto flex flex-col justify-center items-center px-4 mb-12 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Card on the left or right */}
            <div className="card-container w-full h-auto flex justify-center items-center lg:w-1/3 lg:h-full">
              <div className="card rounded-md w-full h-full flex flex-col justify-center items-center lg:p-7 border-solid border-2 border-slate-500 lg:w-4/5 lg:h-full relative overflow-hidden">
                <div className="image flex flex-col justify-center items-center relative lg:flex lg:flex-col lg:justify-evenly lg:items-center lg:h-2/5 lg:w-full">
                  <Image className="lg:w-4/5 w-60 h-60 rounded-md z-20 object-cover" src={member.imageSrc} width={230} height={300} alt="profile card img" />
                  <h2 className="mt-4 text-xl lg:text-lg lg:mt-2">{member.name}</h2>
                  <h3 className="lg:text-sm z-20 text-slate-500">{member.title}</h3>
                  <div className="blob1 hidden lg:block lg:absolute z-10"></div>
                  <div className="blob2 hidden lg:block lg:absolute z-10"></div>
                  <div className="blob3 hidden lg:block lg:absolute z-10"></div>
                </div>
                <div className="profile w-[90%] mt-6 lg:mt-10 lg:w-full lg:justify-evenly lg:flex flex-row">
                  <a 
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-button no-underline flex items-center space-x-2 relative inline-block px-4 py-2 uppercase tracking-widest rounded-md overflow-hidden transition-all duration-300"
                  >
                    <FaLinkedin className="icon" />
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Description on the right or left */}
            <div className="description flex flex-col justify-evenly mt-6 items-start h-auto lg:mt-0 lg:w-3/5 lg:h-full lg:flex lg:justify-center lg:items-center lg:flex-col">
              {member.description.map((text, i) => (
                <h2 key={i} className="text-sm lg:mb-6 lg:text-lg lg:w-4/5">
                  {text}
                </h2>
              ))}
            </div>
          </div>
        ))}


      <style jsx>{`
        .card {
          position: relative;
          overflow: hidden;
        }

        .button-second {
          background-color: #292929;
          transition: all 0.8s ease-in-out;
        }

        .button-second:hover .icon {
          animation: moveBlobs 1.5s infinite alternate;
        }

        .card:hover .blob1 {
          top: -14rem;
          left: -14rem;
          transform: translateY(3rem);
        }

        .card:hover .blob2 {
          top: -1rem;
          right: -14rem;
          transform: rotate(20deg);
        }

        .card:hover .blob3 {
          bottom: -21rem;
          right: -14rem;
          transform: translateX(-3rem);
        }

        .blob1, .blob2, .blob3 {
          position: absolute;
          background-size: cover;
          background-position: center center;
          background-repeat: repeat;
          transition: all 0.8s ease;
          z-index: 1;
        }

        .blob1 {
          width: 100%;
          height: 100%;
          top: -15rem;
          left: -15rem;
          background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M923.5 653.5Q866 807 721.5 872T447 877q-130-60-209.5-156T111 483q-47-142 71.5-235T437 120.5Q573 86 722.5 137t204 207q54.5 156-3 309.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23f7f545%22 d=%22M923.5 653.5Q866 807 721.5 872T447 877q-130-60-209.5-156T111 483q-47-142 71.5-235T437 120.5Q573 86 722.5 137t204 207q54.5 156-3 309.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
        }

        .blob2 {
          width: 100%;
          height: 100%;
          top: -5rem;
          right: -18rem;
          background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M864.5 620.5Q741 741 620.5 794.5t-283 42Q175 825 94 662.5T138.5 382Q264 264 382 154t253-17q135 93 244 228t-14.5 255.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23f7f545%22 d=%22M864.5 620.5Q741 741 620.5 794.5t-283 42Q175 825 94 662.5T138.5 382Q264 264 382 154t253-17q135 93 244 228t-14.5 255.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
        }

        .blob3 {
          width: 100%;
          height: 100%;
          right: -15rem;
          bottom: -20rem;
          background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M732.5 631.5Q652 763 480 798T154 666.5Q0 500 132.5 296t338-152.5q205.5 51.5 274 204t-12 284Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23f7f545%22 d=%22M732.5 631.5Q652 763 480 798T154 666.5Q0 500 132.5 296t338-152.5q205.5 51.5 274 204t-12 284Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
        }
        .hover-button {
          position: relative;
          z-index: 3;
          padding: 0.4rem 0.8rem;
          font-size: 1rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          color: black;
          background-color: yellow !important;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: color 0.3s ease;
          text-decoration: none;
        }
        .hover-button a {
          text-decoration: none; /* Additional rule for anchors */
        }
        .hover-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: #00bfff; /* Blue color */
          transition: width 0.3s ease;
          z-index: -1;
        }
        .hover-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: yellow !important; /* Yellow background by default */
          z-index: -2;
        }

        .hover-button:hover::before {
          width: 100%;
        }

        .hover-button:hover {
          color: white !important;
        }
      `}</style>
    </section>


  );
};