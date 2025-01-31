interface Metadata {
  title: Record<string, string>;
  description: Record<string, string>;
  image: string;
  name: string;
}

export const metadata: Metadata = {
  title: {
    es: "SGL Vilanova | Truss e instalaciones eléctricas para eventos",
    ca: "SGL Vilanova | Truss i instal·lacions elèctriques per a esdeveniments",
  },
  description: {
    es: "Alquiler de truss de aluminio e instalaciones eléctricas temporales certificadas para eventos. Las soluciones más seguras y adaptadas a la normativa actual.",
    ca: "Alquilar truss d'alumini i instal·lacions elèctriques temporals certificats per a esdeveniments. Les solucions més segures i adaptades a la normativa actual.",
  },
  image: "card.jpg",
  name: "SGL Vilanova"
}