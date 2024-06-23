import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="About">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="desktop-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a front end web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, Git, React, Node.js, Next.js, Typescript,
            JSON, HTML, CSS, Bootstrap, and Tailwind. I am a quick learner and I
            am always looking to expand my knowledge and skill set. I am a team
            player and I am excited to work with others to create amazing
            applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
