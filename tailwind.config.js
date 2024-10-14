/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fontOpen: ['Open Sans', 'sans-serif'],
        fontBebas: ['Bebas Neue', 'sans-serif'],
        fontRoboto: ['Roboto', 'sans-serif'],
        fontInter: ['Inter', 'sans-serif'],
        fontPoppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        palletteColor1: '#82ce51',
        palletteColor2: '#ECF8FF',
        palletteColor3: '#252525',
        palletteColor4: '#2C2C32',
        palletteColor5: '#333333',
        palletteColor6: '#7A7A93',
        palletteColor7: '#ffffff',
        palletteColor8: 'rgba(255, 255, 255, 0.8)',
        palletteColor9: '#383940',
        palletteColor10: '#F3F7FB',
        palletteColor11: 'rgba(255, 255, 255, 0.8)',
        palletteColor12: '#E8EDF0',
        palletteColor13: '#6d7882',
        palletteColor14: '#666666',
      },
      fontSize: {
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
        fontline: '1.65rem',
      },
      fontWeight: {
        fontbase: 400,
        buttonFont: 600,
      },
      scale: {
        110: '1.1',
      },
      backgroundImage: {
        'hero-buckets-pro': "url('/buckets-pro/bg.jpg')",
      },
    },
  },
  plugins: [],
};
