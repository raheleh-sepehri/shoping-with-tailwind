module.exports = {
  content: ["./public/**/*.html", "./src/js/index.js"],
  darkMode: "class",
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"],
      },
      colors: {
        stone: {
          100: "#F4F4F4",
          50: "#FDFDFD",
        },

        Orange: {
          100: "#FFCBCB",
          300: "#FF9F8E",
          400: "#FF755C",
          500: "#F25E57",
          600: "#FC5858",
          700: "#DE3618",
        },
        lndigo: {
          600: "#8750FB",
        },
        Gray: {
          300: "#AFAFAF",
          200: "#EBEBEB",
        },
      },
      backgroundImage: {
        "logo-img": "url('/images/Logo.png')",
        "banner-img": "url('/images/banner.png')",
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
};
