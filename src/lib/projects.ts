export const projects: Project[] = [
  {
    title: "Instalación de truss para Osos Sitges",
    images: [
      "/projects/osos-sitges/1.jpg",
      "/projects/osos-sitges/2.jpg",
      "/projects/osos-sitges/3.jpg",
      "/projects/osos-sitges/4.jpg"
    ]
  },

  {
    title: "Instalación de truss para Movistar",
    images: [
      "/projects/movistar/1.jpg",
      "/projects/movistar/2.jpg"
    ]
  },

  {
    title: "Instalación mixta para Sant Boi",
    images: [
      "/projects/sant-boi/1.jpg"
    ]
  },

  {
    title: "Instalación de truss para la American Cup",
    images: [
      "/projects/america-cup/1.jpg"
    ]
  },
];

export const lastProjects = projects.slice(0, 3);

export interface Project {
  title: string;
  images: Array<string>;
}