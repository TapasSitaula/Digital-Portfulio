/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          light: '#10B981',
          dark: '#047857',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
          dark: '#0284C7',
          50: '#f0f9ff',
          100: '#e0f2fe',
        },
        dark: {
          bg: '#0B1120',
          card: '#141E33',
          surface: '#1B2A45',
          text: '#F1F5F9',
          muted: '#94A3B8',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'text-reveal': 'textReveal 0.8s ease-out',
        'emergency-pulse': 'emergencyPulse 1.5s ease-in-out infinite',
        'progress-fill': 'progressFill 0.8s ease-out forwards',
        'typewriter': 'typewriter 3s steps(30) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(5, 150, 105, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(5, 150, 105, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        textReveal: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        emergencyPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(239, 68, 68, 0)' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(5,150,105,0.05) 0%, rgba(14,165,233,0.05) 100%)',
        'section-gradient': 'linear-gradient(180deg, rgba(5,150,105,0.03) 0%, transparent 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(5,150,105,0.1) 0%, rgba(14,165,233,0.1) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(5, 150, 105, 0.25)',
        'glow-accent': '0 0 30px rgba(14, 165, 233, 0.25)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.25)',
        'premium': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
        'premium-dark': '0 20px 60px -15px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
