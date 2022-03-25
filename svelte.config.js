import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import extend from "postcss-extend";
import nesting from "postcss-nesting";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
  },

  preprocess: preprocess({
    postcss: {
      plugins: [tailwind(), autoprefixer(), extend(), nesting()],
    },
  }),
};

export default config;
