/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': '760px',
        'md': '965px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      
    },
    borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        default: '0.25rem',
        default: '4px',
        'md': '0.555rem',
        'lg': '2rem',
        'full': '9999px',
        'large': '12px',
    },
    
  },
  plugins: [],
};
