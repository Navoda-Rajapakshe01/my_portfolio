"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const handleContactClick = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Navoda Rajapakshe - SE.pdf';
    link.download = '/Navoda Rajapakshe - SE.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main id="home" className="relative min-h-screen flex items-center justify-center px-4 py-12 pt-24">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgb(59 130 246 / 1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgb(139 92 246 / 1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hi, I&apos;m{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Navoda
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A passionate full-stack developer who loves building digital experiences
                that make a difference.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                onClick={handleDownloadCV}
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>

              <motion.button
                onClick={handleContactClick}
                className="group w-full sm:w-auto px-8 py-4 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/Navoda-Rajapakshe01", label: "GitHub", external: true },
                { icon: Linkedin, href: "https://www.linkedin.com/in/navoda-rajapakshe-4a290226a/", label: "LinkedIn", external: true },
                { icon: Mail, href: "mailto:navodar01@gmail.com", label: "Email", external: false }
              ].map(({ icon: Icon, href, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="p-3 bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl scale-110" />
              
              {/* Image Container */}
              <motion.div
                className="relative w-80 h-96 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <Image
                  src="/me.jpeg"
                  alt="Navoda Rajapakshe"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
