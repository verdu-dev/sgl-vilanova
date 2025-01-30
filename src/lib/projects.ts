export const projects: Project[] = [
  {
    title: "Osos Sitges",
    images: [
      "/projects/osos-sitges/1.jpg",
      "/projects/osos-sitges/2.jpg",
      "/projects/osos-sitges/3.jpg",
      "/projects/osos-sitges/4.jpg"
    ]
  },

  {
    title: "Movistar",
    images: [
      "/projects/movistar/1.jpg",
      "/projects/movistar/2.jpg"
    ]
  },

  {
    title: "Ajuntament de Sant Boi",
    images: [
      "/projects/sant-boi/1.jpg"
    ]
  },

  {
    title: "American Cup Barcelona",
    images: [
      "/projects/america-cup/1.jpg"
    ]
  },
];

export const lastProjects = projects.slice(0, 4);

export interface Project {
  title: string;
  images: Array<string>;
}