/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {


            keyframes: {
                wiggle: {
                    "0%, 100%": {transform: "rotate(-3deg)"},
                    "50%": {transform: "rotate(3deg)"}
                }
            },

            animation: {
                wiggle: "wiggle 250ms ease-in-out 3"
            },

            transitionDelay: {
                "50": "0ms",
                "100": "0ms",
                "200": "25ms",
                "300": "25ms",
                "400": "50ms",
                "500": "50ms",
                "600": "75ms",
                "700": "75ms",
                "800": "100ms",
                "900": "100ms"
            },

            colors: {
                primary: {
                    '50': '#F5FEFF',
                    '100': '#EBFAFC',
                    '200': '#CAF3FA',
                    '300': '#ADEAF7',
                    '400': '#74D7F2',
                    '500': '#3cc0ec',
                    '600': '#31A7D6',
                    '700': '#2280B3',
                    '800': '#155E8F',
                    '900': '#0C406B',
                    '950': '#052445'
                }
            }
        }
    },
    variants: {
        extend: {
            zIndex: ["hover"]
        }
    },
    plugins: [require("@tailwindcss/forms")],
}