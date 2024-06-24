import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Landing Page",
    description: "This is my first project, a simple langing page with HTML and CSS flexbox",
    image: "/images/projects/landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description: "This is the game of tic-tac-toe. I builded this project using HTML, CSS, and JavaScript",
    image: "/images/projects/tic-tac-toe.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Calculator",
    description: "This is a simple calculator. Build with HTML, CSS, and JavaScript.",
    image: "/images/projects/calculator.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Astrology API",
    description: "This app shows the current astronomy of any location. It uses OpenWeatherMap API to fetch the data.",
    image: "/images/projects/api.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Shopping Cart",
    description: "This is an eCommerce website built with React.js. Users can browse the available products and give orders with a fully functional cart.",
    image: "/images/projects/shopping-cart.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Hang Man",
    description: "This is a classic word guessing game where players try to guess a hidden word by suggesting letters within a certain number of attempts.",
    image: "/images/projects/hangman.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
