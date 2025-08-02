"use client";

import { motion } from "framer-motion";
import React from "react";
import { TbBrain } from "react-icons/tb";

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
          <motion.div
            className="inline-block mb-6"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <TbBrain className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
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
            className="text-slate-300 text-base mt-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              I'm a passionate and hardworking third-year undergraduate at the University of Moratuwa, 
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
          className="flex justify-center"
        >
          {/* Educational Timeline - Centered */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl"
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
              <div className="relative max-w-4xl mx-auto">
                {/* Sophisticated Timeline Line */}
                <motion.div 
                  className="absolute left-6 top-0 w-px bg-slate-700"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                />
                
                {/* Timeline Entries */}
                <div className="space-y-12 relative z-10">
                  {/* O/L Achievement */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Timeline Marker */}
                    <motion.div 
                      className="absolute left-4 w-4 h-4 bg-slate-600 border-2 border-slate-800 rounded-full z-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Content Card */}
                    <div className="ml-16">
                      <div className="bg-slate-900/60 border border-slate-700 rounded-lg p-6 hover:bg-slate-900/80 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-medium text-white mb-1">GCE - Ordinary Level Examination</h4>
                            <p className="text-slate-400 text-sm font-medium">Maliyadeva Balika Vidyalaya, Kurunegala</p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block bg-slate-800 text-slate-300 px-3 py-1 rounded text-sm font-medium">2017</span>
                          </div>
                        </div>
                        
                        <div className="border-t border-slate-700 pt-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                            <span className="text-slate-300 text-sm">8As, 1B </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* A/L Achievement */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Timeline Marker */}
                    <motion.div 
                      className="absolute left-4 w-4 h-4 bg-slate-600 border-2 border-slate-800 rounded-full z-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Content Card */}
                    <div className="ml-16">
                      <div className="bg-slate-900/60 border border-slate-700 rounded-lg p-6 hover:bg-slate-900/80 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-medium text-white mb-1">GCE - Advanced Level Examination</h4>
                            <p className="text-slate-400 text-sm font-medium">Maliyadeva Balika Vidyalaya, Kurunegala</p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block bg-slate-800 text-slate-300 px-3 py-1 rounded text-sm font-medium">2021</span>
                          </div>
                        </div>
                        
                        <div className="border-t border-slate-700 pt-4 space-y-3">
                          <div className="flex items-center">
                            <span className="inline-block bg-slate-800 text-slate-400 px-3 py-1 rounded text-xs font-medium mr-4">Physical Science Stream</span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-slate-800/50 rounded px-3 py-2 text-center">
                              <div className="text-white text-sm font-medium">Chemistry</div>
                              <div className="text-slate-400 text-xs">A</div>
                            </div>
                            <div className="bg-slate-800/50 rounded px-3 py-2 text-center">
                              <div className="text-white text-sm font-medium">Combined Mathematics</div>
                              <div className="text-slate-400 text-xs">B</div>
                            </div>
                            <div className="bg-slate-800/50 rounded px-3 py-2 text-center">
                              <div className="text-white text-sm font-medium">Physics</div>
                              <div className="text-slate-400 text-xs">C</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center mt-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-slate-300 text-sm">Z-Score: 1.35</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* University Education */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Current Timeline Marker */}
                    <motion.div 
                      className="absolute left-4 w-4 h-4 bg-blue-500 border-2 border-slate-800 rounded-full z-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                      viewport={{ once: true }}
                      animate={{ 
                        boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.6)", "0 0 0 8px rgba(59, 130, 246, 0)", "0 0 0 0 rgba(59, 130, 246, 0)"]
                      }}
                    />
                    
                    {/* Content Card */}
                    <div className="ml-16">
                      <div className="bg-slate-900/60 border border-slate-700 rounded-lg p-6 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-medium text-white mb-1">University of Moratuwa</h4>
                            <p className="text-slate-400 text-sm font-medium">BSc (Hons) in Information Technology and Management</p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">2023 - Present</span>
                          </div>
                        </div>
                        
                        <div className="border-t border-slate-700 pt-4 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-800/50 rounded px-4 py-3">
                              <div className="text-white text-sm font-medium mb-1">Academic Performance</div>
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-slate-300 text-sm">CGPA: 3.77</span>
                              </div>
                            </div>
                            <div className="bg-slate-800/50 rounded px-4 py-3">
                              <div className="text-white text-sm font-medium mb-1">Current Status</div>
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                <span className="text-slate-300 text-sm">Third Year Student</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            </div>
                            <span className="text-slate-300 text-sm">Dean's List Recognition - Semesters 1 & 2</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
