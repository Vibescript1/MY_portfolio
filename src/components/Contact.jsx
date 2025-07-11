import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email',
      content: 'shivam870045@gmail.com',
      href: 'mailto:shivam870045@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Phone',
      content: '+91 8700458678',
      href: 'tel:+918700458678'
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Location',
      content: 'Delhi, India',
      href: 'https://maps.app.goo.gl/DffXcCTHQouy9MPw6?g_st=aw'
    }
  ];

  const services = [
    'Motion Graphics & Animation',
    'UI/UX Design',
    'Web Development',
    'Data Visualization',
    'Brand Identity Design'
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 relative">
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gradient">Let's Connect</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need motion graphics, UI/UX design, or web development services, 
                I'm here to help bring your vision to reality.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-gray-800 dark:text-white font-semibold text-sm sm:text-base">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-neon-cyan transition-colors text-sm sm:text-base break-all">
                        {info.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:bg-gray-200 dark:focus:bg-white/15 transition-all duration-300 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:bg-gray-200 dark:focus:bg-white/15 transition-all duration-300 text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className="space-y-2"
                >
                  <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:bg-gray-200 dark:focus:bg-white/15 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className="space-y-2"
                >
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:bg-gray-200 dark:focus:bg-white/15 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl text-black font-semibold hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full"
                    />
                  ) : (
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* What I Offer - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">What I Offer</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-cyan rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;