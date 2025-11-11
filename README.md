# 🎨 Bertrand Leonard's Portfolio

> A modern, interactive portfolio showcasing creative web development with stunning animations and 3D experiences.

<div align="center">

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)

</div>

## ✨ Features

### 🎬 **Stunning Animations**

- **Blur Text Effects** - Smooth reveal animations with customizable directions
- **Scroll-triggered Animations** - Dynamic content that responds to user scroll
- **GSAP-powered Transitions** - Professional-grade animations with easing
- **Typewriter Effects** - Engaging text typing animations

### 🌟 **Interactive Components**

- **3D Threads Background** - Interactive WebGL threads with mouse interaction
- **Tilted Card Hover** - 3D card effects with realistic rotation
- **Card Swap Carousel** - Smooth project showcase with auto-rotation
- **Circular Gallery** - Unique circular achievement display
- **Pill Navigation** - Smooth scrolling navigation with hover effects

### 🎯 **Modern Tech Stack**

- **React 19** with TypeScript for type-safe development
- **Three.js & React Three Fiber** for 3D graphics and WebGL
- **Tailwind CSS** for utility-first styling
- **Locomotive Scroll** for smooth scrolling experience
- **Framer Motion** for advanced animations
- **React Router** for seamless navigation

### 📱 **Responsive Design**

- Mobile-first approach with adaptive layouts
- Touch-friendly interactions for mobile devices
- Optimized performance across all device sizes
- Progressive enhancement for better accessibility

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bertrand252/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file in root directory
   echo "VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key" > .env
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🏗️ Project Structure

```
portfolio_v2/
├── 📁 public/
│   └── 📁 assets/           # Static images and media
├── 📁 src/
│   ├── 📁 components/       # Reusable UI components
│   │   ├── 🎭 BlurText/     # Text reveal animations
│   │   ├── 🎠 CardSwap/     # Project carousel
│   │   ├── ⭕ CircularGallery/ # Achievement gallery
│   │   ├── 🏷️  Lanyard/      # Discord status integration
│   │   ├── 🔄 LogoLoop/     # Technology logos carousel
│   │   ├── 💊 PillNav/      # Navigation component
│   │   ├── 📜 ScrollFloat/  # Scroll-triggered animations
│   │   ├── ✨ ShinyText/    # Shimmering text effects
│   │   ├── ⌨️  TextType/     # Typewriter animations
│   │   ├── 🕷️ Threads/      # 3D background threads
│   │   └── 🎴 TiltedCard/   # 3D hover cards
│   ├── 📁 utils/            # Utility functions
│   ├── 🏠 App.tsx           # Main application component
│   ├── 🛣️  Router.tsx       # Routing configuration
│   ├── 🎯 project.tsx       # Projects page
│   └── 🏆 achievement.tsx   # Achievements page
├── ⚙️  vite.config.ts       # Vite configuration
├── 🎨 tailwind.config.js    # Tailwind CSS configuration
└── 📦 package.json          # Dependencies and scripts
```

## 🎨 Custom Components

### BlurText

Smooth text reveal animation with customizable blur effects:

```tsx
<BlurText text="Hello World" delay={400} animateBy="words" direction="top" />
```

### TiltedCard

3D interactive card with hover effects:

```tsx
<TiltedCard
  imageSrc="/path/to/image.jpg"
  captionText="Card Title"
  rotateAmplitude={12}
  scaleOnHover={1.2}
/>
```

### Threads

WebGL-powered 3D background with interactive threads:

```tsx
<Threads color={[1, 1, 1]} amplitude={0.8} enableMouseInteraction={true} />
```

## 🎯 Key Sections

### 🏠 **Hero Section**

- Animated name reveal in English and Chinese (黃輝宏)
- Interactive 3D threads background
- Smooth scroll indicators

### 👨‍💻 **About Section**

- Dynamic typewriter introduction
- Interactive 3D profile card
- Downloadable resume

### 🛠️ **Skills & Tools**

- Animated logo carousel
- Technology stack showcase
- Smooth infinite scroll

### 💼 **Projects Showcase**

- Card swap carousel with project previews
- Detailed project descriptions
- Links to live demos and repositories

### 🏆 **Achievements Gallery**

- Circular gallery display
- Academic and professional recognitions
- Leadership experiences

### 📧 **Contact Form**

- Web3Forms integration for form submissions
- Real-time validation and feedback
- Social media links with hover animations

## 🎭 Animation Details

### Scroll Animations

- **GSAP ScrollTrigger** for smooth scroll-based animations
- **Locomotive Scroll** for enhanced scrolling experience
- Progressive element reveals based on viewport position

### 3D Effects

- **Three.js** integration for WebGL rendering
- **React Three Fiber** for React-friendly 3D development
- Interactive mouse-following effects

### Micro-interactions

- Hover states with smooth transitions
- Click animations with tactile feedback
- Loading states and progress indicators

## 🔧 Configuration

### Environment Variables

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### Tailwind Configuration

Custom theme with extended colors, fonts, and animations optimized for the portfolio design.

### Vite Configuration

Optimized build settings with React plugin and TypeScript support.

## 🎨 Design Philosophy

This portfolio embraces a **dark, modern aesthetic** with emphasis on:

- **Minimalist Design** - Clean layouts with purposeful whitespace
- **Interactive Elements** - Engaging hover states and smooth transitions
- **Performance** - Optimized animations that don't compromise speed
- **Accessibility** - Proper contrast ratios and keyboard navigation
- **Mobile-First** - Responsive design that works beautifully on all devices

---

<div align="center">

**Made with ❤️ by [Bertrand Leonard](https://github.com/bertrand252)**

🌟 Star this repo if you found it interesting!

[🔗 Live Demo](https://bertrand252.github.io/portfolio) | [📧 Contact](mailto:bertrandleonard736@gmail.com) | [💼 LinkedIn](https://linkedin.com/in/BertrandLeonard)

</div>

---

### 🚀 Fun Fact

This portfolio uses over **10 different animation libraries** and **3D rendering engines** to create a truly immersive experience. Every interaction is carefully crafted to provide visual feedback and delight users.
