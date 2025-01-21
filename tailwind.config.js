const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Bender', ...fontFamily.sans], // Use Bender as the primary font
            },
            colors: {
                blue: {
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                purple: {
                    500: '#8b5cf6',
                },
                pink: {
                    500: '#ec4899',
                },
            },
            spacing: {
                18: '4.5rem', // Custom spacing for padding/margin
                72: '18rem', // Extra large spacing
                36: '9rem',
                72: '18rem',
              },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
};
