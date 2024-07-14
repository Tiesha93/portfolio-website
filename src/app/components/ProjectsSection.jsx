"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Landing Page",
    description:
      "This is my first project, a simple langing page with HTML and CSS flexbox",
    image: "/images/projects/landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tiesha93/landing-page",
    previewUrl: "https://Tiesha93.github.io/landing-page",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description:
      "This is the game of tic-tac-toe. I builded this project using HTML, CSS, and JavaScript",
    image: "/images/projects/tic-tac-toe.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tiesha93/tic-tac-toe",
    previewUrl: "https://tiesha93.github.io/tic-tac-toe/",
  },
  {
    id: 3,
    title: "Calculator",
    description:
      "This is a simple calculator. Build with HTML, CSS, and JavaScript.",
    image: "/images/projects/calculator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tiesha93/Calculator",
    previewUrl: "https://tiesha93.github.io/Calculator/",
  },
  {
    id: 4,
    title: "Astrology API",
    description:
      "This app shows the current astronomy of any location. It uses OpenWeatherMap API to fetch the data.",
    image: "/images/projects/api.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tiesha93/astronomy-api",
    previewUrl: "https://Tiesha93.github.io/astronomy-api",
  },
  {
    id: 5,
    title: "Shopping Cart",
    description:
      "This is an eCommerce website built with React.js. Users can browse the available products and give orders with a fully functional cart.",
    image: "/images/projects/shopping-cart.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tiesha93/shopping-cart",
    previewUrl: "https://tiesha93.github.io/shopping-cart/",
  },
  {
    id: 6,
    title: "Hang Man",
    description:
      "This is a classic word guessing game where players try to guess a hidden word by suggesting letters within a certain number of attempts.",
    image: "/images/projects/hangman.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tiesha93/hangman",
    previewUrl: "https://tiesha93.github.io/hangman/",
  },
  {
    id: 7,
    title: "Apple Email",
    description: "Apple promotion email",
    image: "/images/projects/apple-email.png",
    tag: ["All", "Email"],
    gitUrl: "https://github.com/Tiesha93/apple-email",
    previewUrl: "https://tiesha93.github.io/apple-email/",
  },
  {
    id: 8,
    title: "Spindrift Email",
    description: "Spindrift newsletter email",
    image: "/images/projects/spindrift-email.png",
    tag: ["All", "Email"],
    gitUrl: "https://github.com/Tiesha93/spindrift-email",
    previewUrl: " https://tiesha93.github.io/spindrift-email/",
  },
  {
    id: 9,
    title: "Marriott Email",
    description: "Marriott transactional email",
    image: "/images/projects/marriott-email",
    tag: ["All", "Email"],
    gitUrl: "https://github.com/Tiesha93/marriott-email",
    previewUrl: " https://tiesha93.github.io/marriott-email/",
  },
];

const ProjectsSection = () => {
        const [tag, setTag] = useState("All");
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

       const handleTagChange = (newTag) => {
         setTag(newTag);
       };

       const filteredProjects = projectsData.filter((project) =>
         project.tag.includes(tag)
       );

       const cardVariants = {
         initial: { y: 50, opacity: 0 },
         animate: { y: 0, opacity: 1 },
       };



  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Email"
          isSelected={tag === "Email"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={useInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
