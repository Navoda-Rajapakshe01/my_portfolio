"use client";

import { motion } from "framer-motion";
import React from "react";
import emailjs from 'emailjs-com';
import { 
  TbMail, 
  TbMapPin, 
  TbBrandLinkedin, 
  TbBrandGithub, 
  TbSend,
  TbUser,
  TbMessage,
  TbCheck,
  TbX,
  TbLoader
} from "react-icons/tb";

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = React.useState<{
    isSubmitting: boolean;
    isSuccess: boolean;
    isError: boolean;
    message: string;
  }>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous status when user starts typing
    if (formStatus.isSuccess || formStatus.isError) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        message: ""
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Please fill in all required fields."
      });
      return;
    }

    // Start submitting
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "Sending your message..."
    });

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if all credentials are available
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'your_service_id' || 
          templateId === 'your_template_id' || 
          publicKey === 'your_public_key') {
        throw new Error('EmailJS credentials not properly configured');
      }

      // Template parameters for EmailJS (matching your template variables exactly)
      const templateParams = {
        title: `Portfolio Contact from ${formData.name}`,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      console.log('Sending email with params:', { serviceId, templateId, templateParams });

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon."
      });
      
      // Auto-dismiss success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSuccess: false,
          message: ""
        }));
      }, 5000);
      
      resetForm();
      
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      
      let errorMessage = "Oops! Something went wrong. Please try again or contact me directly via email.";
      
      // Provide more specific error messages
      const emailError = error as { status?: number; text?: string; message?: string };
      
      if (emailError.status === 412) {
        if (emailError.text?.includes('Gmail_API') && emailError.text?.includes('insufficient authentication scopes')) {
          errorMessage = "Email service authentication issue. Opening your email client as a backup...";
          
          // Fallback: Open user's email client
          setTimeout(() => {
            const mailtoLink = `mailto:navodar01@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            window.location.href = mailtoLink;
          }, 2000);
          
        } else {
          errorMessage = "Email template configuration issue. Please contact me directly at navodar01@gmail.com";
        }
      } else if (emailError.status === 400) {
        errorMessage = "Invalid email configuration. Please contact me directly at navodar01@gmail.com";
      } else if (emailError.message?.includes('credentials')) {
        errorMessage = "Email service not configured. Please contact me directly at navodar01@gmail.com";
      }
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: errorMessage
      });
    }
  };

  const contactInfo = [
    {
      icon: TbMail,
      label: "Email",
      value: "navodar01@gmail.com",
      href: "mailto:navodar01@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TbMapPin,
      label: "Location",
      value: "Kurunegala, Sri Lanka",
      href: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: TbBrandLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/navoda-rajapakshe-4a290226a/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: TbBrandGithub,
      label: "GitHub",
      href: "https://github.com/Navoda-Rajapakshe01",
      color: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative">
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
              Let&apos;s Work Together
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
            className="text-slate-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Let&apos;s create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-slate-900/60 backdrop-blur-lg rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} shadow-lg`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium group-hover:text-slate-200 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-gradient-to-r ${social.color} hover:shadow-lg transition-all duration-300 group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5 text-white group-hover:text-white/90 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <TbUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <TbMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <TbMessage className="absolute left-3 top-4 text-slate-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
              </div>

              {/* Status Message */}
              {(formStatus.isSuccess || formStatus.isError) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border ${
                    formStatus.isSuccess 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                      : 'bg-red-500/10 border-red-500/20 text-red-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {formStatus.isSuccess ? (
                      <TbCheck className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <TbX className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{formStatus.message}</p>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus.isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 shadow-lg ${
                  formStatus.isSubmitting
                    ? 'bg-slate-600 cursor-not-allowed text-slate-300'
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-blue-500/25'
                }`}
                whileHover={formStatus.isSubmitting ? {} : { scale: 1.02 }}
                whileTap={formStatus.isSubmitting ? {} : { scale: 0.98 }}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <TbLoader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <TbSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
