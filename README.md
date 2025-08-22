# 🚀 Modern Animated Portfolio

An ultra-modern, animated portfolio website built with cutting-edge web technologies and sophisticated animations. This portfolio showcases creative development work with a unique design language that combines aesthetics with functionality.

## ✨ Features

### 🎨 **Design System**
- **Custom Color Palette**: Primary (#0A0A0A), Secondary (#FFFFFF), Accent (#FF6B35)
- **Typography**: Inter (primary), Clash Display (display), JetBrains Mono (mono)
- **Animation Principles**: Custom easing curves and staggered animations
- **Responsive Design**: Mobile-first approach with touch-optimized interactions

### 🎭 **Advanced Animations**
- **Magnetic Text Effects**: Text that follows cursor with magnetic attraction
- **3D Card Rotations**: Cards that rotate in 3D space on hover
- **Horizontal Scrolling Gallery**: Smooth horizontal scroll with scale effects
- **Staggered Reveals**: Content appears with sophisticated timing
- **Interactive Cursor**: Custom cursor with hover states and magnetic effects

### 🛠 **Technical Features**
- **Smooth Scrolling**: Ultra-smooth scroll experience with Lenis
- **Performance Optimized**: GPU-accelerated animations and lazy loading
- **Accessibility**: Respects reduced motion preferences and keyboard navigation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🏗 **Architecture**

### **Pages & Sections**
1. **Home** (`/`)
   - Hero with magnetic text and 3D effects
   - About preview with rotating skill cards
   - Featured work with horizontal scrolling gallery

2. **About** (`/about`) - *Coming Soon*
   - Personal story with morphing blob animations
   - Skills grid with cascading reveals
   - Timeline with scroll-triggered animations

3. **Work** (`/work`) - *Coming Soon*
   - Project grid with isotope filtering
   - Full-screen project showcase
   - Advanced lightbox gallery

4. **Contact** (`/contact`) - *Coming Soon*
   - Liquid morphing background
   - Progressive form reveal
   - Orbital social links

### **Components**
- **Navigation**: Floating nav with backdrop blur and magnetic effects
- **Hero**: Magnetic text with 3D perspective and floating elements
- **AboutPreview**: 3D rotating skill cards with staggered animations
- **FeaturedWork**: Horizontal scrolling project gallery
- **Footer**: Reveal animation with social links
- **CustomCursor**: Interactive cursor with hover states
- **LoadingScreen**: Brand reveal with progress indicator
- **SmoothScroll**: Lenis-powered smooth scrolling

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd modern-animated-portfolio
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

### **Build for Production**
```bash
npm run build
npm start
```

## 🎯 **Customization**

### **Personal Information**
Update the following files with your information:
- `src/components/Hero.tsx` - Main title and description
- `src/components/AboutPreview.tsx` - Skills and expertise
- `src/components/FeaturedWork.tsx` - Projects and work
- `src/components/Footer.tsx` - Social links and contact info

### **Design System**
Modify colors and typography in:
- `src/app/globals.css` - CSS custom properties
- Component files for specific styling

### **Content**
- Replace placeholder images with your project screenshots
- Update project descriptions and tech stacks
- Add your social media links
- Customize the loading screen branding

## 🛠 **Tech Stack**

### **Core Framework**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### **Animation & Interaction**
- **Framer Motion** - Production-ready motion library
- **Lenis** - Ultra-smooth scrolling
- **Three.js** - 3D graphics and WebGL
- **GSAP** - Advanced animations (coming soon)

### **UI Components**
- **Shadcn/UI** - Beautiful, accessible components
- **Lucide React** - Consistent icon library
- **React Hook Form** - Form handling (coming soon)

### **Performance & UX**
- **React Intersection Observer** - Scroll-triggered animations
- **Custom hooks** - Reusable animation logic
- **Responsive design** - Mobile-first approach

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile Optimizations**
- Touch-friendly interactions
- Reduced motion support
- Optimized performance
- Swipe gestures

## ♿ **Accessibility**

- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG compliant color schemes

## 🚀 **Performance**

### **Optimizations**
- **Lazy Loading**: Images and components load on demand
- **GPU Acceleration**: Hardware-accelerated animations
- **Code Splitting**: Dynamic imports for heavy components
- **Animation Performance**: Optimized timing and easing

### **Best Practices**
- Use `will-change` property strategically
- Cancel animations when elements leave viewport
- Optimize for Core Web Vitals
- Implement proper loading states

## 🔧 **Development**

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### **File Structure**
```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and design system
│   ├── layout.tsx      # Root layout with providers
│   └── page.tsx        # Home page
├── components/          # Reusable components
│   ├── Navigation.tsx  # Floating navigation
│   ├── Hero.tsx        # Hero section with magnetic text
│   ├── AboutPreview.tsx # Skills preview
│   ├── FeaturedWork.tsx # Project showcase
│   ├── Footer.tsx      # Footer with social links
│   ├── CustomCursor.tsx # Interactive cursor
│   ├── LoadingScreen.tsx # Brand loading screen
│   └── SmoothScroll.tsx # Lenis smooth scrolling
└── lib/                # Utility functions
    └── utils.ts        # Shadcn/UI utilities
```

## 🌟 **Future Enhancements**

### **Planned Features**
- [ ] About page with morphing blob animations
- [ ] Work page with advanced filtering
- [ ] Contact page with liquid morphing
- [ ] 3D scene integration with Three.js
- [ ] Advanced particle systems
- [ ] Blog section with MDX support
- [ ] Dark/Light theme toggle
- [ ] Internationalization (i18n)

### **Animation Improvements**
- [ ] GSAP integration for complex timelines
- [ ] Scroll-triggered 3D transformations
- [ ] Advanced morphing animations
- [ ] Physics-based interactions

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 **Support**

If you have any questions or need help, please open an issue or contact me directly.

---

**Built with ❤️ and lots of ☕ by [Your Name]**

*This portfolio showcases the power of modern web technologies and creative development practices.*
