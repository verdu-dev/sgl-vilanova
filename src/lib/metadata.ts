interface Metadata {
  title: Record<string, string>;
  description: Record<string, string>;
  image: string;
  name: string;
}

export const metadata: Metadata = {
  title: {
    es: "SGL Vilanova | Totems e instalaciones eléctricas para eventos",
    ca: "SGL Vilanova | Tòtems i instal·lacions elèctriques per a esdeveniments",
  },
  description: {
    es: "Alquiler de tótems de diseño propio e instalaciones eléctricas certificadas para eventos. Soluciones adaptadas a la normativa actual.",
    ca: "Alquilar tòtems de disseny propi i instal·lacions elèctriques certificats per a esdeveniments. Solucions adaptades a la normativa actual.",
  },
  image: "card.jpg",
  name: "SGL Vilanova"
}