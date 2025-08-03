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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
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
    <section id="skills" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build digital solutions
          </p>
        </motion.div>

        {/* Clean Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-colors duration-300 h-full flex flex-col">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mr-3`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List - Fixed height container */}
                <div className="grid grid-cols-2 gap-3 flex-1 content-start">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 transition-colors duration-200"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="text-slate-300 text-sm font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

