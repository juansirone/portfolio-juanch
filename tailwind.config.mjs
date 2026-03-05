/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: 'rgb(var(--bg) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        panelStrong: 'rgb(var(--panel-strong) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent-2) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
      },
      boxShadow: {
        glow: '0 0 40px rgb(var(--glow) / 0.45)',
      },
    },
  },
  plugins: [],
};
