import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        navy: '#0a192f',
        lightNavy: '#112240',
        lightestNavy: '#233554',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
        greenTransparent: 'rgba(100, 255, 218,0.15)',
        lightSlateTransparent: 'rgba(204, 214, 246, 0.05)',
        lightNavyTransparent: 'rgba(17, 34, 64, 0.7)',
      },
      fontSize: {
        sm: '0.875rem', //14px
        md: '1rem', //16px
        lg: '1.125rem', //18px
        xl: '1.25rem', //20px
        h5: '1.5rem', //24px
        h4: '1.75rem', //28px
        h3: '2rem', //32px
        h2: '2.5rem', //40px
        h1: '3.75rem', //52px
      },
      width: {
        'content-xl': '1280px',
        'content-lg': '1024px',
        'content-md': '768px',
        'content-sm': '480px',
      },
      height: {
        button: '48px',
        'button-sm': '40px',
        header: '80px',
      },
      maxWidth: {
        'content-xl': '1280px',
        'content-lg': '1024px',
        'content-md': '768px',
        'content-sm': '480px',
        '2/3': '67%',
        '1/2': '50%',
      },
      minWidth: {
        'content-xl': '1280px',
        'content-lg': '1024px',
        'content-md': '768px',
        'content-sm': '480px',
      },
      lineHeight: {
        h1: '5rem',
        11: '50px',
      },
      letterSpacing: {
        h1: '0.05rem',
      },
      padding: {
        'hero-lg': '200px',
      },
      fontFamily: {
        mono: "'Roboto Mono', monospace",
      },
    },
  },
  plugins: [],
};
export default config;
