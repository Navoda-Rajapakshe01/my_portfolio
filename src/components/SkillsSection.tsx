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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: TbCode,
      gradient: "from-blue-500 to-purple-600",
      borderGradient: "from-blue-500/30 to-purple-500/30",
      skills: [
        { name: "C", icon: SiC, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/20" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
        { name: "SQL", icon: TbBrandMysql, color: "text-emerald-400", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/20" },
      ],
    },
    {
      title: "Frontend Development",
      icon: TbBulb,
      gradient: "from-emerald-500 to-cyan-600",
      borderGradient: "from-emerald-500/30 to-cyan-500/30",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-400", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/20" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white", bgColor: "bg-slate-500/10", borderColor: "border-slate-500/20" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/20" },
      ],
    },
    {
      title: "Backend & Database",
      icon: TbDatabase,
      gradient: "from-purple-500 to-pink-600",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/20" },
        { name: ".NET", icon: SiDotnet, color: "text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/20" },
        { name: "MySQL", icon: TbBrandMysql, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
        { name: "MS SQL Server", icon: TbSql, color: "text-red-400", bgColor: "bg-red-500/10", borderColor: "border-red-500/20" },
      ],
    },
    {
      title: "Development Tools",
      icon: TbTools,
      gradient: "from-orange-500 to-red-600",
      borderGradient: "from-orange-500/30 to-red-500/30",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
        { name: "GitHub", icon: SiGithub, color: "text-slate-300", bgColor: "bg-slate-500/10", borderColor: "border-slate-500/20" },
        { name: "VS Code", icon: TbBrandVscode, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative z-10 py-20 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
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
            className="text-slate-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of technologies and frameworks that power my development process
          </motion.p>
        </motion.div>

        {/* Professional Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="group"
            >
              <motion.div 
                className={`relative p-8 rounded-2xl backdrop-blur-sm border bg-slate-900/30 hover:bg-slate-900/40 transition-all duration-500`}
                style={{
                  borderImage: `linear-gradient(135deg, ${category.borderGradient.replace('from-', '').replace('to-', '').replace('/', '').replace('/', '')}) 1`,
                  border: '1px solid rgba(100, 116, 139, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg border border-white/10`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">Professional Technologies</p>
                  </div>
                </div>
                
                {/* Skills Grid */}
                <div className={`grid gap-4 ${
                  category.skills.length <= 3 ? 'grid-cols-3' : 
                  category.skills.length === 4 ? 'grid-cols-2' : 'grid-cols-3'
                }`}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      custom={skillIndex}
                      className={`group/skill relative flex flex-col items-center p-4 rounded-xl ${skill.bgColor} border ${skill.borderColor} hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.3)"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Skill Icon */}
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <skill.icon className={`w-8 h-8 mb-3 ${skill.color} group-hover/skill:scale-110 transition-transform duration-200`} />
                      </motion.div>
                      
                      {/* Skill Name */}
                      <span className={`${skill.color} text-sm font-medium text-center leading-tight group-hover/skill:text-white transition-colors duration-200`}>
                        {skill.name}
                      </span>
                      
                      {/* Hover Effect Overlay */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Category Border Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                  style={{ filter: 'blur(10px)' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Footer */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-4 bg-slate-900/40 backdrop-blur-sm rounded-xl px-8 py-4 border border-slate-700/50">
            <motion.div 
              className="w-3 h-3 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-slate-300 text-sm font-medium">Continuously expanding skillset</span>
            <div className="w-6 h-px bg-slate-600"></div>
            <span className="text-slate-400 text-xs">Always learning, always growing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

