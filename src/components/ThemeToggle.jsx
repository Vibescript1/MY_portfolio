import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 group"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-5 h-5"
      >
        {isDark ? (
          <Moon 
            size={20} 
            className="text-yellow-300 fill-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" 
          />
        ) : (
          <Sun 
            size={20} 
            className="text-orange-500 fill-orange-500 group-hover:text-orange-400 transition-colors duration-300" 
          />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        initial={false}
        animate={{
          opacity: isDark ? [0.5, 1, 0.5] : [0.3, 0.8, 0.3],
          scale: isDark ? [1, 1.1, 1] : [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute inset-0 rounded-full ${
          isDark 
            ? 'bg-yellow-300/20 shadow-lg shadow-yellow-300/30' 
            : 'bg-orange-500/20 shadow-lg shadow-orange-500/30'
        }`}
      />
    </motion.button>
  );
};

export default ThemeToggle; 