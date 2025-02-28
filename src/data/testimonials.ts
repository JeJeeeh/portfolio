interface Company {
  name: string;
  link: string;
}

export interface Testimonials {
  name: string;
  link?: string;
  role: string;
  company: Company;
  body: string;
}

export const testimonialsData: Testimonials[] = [
  {
    name: "John Doe",
    link: "https://johndoe.com",
    role: "Frontend Developer",
    company: {
      name: "Doe Company",
      link: "https://doecompany.com",
    },
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exculpa qui molestiae molestias veritatis ut quisquam quod neque nemo suscipit dolor omnis illo, tenetur aut laborum saepe voluptatibus esse numquam!",
  },
  {
    name: "Jane Doe",
    role: "Backend Developer",
    company: {
      name: "Doe Company",
      link: "https://doecompany.com",
    },
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exculpa qui molestiae molestias veritatis ut quisquam quod neque nemo suscipit dolor omnis illo, tenetur aut laborum saepe voluptatibus esse numquam!",
  },
];
