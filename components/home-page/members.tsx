'use client';
import React from 'react';
import Image from 'next/image';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SendIcon from '@mui/icons-material/Send';

export const About = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEmail = () => {
    const email = 'tieuvanhien01@gmail.com';
    const subject = 'Subject of the email';
    const body = 'Content of the email';

    // Create the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <section
      id="about"
      className="about flex flex-col justify-center items-center w-[85%] h-auto mt-16 lg:w-full lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-evenly"
    >
      <div className="heading mb-8 flex justify-start items-center w-[90%] lg:h-1/10 lg:w-full lg:mb-8 lg:flex lg:justify-start lg:items-center">
        <h1 className="text-2xl lg:text-4xl">About Me</h1>
        <div className="line ml-4 w-2/5 lg:w-1/4 lg:ml-4"></div>
      </div>
      <div className="container w-[90%] h-auto flex flex-col justify-center items-center lg:flex lg:justify-center lg:h-85vh lg:flex-row">
        <div className="card-container w-full h-[80vh] flex justify-center items-center lg:h-[90%]  lg:w-2/5">
          <div className="card rounded-md w-full h-full flex flex-col justify-center items-center lg:p-7 border-solid border-2 border-slate-500 lg:w-4/5 lg:h-full">
            <div className="image flex flex-col justify-center items-center relative lg:flex lg:flex-col lg:justify-evenly lg:items-center lg:h-4/5 lg:w-full">
              <Image
                className="lg:w-4/5 rounded-md lg:h-4/5 z-20"
                src='/profile.jpg'
                width={230}
                height={300}
                alt="profile card img"
              />
              <h2 className="mt-4 text-xl lg:text-lg lg:mt-2">Van Hien Tieu</h2>
              <h3 className="lg:text-sm z-20 text-slate-500 ">
                Software Developer | Web Developer
              </h3>
              <div className="blob1 hidden lg:block lg:absolute z-10"></div>
              <div className="blob2 hidden lg:block  lg:absolute z-10"></div>
              <div className="blob3 hidden lg:block lg:absolute z-10"></div>
            </div>
            <div className="profile w-[80%] mt-6 lg:mt-10 lg:w-full lg:justify-evenly lg:flex flex-row">
              <div className="button flex justify-center items-center lg:w-2/5 lg:h-10 rounded-lg">
                <DataObjectIcon />
                <button className="ml-2 lg:w-3/5" onClick={handleDownload}>
                  Resume
                </button>
              </div>
              <div className="button-second mt-4 z-20 flex justify-center items-center lg:mt-0 lg:pl-2 lg:pr-2 lg:w-2/5 lg:h-10 rounded-lg">
                <SendIcon className="icon" />
                <button
                  className="ml-2 h-10 lg:h-10 rounded-lg"
                  onClick={handleEmail}
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="description flex flex-col justify-evenly mt-6 items-start h-[60vh] lg:mt-0 lg:w-3/5 lg:h-70vh lg:flex lg:justify-center lg:items-center lg:flex-col">
          <h2 className="text-sm lg:mb-6 lg:text-lg lg:w-4/5">
            Hey, I&apos;m Van Hien Tieu, and I&apos;m all about technology and
            coding. For as long as I can remember, I&apos;ve been immersed in
            the world of coding, turning ideas into digital realities.
          </h2>
          <h2 className="text-sm lg:mb-6 lg:text-xl lg:w-4/5">
            In my journey, I&apos;ve worked on impactful projects, collaborated
            with diverse teams. I specialize in front-end development but
            I&apos;m expanding myself to full-stack development with
            technologies such as React, Next.js for front-end, Node.js and
            Django for back-end to build powerful web application. Beyond the
            screen, I love experimenting with new programming languages, playing
            video games and sports. Currently, I&apos;m actively seeking for new
            opportunities to continue developing my coding skills and learning
            new technologies.
          </h2>
          <h2 className="text-sm lg:text-lg lg:w-4/5">
            Thanks for stopping by my portfolio. Let&apos;s connect and dive
            into the endless possibilities of technology and coding!
          </h2>
        </div>
      </div>
    </section>
  );
};