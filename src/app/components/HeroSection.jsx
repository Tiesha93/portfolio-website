/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
          Hello, I'm{" "}
        </span>
        <br></br>
        <TypeAnimation
          sequence={["Tiesha", 1000, "Front End Developer", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="text-[#ADB7BE] text-lg lg:text-xl">
        I have earned a certificate in Front-End Development. I'm equipped with
        the knowledge of HTML, CSS, JavaScript, TypeScript, JSON, React,
        Node.JS, Next.JS, Bootstrap, and Tailwind.
      </p>
      <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-slate-200 text-white">
        Hire Me
      </button>
      <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
          Download CV
        </span>
      </button>
      <div className=" rounded-full bg-[#181818] w-[220px] h-[220px] lg:w-[370px] lg:h-[370px] relative">
        <Image
          src="/images/memoji-laptop.png"
          alt="memoji-with-laptop"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default HeroSection;
