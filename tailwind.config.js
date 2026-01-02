module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#F26722',
        'accent-dark': '#B1450B',
        'accent-light': '#F26722',
        'foxfire': '#F26722',
        'deep-ember': '#B1450B',
        'charcoal': '#2D2D2D',
        'soft-ivory': '#FAF8F6',
        'mist-gray': '#A7A7A7',
        bg: '#FAF8F6',
        slate: {
          850: '#1E293B'
        }
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }]
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: []
}
