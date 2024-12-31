export enum TechStack {
  "react" = "React",
  "typescript" = "TypeScript",
  "csharp" = "C#",
  "css" = "CSS",
  "kubernetes" = "Kubernetes",
  "docker" = "Docker",
  "php" = "PHP",
}

export type ProjectType =
  | "Personal"
  | "Internship"
  | "Freelance"
  | "School"
  | "Organisation";

export interface ProjectData {
  title: string;
  type: ProjectType;
  client?: string;
  city?: string;
  country?: string;
  techStacks: TechStack[];
  description: string;
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse mollitia cupiditate quasi numquam rerum consequuntur nemo, ducimus, eos aliquam, et sequi. Adipisci doloribus nisi sapiente pariatur aperiam numquam at modi.",
  },
  "svg-animation": {
    title: "SVG Animation",
    type: "Personal",
    techStacks: [TechStack.react],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse mollitia cupiditate quasi numquam rerum consequuntur nemo, ducimus, eos aliquam, et sequi. Adipisci doloribus nisi sapiente pariatur aperiam numquam at modi.",
  },
  kitchenwares: {
    title: "KitchenWares",
    type: "School",
    city: "Eindhoven",
    country: "The Netherlands",
    techStacks: [TechStack.csharp, TechStack.kubernetes, TechStack.docker],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse mollitia cupiditate quasi numquam rerum consequuntur nemo, ducimus, eos aliquam, et sequi. Adipisci doloribus nisi sapiente pariatur aperiam numquam at modi.",
  },
  "dynamic-question-creator": {
    title: "Dynamic Question Creator",
    type: "Organisation",
    city: "Surabaya",
    country: "Indonesia",
    client: "Institut Sains dan Teknologi Terpadu Surabaya",
    techStacks: [TechStack.react, TechStack.typescript],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse mollitia cupiditate quasi numquam rerum consequuntur nemo, ducimus, eos aliquam, et sequi. Adipisci doloribus nisi sapiente pariatur aperiam numquam at modi.",
  },
  "fruit-management": {
    title: "Saribuah",
    type: "Freelance",
    client: "Adi Winoto",
    city: "Surabaya",
    country: "Indonesia",
    techStacks: [TechStack.react, TechStack.typescript],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse mollitia cupiditate quasi numquam rerum consequuntur nemo, ducimus, eos aliquam, et sequi. Adipisci doloribus nisi sapiente pariatur aperiam numquam at modi.",
  },
};
