/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {

                'sm': '310px',
                'md': '650px',
                'lg': '1024px',

            },
            colors: {
                'primary': '#b85b00',
                'secondary': '#e0ff80',
                'engr': '#f0900096',
                'music': '#fffb00',
                'food': '#0004ff65',
                'houseservice': '#0faf0083',
                'health': '#bb0000a6',
                'merchant': '#6d04aa67',
                'justice': '#4b4b4b67',


            },
        },
    },
    plugins: [],
}