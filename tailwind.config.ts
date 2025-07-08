
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
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'great-vibes': ['Great Vibes', 'cursive'],
			},
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'romantic-pink': '#FFB6C1',
				'soft-rose': '#FFC0CB',
				'deep-rose': '#FF69B4',
				'romantic-red': '#DC143C'
			},
			backgroundImage: {
				'love-gradient': 'linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FF69B4 100%)',
				'night-gradient': 'linear-gradient(135deg, #2c1810 0%, #8b4513 50%, #1a0f0a 100%)',
				'heart-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFB6C1\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 28c-4.418-8.418-15-8.418-15 0 0 8.418 15 22 15 22s15-13.582 15-22c0-8.418-10.582-8.418-15 0z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'float-hearts': {
					'0%': {
						transform: 'translateY(100vh) rotate(0deg) scale(0)',
						opacity: '0'
					},
					'10%': {
						opacity: '1',
						transform: 'translateY(90vh) rotate(36deg) scale(1)'
					},
					'20%': {
						transform: 'translateY(80vh) rotate(72deg) scale(1.2)'
					},
					'30%': {
						transform: 'translateY(70vh) rotate(108deg) scale(0.8)'
					},
					'40%': {
						transform: 'translateY(60vh) rotate(144deg) scale(1.1)'
					},
					'50%': {
						transform: 'translateY(50vh) rotate(180deg) scale(0.9)'
					},
					'60%': {
						transform: 'translateY(40vh) rotate(216deg) scale(1.3)'
					},
					'70%': {
						transform: 'translateY(30vh) rotate(252deg) scale(0.7)'
					},
					'80%': {
						transform: 'translateY(20vh) rotate(288deg) scale(1)'
					},
					'90%': {
						opacity: '1',
						transform: 'translateY(10vh) rotate(324deg) scale(1.1)'
					},
					'100%': {
						transform: 'translateY(-10vh) rotate(360deg) scale(0)',
						opacity: '0'
					}
				},
				'pulse-heart': {
					'0%, 100%': {
						transform: 'scale(1)',
					},
					'50%': {
						transform: 'scale(1.2)',
					}
				},
				'typewriter': {
					'0%': {
						width: '0'
					},
					'100%': {
						width: '100%'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce-heart': {
					'0%, 20%, 50%, 80%, 100%': {
						transform: 'translateY(0)'
					},
					'40%': {
						transform: 'translateY(-10px)'
					},
					'60%': {
						transform: 'translateY(-5px)'
					}
				},
				'wiggle': {
					'0%, 7%': {
						transform: 'rotateZ(0)'
					},
					'15%': {
						transform: 'rotateZ(-15deg)'
					},
					'20%': {
						transform: 'rotateZ(10deg)'
					},
					'25%': {
						transform: 'rotateZ(-10deg)'
					},
					'30%': {
						transform: 'rotateZ(6deg)'
					},
					'35%': {
						transform: 'rotateZ(-4deg)'
					},
					'40%, 100%': {
						transform: 'rotateZ(0)'
					}
				},
				'sparkle': {
					'0%, 100%': {
						transform: 'scale(0) rotate(0deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1) rotate(180deg)',
						opacity: '1'
					}
				},
				'heart-beat': {
					'0%': {
						transform: 'scale(1)'
					},
					'14%': {
						transform: 'scale(1.3)'
					},
					'28%': {
						transform: 'scale(1)'
					},
					'42%': {
						transform: 'scale(1.3)'
					},
					'70%': {
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-hearts': 'float-hearts 8s infinite linear',
				'pulse-heart': 'pulse-heart 2s infinite',
				'typewriter': 'typewriter 3s steps(40) 1s forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'bounce-heart': 'bounce-heart 2s infinite',
				'wiggle': 'wiggle 2s ease-in-out infinite',
				'sparkle': 'sparkle 1.5s ease-in-out infinite',
				'heart-beat': 'heart-beat 1.3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
