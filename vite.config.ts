import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@interfaces": "/src/interfaces",
      "@constants": "/src/constants",
      "@utils": "/src/utils",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@store": "/src/store",
    },
  },
});
