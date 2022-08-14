module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: '580px',
      md: '700px',
      lg: '800px',
      xl: '1040px',
    '2xl': '1100px',
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
      '2xl': '8rem',
      },
    },
    fontSize: {
      xs: ['12px', '14px'],
      sm: ['16px', '20px'],
      md: ['18px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
     '2xl': ['28px', '32px'],
     '3xl': ['32px', '35px'],
     '4xl': ['35px', '37px'],
     '5xl': ['40px', '42px'],

    },
    colors: {
      'cyan': '#74B1B4',
      'cyanlight': '#B0D4D4',
      'blue': '#74B1B4BF',
      'yellow': '#F4E08EA6',
      'orange': '#FDBD99',
      'green': '#13ce66',
      'gray-dark': '#5B5B5B',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#fff',
      'black': '#000',
      'primary': '#F28F78',
      'primarylight': '#FBBC99'

    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Lato', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '16': '16px',
        '20': '20px',
      }
    }
  },
  plugins: [],

}
