'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const services = [
    {
      title: 'Roofing Installation',
      description: 'Professional installation of all types of roofing materials including box profile, corrugated, versatile, Roman tiles, and more. Our experienced team ensures proper installation for maximum durability and weather protection.',
      icon: '🏠',
      features: ['Expert installation team', 'Quality materials', 'Warranty included', 'Timely completion'],
    },
    {
      title: 'Roof Repair & Maintenance',
      description: 'Comprehensive roof repair services to fix leaks, replace damaged sheets, and maintain your roof in optimal condition. We provide quick response times and effective solutions.',
      icon: '🔧',
      features: ['Leak detection & repair', 'Sheet replacement', 'Preventive maintenance', 'Emergency services'],
    },
    {
      title: 'Steel Fabrication',
      description: 'Custom steel fabrication services for construction projects. We create steel structures, frames, and components according to your specifications with precision and quality.',
      icon: '🔩',
      features: ['Custom fabrication', 'Precision cutting', 'Welding services', 'Structural steel'],
    },
    {
      title: 'Material Supply',
      description: 'Wide range of roofing materials and steel products available for supply. We offer competitive pricing and reliable delivery services across Kenya.',
      icon: '📦',
      features: ['Bulk orders welcome', 'Nationwide delivery', 'Quality guaranteed', 'Competitive pricing'],
    },
    {
      title: 'Consultation & Design',
      description: 'Expert consultation services for roofing and steel projects. We help you choose the right materials and design solutions for your specific needs.',
      icon: '📋',
      features: ['Free consultation', 'Design assistance', 'Material selection', 'Cost estimation'],
    },
    {
      title: 'Site Assessment',
      description: 'Professional site assessment services to evaluate your roofing needs and provide accurate measurements and recommendations for your project.',
      icon: '📍',
      features: ['Site visits', 'Accurate measurements', 'Detailed reports', 'Expert recommendations'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive roofing and steel solutions for all your construction needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="p-8">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 md:p-12 text-white mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Experienced Team',
                  description: 'Over 15 years of industry experience',
                  icon: '👷',
                },
                {
                  title: 'Quality Work',
                  description: 'Premium materials and expert craftsmanship',
                  icon: '✨',
                },
                {
                  title: 'Timely Delivery',
                  description: 'We complete projects on schedule',
                  icon: '⏰',
                },
                {
                  title: 'Competitive Pricing',
                  description: 'Best value for your investment',
                  icon: '💰',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote for your roofing or steel project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254780700584"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-xl shadow-green-500/30"
              >
                Contact via WhatsApp
              </a>
              <a
                href="tel:0780700584"
                className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl shadow-blue-500/30"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
