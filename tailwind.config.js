module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#14B8A6',
        'accent-dark': '#0D9488',
        'accent-light': '#2DD4BF',
        bg: '#FAFAF9',
        slate: {
          850: '#1E293B'
        }
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
