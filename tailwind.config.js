const tailwindcss = require("tailwindcss");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./templates/**/*.twig"],
  theme: {
    colors: {
      athens: "#F9FAFB",
      cerulean: "#0173B2",
      jungle: "#23AB69",
      white: "#FFFFFF",
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
