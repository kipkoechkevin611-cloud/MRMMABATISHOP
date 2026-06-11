'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Product, Gauge, CartItem } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [gauge, setGauge] = useState<Gauge>(28);
  const [color, setColor] = useState(product.colors[0]);
  const [meters, setMeters] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const price = gauge === 28 ? product.pricing.gauge28 : product.pricing.gauge30;
  const totalPrice = product.pricingType === 'perMeter' ? price * meters : price;
  const finalPrice = totalPrice * quantity;

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      product,
      gauge,
      color,
      meters: product.pricingType === 'perMeter' ? meters : undefined,
      quantity,
    };
    addToCart(cartItem);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* Product Image */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.jpg';
          }}
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>

        {/* Gauge Selection */}
        <div className="mb-5">
          <label className="block text-sm font-bold text-gray-800 mb-3">Gauge</label>
          <div className="flex gap-3">
            {[28, 30].map((g) => (
              <button
                key={g}
                onClick={() => setGauge(g as Gauge)}
                className={`flex-1 py-3 rounded-xl font-bold transition-all duration-200 ${
                  gauge === g
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-5">
          <label className="block text-sm font-bold text-gray-800 mb-3">Color</label>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  color === c
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Meter Selection (for per meter products) */}
        {product.pricingType === 'perMeter' && (
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-800 mb-3">Length (Meters)</label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((m) => (
                <button
                  key={m}
                  onClick={() => setMeters(m)}
                  className={`py-2 rounded-xl font-bold transition-all duration-200 ${
                    meters === m
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {m}m
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selection */}
        <div className="mb-5">
          <label className="block text-sm font-bold text-gray-800 mb-3">Quantity</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-bold text-gray-700 hover:from-gray-200 hover:to-gray-300 transition-all shadow-md"
            >
              -
            </button>
            <span className="text-2xl font-bold text-gray-900 w-16 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-bold text-gray-700 hover:from-gray-200 hover:to-gray-300 transition-all shadow-md"
            >
              +
            </button>
          </div>
        </div>

        {/* Price Display */}
        <div className="mb-6 p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
          <div className="text-sm text-gray-700 font-medium mb-1">
            {product.pricingType === 'perMeter' ? `KES ${price.toLocaleString()} per meter` : `KES ${price.toLocaleString()} per piece`}
          </div>
          {product.pricingType === 'perMeter' && (
            <div className="text-sm text-gray-700 font-medium mb-2">
              KES {(price * meters).toLocaleString()} for {meters}m
            </div>
          )}
          <div className="text-3xl font-bold text-blue-600">
            KES {finalPrice.toLocaleString()}
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl shadow-blue-500/30"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
