'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About MRM Roofing & Steel</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for premium roofing materials and steel products in Kenya
            </p>
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  MRM Roofing & Steel has been a leading provider of roofing materials and steel products in Kenya for over 15 years. Founded with a vision to provide high-quality construction materials at competitive prices, we have grown to become one of the most trusted names in the industry.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our commitment to quality, customer satisfaction, and innovation has helped us build long-lasting relationships with contractors, builders, and homeowners across the country.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in a wide range of roofing solutions including box profile sheets, corrugated sheets, versatile sheets, Roman tiles, and various steel products and accessories to meet all your construction needs.
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                <Image
                  src="/images/our projects.jpeg"
                  alt="MRM Projects"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 md:p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-blue-100 leading-relaxed">
                To provide the highest quality roofing materials and steel products at competitive prices while delivering exceptional customer service. We are committed to helping our customers build durable, beautiful, and long-lasting structures that stand the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-xl p-8 md:p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-green-100 leading-relaxed">
                To be the leading provider of roofing and steel solutions in East Africa, known for our quality products, innovative solutions, and unwavering commitment to customer satisfaction. We aim to set industry standards and inspire trust in every project we undertake.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality',
                  description: 'We never compromise on quality. Every product we offer meets the highest industry standards.',
                  icon: '🏆',
                },
                {
                  title: 'Integrity',
                  description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.',
                  icon: '🤝',
                },
                {
                  title: 'Customer Focus',
                  description: 'Our customers are at the heart of everything we do. We strive to exceed their expectations.',
                  icon: '❤️',
                },
                {
                  title: 'Innovation',
                  description: 'We continuously improve and innovate to bring the best solutions to our customers.',
                  icon: '💡',
                },
                {
                  title: 'Reliability',
                  description: 'We deliver on our promises and provide consistent quality products and services.',
                  icon: '✅',
                },
                {
                  title: 'Sustainability',
                  description: 'We are committed to environmentally responsible practices and sustainable solutions.',
                  icon: '🌱',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Over 15 years of industry experience',
                'Premium quality products at competitive prices',
                'Wide range of roofing and steel solutions',
                'Expert advice and technical support',
                'Reliable delivery services across Kenya',
                'Excellent customer service and support',
                'Trusted by thousands of satisfied customers',
                'Commitment to quality and satisfaction',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
