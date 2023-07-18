import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
require("dotenv").config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
});
