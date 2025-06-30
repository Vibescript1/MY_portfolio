import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Zap, Droplets, ShoppingCart, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Waterdrop Landing Page",
      category: "Web Design",
      description: "Modern water services landing page with smooth animations and responsive design",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      icon: <Droplets className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "from-blue-500 to-cyan-500",
      codeLink: "/code/waterdrop-landing", // Internal route
      liveLink: "https://waterdrop-demo.com" // External URL
    },
    {
      id: 2,
      title: "E-Beverages Shop",
      category: "E-commerce",
      description: "Full-featured beverage e-commerce platform with modern UI/UX",
      image: "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      icon: <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "from-green-500 to-emerald-500",
      codeLink: "https://github.com/yourusername/e-beverages", // External URL
      liveLink: "/demo/e-beverages" // Internal route
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      category: "Dashboard",
      description: "Interactive data visualization dashboard with real-time analytics",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Streamlit", "SQL", "Power BI"],
      icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "from-purple-500 to-pink-500",
      codeLink: "/code/analytics-dashboard", // Internal route
      liveLink: "https://analytics-demo.com" // External URL
    },
    {
      id: 4,
      title: "Student Database System",
      category: "Web Application",
      description: "Comprehensive student management system with advanced features",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "from-orange-500 to-red-500",
      codeLink: "https://github.com/yourusername/student-database", // External URL
      liveLink: "https://student-db-demo.com" // External URL
    }
  ];

  const handleLinkClick = (url) => {
    // Check if URL is internal (starts with '/')
    if (url.startsWith('/')) {
      navigate(url); // Internal navigation
    } else {
      // External link (open in new tab securely)
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Explore my latest work in motion graphics, UI/UX design, and web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neon-cyan text-xs sm:text-sm font-medium">
                    {project.category}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="text-gray-400 group-hover:text-neon-cyan transition-colors"
                  >
                    <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                  </motion.div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-gradient transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} className="sm:w-6 sm:h-6" />
                  </button>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-neon-cyan text-xs sm:text-sm font-medium">
                      {selectedProject.category}
                    </span>
                    <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${selectedProject.color} text-white`}>
                      {selectedProject.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gradient">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* View Live Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLinkClick(selectedProject.liveLink)}
                      className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-black font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                      <span>View Live</span>
                    </motion.button>

                    {/* View Code Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLinkClick(selectedProject.codeLink)}
                      className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-black font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                      <span>View Code</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;