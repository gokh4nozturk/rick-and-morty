module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3.5s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
