import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { containerVariants, itemVariantsSmall } from '../utils/animations';

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const features = sectionRef.current.querySelectorAll('.feature-card');
      
      gsap.fromTo(features, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
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

  const features = [
    {
      title: 'One Profile, Infinite Possibilities',
      subtitle: 'Unified Dashboard',
      description: 'Centralize all your projects, skills, and achievements in one beautiful, organized space.',
      bgColor: 'from-purple-100 to-pink-100',
      cardBg: 'bg-gradient-to-br from-purple-50 to-pink-50',
      image: 'dashboard',
    },
    {
      title: 'Smart Analytics',
      subtitle: 'Track & Optimize',
      description: 'Get detailed insights into your portfolio performance and visitor engagement.',
      bgColor: 'from-blue-100 to-cyan-100',
      cardBg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      image: 'analytics',
    },
    {
      title: 'Custom Showcase',
      subtitle: 'Stand Out',
      description: 'Create unique project presentations that showcase your work in the best light.',
      bgColor: 'from-green-100 to-emerald-100',
      cardBg: 'bg-gradient-to-br from-green-50 to-emerald-50',
      image: 'showcase',
    },
    {
      title: 'Real-time Sync',
      subtitle: 'Always Updated',
      description: 'Automatically sync with your repositories and keep your portfolio current.',
      bgColor: 'from-orange-100 to-red-100',
      cardBg: 'bg-gradient-to-br from-orange-50 to-red-50',
      image: 'sync',
    },
    {
      title: 'Collaboration Tools',
      subtitle: 'Work Together',
      description: 'Share projects, get feedback, and collaborate with other developers.',
      bgColor: 'from-indigo-100 to-purple-100',
      cardBg: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      image: 'collaboration',
    },
    {
      title: 'Dynamic Templates',
      subtitle: 'Endless Customization',
      description: 'Choose from professionally designed templates or create your own unique style.',
      bgColor: 'from-pink-100 to-rose-100',
      cardBg: 'bg-gradient-to-br from-pink-50 to-rose-50',
      image: 'templates',
    },
  ];



  const renderMockup = (type: string) => {
    switch (type) {
      case 'dashboard':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm h-40">
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="space-y-2">
                <div className="h-3 bg-purple-200 rounded"></div>
                <div className="h-3 bg-purple-100 rounded w-2/3"></div>
                <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
              </div>
              <div className="col-span-2 space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-4 bg-purple-200 rounded"></div>
                  <div className="h-4 bg-pink-200 rounded"></div>
                  <div className="h-4 bg-purple-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm h-40">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="h-3 bg-blue-200 rounded w-1/3"></div>
                <div className="h-3 bg-cyan-200 rounded w-1/4"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-end space-x-1 h-16">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`bg-gradient-to-t from-blue-400 to-cyan-400 rounded-sm flex-1`} style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="h-2 bg-blue-200 rounded w-8"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="h-2 bg-cyan-200 rounded w-8"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'showcase':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm h-40">
            <div className="grid grid-cols-2 gap-3 h-full">
              <div className="space-y-2">
                <div className="h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded"></div>
                <div className="h-2 bg-green-200 rounded"></div>
                <div className="h-2 bg-green-200 rounded w-2/3"></div>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded"></div>
                <div className="h-2 bg-emerald-200 rounded"></div>
                <div className="h-2 bg-emerald-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        );
      case 'sync':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm h-40">
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'collaboration':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm h-40">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-indigo-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="h-3 bg-indigo-200 rounded w-1/4"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-indigo-100 rounded"></div>
                <div className="h-3 bg-purple-100 rounded w-3/4"></div>
                <div className="h-3 bg-pink-100 rounded w-1/2"></div>
              </div>
              <div className="flex space-x-2">
                <div className="h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded flex-1"></div>
                <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded flex-1"></div>
              </div>
            </div>
          </div>
        );
      case 'templates':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm h-40">
            <div className="grid grid-cols-3 gap-2 h-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`bg-gradient-to-br from-pink-100 to-rose-100 rounded p-2`}>
                  <div className="h-full space-y-1">
                    <div className="h-2 bg-pink-200 rounded"></div>
                    <div className="h-6 bg-gradient-to-r from-pink-300 to-rose-300 rounded"></div>
                    <div className="h-1 bg-pink-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            variants={itemVariantsSmall}
          >
            One Profile, Infinite Possibilities
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`feature-card relative ${feature.cardBg} rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden`}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.bgColor} rounded-full opacity-30 transform translate-x-16 -translate-y-16`}></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {feature.subtitle}
                  </h4>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Mockup */}
                <div className="relative">
                  {renderMockup(feature.image)}
                </div>

                {/* Call to action */}
                <div className="mt-6">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    Learn more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;