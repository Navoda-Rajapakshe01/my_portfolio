'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Code, Database, Globe } from 'lucide-react';

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { name: 'React', icon: Code, color: 'text-blue-500' },
    { name: '.NET', icon: Database, color: 'text-purple-500' },
    { name: 'Full-Stack', icon: Globe, color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <main className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center p-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Profile Image Section */}
          <motion.div
            className="mb-8"
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  {/* Replace this with your actual image */}
                  <div className="text-gray-400 text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <div className="text-sm">Add your photo here</div>
                  </div>
                  {/* Uncomment and replace with your image:
                  <img 
                    src="/your-photo.jpg" 
                    alt="Navoda Rajapakshe" 
                    className="w-full h-full rounded-full object-cover"
                  />
                  */}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
            variants={fadeInUp}
          >
            Navoda Rajapakshe
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Aspiring Full-Stack Developer passionate about creating innovative web solutions
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex justify-center items-center space-x-6 mb-8"
            variants={fadeInUp}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <skill.icon className={`w-5 h-5 ${skill.color}`} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            I specialize in React and .NET development, creating seamless user experiences 
            and robust backend solutions. Currently exploring new technologies and 
            opportunities to build impactful applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={fadeInUp}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center space-x-2">
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            variants={fadeInUp}
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
