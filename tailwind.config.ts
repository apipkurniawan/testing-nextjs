import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: 'prd-',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        xs: '360px',
        sm: '576px',
        md: '748px',
        lg: '848px',
        xl: '1048px',
        '2xl': '1440px',
      },
      backgroundImage: {
        ocean: "url('/images/background.png')",
        footer: 'linear-gradient(180deg, #23579F 0%, #00335E 100%)',
      },
      fontFamily: {
        bca: 'BCASans, sans-serif',
      },
      colors: {
        ocean: {
          primary: {
            10: '#005CAA',
            20: '#144E83',
            30: '#00335E',
            40: '#265BA4',
            50: '#144E833D',
          },
          secondary: {
            10: '#E6F3FF',
            20: '#00B5F0',
            30: '#0094D5',
            40: '#F8FBFE',
          },
          dark: {
            10: '#868E96',
            20: '#495057',
            30: '#212529',
            40: '#2F3336',
            50: '#000000',
            60: '#404752',
            70: '#31373F',
          },
          light: {
            10: '#FFFFFF',
            20: '#F4F8FC',
            30: '#E9ECEF',
            40: '#CFCFCF',
            50: '#F8FCFF',
          },
          danger: {
            10: '#FFD9D3',
            20: '#CD1923',
            30: '#E25757',
          },
          warning: {
            10: '#FFE592',
            20: '#885403',
            30: '#D28000',
          },
          success: {
            10: '#C2FFC5',
            20: '#009649',
          },
          orange: '#F37C30',
          yellow: '#FFBC0D',
          label: '#474747',
          border: '#EEEEEE',
          'non-active': '#8CB5D7',
          overlay: '#00335E66',
          section: '#005CAA0F',
          arrow_btn: '#00335EB2',
        },
        oceanV2: {
          neutral: {
            100: '#FFFFFF',
            200: '#F6F7F9',
            300: '#E9ECEF',
            400: '#DFE0E2',
            500: '#CFCFCF',
            600: '#868E96',
            700: '#495057',
            800: '#32373D',
            900: '#121417',
          },
          primary: {
            100: '#F4F8FC',
            200: '#EBF2FA',
            300: '#DBEFFF',
            400: '#1179D1',
            500: '#005CAA',
            600: '#144E83',
            700: '#00335E',
            800: '#00213D',
            900: '#001222',
          },
          secondary: {
            100: '#E6F3FF',
            200: '#E0F7FF',
            400: '#47D1FF',
            500: '#00B5F0',
            700: '#0094D5',
          },
          error: {
            100: '#FFEDEB',
            200: '#FFD9D3',
            400: '#EC323B',
            500: '#CD1923',
            600: '#9F141B',
          },
          warning: {
            100: '#FFF6C7',
            200: '#FFE594',
            500: '#FFC81A',
            700: '#885403',
          },
          success: {
            100: '#E5FFE7',
            200: '#C2FFC5',
            500: '#009649',
            700: '#005E2E',
          },
          orange: {
            200: '#FFEAD1',
            500: '#F37C30',
            700: '#DA5601',
          },
          purple: {
            200: '#F4E5F6',
            700: '#893696',
          },
          tosca: {
            100: '#F1FFFF',
            200: '#D4F1F1',
            300: '#CCFFFE',
            500: '#28BAB7',
            700: '#188B88',
          },
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'spin-counter': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(-360deg)',
          },
        },
        dots: {
          '0%, 20%': { content: '"."' },
          '40%': { content: '".."' },
          '60%': { content: '"..."' },
          '80%, 100%': { content: '""' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'spin-counter': 'spin-counter 1s linear infinite',
        dots: 'dots 1.5s steps(5, end) infinite',
      },
      width: {
        field: '156px',
      },
      boxShadow: {
        '3xl': '0px 6px 20px 0px #18426626',
        '4xl': '0px 4px 16px 0px #00000014',
        '5xl': '0px 4px 32px 0px #00000014',
        '6xl': '0px 4px 8px 0px #144E831F',
        footer: '0px 16px 32px 0px #144E833D',
        dropdown: '0px 2px 8px 0px #0000001F',
        Product: '0px 16px 32px -8px #21252959',
      },
      zIndex: {
        '99999': '99999',
      },
      fontSize: {
        '2sm': '16px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
