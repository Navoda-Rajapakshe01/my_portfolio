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
          </motion.div>
        </motion.div>

        {/* Modern Academic Background Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 border border-blue-700/30 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TbSchool className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Maliyadeva Balika Vidyalaya, Kurunegala</h3>
            <p className="text-slate-300 text-base font-medium mb-2">GCE Advanced Level Examination 2021</p>
            <span className="inline-block mt-2 px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">Physical Science Stream</span>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-emerald-900/60 to-blue-900/60 border border-emerald-700/30 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TbBook className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">University of Moratuwa</h3>
            <p className="text-slate-300 text-base font-medium mb-2">BSc (Hons) in Information Technology and Management</p>
            <span className="inline-block mt-2 px-4 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold">Third Year Undergraduate</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
