import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        eid: {
          gold:     '#C9A84C',
          'gold-light': '#F0D080',
          'gold-dark':  '#8B6914',
          emerald:  '#1A6B47',
          'emerald-light': '#2D9B6A',
          teal:     '#0D4A5C',
          cream:    '#FDF8EC',
          'cream-dark': '#F5EDD4',
          maroon:   '#7B1F2E',
          sand:     '#E8D5A3',
          ink:      '#1C1208',
        }
      },
      fontFamily: {
        arabic: ['Amiri', 'Georgia', 'serif'],
        display: ['Cinzel Decorative', 'Georgia', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'geometric': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'lantern': 'lantern 4s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lantern: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201, 168, 76, 0.4)',
        'gold-lg': '0 8px 40px rgba(201, 168, 76, 0.5)',
        'ink': '4px 4px 0px #1C1208',
        'ink-lg': '6px 6px 0px #1C1208',
      }
    },
  },
  plugins: [],
}
export default config
