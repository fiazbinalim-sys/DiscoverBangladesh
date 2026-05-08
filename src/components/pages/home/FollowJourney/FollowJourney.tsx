'use client';

import Image from "next/image";
// import { motion } from "framer-motion";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function FollowJourney() {
  const images = [
    "/Home/sylhet.png", "/Home/bandarban.png", "/Home/sundarban.png", "/Home/rangamati.png",
    "/Home/dhaka.png", "/Home/cox-bazar.png", "/Home/bandarban.png", "/Home/sylhet.png",
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-12 bg-white text-center">
      <div className="customContainer mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Follow Our Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-6"
        >
          Join our community and share your travel experiences
        </motion.p>

        <Link href="/community">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-[#009966] text-white px-8 py-2 rounded-lg hover:bg-green-700 mb-10 transition-all duration-300"
        >
          Join Community
        </motion.button>
        </Link>

        {/* Image Grid with Stagger Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {images.map((img, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Image
                src={img}
                alt={`Journey ${index + 1}`}
                height={300}
                width={300}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
