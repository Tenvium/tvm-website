module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1534px",
    },
    color:{
      'tvmblack' : '#07031A',
    },
    variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
     },   
  },
  plugins: [],
};
