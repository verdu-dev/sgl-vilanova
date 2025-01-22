export const projects: Project[] = [
  {
    image: "/projects/totem-de-aluminio-1.webp",
    title: "Instalación de totems para Coca-Cola",
    logo: "/logos/coca-cola.svg",
  },
  {
    image: "/projects/totem-de-aluminio-2.webp",
    title: "Instalación eléctrica para Aerostar",
    logo: "/logos/aerostar.svg",
  },
  {
    image: "/projects/totem-de-aluminio-3.webp",
    title: "Instalacion de totems para Ajuntament de Vilanova i la Geltru",
    logo: "/logos/ajuntament-vilanova.svg",
  },
  {
    image: "/projects/totem-de-aluminio-4.webp",
    title: "Instalacion mixta para Primavera Sound",
    logo: "/logos/primavera-sound.svg",
  },
  {
    image: "/projects/totem-de-aluminio-1.webp",
    title: "Instalación de totems para Coca-Cola",
    logo: "/logos/coca-cola.svg",
  },
  {
    image: "/projects/totem-de-aluminio-2.webp",
    title: "Instalación eléctrica para Aerostar",
    logo: "/logos/aerostar.svg",
  },
  {
    image: "/projects/totem-de-aluminio-3.webp",
    title: "Instalacion de totems para Ajuntament de Vilanova i la Geltru",
    logo: "/logos/ajuntament-vilanova.svg",
  },
  {
    image: "/projects/totem-de-aluminio-4.webp",
    title: "Instalacion mixta para Primavera Sound",
    logo: "/logos/primavera-sound.svg",
  }
];

export const lastProjects = projects.slice(0, 4);

export interface Project {
  image: string;
  title: string;
  logo: string;
}