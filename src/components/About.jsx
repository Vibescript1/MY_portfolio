import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Zap, Award, Calendar } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Photoshop', level: 95, icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'from-blue-500 to-blue-600' },
    { name: 'CorelDraw', level: 90, icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'from-green-500 to-green-600' },
    { name: 'HTML/CSS', level: 88, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'from-orange-500 to-orange-600' },
    { name: 'JavaScript', level: 85, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Python', level: 90, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'from-cyan-500 to-cyan-600' },
    { name: 'SQL', level: 87, icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'from-purple-500 to-purple-600' },
    { name: 'Streamlit', level: 82, icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'from-red-500 to-red-600' },
    { name: 'Power BI', level: 85, icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'from-pink-500 to-pink-600' },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Advanced Motion Graphics',
      description: 'Mastered 3D animations and complex visual effects',
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      year: '2023',
      title: 'Full-Stack Development',
      description: 'Expanded into web development with React and Node.js',
      icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      year: '2022',
      title: 'UI/UX Specialization',
      description: 'Focused on user experience and interface design',
      icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      year: '2021',
      title: 'Data Analytics',
      description: 'Started journey in data visualization and analysis',
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 relative">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4 sm:px-0">
            A passionate BCA student and designer crafting digital experiences that blend creativity with technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gradient">My Journey</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing Bachelor in Computer Application at Mangalayatan University, 
                  I'm passionate about creating stunning digital experiences that combine aesthetic 
                  appeal with functional design.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans across motion graphics, UI/UX design, web development, 
                  and data analytics. I believe in the power of good design to solve complex 
                  problems and create meaningful user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not designing or coding, you'll find me exploring new technologies 
                  and staying updated with the latest design trends.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gradient">Education</h3>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-white flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white">Bachelor in Computer Application</h4>
                  <p className="text-neon-cyan text-sm sm:text-base">Mangalayatan University</p>
                  <p className="text-gray-400 text-sm">2022 - Present</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gradient">Skills & Expertise</h3>
              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className={`p-1.5 sm:p-2 bg-gradient-to-r ${skill.color} rounded-lg text-white`}>
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-neon-cyan font-semibold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <motion.div
                        className={`h-1.5 sm:h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
            My <span className="text-gradient">Timeline</span>
          </h3>
          
          {/* Mobile Timeline */}
          <div className="block sm:hidden space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white">
                    {item.icon}
                  </div>
                  <span className="text-neon-cyan font-bold text-lg">{item.year}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="relative hidden sm:block">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-6 lg:pr-8 text-right' : 'pl-6 lg:pl-8'}`}>
                    <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <div className={`flex items-center space-x-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="p-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white">
                          {item.icon}
                        </div>
                        <span className="text-neon-cyan font-bold text-base sm:text-lg">{item.year}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full border-2 sm:border-4 border-dark-300"
                    />
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;