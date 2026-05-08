'use client';

import React from "react";
import { CiLocationOn, CiMap } from "react-icons/ci";
import { FaRegCompass, FaRegStar } from "react-icons/fa";

import { motion, Variants } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function EverythingYouNeed() {
  const features: Feature[] = [
    { title: "Place Information", description: "Detailed guides about attractions, history, and local culture", icon: <CiLocationOn /> },
    { title: "Location Tracking", description: "Google Maps integration for easy navigation", icon: <CiMap /> },
    { title: "Nearby Attractions", description: "Discover places within walking distance", icon: <FaRegCompass /> },
    { title: "User Reviews", description: "Authentic experiences from fellow travelers", icon: <FaRegStar /> },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-12 bg-white text-center">
      <div className="customContainer mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Everything You Need
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-8"
        >
          Plan your perfect journey with our comprehensive travel tools
        </motion.p>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center  p-6 rounded-lg  hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-green-100 p-4 rounded-full mb-4 text-green-600 text-3xl"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
