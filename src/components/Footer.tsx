"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Navoda-Rajapakshe01",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/navoda-rajapakshe-4a290226a/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:navodar01@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800/50 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Name */}
          <motion.div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Navoda Rajapakshe</h3>
            <p className="text-slate-400">Full-Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600/50 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
