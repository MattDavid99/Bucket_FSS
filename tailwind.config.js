/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fontBebas: ['Bebas Neue', 'sans-serif'],
        fontInter: ['Inter', 'sans-serif'],
        // Legacy aliases for backward compatibility
        fontOpen: ['Inter', 'sans-serif'],
        fontRoboto: ['Inter', 'sans-serif'],
        fontPoppins: ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary - Deep navy for trust/professionalism
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#0f172a',
        },
        // Accent - Keep green for CTAs
        accent: '#82ce51',
        accentHover: '#6bb33d',
        // Backgrounds
        surface: '#f8fafc',
        surfaceAlt: '#f1f5f9',
        // Text
        textPrimary: '#0f172a',
        textSecondary: '#475569',
        textMuted: '#94a3b8',
        // Legacy palette colors (for backward compatibility)
        palletteColor1: '#82ce51',
        palletteColor2: '#ECF8FF',
        palletteColor3: '#0f172a',
        palletteColor4: '#0f172a',
        palletteColor5: '#0f172a',
        palletteColor6: '#475569',
        palletteColor7: '#ffffff',
        palletteColor8: 'rgba(255, 255, 255, 0.8)',
        palletteColor9: '#0f172a',
        palletteColor10: '#f8fafc',
        palletteColor11: 'rgba(255, 255, 255, 0.8)',
        palletteColor12: '#e2e8f0',
        palletteColor13: '#64748b',
        palletteColor14: '#475569',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        // Legacy sizes (backward compatibility)
        fontbase: '1rem',
        buttonFont: '0.9375rem',
        14: '0.875rem',
        18: '1.125rem',
        headingLarge: '4.375rem',
        heading1: '2.5rem',
        heading2: '2.188rem',
        heading3: '1.875rem',
        heading4: '1.563rem',
        heading5: '1.25rem',
        heading6: '0.9380rem',
        headingLargeMobile: '2.125rem',
        headingMobile: '1.75rem',
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.2',
        normal: '1.5',
        relaxed: '1.65',
        fontline: '1.65rem',
      },
      fontWeight: {
        fontbase: 400,
        buttonFont: 600,
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      scale: {
        102: '1.02',
        110: '1.1',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'hover': '0 10px 40px -15px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hero-buckets-pro': "url('/buckets-pro/bg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
