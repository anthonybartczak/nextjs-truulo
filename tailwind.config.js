/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 500 is the default
        brandLightPink: {
          100: "#ffddf4",
          200: "#ffbbe9",
          300: "#fe9add",
          400: "#fe78d2",
          500: "#fe56c7",
          600: "#cb459f",
          700: "#983477",
          800: "#662250",
          900: "#331128",
        },
        brandDarkPink: {
          100: "#f7dbf2",
          200: "#eeb7e6",
          300: "#e694d9",
          400: "#dd70cd",
          500: "#d54cc0",
          600: "#aa3d9a",
          700: "#802e73",
          800: "#551e4d",
          900: "#2b0f26",
        },
        brandLightPurple: {
          100: "#eedaf0",
          200: "#ddb6e1",
          300: "#cb91d2",
          400: "#ba6dc3",
          500: "#a948b4",
          600: "#873a90",
          700: "#652b6c",
          800: "#441d48",
          900: "#220e24",
        },
        brandDarkPurple: {
          100: "#e5d9ed",
          200: "#cab4db",
          300: "#b08eca",
          400: "#9569b8",
          500: "#7b43a6",
          600: "#623685",
          700: "#4a2864",
          800: "#311b42",
          900: "#190d21",
        },
        brandIndigo: {
          100: "#dbd9ec",
          200: "#b6b3d9",
          300: "#928ec5",
          400: "#6d68b2",
          500: "#49429f",
          600: "#3a357f",
          700: "#2c285f",
          800: "#1d1a40",
          900: "#0f0d20",
        },
        brandDarkBlue: {
          100: "#ccdae8",
          200: "#99b6d1",
          300: "#6691bb",
          400: "#336da4",
          500: "#00488d",
          600: "#003a71",
          700: "#002b55",
          800: "#001d38",
          900: "#000e1c",
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      }
    },
  },
  plugins: [],
};
