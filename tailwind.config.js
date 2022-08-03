/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "bounce-slow": "bounce 1s ease-in-out infinite",
                "bounce-medium": "bounce 0.7s ease-in-out infinite",
                "bounce-fast": "bounce 0.4s ease-in-out infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
