/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: false,
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem', //16px
                sm: '3rem',
                lg: '4rem',
                xl: '10rem,'

            },
        },
        extend: {
            colors: {
                100: '#FF0000',
                200: '#FFFFFF',
                300: '#06C2AE',
                400: '#000000',
                500: '#1C1C1C',
                700: '#33A4AE',
                701: '#06C2AE',
                'hoverBtn': '#c82906',

            },


        },
    },
    plugins: [],

}