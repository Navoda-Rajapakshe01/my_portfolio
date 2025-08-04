"use client";

import { motion } from "framer-motion";
import React from "react";
import { TbTrophy, TbUsers, TbCode, TbBrain, TbCalendar } from "react-icons/tb";

const AchievementsSection = () => {

  const achievements = [
    {
      id: 1,
      title: "University Carrom Team",
      subtitle: "A member of the University Carrom Team",
      description: "Received University Colours Awards for contributions to the university carrom team. Developed leadership skills and teamwork abilities through competitive sports.",
      period: "2023 - current",
      icon: TbTrophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 2,
      title: "SHECODERess V6.0 | Top 5 - Finalists",
      subtitle: "Algorithm Hackathon & Design Challenge",
      description: "Achieved top 5 finalist position in a competitive algorithm hackathon and design challenge, demonstrating strong problem-solving and technical skills among hundreds of participants.",
      period: "2025",
      icon: TbBrain,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Devthon 2.0 | Top 12 - Finalists",
      subtitle: "Project: SkillForge – A peer-to-peer skill exchange platform",
      description: "Designed for university students using a smart barter system. Enables users to list skills they can teach and request skills they want to learn, fostering collaborative learning.",
      period: "2025",
      icon: TbUsers,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "Code Rush | 12th Place",
      subtitle: "Coding event focused on critical thinking",
      description: "Participated in Code Rush, a coding event focused on critical thinking problem solving challenges. Gained hands-on experience in rapid development and debugging.",
      period: "2024",
      icon: TbCode,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Creative Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Achievements
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
            A collection of milestones and accomplishments in my journey as a software developer.
          </motion.p>
        </motion.div>

        {/* Achievement Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
          
          {/* Achievement Items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.id}
                  className="relative flex items-start gap-8 group"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg border-4 border-slate-900/50`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Glowing Effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.color} opacity-20 blur-xl`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  {/* Achievement Content */}
                  <motion.div 
                    className="flex-1 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 transition-all duration-300 hover:border-slate-600/70 hover:shadow-xl hover:bg-slate-900/80"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-400 mb-3">
                          {achievement.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-800/50 px-3 py-1 rounded-full">
                        <TbCalendar className="w-4 h-4" />
                        {achievement.period}
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="flex justify-end">
                      <motion.div 
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color}`}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;