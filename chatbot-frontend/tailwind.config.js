export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        orange: "#F55713",  // Bright orange for highlights
        red: "#D32F2F",     // Deep red for emphasis

        // Neutral Colors
        black: "#111",   // Black for strong contrasts
        grey: "#808080",    // Medium grey for subtlety
        white: "#ffffff",   // White for backgrounds

        // Accent Colors
        yellow: "#EBFF00",  // Yellow for warnings or notices
        green: "#4CAF50",   // Green for success or positive elements
        blue: "#004D99",   // Blue for buttons
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'md': '1rem',  
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
};