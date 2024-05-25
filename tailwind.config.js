/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryDark: "#001fa4",
                primary: "#1c3dc2",
                secondary: "#a8befa",

                light: {
                    text: "#000000",
                    a: "#f1f5f9",
                    b: "#e2e8f0",
                    c: "#cbd5e1",
                },

                dark: {
                    text: "#ffffff",
                    a: "#475569",
                    b: "#334155",
                    c: "#1e293b",
                },
                neutral: "#94a3b8",
            },
        },
    },
    plugins: [],
};
