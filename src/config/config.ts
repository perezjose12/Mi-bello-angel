export const appConfig: {
  enableMusicPlayer: boolean;
  language: "es" | "en";
  userName: string;
  animationEnabled: boolean;
  theme: "tulips" | "sunflowers" | "roses";
} = {
  enableMusicPlayer: import.meta.env.VITE_ENABLE_MUSIC === "true", // Asegurar booleano
  language: (import.meta.env.VITE_LANGUAGE as "es" | "en") || "es", // Limitar a "es" o "en"
  userName: import.meta.env.VITE_NAME,
  animationEnabled: import.meta.env.VITE_ANIMATION_ENABLED === "true", // Asegurar booleano
  theme:
    (import.meta.env.VITE_THEME as "tulips" | "sunflowers" | "roses") ||
    "roses", // Limitar a los temas válidos
};

console.log(appConfig);
