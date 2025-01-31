export const projects: Project[] = [
  {
    title: "Feria de navidad de Barcelona",
    images: [
      "/projects/feria-navidad-barcelona/1.jpg",
      "/projects/feria-navidad-barcelona/2.jpg",
      "/projects/feria-navidad-barcelona/3.jpg",
      "/projects/feria-navidad-barcelona/4.jpg",
      "/projects/feria-navidad-barcelona/5.jpg",
      "/projects/feria-navidad-barcelona/6.jpg",
      "/projects/feria-navidad-barcelona/7.jpg",
    ]
  },

  {
    title: "Sitges Film Festival",
    images: [
      "/projects/sitges-film-festival/1.jpg",
      "/projects/sitges-film-festival/2.jpg",
      "/projects/sitges-film-festival/3.jpg",
      "/projects/sitges-film-festival/4.jpg",
      "/projects/sitges-film-festival/5.jpg",
      "/projects/sitges-film-festival/6.jpg",
      "/projects/sitges-film-festival/7.jpg",
      "/projects/sitges-film-festival/8.jpg"
    ]
  },

  {
    title: "Sustainable Fashion Week Sitges",
    images: [
      "/projects/sfw-sitges/1.jpg",
      "/projects/sfw-sitges/2.jpg",
      "/projects/sfw-sitges/3.jpg",
      "/projects/sfw-sitges/3.jpg"
    ]
  },

  {
    title: "Primavera Sound",
    images: [
      "/projects/primavera-sound/1.jpg",
      "/projects/primavera-sound/2.jpg",
      "/projects/primavera-sound/3.jpg"
    ]
  },

  {
    title: "Sons de Mar",
    images: [
      "/projects/sons-de-mar/1.jpg",
      "/projects/sons-de-mar/2.jpg",
      "/projects/sons-de-mar/3.jpg",
      "/projects/sons-de-mar/4.jpg"
    ]
  },

  {
    title: "Ajuntament de Vilanova i la Geltrú",
    images: [
      "/projects/ajuntament-vilanova/1.jpg",
      "/projects/ajuntament-vilanova/2.jpg",
      "/projects/ajuntament-vilanova/3.jpg",
      "/projects/ajuntament-vilanova/4.jpg",
      "/projects/ajuntament-vilanova/5.jpg",
      "/projects/ajuntament-vilanova/6.jpg",
      "/projects/ajuntament-vilanova/7.jpg"
    ]
  },

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