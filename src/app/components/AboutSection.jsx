"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Git</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Online Course</li>
      </ul>
    ),
  },
  {
    title: "Certificate",
    id: "certificate",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML and CSS</li>
        <li>JavaScript</li>
        <li>Advanced React</li>
        <li>Version Control</li>
        <li>UX/UI</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

   const handleTabChange = (id) => {
     startTransition(() => {
       setTab(id);
     });
   };


  return (
    <section className="text-white" id="about">
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
            interactive and responsive web applications, as well as engaging
            and effective emails. I have experience working with JavaScript, Git,
            React, Node.js, Next.js, Typescript, HTML, CSS, Bootstrap, and Tailwind.
            With the ability to learn quickly and I am always looking to expand my
            knowledge and skills. While being a team player and excited to work with
            others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificate")}
              active={tab === "certificate"}
            >
              {" "}
              Certificate{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
