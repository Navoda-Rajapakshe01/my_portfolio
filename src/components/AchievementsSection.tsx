"use client";

import { motion } from "framer-motion";
import React from "react";
import { TbTrophy, TbAward, TbUsers, TbCode, TbBrain, TbCalendar } from "react-icons/tb";

const AchievementsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
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

  const achievements = [
    {
      id: 1,
      title: "University Carrom Team",
      subtitle: "A member of the University Carrom Team",
      description: "Received University Colours Awards for contributions to the university carrom team.",
      period: "2023 - current",
      icon: TbTrophy,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      id: 2,
      title: "SHECODERess V6.0 | Top 5 - Finalists",
      subtitle: "Algorithm Hackathon & Design Challenge",
      description: "Achieved top 5 finalist position in a competitive algorithm hackathon and design challenge, demonstrating strong problem-solving and technical skills.",
      period: "2025",
      icon: TbBrain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      id: 3,
      title: "Devthon 2.0 | Top 12 - Finalists",
      subtitle: "Project: SkillForge – A peer-to-peer skill exchange platform",
      description: "Designed for university students using a smart barter system. Enables users to list skills they can teach and request skills they want to learn, fostering a collaborative learning community.",
      period: "2025",
      icon: TbUsers,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: 4,
      title: "Code Rush | 12th Place",
      subtitle: "Coding event focused on critical thinking",
      description: "Participated in Code Rush, a coding event focused on critical thinking problem solving challenges. Gained hands-on experience in teamwork, time-bound development, and rapid problem-solving.",
      period: "2024",
      icon: TbCode,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of accomplishments, awards, and recognitions that showcase my dedication to excellence in academics, sports, and technology.
          </p>
        </motion.div>

        {/* Achievements Timeline */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.id}
                  variants={cardVariants}
                  className="relative pl-20"
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-6 top-4 w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} border-4 border-slate-900 shadow-lg`}></div>
                  
                  {/* Achievement Card */}
                  <motion.div
                    className="bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {achievement.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/80 rounded-full border border-slate-600/40">
                        <TbCalendar className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 text-sm font-medium">
                          {achievement.period}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                      {achievement.description}
                    </p>
                    
                    {/* Bottom Accent Line */}
                    <div className={`mt-4 h-1 bg-gradient-to-r ${achievement.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full text-slate-300">
            <TbAward className="w-5 h-5" />
            <span className="text-sm font-medium">Continuously striving for excellence in all endeavors</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
