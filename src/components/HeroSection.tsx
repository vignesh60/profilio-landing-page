import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dashboardRef.current) {
      // Floating animation for dashboard
      gsap.to(dashboardRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Unify Your <span className="gradient-text">Code</span> Journey
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Create, Collaborate, Code. Your comprehensive showcase of developer
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 mb-16"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building Now
          </motion.button>

          {/* Dashboard Mockup */}
          <motion.div
            ref={dashboardRef}
            className="relative max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Browser header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              {/* Dashboard content */}
              <div className="bg-gray-50 rounded-lg p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Creative Board</h3>
                      <p className="text-sm text-gray-500">Dashboard</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left sidebar */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="md:col-span-2">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg p-3 h-20"></div>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;