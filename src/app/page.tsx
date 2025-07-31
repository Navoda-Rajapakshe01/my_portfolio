"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Code,
  Database,
  Globe,
  Menu,
  X,
} from "lucide-react";
import React from "react";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    if (!isDeleting && currentIndex < text.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === text.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length === 0) {
      // Reset for next cycle
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, text, isDeleting, displayText]);

  return (
    <span className="inline-block whitespace-nowrap">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-white ml-1"
      />
    </span>
  );
};

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
      style={{ backgroundColor: 'rgba(6, 10, 25, 0.8)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#465484' }}></div>
            <span className="text-white font-bold text-lg">Navoda</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-blue-200 hover:text-white transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="px-4 py-2 rounded-lg font-medium transition-colors"
              style={{ 
                backgroundColor: '#465484',
                color: 'white'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-200 hover:text-white transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="w-full mt-4 px-4 py-2 rounded-lg font-medium transition-colors text-left"
                style={{ 
                  backgroundColor: '#465484',
                  color: 'white'
                }}
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default function HomePage() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    { name: "React", icon: Code, color: "#a8b4d0" },
    { name: ".NET", icon: Database, color: "#a8b4d0" },
    { name: "Full-Stack", icon: Globe, color: "#a8b4d0" },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #060a19, #141b35, #24305a)",
      }}
    >
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-left"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
                variants={fadeInLeft}
              >
                <motion.span
                  className="inline-block text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <TypewriterText text="Navoda Rajapakshe" />
                </motion.span>
                <motion.span
                  className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 rounded-full"
                  animate={{ width: ["5rem", "8rem", "5rem"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
              </motion.h1>

              <motion.div className="mb-6" variants={fadeInLeft}>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">
                    Third Year Undergraduate
                  </span>
                </div>
              </motion.div>

              <motion.p
                className="text-base text-slate-300 mb-8 leading-relaxed"
                variants={fadeInLeft}
              >
                Undergraduate developer passionate about full-stack
                technologies, always learning, building, and growing.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                variants={fadeInLeft}
              >
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                >
                  <button
                    className="px-6 py-3 text-white font-semibold rounded-lg flex items-center gap-2 shadow-lg"
                    style={{ backgroundColor: "#465484" }}
                  >
                    <Download className="w-5 h-5" />
                    Resume
                  </button>
                </motion.a>

                <motion.a href="/contact" whileHover={{ scale: 1.05 }}>
                  <button
                    className="px-6 py-3 border text-blue-200 hover:text-white font-semibold rounded-lg flex items-center gap-2 transition-colors"
                    style={{ borderColor: "#465484" }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b4975'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Get In Touch{" "}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.a>
              </motion.div>

              {/* Social Icons */}
              <motion.div className="flex space-x-5" variants={fadeInLeft}>
                <a
                  href="https://github.com/Navoda-Rajapakshe01"
                  target="_blank"
                  className="text-blue-300 hover:text-white transition"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/navoda-rajapakshe-4a290226a/"
                  target="_blank"
                  className="text-blue-300 hover:text-white transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:navodar01@gmail.com"
                  className="text-blue-300 hover:text-white transition"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-center"
              variants={fadeInRight}
              initial="initial"
              animate="animate"
            >
              <div className="relative">
                <div
                  className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(70, 84, 132, 0.1), rgba(59, 73, 117, 0.1))",
                    boxShadow:
                      "0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 73, 117, 0.2)",
                  }}
                >
                  <img
                    src="/me.jpeg"
                    alt="Navoda Rajapakshe"
                    className="w-full h-full object-cover mix-blend-multiply"
                    style={{ filter: "contrast(1.05) saturate(1.1)" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
