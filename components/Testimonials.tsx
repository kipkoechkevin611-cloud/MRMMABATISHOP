'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Kamau',
      role: 'Homeowner',
      location: 'Nairobi',
      content: 'MRM Roofing provided excellent quality materials for my new home. The box profile sheets are durable and look amazing. Their customer service was exceptional throughout the process.',
      rating: 5,
    },
    {
      name: 'Mary Wanjiku',
      role: 'Contractor',
      location: 'Mombasa',
      content: 'I have been working with MRM Roofing for over 5 years on various projects. Their materials are always top quality and their delivery is reliable. Highly recommended for any construction project.',
      rating: 5,
    },
    {
      name: 'Peter Ochieng',
      role: 'Business Owner',
      location: 'Kisumu',
      content: 'The Roman tiles from MRM Roofing transformed my commercial building. The quality exceeded my expectations and the pricing was very competitive. Will definitely use them again.',
      rating: 5,
    },
    {
      name: 'Sarah Njeri',
      role: 'Architect',
      location: 'Nakuru',
      content: 'As an architect, I always recommend MRM Roofing to my clients. Their versatile sheets offer great design flexibility and the technical support they provide is invaluable.',
      rating: 5,
    },
    {
      name: 'David Kipkorir',
      role: 'Property Developer',
      location: 'Eldoret',
      content: 'MRM Roofing has been our go-to supplier for all our housing projects. Their corrugated sheets are consistently high quality and their team is always professional and helpful.',
      rating: 5,
    },
    {
      name: 'Grace Achieng',
      role: 'Homeowner',
      location: 'Thika',
      content: 'I renovated my roof using MRM Roofing materials and the difference is remarkable. The installation was smooth and the materials are of excellent quality. Very satisfied with the results.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
