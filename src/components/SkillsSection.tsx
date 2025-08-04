"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
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
import { TbBrandMysql, TbBrandVscode, TbSql } from "react-icons/tb";

const SkillsSection = () => {
  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  const skillsFileTree = [
    {
      folder: "frontend",
      icon: "📁",
      expanded: true,
      files: [
        { name: "React.tsx", icon: SiReact, level: "Advanced", color: "text-cyan-400" },
        { name: "NextJS.tsx", icon: SiNextdotjs, level: "Intermediate", color: "text-white" },
        { name: "TypeScript.ts", icon: SiTypescript, level: "Intermediate", color: "text-blue-400" },
        { name: "TailwindCSS.css", icon: SiTailwindcss, level: "Advanced", color: "text-cyan-400" },
        { name: "HTML5.html", icon: SiHtml5, level: "Advanced", color: "text-orange-400" },
        { name: "CSS3.css", icon: SiCss3, level: "Advanced", color: "text-blue-400" }
      ]
    },
    {
      folder: "backend",
      icon: "📁",
      expanded: true,
      files: [
        { name: "NodeJS.ts", icon: SiNodedotjs, level: "Intermediate", color: "text-green-400" },
        { name: "DotNet.cs", icon: SiDotnet, level: "Beginner", color: "text-purple-400" }
      ]
    },
    {
      folder: "database",
      icon: "📁",
      expanded: true,
      files: [
        { name: "MongoDB.js", icon: SiMongodb, level: "Intermediate", color: "text-green-400" },
        { name: "MySQL.sql", icon: TbBrandMysql, level: "Intermediate", color: "text-blue-400" },
        { name: "SQLServer.sql", icon: TbSql, level: "Beginner", color: "text-red-400" }
      ]
    },
    {
      folder: "tools",
      icon: "📁",
      expanded: true,
      files: [
        { name: "VSCode.json", icon: TbBrandVscode, level: "Advanced", color: "text-blue-400" },
        { name: "Git.yml", icon: SiGit, level: "Intermediate", color: "text-orange-400" },
        { name: "GitHub.md", icon: SiGithub, level: "Intermediate", color: "text-slate-300" }
      ]
    },
    {
      folder: "languages",
      icon: "📁",
      expanded: true,
      files: [
        { name: "JavaScript.js", icon: SiJavascript, level: "Advanced", color: "text-yellow-400" },
        { name: "C.c", icon: SiC, level: "Intermediate", color: "text-blue-400" }
      ]
    }
  ];

  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
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
            className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of technologies and frameworks that I use to build modern web applications.
          </motion.p>
        </motion.div>

        {/* Enhanced File Tree Container */}
        <motion.div
          className="max-w-3xl mx-auto relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl blur-xl"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-lg rounded-xl border border-slate-700/50 p-8 font-mono text-sm overflow-hidden">
            {/* Decorative header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/30"></div>
              </div>
              <span className="text-slate-300 font-medium">skills-portfolio/</span>
              <div className="ml-auto flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Active
              </div>
            </div>

            <div className="space-y-3">
              {skillsFileTree.map((category, categoryIndex) => {
                const isExpanded = expandedFolders.has(category.folder);
                
                return (
                  <motion.div
                    key={category.folder}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Enhanced Folder */}
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Folder glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div
                        className="relative flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                        onClick={() => toggleFolder(category.folder)}
                      >
                        <motion.span 
                          className="text-2xl"
                          animate={{ rotate: isExpanded ? 0 : -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isExpanded ? "📂" : "📁"}
                        </motion.span>
                        
                        <span className="text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors">
                          {category.folder}/
                        </span>
                        
                        {/* File count badge */}
                        <motion.div 
                          className="ml-auto px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-400"
                          whileHover={{ scale: 1.1 }}
                        >
                          {category.files.length}
                        </motion.div>
                        
                        {/* Expand indicator */}
                        <motion.div
                          className="text-slate-500 text-sm"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ▼
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Enhanced Files */}
                    {isExpanded && (
                      <motion.div
                        className="ml-8 mt-3 space-y-2 relative"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Connecting line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-slate-600 to-transparent"></div>
                        
                        {category.files.map((file, fileIndex) => (
                          <motion.div
                            key={file.name}
                            className="relative group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/40 transition-all duration-200"
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: fileIndex * 0.05 }}
                            whileHover={{ x: 5, scale: 1.02 }}
                          >
                            {/* Branch connector */}
                            <div className="absolute -left-8 top-1/2 w-6 h-px bg-slate-600"></div>
                            <div className="absolute -left-8 top-1/2 w-px h-4 bg-slate-600"></div>
                            
                            {/* File icon with glow */}
                            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className={`absolute inset-0 ${file.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded blur-sm opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                              <file.icon className={`relative w-5 h-5 ${file.color} drop-shadow-lg`} />
                            </motion.div>
                            
                            {/* Enhanced filename */}
                            <span className="text-slate-200 group-hover:text-white transition-colors font-medium">
                              {file.name}
                            </span>
                            
                            {/* File type indicator */}
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className={`text-xs px-2 py-1 rounded ${file.color.replace('text-', 'bg-').replace('-400', '-400/20')} ${file.color} border border-current/20`}>
                                {file.name.split('.').pop()?.toUpperCase()}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 10}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

