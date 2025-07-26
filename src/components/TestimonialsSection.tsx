import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { containerVariants, itemVariantsUp } from '../utils/animations';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const testimonials = sectionRef.current.querySelectorAll('.testimonial-card');
      
      gsap.fromTo(testimonials, 
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
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

  const testimonials = [
    {
      name: 'Elena Davis',
      role: 'Full Stack Developer',
      company: 'TechCorp',
      image: 'ED',
      rating: 5,
      text: 'Profilio transformed how I showcase my work. The seamless GitHub integration and beautiful templates made creating my portfolio effortless.',
      bgColor: 'from-blue-100 to-cyan-100',
      accentColor: 'bg-blue-500',
    },
    {
      name: 'Carlos Mitchell',
      role: 'Frontend Engineer',
      company: 'StartupX',
      image: 'CM',
      rating: 5,
      text: 'The analytics feature helped me understand which projects resonate most with employers. Got 3 job offers in 2 weeks!',
      bgColor: 'from-purple-100 to-pink-100',
      accentColor: 'bg-purple-500',
    },
    {
      name: 'Aisha Patel',
      role: 'UI/UX Designer',
      company: 'Design Studio',
      image: 'AP',
      rating: 5,
      text: 'Finally, a platform that understands designers and developers. The customization options are incredible and the results speak for themselves.',
      bgColor: 'from-green-100 to-emerald-100',
      accentColor: 'bg-green-500',
    },
  ];



  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-blue-600 font-semibold text-lg mb-4"
            variants={itemVariantsUp}
          >
            DEVELOPERS LOVE
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            variants={itemVariantsUp}
          >
            Trusted by Coders Worldwide
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={`testimonial-card bg-gradient-to-br ${testimonial.bgColor} rounded-2xl p-8 shadow-xl border border-white/50 relative overflow-hidden`}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${testimonial.accentColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { number: '50K+', label: 'Developers' },
            { number: '200K+', label: 'Portfolios Created' },
            { number: '1M+', label: 'Project Views' },
            { number: '98%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariantsUp}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;