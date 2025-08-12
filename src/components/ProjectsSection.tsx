"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiGit,
  SiFramer,
  SiLaravel,
  SiArduino,
  SiFirebase
} from "react-icons/si";
import { TbBrandGithub, TbCode, TbRocket, TbSql, TbDevices, TbX, TbChevronLeft, TbChevronRight } from "react-icons/tb";

const ProjectsSection = () => {
  // Define project type
  type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tech?: string[];
    techStack: string[];
    github?: string;
    githubUrl?: string;
    category?: string;
    features?: string[];
    keyFeatures: string[];
    role: string;
  };

  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "WayFinde",
      role: "Group Project - Team Leader",
      description: "WayFinde is a comprehensive web-based platform designed to transform the way travelers plan, organize, and experience their journeys. Unlike fragmented travel services, WayFinde brings everything together — from discovering destinations and booking accommodations or vehicles to budget tracking, real-time weather updates, and secure payments.",
      techStack: ["React", ".NET", "CSS3", "Microsoft SQL Server"],
      githubUrl: "https://github.com/Navoda-Rajapakshe01/project_WayFinde",
      image: "/wayfinde.png",
      keyFeatures: [
        "Explore Places to Visit - View detailed information about tourist destinations",
        "Reviews and Ratings - Both registered users and guests can submit reviews and rate places",
        "User Management - Admins can manage user accounts with role-based access control",
        "Admin Dashboard - Comprehensive control panel for managing all site content",
        "Vehicle Rental Module - Search and book vehicles with secure reservation system",
        "Accommodation Booking - Browse and reserve hotels with availability and feedback",
        "Online Payments - Integrated secure payment system with real-time confirmation",
        "Trip Plan Management - Create and manage custom travel plans with route optimization",
        "Trip Budgeting Tool - Set and track estimated travel budgets with cost breakdown",
        "Travel To-Do Lists - Personal checklists for each trip with dynamic reordering",
        "Weather Integration - Real-time weather updates for planned destinations"
      ],
    },
    {
      id: 2,
      title: "Portfolio Website",
      role: "Individual Project",
      description: "A modern, responsive portfolio website built with Next.js and TypeScript. Features smooth animations, professional timeline, and clean design architecture.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Navoda-Rajapakshe01/my_portfolio",
      image: "/portfolio.png",
      keyFeatures: [
        "Responsive design with mobile-first approach",
        "Smooth animations using Framer Motion",
        "Server-side rendering with Next.js",
        "Type-safe development with TypeScript",
        "Optimized performance and SEO",
        "Interactive timeline and project showcase"
      ],
    },
    {
      id: 3,
      title: "Doctor Appointment Management Platform",
      role: "Individual Project",
      description: "A full-stack web application built with Laravel (backend) and React (frontend) that streamlines the process of managing doctor appointments. The platform allows users to view available doctors, schedule appointments, and edit or cancel existing bookings through a simple and responsive user interface.",
      techStack: ["Laravel", "JavaScript", "CSS3"],
      githubUrl: "https://github.com/Navoda-Rajapakshe01/webprogramming",
      image: "/careplus.png",
      keyFeatures: [
        "Doctor Profiles - View detailed information about each doctor, including specialization, qualifications, and availability",
        "Appointment Booking - Users can easily select a doctor and schedule appointments through an intuitive booking interface",
        "Appointment Management - View, edit, or delete existing appointments with real-time availability checks",
        "Authentication - Secure login and registration for users to manage their appointments with role-based access"
      ],
    },
    {
      id: 4,
      title: "Smart Shoe for Detecting Walking Abnormalities of Children",
      role: "Hardware Project - Team Member",
      description: "The smart shoe system is engineered to detect various walking abnormalities in children—including intoeing, toe walking, limping, internal and external tibial torsion—and provide real-time, non-invasive feedback to encourage correct gait patterns. Our solution addresses the limitations of traditional, often invasive, treatment methods by enabling early diagnosis and continuous monitoring in a comfortable and child-friendly manner.",
      techStack: ["ESP32", "Arduino", "PCB Design", "3D Modeling", "HTML5", "CSS3", "Firebase"],
      image: "/arduino.jpg",
      keyFeatures: [
        "Gait Abnormality Detection - Identifies common walking issues in children such as intoeing, toe walking, limping, internal & external tibial torsion",
        "Real-Time Feedback System - Provides immediate feedback to users to help correct walking patterns without invasive treatment",
        "Sensor-Based Monitoring - Equipped with FSR402 pressure sensors, MPU-6050 gyroscope, and HC-SR04 ultrasonic sensor for comprehensive analysis",
        "Embedded System with ESP-WROOM-32 - Efficient, low-power microcontroller to process sensor data and communicate wirelessly",
        "Web-Based Data Visualization - Real-time gait data transmitted to a Firebase-connected web interface for remote monitoring",
        "Modular PCB Design - Custom-designed printed circuit board using EasyEDA for compact and reliable assembly",
        "3D Modeled Casing - Shoe housing and sensor placements were 3D modeled using Blender for ergonomic fit and safety",
        "Non-Invasive & Child-Friendly - Designed specifically for children—comfortable, lightweight, and non-intrusive"
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const projectsPerSlide = 3; // Desktop: 3 projects per slide
  const projectsPerSlideMobile = 1; // Mobile: 1 project per slide
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);
  const totalSlidesMobile = projects.length; // Mobile: one slide per project
  
  // Hide navbar when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedProject]);

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Mobile navigation functions  
  const nextSlideMobile = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlidesMobile);
  };

  const prevSlideMobile = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlidesMobile) % totalSlidesMobile);
  };

  // Tech stack icon mapping
  const techIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "TypeScript": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": SiNodedotjs,
    "MongoDB": SiMongodb,
    "JavaScript": SiJavascript,
    "HTML5": SiHtml5,
    "CSS3": SiCss3,
    ".NET": SiDotnet,
    "Microsoft SQL Server": TbSql,
    "Git": SiGit,
    "Framer Motion": SiFramer,
    "Laravel": SiLaravel,
    "Arduino": SiArduino,
    "Firebase": SiFirebase,
    "ESP32": TbDevices,
    "PCB Design": TbDevices,
    "3D Modeling": TbDevices,
    "Embedded Systems": TbDevices,
  };

  const getTechIcon = (tech: string) => {
    const IconComponent = techIcons[tech];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : <TbCode className="w-4 h-4" />;
  };

  const getTechColor = (tech: string): string => {
    const colorMap: { [key: string]: string } = {
      "React": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      "Next.js": "text-white bg-slate-500/10 border-slate-500/20",
      "TypeScript": "text-blue-400 bg-blue-500/10 border-blue-500/20",
      "Tailwind CSS": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      "Node.js": "text-green-400 bg-green-500/10 border-green-500/20",
      "MongoDB": "text-green-400 bg-green-500/10 border-green-500/20",
      "JavaScript": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
      "HTML5": "text-orange-400 bg-orange-500/10 border-orange-500/20",
      "CSS3": "text-blue-400 bg-blue-500/10 border-blue-500/20",
      ".NET": "text-purple-400 bg-purple-500/10 border-purple-500/20",
      "Microsoft SQL Server": "text-red-400 bg-red-500/10 border-red-500/20",
      "Git": "text-orange-400 bg-orange-500/10 border-orange-500/20",
      "Framer Motion": "text-purple-400 bg-purple-500/10 border-purple-500/20",
      "Laravel": "text-red-400 bg-red-500/10 border-red-500/20",
      "Arduino": "text-teal-400 bg-teal-500/10 border-teal-500/20",
      "Firebase": "text-orange-400 bg-orange-500/10 border-orange-500/20",
      "ESP32": "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      "PCB Design": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      "3D Modeling": "text-violet-400 bg-violet-500/10 border-violet-500/20",
      "Embedded Systems": "text-slate-400 bg-slate-500/10 border-slate-500/20",
    };
    return colorMap[tech] || "text-slate-400 bg-slate-500/10 border-slate-500/20";
  };

  // ProjectCard component
  const ProjectCard = ({ project, index }: {
    project: Project;
    index: number;
  }) => (
    <motion.div
      className="group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
        whileHover={{ 
          scale: 1.02,
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Project Image/Mockup */}
        <div className="relative h-40 sm:h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Project Image */}
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          {/* Overlay with project links */}
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-600/50 rounded-lg text-white hover:bg-slate-700/80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TbBrandGithub className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6">
          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-all duration-300 line-clamp-2">
            {project.title}
          </h3>

          {/* Role Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800/50 border border-slate-600/30 rounded-full text-slate-300 text-xs sm:text-sm font-medium">
            {project.role}
            </span>
          </div>

          {/* Tech Stack */}
          <div className="mb-3 sm:mb-4">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <div
                  key={tech}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 hover:scale-105 ${getTechColor(tech)}`}
                >
                  {getTechIcon(tech)}
                  <span className="hidden xs:inline sm:inline">{tech}</span>
                </div>
              ))}
              {project.techStack.length > 4 && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-slate-400 bg-slate-500/10 border-slate-500/20">
                  <span>+{project.techStack.length - 4}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* View Project Button */}
          <div className="flex gap-3">
            <motion.button
              onClick={() => setSelectedProject(project)}
              className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg text-blue-300 transition-all duration-300 text-xs sm:text-sm font-medium"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
            View Project
            </motion.button>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          initial={false}
        />

        {/* Border Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-500/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{ filter: 'blur(15px)' }}
        />
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="relative z-10 py-20 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.4, 0.7, 0.4],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
              Projects
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
            A showcase of my development work, featuring modern web applications and innovative solutions
          </motion.p>
        </motion.div>

        {/* Projects Slider */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between items-center z-10 pointer-events-none">
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full text-white hover:bg-slate-700/80 transition-all duration-300 pointer-events-auto -ml-6"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <TbChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              className="p-3 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full text-white hover:bg-slate-700/80 transition-all duration-300 pointer-events-auto -mr-6"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <TbChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Mobile Navigation Arrows - On the sides */}
          <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center z-20 pointer-events-none px-2">
            <motion.button
              onClick={prevSlideMobile}
              className="p-2 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-full text-white hover:bg-slate-700/90 transition-all duration-300 pointer-events-auto shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentSlide === 0}
            >
              <TbChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={nextSlideMobile}
              className="p-2 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-full text-white hover:bg-slate-700/90 transition-all duration-300 pointer-events-auto shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentSlide === totalSlidesMobile - 1}
            >
              <TbChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            {/* Desktop Slider */}
            <motion.div
              className="hidden md:flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {projects
                      .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                      .map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mobile Slider - One project at a time */}
            <motion.div
              className="md:hidden flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-sm mx-auto">
                    <ProjectCard project={project} index={index} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators - Desktop */}
          <div className="hidden md:flex justify-center mt-6 sm:mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Slide Indicators - Mobile */}
          <div className="md:hidden flex justify-center mt-6 gap-1.5">
            {Array.from({ length: totalSlidesMobile }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-4xl my-4 sm:my-8 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl z-10 mx-4"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-4 sm:p-6 border-b border-slate-700/50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {selectedProject.title}
                        </h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800/50 border border-slate-600/30 rounded-full text-slate-300 text-xs sm:text-sm">
                      {selectedProject.role}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-slate-400 transition-colors rounded-lg hover:bg-slate-800/50 ml-2"
                  >
                    <TbX className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[60vh] sm:max-h-[70vh] p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                    <TbRocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    Project Overview
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                    <TbCode className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech: string, index: number) => (
                      <div
                        key={index}
                        className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${getTechColor(tech)}`}
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                    <TbRocket className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {selectedProject.keyFeatures?.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 text-slate-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-700/50">
                <div className="flex justify-end">
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/80 border border-slate-600/50 rounded-lg text-white hover:bg-slate-700/80 transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TbBrandGithub className="w-4 h-4" />
                      <span className="hidden sm:inline">View Code</span>
                      <span className="sm:hidden">Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
