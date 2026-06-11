'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Choosing the Right Roofing Material for Your Home',
      excerpt: 'A comprehensive guide to help you select the best roofing material for your specific needs, climate, and budget.',
      image: '/images/blogs.jpeg',
      date: 'June 10, 2024',
      category: 'Tips & Guides',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Benefits of Box Profile Roofing Sheets',
      excerpt: 'Discover why box profile roofing sheets are becoming increasingly popular for both residential and commercial buildings.',
      image: '/images/blogss.jpeg',
      date: 'June 5, 2024',
      category: 'Product Info',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'How to Maintain Your Roof for Long-Lasting Protection',
      excerpt: 'Essential tips and best practices for maintaining your roof to ensure it lasts for years to come.',
      image: '/images/latest from our blog.jpeg',
      date: 'May 28, 2024',
      category: 'Maintenance',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Understanding Different Roofing Gauges',
      excerpt: 'Learn about the different gauges available and which one is right for your roofing project.',
      image: '/images/our projects.jpeg',
      date: 'May 20, 2024',
      category: 'Education',
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'Top Trends in Modern Roofing Design',
      excerpt: 'Explore the latest trends in roofing design that are transforming the construction industry.',
      image: '/images/project.jpeg',
      date: 'May 15, 2024',
      category: 'Design',
      readTime: '4 min read',
    },
    {
      id: 6,
      title: 'Cost-Effective Roofing Solutions for Budget Projects',
      excerpt: 'Discover affordable roofing options without compromising on quality and durability.',
      image: '/images/projects.jpeg',
      date: 'May 10, 2024',
      category: 'Budget Tips',
      readTime: '5 min read',
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest roofing tips, industry news, and expert advice
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest roofing tips, industry updates, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
