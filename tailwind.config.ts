import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-green": "#AEEC66",
        green: "#407700",
        "exp-1": "#BCFFE7",
        "exp-2": "#68FFC9",
        "exp-3": "#1CC286",
        "exp-4": "#09885A",
      },
      backgroundColor: {
        green: "#01130D",
        "dark-green": "#407700",
        "exp-1": "#BCFFE7",
        "exp-2": "#68FFC9",
        "exp-3": "#1CC286",
        "exp-4": "#09885A",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
