/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "--strong-cyan": "hsl(172, 67%, 45%)",
        "--very-dark-cyan": " hsl(183, 100%, 15%)",
        "--Dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "--Grayish-cyan": "hsl(184, 14%, 56%)",
        "--Light-grayish-cyan": "hsl(185, 41%, 84%)",
        "--Very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "--White": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
