// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Dominio público: lo usan la URL canónica, og:url, el sitemap y robots.txt
  site: "https://ponelfoco.es",
  // Fuentes servidas desde el propio dominio, con fallback de métricas ajustadas para que el cambio
  // de fuente no mueva el texto (CLS). Mismos pesos y estilos que se pedían a Google Fonts.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--font-atkinson",
      weights: [400, 600, 700, 800],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--font-atkinson",
      weights: [400],
      styles: ["italic"],
    },
    {
      provider: fontProviders.google(),
      name: "Atkinson Hyperlegible Mono",
      cssVariable: "--font-atkinson-mono",
      weights: [400, 600],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
    {
      provider: fontProviders.google(),
      name: "Bricolage Grotesque",
      cssVariable: "--font-bricolage",
      weights: ["600 800"],
      styles: ["normal"],
      options: { experimental: { variableAxis: { opsz: [["12", "96"]] } } },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
