"use client";

import { motion } from "framer-motion";
import React from "react";
import { 
  SiC, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiDotnet, 
  SiNodedotjs, 
  SiMongodb,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub
} from "react-icons/si";
import { TbBrandMysql, TbCode, TbDatabase, TbTools, TbBulb, TbBrandVscode, TbSql } from "react-icons/tb";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="relative z-10 py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <TbTools className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Technologies I work with to bring ideas to life 🚀
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Programming Languages */}
          <motion.div 
            variants={cardVariants}
            className="p-8 rounded-2xl backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <TbCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Programming Languages</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiC className="w-10 h-10 mb-3 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">C</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-yellow-600/10 border border-yellow-500/20 hover:bg-yellow-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiJavascript className="w-10 h-10 mb-3 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-medium">JavaScript</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiTypescript className="w-10 h-10 mb-3 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">TypeScript</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-green-600/10 border border-green-500/20 hover:bg-green-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <TbBrandMysql className="w-10 h-10 mb-3 text-green-400" />
                <span className="text-green-300 text-sm font-medium">SQL</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Frontend Technologies */}
          <motion.div 
            variants={cardVariants}
            className="p-8 rounded-2xl backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
              border: '1px solid rgba(147, 51, 234, 0.2)'
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <TbBulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Frontend</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-cyan-600/10 border border-cyan-500/20 hover:bg-cyan-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiReact className="w-10 h-10 mb-3 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">React</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-600/10 border border-gray-500/20 hover:bg-gray-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiNextdotjs className="w-10 h-10 mb-3 text-gray-300" />
                <span className="text-gray-300 text-sm font-medium">Next.js</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-orange-600/10 border border-orange-500/20 hover:bg-orange-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiHtml5 className="w-10 h-10 mb-3 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">HTML5</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiCss3 className="w-10 h-10 mb-3 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">CSS3</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-cyan-600/10 border border-cyan-500/20 hover:bg-cyan-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiTailwindcss className="w-10 h-10 mb-3 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">Tailwind CSS</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Backend & Database */}
          <motion.div 
            variants={cardVariants}
            className="p-8 rounded-2xl backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <TbDatabase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Backend & Database</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-green-600/10 border border-green-500/20 hover:bg-green-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiNodedotjs className="w-10 h-10 mb-3 text-green-400" />
                <span className="text-green-300 text-sm font-medium">Node.js</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiDotnet className="w-10 h-10 mb-3 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">.NET</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-green-600/10 border border-green-500/20 hover:bg-green-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiMongodb className="w-10 h-10 mb-3 text-green-400" />
                <span className="text-green-300 text-sm font-medium">MongoDB</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <TbBrandMysql className="w-10 h-10 mb-3 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">MySQL</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-red-600/10 border border-red-500/20 hover:bg-red-600/20 transition-all duration-300 hover:scale-105 col-span-2"
                whileHover={{ y: -3 }}
              >
                <TbSql className="w-10 h-10 mb-3 text-red-400" />
                <span className="text-red-300 text-sm font-medium">MS SQL Server</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            variants={cardVariants}
            className="p-8 rounded-2xl backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <TbTools className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Development Tools</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-orange-600/10 border border-orange-500/20 hover:bg-orange-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiGit className="w-10 h-10 mb-3 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">Git</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-600/10 border border-gray-500/20 hover:bg-gray-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <SiGithub className="w-10 h-10 mb-3 text-gray-300" />
                <span className="text-gray-300 text-sm font-medium">GitHub</span>
              </motion.div>
              
              <motion.div 
                variants={skillVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <TbBrandVscode className="w-10 h-10 mb-3 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">VS Code</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
