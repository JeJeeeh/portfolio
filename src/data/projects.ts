export enum TechStack {
  "react" = "React",
  "typescript" = "TypeScript",
  "csharp" = "C#",
  "css" = "CSS",
  "kubernetes" = "Kubernetes",
  "docker" = "Docker",
  "php" = "PHP",
  "java" = "Java",
  "node" = "NodeJS",
  "cplus" = "C++",
  "prisma" = "Prisma",
  "express" = "ExpressJS",
  "mysql" = "MySQL",
}

export const techStacks: string[] = [
  "React",
  "TypeScript",
  "C#",
  "CSS",
  "PHP",
  "Java",
  "C++",
  "Prisma",
  "ExpressJS",
  "MySQL",
  "Python",
  "MongoDB",
  "Laravel",
  ".NET",
  "RabbitMQ",
];

export type ProjectType =
  | "Personal"
  | "Internship"
  | "Freelance"
  | "School"
  | "Organisation";

export enum Tools {
  "git" = "Git",
  "githubActions" = "Github Actions",
  "npm" = "npm",
  "jmeter" = "JMeter",
  "postman" = "Postman",
  "docker" = "Docker",
  "kubernetes" = "Kubernetes",
  "gcloud" = "Google Cloud",
  "figma" = "Figma",
  "prometheus" = "Prometheus",
  "grafana" = "Grafana",
  "sqlworkbench" = "SQL Workbench",
  "phpmyadmin" = "phpMyAdmin",
  "mongodbcompass" = "MongoDB Compass",
}

export const tools: string[] = [
  "Git",
  "GitHub Actions",
  "npm",
  "JMeter",
  "Postman",
  "Docker",
  "Kubernetes",
  "Google Cloud",
  "Figma",
  "Prometheus",
  "Grafana",
  "SQL Workbench",
  "phpMyAdmin",
  "MongoDB Compass",
];

export interface ProjectData {
  title: string;
  type: ProjectType;
  client?: string;
  city?: string;
  country?: string;
  techStacks: TechStack[];
  description: string;
  link: string;
  display?: ProjectDisplay;
}

export interface ProjectDisplay {
  type: string;
  url: string;
}

export const projectsData: { [key: string]: ProjectData } = {
  "svg-editor-in-template-designer": {
    title: "SVG Editor in Template Designer",
    type: "Internship",
    client: "byCape",
    city: "Tilburg",
    country: "The Netherlands",
    techStacks: [TechStack.react, TechStack.typescript, TechStack.css],
    description:
      "Integrated a new feature for Template Designer, where now users can use and customize SVGs. This feature allows customizations such as colour and shape customization. Shape customization works by the user drag dots around the SVG and its shape will follow based on the interaction.",
    link: "/projects/svg-editor-in-template-designer",
    display: {
      type: "video",
      url: "https://www.loom.com/share/65ccd70ece7244019902f4e252771215?sid=7bd408cc-0764-418d-a0f1-6069793d648a",
    },
  },
  "portfolio-website": {
    title: "Portfolio Website",
    type: "Personal",
    techStacks: [
      TechStack.react,
      TechStack.css,
      TechStack.typescript,
      TechStack.node,
    ],
    description:
      "A personal portfolio website built with React and SCSS to showcase my projects, skills, and experience. The project emphasizes responsive design, smooth user interactions, and modern UI/UX principles. Features include dynamic project displays, SVG animations, and reusable code structure.",
    link: "/projects/portfolio-website",
  },
  kitchenwares: {
    title: "KitchenWares",
    type: "School",
    city: "Eindhoven",
    country: "The Netherlands",
    techStacks: [TechStack.csharp, TechStack.react],
    description:
      "A project that focuses on the implementation of micro-service architecture. This project uses Kubernetes, with pipeline for automated integration testing and load testing, which then does deployment on success. This project also used Google Cloud, for learning how to implement cloud technologies into web applications.",
    link: "/projects/kitchenwares",
  },
  "dynamic-question-creator": {
    title: "Dynamic Question Creator",
    type: "Organisation",
    city: "Surabaya",
    country: "Indonesia",
    client: "Institut Sains dan Teknologi Terpadu Surabaya",
    techStacks: [TechStack.react, TechStack.typescript],
    description:
      "Creating a dynamic question maker for handling weekly tests using React Typescript. This question maker can take texts, images, or code segments for questions, and various types for answers, such as texts, multiple choices or multiple options.",
    link: "/projects/dynamic-question-creator",
  },
  "fruit-management": {
    title: "Saribuah",
    type: "Freelance",
    client: "Adi Winoto",
    city: "Surabaya",
    country: "Indonesia",
    techStacks: [TechStack.php, TechStack.mysql],
    description:
      "Creating a centralized fruit management system using Laravel, that allows different store branches to use this application as its core platform for managing inventories and transactions. ",
    link: "/projects/fruit-management",
  },
  "bible-api": {
    title: "Bible API",
    type: "School",
    city: "Surabaya",
    country: "Indonesia",
    techStacks: [
      TechStack.typescript,
      TechStack.node,
      TechStack.prisma,
      TechStack.express,
    ],
    description:
      "A school project that focuses integrating third party APIs to the backend, while also creating a secure and efficient service. This project uses ExpressJS as the main framework, Prisma for database management, and JWT tokens for authentications",
    link: "https://github.com/JeJeeeh/project-soa",
  },
};
