module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        dark: 'var(--dark)',
        'dark-light': 'var(--dark-light)',
        'dark-light-2': 'var(--dark-light-2)',
      },
      width: {
        '28': '7rem',
        '36': '9rem'
      }
    },
    container: {
      center: true,
    },
    borderWidth: {
      default: '1px',
      '3/2': '1.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
    },
  },
  variants: {
    textOpacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
