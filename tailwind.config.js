module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      lato : ['Lato', 'sans-serif'],
    },
    extend: {
      backgroundColor : {
        primary : {
          normal : "var(--primary-color)",
          dark: "var(--primary-color-dark)",
        },
        secondary : {
          normal: "var(--secondary-color)",
        },
      },
      textColor: {
        dark: "var(--primary-color-dark)",
        light: "#fff",
      },
      backgroundImage: {
        'block-pattern': "url('../src/images/design.png')",
        'about-image': "url('../src/images/aboutpic.jpg')",
      },
    },
  },
  plugins: [],
}
