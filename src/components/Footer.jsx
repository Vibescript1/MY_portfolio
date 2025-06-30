import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, href: 'https://github.com/Vibescript1', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, href: 'https://www.linkedin.com/in/shivam-kumar-069675326/', label: 'LinkedIn' },
    { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, href: 'mailto:shivam870045@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1"
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient mb-3 sm:mb-4">Shivam Kumar</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Motion Graphics & UI/UX Designer passionate about creating stunning digital experiences 
                that blend creativity with cutting-edge technology.
              </p>
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 sm:p-3 glass rounded-full text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 sm:space-y-6"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm sm:text-base"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="text-gray-400">
                <p className="font-medium text-white text-sm sm:text-base">Email</p>
                <a href="mailto:shivam870045@gmail.com" className="hover:text-neon-cyan transition-colors text-sm sm:text-base break-all">
                  shivam870045@gmail.com
                </a>
              </div>
              <div className="text-gray-400">
                <p className="font-medium text-white text-sm sm:text-base">Phone</p>
                <a href="tel:+918700458678" className="hover:text-neon-cyan transition-colors text-sm sm:text-base">
                  +91 8700458678
                </a>
              </div>
              <div className="text-gray-400">
                <p className="font-medium text-white text-sm sm:text-base">Location</p>
                <a 
                  href="https://maps.app.goo.gl/DffXcCTHQouy9MPw6?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-neon-cyan transition-colors"
                >
                  Delhi, India
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="text-center">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Stay Updated</h4>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Get notified about my latest projects and design insights
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan transition-all duration-300 text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl text-black font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-white/10 space-y-4 sm:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Shivam Kumar</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 sm:space-x-6"
          >
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Shivam Kumar. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 glass rounded-full text-gray-400 hover:text-neon-cyan transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Elements - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-10 sm:opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;