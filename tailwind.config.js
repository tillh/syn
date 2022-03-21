const colors = require('tailwindcss/colors');

module.exports = {
    content: ['pages/**/*.{ts,tsx}', 'features/**/*.{ts,tsx}', 'common/**/*.{ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            primary: '#002247',
            ...colors
        }
    },
    plugins: []
};
