import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-8 pt-16 sm:pt-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 w-full max-w-6xl mx-auto"
      >
        {/* Floating Icons - Hidden on mobile for better performance */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 text-neon-cyan opacity-10 sm:opacity-20 hidden sm:block"
        >
          <Sparkles size={30} className="sm:w-10 sm:h-10" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-5 sm:-top-10 -right-10 sm:-right-20 text-neon-purple opacity-10 sm:opacity-20 hidden sm:block"
        >
          <Sparkles size={40} className="sm:w-12 sm:h-12 lg:w-15 lg:h-15" />
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient block">Shivam</span>
            <span className="text-white block">Kumar</span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block max-w-full mx-auto">
            <motion.h2 
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neon-cyan mb-2 sm:mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Motion Graphics & UI/UX Designer
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-xs xs:text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Crafting immersive digital experiences with cutting-edge design and seamless user interfaces
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="flex flex-col xs:flex-row items-center justify-center space-y-3 xs:space-y-0 xs:space-x-4 sm:space-x-6 px-4 sm:px-0">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-black font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 min-w-[140px]"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-black font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 min-w-[140px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 cursor-pointer hover:text-neon-cyan transition-colors"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={28} className="sm:w-8 sm:h-8" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-neon-cyan rounded-full opacity-10 sm:opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;