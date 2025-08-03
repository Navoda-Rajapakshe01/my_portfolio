"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { scrollY } = useScroll();

  // Check if modal is open by observing body class
  React.useEffect(() => {
    const checkModalOpen = () => {
      setIsModalOpen(document.body.classList.contains('modal-open'));
    };
    
    // Initial check
    checkModalOpen();
    
    // Create observer for class changes
    const observer = new MutationObserver(checkModalOpen);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Track scroll position for navbar styling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Track active section for navigation indicator
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl' 
          : 'bg-slate-900/20 backdrop-blur-sm'
      }`}
      initial={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Professional Logo */}
          <motion.div
            className="flex items-center cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleNavClick("#home")}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                <span className="text-white font-semibold text-sm">NR</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Navoda Rajapakshe
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-white'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    layoutId="navbar-indicator"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'border-t border-slate-800/50' : ''}`}
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{
          scaleX: typeof window !== 'undefined' && typeof document !== 'undefined' 
            ? scrollY.get() / (document.documentElement.scrollHeight - window.innerHeight) || 0 
            : 0,
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
      />
    </motion.header>
  );
};

export default NavigationBar; 