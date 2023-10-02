import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-pattern": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3cpath d='M22 250L272 0L342.5 0L92.5 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1010%26quot%3b)'%3e%3c/path%3e%3cpath d='M249.60000000000002 250L499.6 0L697.6 0L447.6 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1010%26quot%3b)'%3e%3c/path%3e%3cpath d='M484.20000000000005 250L734.2 0L815.2 0L565.2 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1010%26quot%3b)'%3e%3c/path%3e%3cpath d='M756.8000000000001 250L1006.8000000000001 0L1083.3000000000002 0L833.3000000000001 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1010%26quot%3b)'%3e%3c/path%3e%3cpath d='M1420 250L1170 0L901.5 0L1151.5 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1011%26quot%3b)'%3e%3c/path%3e%3cpath d='M1171.4 250L921.4000000000001 0L855.4000000000001 0L1105.4 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1011%26quot%3b)'%3e%3c/path%3e%3cpath d='M960.8 250L710.8 0L631.3 0L881.3 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1011%26quot%3b)'%3e%3c/path%3e%3cpath d='M692.1999999999999 250L442.19999999999993 0L268.19999999999993 0L518.1999999999999 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1011%26quot%3b)'%3e%3c/path%3e%3cpath d='M1217.4334728106119 250L1440 27.433472810611875L1440 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1010%26quot%3b)'%3e%3c/path%3e%3cpath d='M0 250L222.56652718938813 250L 0 27.433472810611875z' fill='url(%26quot%3b%23SvgjsLinearGradient1011%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1010'%3e%3cstop stopColor='rgba(128%2c 163%2c 22%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stopColor='rgba(128%2c 163%2c 22%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1011'%3e%3cstop stopColor='rgba(128%2c 163%2c 22%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stopColor='rgba(128%2c 163%2c 22%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
