import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {

      "@assets" : path.resolve("src/assets"),
      "@store" : path.resolve("src/store"),
      "@js" : path.resolve("src/js"),
      
      "@admincomponents": path.resolve("src/components/admin"),
      "@adminpages": path.resolve("src/pages/admin"),
      "@adminjs": path.resolve("src/js/admin"), 
      "@adminhooks" : path.resolve("src/hooks/admin"),

      "@billscomponents": path.resolve("src/components/bills"),
      "@billspages": path.resolve("src/pages/bills"),
      "@billsjs": path.resolve("src/js/bills"),      
      "@billshooks" : path.resolve("src/hooks/bills"),
        
    },
  },
});