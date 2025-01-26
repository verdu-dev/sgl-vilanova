import es from "./es";
import ca from "./ca";

export const locales = ["es", "ca"];
export const defaultLocale = "es";

export const routes: Record<string, { home: string; projects: string }> = {
  es: {
    home: "/",
    projects: "/proyectos"
  },
  ca: {
    home: "/",
    projects: "/projectes"
  }
};

export function getI18n(locale: string | undefined) {
  if (locale === "ca") return ca;
  return es;
}