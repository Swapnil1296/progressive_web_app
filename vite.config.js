import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "My Vite App",
        short_name: "ViteApp",
        description: "My awesome Vite app",
        theme_color: "#ffffff",
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
});
