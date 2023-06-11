import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Advanced Pixel",
            src: "./src/assets/fonts/advanced-pixel-7.regular.ttf",
            transform(font) {
              // update the font weight
              // font.weight = 700

              // we can also return null to skip the font
              return font;
            },
          },
          {
            name: "Karma Future",
            src: "./src/assets/fonts/karma.future-regular.otf",
          },
        ],
      },
    }),
  ],
});
