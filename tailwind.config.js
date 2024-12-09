/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          'indigo': {
            100: '#E0E7FF',
            500: '#6366F1',
            600: '#4F46E5',
            700: '#4338CA',
            900: '#312E81',
          },
          'purple': {
            50: '#F5F3FF',
            500: '#8B5CF6',
            600: '#7C3AED',
          },
          'pink': {
            100: '#FCE7F3',
            500: '#EC4899',
            600: '#DB2777',
          },
          'red': {
            500: '#EF4444',
          },
        },
      },
    },
    plugins: [],
  }
  
  