import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Register service worker for PWA functionality
// Temporarily disabled to fix React hook issues
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }

// Performance optimization: Preload critical resources
// Note: Removed manual preloading as it was causing issues with Vite's module system

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);