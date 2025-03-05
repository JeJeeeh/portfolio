interface Company {
  name: string;
  link: string;
}

export interface Testimonials {
  name: string;
  imageUrl?: string;
  link?: string;
  role: string;
  company: Company;
  body: string[];
}

export const testimonialsData: Testimonials[] = [
  {
    name: "Stijn Toussaint",
    link: "https://stijn@saintonline.nl",
    role: "Frontend Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4D03AQEJAsZB47dwpA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1578393404347?e=1746662400&v=beta&t=ZyxQlIoQebLFryfY626_JD1MyC1imb5TBVItkr9vQXY",
    company: {
      name: "Cape",
      link: "https://bycape.io",
    },
    body: [
      "I am pleased to recommend Jason for any frontend development role. During his time at Cape, he was of great value to our team. He worked on implementing the ability to edit and display SVGs. ",
      "Jason consistently wrote clean, high-quality code in TypeScript, demonstrating strong problem-solving skills and proved his ability to overcome technical challenges.",
      "Jason was a great team member in both professional and social settings. He collaborated well with colleagues, maintained a positive attitude, and showed interest in learning new things.",
    ],
  },
];
