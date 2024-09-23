/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background colors
        'primary': "#0d0f11", // bg-primary
        'secondary': "#191d23", // bg-secondary
        'hover':"#262c36",
        'tertiary':"#7453d3",

        // text colors
        "primary-text": "#d3d2d2",
        "secondary-text": "#8b8d8f",
        "teritary-text": "#684cbb",

        // Button colors
        "btn-primary": "#3B82F6", // bg-blue-500
        "btn-hover": "#2563EB", // bg-blue-600

        // Status colors
        danger: "#EF4444", // Red for danger
        success: "#22C55E", // Green for success
        pending: "#D1D5DB", // Grey for pending
      },
    },
  },
  plugins: [],
};
