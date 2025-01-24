import es from "./es";
import ca from "./ca";

export const locales = ["es", "ca"];
export const defaultLocale = "es";

export const translatedRoutes: Record<string, string[]> = {
  es: ["/", "/proyectos", "/ca"],
  ca: ["/", "/projectes", "/es"],
};

export function getI18n(locale: string | undefined) {
  if (locale === "ca") return ca;
  return es;
}