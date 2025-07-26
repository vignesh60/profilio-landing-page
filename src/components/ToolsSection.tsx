import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { containerVariants, itemVariantsSmall } from '../utils/animations';

const ToolsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const toolsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toolsGridRef.current) {
      const tools = toolsGridRef.current.querySelectorAll('.tool-icon');
      
      gsap.fromTo(tools, 
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const tools = [
    { name: 'Git', color: 'bg-orange-500', icon: 'G' },
    { name: 'VS Code', color: 'bg-blue-500', icon: 'VS' },
    { name: 'Figma', color: 'bg-purple-500', icon: 'F' },
    { name: 'GitHub', color: 'bg-gray-800', icon: 'GH' },
    { name: 'Slack', color: 'bg-green-500', icon: 'S' },
    { name: 'Notion', color: 'bg-black', icon: 'N' },
    { name: 'Discord', color: 'bg-indigo-500', icon: 'D' },
    { name: 'Chrome', color: 'bg-red-500', icon: 'C' },
    { name: 'Safari', color: 'bg-blue-400', icon: 'S' },
    { name: 'Firefox', color: 'bg-orange-600', icon: 'F' },
    { name: 'Edge', color: 'bg-blue-600', icon: 'E' },
    { name: 'Opera', color: 'bg-red-600', icon: 'O' },
  ];



  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariantsSmall}
          >
            <span className="text-blue-600">CONNECT YOUR TOOLS</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariantsSmall}
          >
            Seamlessly integrate with your favorite development tools and showcase your workflow
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          ref={toolsGridRef}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="tool-icon flex flex-col items-center group cursor-pointer"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`w-16 h-16 ${tool.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                {tool.icon}
              </div>
              <span className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Showcase */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* API Integration */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            variants={itemVariantsSmall}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">API</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">API Integration</h3>
            <p className="text-gray-600 mb-6">
              Connect directly with your GitHub, GitLab, or Bitbucket repositories to automatically sync your projects.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Real-time synchronization</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Automatic updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Secure connections</span>
              </div>
            </div>
          </motion.div>

          {/* Analytics */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            variants={itemVariantsSmall}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Analytics</h3>
            <p className="text-gray-600 mb-6">
              Track visitor engagement, project views, and portfolio performance with detailed analytics.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Monthly Views</span>
                <span className="text-sm font-semibold text-purple-600">2,847</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </motion.div>

          {/* Deployment */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            variants={itemVariantsSmall}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Click Deploy</h3>
            <p className="text-gray-600 mb-6">
              Deploy your portfolio to Vercel, Netlify, or GitHub Pages with a single click.
            </p>
            <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Deploy Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;