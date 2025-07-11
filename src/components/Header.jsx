import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail, Check } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shivam_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success animation
    setShowDownloadSuccess(true);
    setTimeout(() => {
      setShowDownloadSuccess(false);
    }, 2000);
  };

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/Vibescript1', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/shivam-kumar-069675326/', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:shivam870045@gmail.com', label: 'Email' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-white/20 dark:border-white/10' 
          : 'bg-white/20 dark:bg-black/20 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          >
            SK
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 dark:text-white/90 hover:text-neon-cyan transition-colors duration-300 text-sm xl:text-base font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <ThemeToggle />
            
            <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center space-x-1.5 px-3 py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-xs lg:text-sm font-medium text-black hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {showDownloadSuccess ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check size={14} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="download"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
            >
              <Download size={14} />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="hidden sm:inline">
                  {showDownloadSuccess ? 'Downloaded!' : 'Resume'}
                </span>
            </motion.button>
              
              {/* Success notification */}
              <AnimatePresence>
                {showDownloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap z-50"
                  >
                    Resume Downloaded!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex items-center space-x-1">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 lg:p-2 text-gray-700 dark:text-white/80 hover:text-neon-cyan transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white/90 hover:text-neon-cyan p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-4 space-y-2 glass-dark rounded-lg mt-2 mx-2 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 dark:text-white/90 hover:text-neon-cyan hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            
            <div className="border-t border-gray-200 dark:border-white/10 pt-3 mt-3">
              <button
                onClick={() => {
                  handleDownloadResume();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-white/90 hover:text-neon-cyan hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors w-full text-base font-medium"
              >
                <AnimatePresence mode="wait">
                  {showDownloadSuccess ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="download"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
              >
                <Download size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span>{showDownloadSuccess ? 'Downloaded!' : 'Download Resume'}</span>
              </button>
              
              <div className="flex items-center justify-center space-x-4 mt-4 pt-3 border-t border-gray-200 dark:border-white/10">
                <ThemeToggle />
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full text-gray-600 dark:text-white/80 hover:text-neon-cyan transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;