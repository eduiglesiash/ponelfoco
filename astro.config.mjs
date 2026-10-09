// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Dominio público: lo usan la URL canónica, og:url, el sitemap y robots.txt
  site: "https://ponelfoco.es",
  vite: {
    plugins: [tailwindcss()],
  },
});
