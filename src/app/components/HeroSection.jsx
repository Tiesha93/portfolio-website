/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
          Hello, I'm{" "}
        </span>
        <br></br>
        <TypeAnimation
          sequence={[
            "Tiesha",
            1000,
            "Front End Web Developer",
            1000,
            "HTML",
            1000,
            "CSS",
            1000,
            "Javascript",
            1000,
            "React",
            1000,
            "Node.JS",
            1000,
            "Next.JS",
            1000,
            "Bootstrap",
            1000,
            "Tailwind",
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="text-[#ADB7BE] text-lg lg:text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, numquam.
        Aspernatur, amet nisi eum qui quis placeat eveniet. Recusandae officia
        doloribus nobis. Voluptas nisi qui incidunt consectetur neque at
        accusamus?
      </p>
    </section>
  );
};

export default HeroSection;
