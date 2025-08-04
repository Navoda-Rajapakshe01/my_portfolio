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
    <section id="achievements" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Simple Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Accomplishments that showcase my dedication to excellence
          </p>
        </motion.div>

        {/* Improved Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                className="group"
              >
                <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full hover:bg-slate-900/70">
                  {/* Header with better spacing */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-medium">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Period badge */}
                  <div className="mb-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/60 border border-slate-600/40 rounded-lg text-slate-300 text-sm font-medium">
                      <TbCalendar className="w-4 h-4" />
                      {achievement.period}
                    </span>
                  </div>
                  
                  {/* Description with better spacing */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {achievement.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className={`h-1 bg-gradient-to-r ${achievement.color} rounded-full opacity-60`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
