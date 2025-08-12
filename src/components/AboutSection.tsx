"use client";

import { motion } from "framer-motion";
import React from "react";
import { TbBrain, TbSchool, TbBook } from "react-icons/tb";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="relative z-10 py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Creative Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
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
            Turning coffee into code, one bug at a time ☕
          </motion.p>
          
          <motion.div 
            className="text-slate-300 text-sm sm:text-base mt-6 sm:mt-8 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              A passionate and hardworking third-year undergraduate at the University of Moratuwa, 
              currently pursuing a B.Sc. (Hons) in Information Technology and Management. I love working 
              in collaborative environments, solving real-world problems, and continuously growing as a 
              developer and individual.
            </p>
            <p>
              I balance academics and extracurriculars with curiosity and drive.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          {/* Educational Timeline - Full Width */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <motion.div 
              className="p-8 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-12 justify-center">
                <motion.div 
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 border border-slate-700"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <TbBrain className="w-6 h-6 text-slate-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Academic Background</h3>
                  <p className="text-slate-500 text-sm">Professional Development Timeline</p>
                </div>
              </div>
              
              {/* Executive Timeline */}
              <div className="relative w-full mx-auto px-4">
                {/* Background Timeline Line - Hidden on mobile, visible on desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-slate-800/50" />
                
                {/* Simplified Timeline Line - Hidden on mobile, visible on desktop */}
                <motion.div 
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.2,
                    ease: "easeInOut"
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                />
                
                {/* Timeline Entries */}
                <div className="space-y-8 md:space-y-16 relative z-10">
                  {/* O/L Achievement - Right Side */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Simplified Timeline Marker - Hidden on mobile */}
                    <motion.div 
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-slate-800 rounded-full z-20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Gradient Date Label - Responsive positioning */}
                    <div className="mb-4 md:mb-0 md:absolute md:-top-4 md:left-1/2 md:-translate-x-full md:-ml-4">
                      <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-4 py-2 rounded-full shadow-md">
                        2017
                      </span>
                    </div>
                    
                    {/* Content Card - Full width on mobile, half width on desktop */}
                    <motion.div 
                      className="w-full md:w-1/2 md:ml-auto md:pl-8"
                      initial={{ opacity: 0, x: 40, scale: 0.9 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.0,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.div 
                        className="relative group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {/* Enhanced Glassmorphism Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500"></div>
                        
                        {/* Subtle Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative p-6 md:p-8">
                          {/* Header with Icon */}
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div 
                              className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <TbSchool className="w-6 h-6 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="text-lg md:text-xl font-bold text-white mb-2 transition-colors">GCE - Ordinary Level</h4>
                              <p className="text-slate-400 font-medium text-sm md:text-base">Maliyadeva Balika Vidyalaya, Kurunegala</p>
                            </div>
                          </div>
                          
                          {/* Achievement Badge */}
                          <div className="mb-6">
                            <motion.div 
                              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl"
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-emerald-300 font-semibold text-sm">8As, 1B</span>
                            </motion.div>
                          </div>
                          
                          {/* Bottom Accent */}
                          <motion.div 
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            initial={{ scaleX: 0.6, opacity: 0.6 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            whileHover={{ scaleY: 1.5 }}
                            transition={{ duration: 0.6 }}
                            style={{ originX: 0 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* A/L Achievement - Left Side */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Simplified Timeline Marker - Hidden on mobile */}
                    <motion.div 
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-slate-800 rounded-full z-20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Gradient Date Label - Responsive positioning */}
                    <div className="mb-4 md:mb-0 md:absolute md:-top-4 md:left-1/2 md:ml-4">
                      <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-4 py-2 rounded-full shadow-md">
                        2021
                      </span>
                    </div>
                    
                    {/* Content Card - Full width on mobile, half width on desktop */}
                    <motion.div 
                      className="w-full md:w-1/2 md:mr-auto md:pr-8"
                      initial={{ opacity: 0, x: -40, scale: 0.9 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.3,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.div 
                        className="relative group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {/* Enhanced Glassmorphism Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-500"></div>
                        
                        {/* Subtle Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative p-6 md:p-8 text-left md:text-right">
                          {/* Header with Icon */}
                          <div className="flex items-start gap-4 mb-6 md:justify-end">
                            <div className="flex-1 md:text-right order-2 md:order-1">
                              <h4 className="text-lg md:text-xl font-bold text-white mb-2 transition-colors">GCE - Advanced Level</h4>
                              <p className="text-slate-400 font-medium text-sm md:text-base">Maliyadeva Balika Vidyalaya, Kurunegala</p>
                            </div>
                            <motion.div 
                              className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg order-1 md:order-2"
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <TbSchool className="w-6 h-6 text-white" />
                            </motion.div>
                          </div>
                          
                          {/* Stream Badge */}
                          <div className="mb-4 flex justify-start md:justify-end">
                            <motion.div 
                              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-xl"
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-purple-300 font-semibold text-sm">Physical Science Stream</span>
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            </motion.div>
                          </div>
                          
                          {/* Subject Results - Simplified */}
                          <div className="mb-6">
                            <div className="grid grid-cols-1 gap-3">
                              {[
                                { subject: "Chemistry", grade: "A" },
                                { subject: "Combined Mathematics", grade: "B" },
                                { subject: "Physics", grade: "C" }
                              ].map((item, idx) => (
                                <motion.div 
                                  key={idx}
                                  className="flex items-center justify-between p-3 bg-slate-800/60 backdrop-blur-sm rounded-lg border border-slate-600/30"
                                  initial={{ opacity: 0, x: 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 1.4 + idx * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <span className="text-white font-medium">{item.subject}</span>
                                  <span className="text-purple-300 font-bold text-lg">{item.grade}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Bottom Accent */}
                          <motion.div 
                            className="h-1 bg-gradient-to-r md:bg-gradient-to-l from-purple-500 to-pink-500 rounded-full"
                            initial={{ scaleX: 0.6, opacity: 0.6 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            whileHover={{ scaleY: 1.5 }}
                            transition={{ duration: 0.6 }}
                            style={{ originX: 0 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* University Education - Right Side */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Simplified Current Timeline Marker - Hidden on mobile */}
                    <motion.div 
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 border-2 border-slate-800 rounded-full z-20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Gradient Date Label - Responsive positioning */}
                    <div className="mb-4 md:mb-0 md:absolute md:-top-4 md:left-1/2 md:-translate-x-full md:-ml-4">
                      <span className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs px-4 py-2 rounded-full shadow-md">
                        2023 - Present
                      </span>
                    </div>
                    
                    {/* Content Card - Full width on mobile, half width on desktop */}
                    <motion.div 
                      className="w-full md:w-1/2 md:ml-auto md:pl-8"
                      initial={{ opacity: 0, x: 40, scale: 0.9 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.6,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.div 
                        className="relative group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {/* Enhanced Glassmorphism Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-emerald-500/50 transition-all duration-500"></div>
                        
                        {/* Subtle Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                        
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-t-2xl"></div>
                        
                        {/* Content */}
                        <div className="relative p-6 md:p-8">
                          {/* Header with Icon */}
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div 
                              className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl shadow-lg"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <TbBook className="w-6 h-6 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="text-lg md:text-xl font-bold text-white mb-2 transition-colors">University of Moratuwa</h4>
                              <p className="text-slate-400 font-medium text-sm md:text-base">BSc (Hons) in Information Technology and Management</p>
                            </div>
                            <motion.div 
                              className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full"
                            >
                              <span className="text-emerald-300 text-xs md:text-sm font-semibold">Current</span>
                            </motion.div>
                          </div>
                          
                          {/* Stats Grid */}
                          <div className="grid grid-cols-1 gap-4 mb-6">
                            {[
                              { 
                                label: "Academic Status", 
                                value: "Third Year Undergraduate", 
                                color: "blue",
                                icon: "📚"
                              },
                              { 
                                label: "CGPA", 
                                value: "3.77", 
                                color: "emerald",
                                icon: "🎓"
                              },
                              { 
                                label: "Extracurricular", 
                                value: "University Carrom Team - Member", 
                                color: "yellow",
                                icon: "🏆"
                              }
                            ].map((item, idx) => (
                              <motion.div 
                                key={idx}
                                className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
                                whileHover={{ scale: 1.02, x: 5 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-lg md:text-xl">{item.icon}</span>
                                  <div className="flex-1">
                                    <div className="text-slate-400 text-xs md:text-sm font-medium mb-1">{item.label}</div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-white font-semibold text-sm md:text-base">{item.value}</span>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Bottom Accent */}
                          <motion.div 
                            className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                            initial={{ scaleX: 0.6, opacity: 0.6 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            whileHover={{ scaleY: 1.5 }}
                            transition={{ duration: 0.6 }}
                            style={{ originX: 0 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Professional Footer */}
                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center space-x-3 bg-slate-900/40 backdrop-blur-sm rounded px-6 py-3 border border-slate-700">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span className="text-slate-400 text-sm font-medium">Academic Journey in Progress</span>
                    <div className="w-4 h-px bg-slate-600"></div>
                    <span className="text-slate-500 text-xs">Est. Graduation 2027</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
