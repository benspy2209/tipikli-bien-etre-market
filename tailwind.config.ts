
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Nouvelle palette Tipikli - moderne et chaleureuse
				tipikli: {
					beige: 'hsl(var(--tipikli-beige))',
					'beige-light': 'hsl(var(--tipikli-beige-light))',
					'beige-dark': 'hsl(var(--tipikli-beige-dark))',
					noir: 'hsl(var(--tipikli-noir))',
					'noir-light': 'hsl(var(--tipikli-noir-light))',
					jaune: 'hsl(var(--tipikli-jaune))',
					'jaune-light': 'hsl(var(--tipikli-jaune-light))',
					orange: 'hsl(var(--tipikli-orange))',
					'orange-light': 'hsl(var(--tipikli-orange-light))',
					terre: 'hsl(var(--tipikli-terre))',
					rose: 'hsl(var(--tipikli-rose))',
					sable: 'hsl(var(--tipikli-sable))',
					cream: 'hsl(var(--tipikli-cream))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
				display: ['DM Sans', 'Inter', 'sans-serif'],
				handwriting: ['Caveat', 'cursive'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.4' }],
				'sm': ['0.875rem', { lineHeight: '1.5' }],
				'base': ['1rem', { lineHeight: '1.7' }],
				'lg': ['1.125rem', { lineHeight: '1.6' }],
				'xl': ['1.25rem', { lineHeight: '1.5' }],
				'2xl': ['1.5rem', { lineHeight: '1.4' }],
				'3xl': ['1.875rem', { lineHeight: '1.3' }],
				'4xl': ['2.25rem', { lineHeight: '1.2' }],
				'5xl': ['3rem', { lineHeight: '1.1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
			},
			spacing: {
				'18': '4.5rem',
				'20': '5rem',
				'28': '7rem',
				'32': '8rem',
				'36': '9rem',
				'44': '11rem',
				'52': '13rem',
				'60': '15rem',
				'68': '17rem',
				'72': '18rem',
				'80': '20rem',
				'96': '24rem',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up-soft': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-soft': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'slide-up-soft': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce-gentle': {
					'0%, 20%, 50%, 80%, 100%': {
						transform: 'translateY(0)'
					},
					'40%': {
						transform: 'translateY(-8px)'
					},
					'60%': {
						transform: 'translateY(-4px)'
					}
				},
				'pulse-soft': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.02)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up-soft': 'fade-in-up-soft 0.8s ease-out',
				'fade-in-soft': 'fade-in-soft 0.6s ease-out',
				'slide-up-soft': 'slide-up-soft 0.7s ease-out',
				'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 4s ease-in-out infinite'
			},
			boxShadow: {
				'warm': '0 10px 40px rgba(255, 193, 7, 0.15), 0 4px 16px rgba(0, 0, 0, 0.05)',
				'natural': '0 8px 32px rgba(139, 111, 78, 0.15), 0 2px 8px rgba(0, 0, 0, 0.05)',
				'earth': '0 8px 32px rgba(165, 102, 85, 0.2), 0 2px 8px rgba(0, 0, 0, 0.05)',
				'glow': '0 0 30px rgba(255, 193, 7, 0.4)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
