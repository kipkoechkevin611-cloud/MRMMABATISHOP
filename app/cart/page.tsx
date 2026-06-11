'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { OrderDetails } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate WhatsApp message
    let message = `*New Order from MRM Roofing & Steel*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${orderDetails.name}\n`;
    message += `Phone: ${orderDetails.phone}\n`;
    message += `Email: ${orderDetails.email}\n`;
    message += `Address: ${orderDetails.address}\n\n`;
    message += `*Order Items:*\n`;

    cart.forEach((item, index) => {
      const price = item.gauge === 28 ? item.product.pricing.gauge28 : item.product.pricing.gauge30;
      const meters = item.product.pricingType === 'perMeter' ? (item.meters || 1) : 1;
      const itemTotal = price * meters * item.quantity;

      message += `${index + 1}. ${item.product.name}\n`;
      message += `   - Gauge: ${item.gauge}\n`;
      message += `   - Color: ${item.color}\n`;
      if (item.product.pricingType === 'perMeter') {
        message += `   - Meters: ${item.meters}m\n`;
      }
      message += `   - Quantity: ${item.quantity}\n`;
      message += `   - Price: KES ${itemTotal.toLocaleString()}\n\n`;
    });

    message += `*Total: KES ${getCartTotal().toLocaleString()}*`;

    // Open WhatsApp with the message
    const whatsappNumber = '254111333107';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Clear cart after successful order
    clearCart();
    setIsSubmitting(false);

    // Reset form
    setOrderDetails({
      name: '',
      phone: '',
      email: '',
      address: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
            <p className="text-xl text-gray-600">Review your items and place your order</p>
          </motion.div>

          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8 text-lg">Add some products to get started</p>
              <a
                href="/products"
                className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl shadow-blue-500/30"
              >
                Browse Products
              </a>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item, index) => {
                  const price = item.gauge === 28 ? item.product.pricing.gauge28 : item.product.pricing.gauge30;
                  const meters = item.product.pricingType === 'perMeter' ? (item.meters || 1) : 1;
                  const itemTotal = price * meters * item.quantity;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100"
                    >
                      <div className="flex gap-6 p-6">
                        <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/images/placeholder.jpg';
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.product.name}</h3>
                          <div className="text-sm text-gray-600 space-y-1 mb-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-700">Gauge:</span>
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-bold">{item.gauge}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-700">Color:</span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">{item.color}</span>
                            </div>
                            {item.product.pricingType === 'perMeter' && (
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-700">Length:</span>
                                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs font-bold">{item.meters}m</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                                className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-bold text-gray-700 hover:from-gray-200 hover:to-gray-300 transition-all shadow-md"
                              >
                                -
                              </button>
                              <span className="w-12 text-center font-bold text-xl text-gray-900">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-bold text-gray-700 hover:from-gray-200 hover:to-gray-300 transition-all shadow-md"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">
                                KES {itemTotal.toLocaleString()}
                              </div>
                              <button
                                onClick={() => removeFromCart(index)}
                                className="text-red-500 hover:text-red-700 text-sm font-semibold mt-2 transition-colors"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Order Form */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 sticky top-28 border border-gray-100"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                    <div className="flex justify-between text-gray-700 font-medium">
                      <span>Subtotal</span>
                      <span className="font-bold">KES {getCartTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 font-medium">
                      <span>Delivery</span>
                      <span className="text-blue-600 font-semibold">To be calculated</span>
                    </div>
                    <div className="border-t border-blue-200 pt-4 flex justify-between text-2xl font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-blue-600">KES {getCartTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  <form onSubmit={handleOrderSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={orderDetails.name}
                        onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={orderDetails.phone}
                        onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                        placeholder="07XXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={orderDetails.email}
                        onChange={(e) => setOrderDetails({ ...orderDetails, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-3">
                        Delivery Address *
                      </label>
                      <textarea
                        required
                        value={orderDetails.address}
                        onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium resize-none"
                        rows={4}
                        placeholder="Enter your delivery address"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-xl shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Processing...' : 'Order via WhatsApp'}
                    </motion.button>

                    <button
                      type="button"
                      onClick={clearCart}
                      className="w-full py-3 bg-gradient-to-r from-red-100 to-red-200 text-red-600 rounded-xl font-bold hover:from-red-200 hover:to-red-300 transition-all"
                    >
                      Clear Cart
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
