import { Diploma } from "./Diploma";
import { Experience } from "./Experience";
import { Skill } from "./Skill";

import cgiLogo from "../../public/cgi.png";
import amsilabLogo from "../../public/amsilab.png";
import alistigoLogo from "../../public/alistigo.webp";

import lycee from "../../public/lycee.jpg";
import iut from "../../public/iut.jpg";
import upjv from "../../public/upjv.jpg";

import htmlIcon from "../../public/html-icon.svg";
import cssIcon from "../../public/css3-icon.svg";
import jsIcon from "../../public/jsIcon.png";
import tsIcon from "../../public/tsIcon.svg";
import reactIcon from "../../public/react.svg";
import angularIcon from "../../public/angular.svg";
import nestJsIcon from "../../public/nestJs.svg";
import { Project } from "./Project";

import spaceSimulationGif from '../../public/Space-Simulation.gif';
import portfolioGif from '../../public/portfolio.gif';

export const experiences: Experience[] = [
  {
    name: "Front developer (volunteer)",
    company: {
      name: "Alistigo",
      description: `This project was launched by my older brother and aims to assist
      users in creating and sharing lists on Shopify applications. It
      provides a user-friendly platform that enables individuals to curate
      and collaborate on lists, enhancing their shopping experience on
      Shopify. With a focus on convenience and personalization, this
      project aims to streamline the process of creating and managing
      lists for users within the Shopify ecosystem.`,
      imageSrc: alistigoLogo.src,
    },
    jobDescription: `Volunteer Developer for my elder brother's Shopify extension
            project, I acquired strong programming skills and learned best
            practices under the guidance of a senior developer. Although it was
            not a traditional professional experience, I gained important
            technical knowledge and skills in a collaborative development
            environment.`,
    startDate: new Date("2022-11-01"),
    endDate: new Date("2023-03-31"),
    labels: [
      {
        name: "Typescript",
      },
      {
        name: "React",
      },
      {
        name: "Storybook",
      },
      {
        name: "Docker",
      },
    ],
  },
  {
    name: "React Native Developer",
    company: {
      name: "Amsilab",
      description: `French startup based in Amiens specializes in developing mobile
      applications, marketplaces, and APIs. With a focus on innovation and
      cutting-edge technology, they provide tailored solutions to meet the
      unique needs of their clients. Their expertise lies in creating
      user-friendly and intuitive mobile apps that deliver seamless
      experiences.`,
      imageSrc: amsilabLogo.src,
    },
    jobDescription: `React-Native Developer in a small team (5 people), I had the
    opportunity to discover mobile development and work on concrete
    projects. This experience allowed me to acquire practical skills and
    to work effectively within a small team, while developing my
    technical skills.`,
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-08-31"),
    labels: [
      {
        name: "React",
      },
      {
        name: "React Native",
      },
      {
        name: "firebase",
      },
    ],
  },
  {
    name: "Internship SAP developer",
    company: {
      name: "CGI",
      description: `CGI is a global IT and business consulting company that offers a
      wide range of services, including systems integration, application
      development, and cybersecurity. With a strong focus on innovation
      and client-centric solutions, CGI has established itself as a leader
      in the industry.`,
      imageSrc: cgiLogo.src,
    },
    jobDescription: `Internship as a SAP developer at CGI, where I worked on various
    projects for international clients. I gained hands-on experience in
    ABAP programming, as well as in designing and implementing ERP
    solutions. I also learned to work in a team in a professional
    development environment.`,
    startDate: new Date("2022-04-10"),
    endDate: new Date("2022-06-01"),
    labels: [
      {
        name: "SAP",
      },
      {
        name: "Abap",
      },
    ],
  },
];

export const skills: Skill[] = [
  {
    name: "Html",
    imageSrc: htmlIcon.src,
    description:
      "HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It uses tags to define and organize the content of a page, such as headings, paragraphs, links, and images. These tags provide instructions to the browser on how the content should be displayed. HTML is complemented by other languages like CSS for styling and JavaScript for interactivity.",
    level: 4,
  },
  {
    name: "Css",
    imageSrc: cssIcon.src,
    description:
      "CSS is a language used for describing the presentation and styling of a web page. It allows you to control the appearance of HTML elements by specifying style rules. CSS rules consist of selectors that target specific HTML elements and properties that define visual attributes such as color, size, font, margins, etc.",
    level: 3,
  },
  {
    name: "Javascript",
    imageSrc: jsIcon.src,
    description:
      "JavaScript is a programming language used to add interactivity and dynamic functionality to web pages. It can be used to manipulate HTML content, interact with users, perform calculations, make network requests, and much more.",
    level: 3,
  },
  {
    name: "Typescript",
    imageSrc: tsIcon.src,
    description:
      "TypeScript is a programming language that is a superset of JavaScript, meaning it includes all JavaScript features and adds static typing. It allows developers to write more structured and maintainable code by providing type annotations, which help catch errors early during development. TypeScript code is transpiled into JavaScript and can be run in any JavaScript runtime environment.",
    level: 3,
  },
  {
    name: "React",
    imageSrc: reactIcon.src,
    description:
      "React is a popular JavaScript library used for building user interfaces (UIs) in web applications. It allows developers to create reusable UI components that update efficiently when the underlying data changes. React uses a virtual DOM (Document Object Model) to optimize performance and provide a seamless user experience. It follows a declarative approach, where developers describe how the UI should look for each state, and React takes care of efficiently updating the actual UI.",
    level: 3,
  },
  {
    name: "Angular",
    imageSrc: angularIcon.src,
    description:
      "TypeScript-based open-source framework for building web applications. It provides a comprehensive set of tools and features for developing scalable and maintainable applications. Angular follows a component-based architecture, where developers build reusable components that represent different parts of the application's UI. It also offers features like two-way data binding, dependency injection, and a powerful template system. Angular embraces a modular approach and provides a robust ecosystem for managing application state, routing, and handling server-side communication.",
    level: 2,
  },
  {
    name: "NestJs",
    imageSrc: nestJsIcon.src,
    description:
      "NestJS is a progressive TypeScript-based framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and provides a powerful and extensible architecture that follows the principles of modularity, dependency injection, and decorators. NestJS leverages TypeScript's static typing capabilities to enhance developer productivity and code maintainability. It offers features like dependency injection, middleware support, routing, and integrated testing utilities, making it a popular choice for building robust back-end applications.",
    level: 3,
  },
];

export const diplomas: Diploma[] = [
  {
    name: "Baccalauréat S",
    imageSrc: lycee.src,
    equivalent: "High School Diploma",
    place: "Lycée Condorcet, Méru, France",
    year: "2019",
    description:
      "The Baccalauréat S (Scientific Baccalaureate) with the option of Science of Engineering is a secondary school diploma in France. It focuses on science and mathematics while introducing engineering concepts. Students take courses such as physics, chemistry, advanced mathematics, and technology, which provide them with a strong scientific and technical foundation to pursue higher education in engineering and applied sciences.",
  },
  {
    name: "DUT informatique",
    imageSrc: iut.src,
    equivalent: "Bachelor degree",
    place: "Institut universitaire et technologique, Amiens, France",
    year: "2021",
    description:
      "The DUT (Diploma of Higher Education) in Computer Science is a two-year degree program in France. It focuses on providing students with practical and theoretical knowledge in various areas of computer science, including programming, databases, networking, and software development. The curriculum combines classroom instruction, laboratory work, and internships to prepare students for entry-level positions in the field of computer science.",
  },
  {
    name: "Licence d'informatique",
    imageSrc: upjv.src,
    equivalent: "Bachelor degree",
    place: "Université Picardie Jules Verne, Amiens, France",
    year: "2022",
    description:
      "The Bachelor's degree in Computer Science is a three-year undergraduate program in France. It aims to equip students with a comprehensive understanding of computer science principles and practices. The curriculum covers areas such as programming, algorithms, data structures, databases, software engineering, and computer networks. Students gain theoretical knowledge and practical skills through a combination of lectures, labs, projects, and internships. Upon completion, graduates are prepared for various roles in the IT industry or can pursue further studies at the master's level.",
  },
];

export const projects: Project[] = [
  {
    name: "Space Simulation",
    gifSrc: spaceSimulationGif.src,
    labels: ["Typescript", "ThreeJs"],
    features: [
      "Realistic simulation of the Earth and Moon in a 3D environment",
      "Accurate representation of their relative positions and movements",
      "Interactive controls to navigate and explore the simulation",
      "Dynamic lighting and shading effects for enhanced visuals"
    ],
    description:
      "Space Simulation is a TypeScript project that simulates the Earth-Moon system using the Three.js library. It provides a visually appealing and interactive representation of the celestial bodies.",
  },
  {
    name: "Portfolio",
    gifSrc: portfolioGif.src,
    labels: ["React", "Typescript", "Material UI", "Framer motion"],
    features: [
      "An introduction section that provides an overview of my background and skills",
      "A projects section that showcases the projects I have developed, including descriptions, screenshots, and links to live demos or repositories",
      "A responsive and visually appealing design that adapts to different screen sizes and devices"
    ],
    description: `This is my personal portfolio built with React, TypeScript, and showcases my journey and projects.`,
  },
];
