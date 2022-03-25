module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    spacing: {
      p42: "42%",
      p45: "45%",
      "1/2": "50%",
      0: "0px",
      2.5: "0.625rem",
      xs: "20rem",
      11: "44px",
      15: "60px",
      20: "5rem",
      25: "100px",
      28: "460px",
      48: "12rem",
      50: "200px",
      160: "640px",
      180: "45rem",
    },
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
