# Joe Baarath - AI Engineer Portfolio

A modern, futuristic portfolio website built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion, inspired by the Blade Runner 2049 aesthetic. 

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, TailwindCSS
- **Blade Runner Aesthetic**: Dark futuristic design with neon accents
- **Smooth Animations**: Framer Motion for cinematic transitions
- **Responsive Design**: Mobile-first approach with glass morphism effects
- **Interactive Elements**: Particle background, hover effects, and smooth scrolling
- **SEO Optimized**: Open Graph tags and metadata for social sharing
- **GitHub Pages Ready**: Configured for automatic deployment

## 🎨 Design System

### Color Palette
- **Primary**: Deep blacks and smoky grays
- **Accents**: Neon cyan (#00ffff) and magenta (#ff00ff)
- **Glass Effects**: Semi-transparent panels with backdrop blur
- **Typography**: Inter and Space Grotesk fonts with tight tracking

### Components
- Glass-panel surfaces with subtle glow effects
- Particle gradient backgrounds
- Slow ambient animations
- Minimal, breathable layout
- Sci-fi interface aesthetics

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Blade Runner theme
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Home page (Hero + About)
│   ├── projects/         # Projects showcase
│   ├── experience/        # Work experience timeline
│   └── contact/          # Contact form
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation with glass effect
│   ├── Footer.tsx       # Social links and contact info
│   ├── Layout.tsx       # Main layout wrapper
│   ├── HeroSection.tsx  # Landing section with particles
│   ├── AboutSection.tsx # Skills and personal info
│   └── ParticleBackground.tsx # Animated particle system
├── data/                # Portfolio content
│   └── portfolio.ts    # Centralized data source
├── lib/                 # Utilities and server actions
│   ├── utils.ts        # Tailwind class utilities
│   └── actions.ts      # Contact form server actions
└── .github/workflows/   # GitHub Pages deployment
    └── deploy.yml      # Automated deployment workflow
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: TailwindCSS v3.4 with custom theme
- **Animations**: Framer Motion v11
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/joebaarath/joebaarath.github.io.git
   cd joebaarath.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Customization

1. **Update Portfolio Data**
   Edit `data/portfolio.ts` to customize:
   - Personal information
   - Skills and technologies
   - Work experience
   - Projects
   - Education

2. **Modify Styling**
   - Update `tailwind.config.ts` for theme customization
   - Modify `app/globals.css` for global styles
   - Adjust component styles in individual files

3. **Add New Pages**
   - Create new route folders in `app/`
   - Follow the existing pattern with Layout wrapper
   - Update navigation in `components/Header.tsx`

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm run start
```

### GitHub Pages Deployment

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source

2. **Deploy Automatically**
   - Push to `main` branch triggers deployment
   - Workflow builds and deploys to GitHub Pages
   - Site available at `https://joebaarath.github.io`

3. **Manual Deployment** (if needed)
   ```bash
   npm run build
   touch out/.nojekyll
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

## 🎯 Key Features Explained

### Particle Background
- Canvas-based particle system
- Dynamic connections between particles
- Smooth animations with requestAnimationFrame
- Responsive to window resize

### Glass Morphism Effects
- Semi-transparent panels with backdrop blur
- Subtle borders and shadows
- Hover state transitions
- Consistent across all components

### Framer Motion Animations
- Page transitions with layoutId
- Scroll-triggered animations
- Staggered element reveals
- Smooth hover interactions

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔧 Configuration

### Environment Variables
Create `.env.local` for any environment-specific settings:
```env
NEXT_PUBLIC_SITE_URL=https://joebaarath.github.io
```

### Next.js Configuration
The `next.config.mjs` is configured for static export:
- `output: 'export'` for GitHub Pages compatibility
- `trailingSlash: true` for proper routing
- `images.unoptimized: true` for static hosting

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)




