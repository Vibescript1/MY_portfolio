import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Background3D from './components/Background3D';
import Background3DLight from './components/Background3DLight';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-neon-purple border-t-transparent rounded-full animate-spin" style={{ animationDelay: '-0.5s' }}></div>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-dark-300">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-black rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-50 dark:bg-dark-300 transition-colors duration-300">
        {isDark ? <Background3D /> : <Background3DLight />}
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
            <Portfolio />
            <About />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-20 bg-gray-50 dark:bg-dark-300"></div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;