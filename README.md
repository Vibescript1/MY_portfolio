# Shivam Kumar - Portfolio

A modern, responsive portfolio website showcasing motion graphics and UI/UX design work. Built with React, Framer Motion, and Tailwind CSS.

## ✨ Features

### 🎨 Design & UX
- **Dark/Light Theme Toggle** - Seamless theme switching with smooth transitions
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **3D Background Effects** - Dynamic Three.js backgrounds for visual appeal
- **Glassmorphism UI** - Modern glass-like design elements

### 🚀 Performance & Technical
- **PWA Support** - Installable as a web app with offline functionality
- **Lazy Loading** - Component-based code splitting for faster loading
- **Service Worker** - Caching and offline support
- **Performance Monitoring** - Core Web Vitals tracking
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Error Boundaries** - Graceful error handling

### 🎯 Interactive Elements
- **Mouse Follower** - Custom cursor effects
- **Scroll Animations** - Parallax and reveal effects
- **Hover Effects** - Rich interactive feedback
- **Loading States** - Smooth loading transitions
- **Form Validation** - Contact form with real-time validation

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **PWA**: Vite PWA Plugin
- **Performance**: Custom hooks, Intersection Observer

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shivam-portfolio.git
   cd shivam-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Theme Colors
The project uses CSS custom properties for easy color customization. Main colors are defined in `tailwind.config.js`:

```javascript
colors: {
  'neon-cyan': '#00ffff',
  'neon-purple': '#8b5cf6',
  'dark-300': '#020617',
}
```

### Content Updates
- **Personal Info**: Update `index.html` meta tags and structured data
- **Portfolio Items**: Modify `src/components/Portfolio.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Contact Info**: Update `src/components/Contact.jsx`

### Styling
- **Global Styles**: `src/index.css`
- **Component Styles**: Tailwind classes in respective components
- **Animations**: Framer Motion variants in components

## 📱 PWA Features

The portfolio is a Progressive Web App with:
- **Offline Support** - Cached resources for offline viewing
- **Installable** - Can be installed on mobile devices
- **App-like Experience** - Full-screen mode and native feel
- **Background Sync** - Automatic updates when online

## 🚀 Performance Optimizations

- **Code Splitting** - Lazy-loaded components
- **Image Optimization** - WebP format support
- **Font Loading** - Optimized Google Fonts loading
- **Bundle Analysis** - Manual chunk splitting
- **Tree Shaking** - Unused code elimination

## 📊 Performance Monitoring

The app includes performance monitoring for:
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About section
│   ├── Portfolio.jsx   # Portfolio showcase
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer section
│   └── ThemeToggle.jsx # Theme switcher
├── context/            # React context
│   └── ThemeContext.jsx
├── hooks/              # Custom hooks
│   └── usePerformance.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add `base: '/your-repo-name/'` to `vite.config.ts`
2. Build and deploy using GitHub Actions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: shivam870045@gmail.com
- **LinkedIn**: [Shivam Kumar](https://www.linkedin.com/in/shivam-kumar-069675326/)
- **GitHub**: [Vibescript1](https://github.com/Vibescript1)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Three.js](https://threejs.org/) for 3D graphics
- [Lucide](https://lucide.dev/) for icons
- [Vite](https://vitejs.dev/) for build tooling

---

Made with ❤️ by Shivam Kumar 