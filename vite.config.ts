import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env["VITE_BASE"] ?? "/",
  plugins: [
    tanstackStart({
      pages: [{ path: "/" }],
      prerender: { enabled: true, autoStaticPathsDiscovery: false },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: { tsconfigPaths: true },
});
