import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5174",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    video: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
