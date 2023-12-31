const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
  content: [
    "./src/app/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
  ],
  theme: {},
  plugins: [],
});

export default config;
