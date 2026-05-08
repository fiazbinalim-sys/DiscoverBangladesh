'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';


interface Package {
  name: string;
  price: string;
  days: string;
  image: string;
}

export default function TourPackages() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
    });
  }, []);

  const packages: Package[] = [
    { name: "Summer Escape – Cox’s Bazar", price: "৳12,000 - ৳18,000", days: "3 Days / 2 Nights", image: "/Home/cox-bazar.png" },
    { name: "Hill Paradise – Bandarban & Rangamati", price: "৳15,000 - ৳22,000", days: "3 Days / 2 Nights", image: "/Home/bandarban.png" },
    { name: "Sundarbans Wildlife Safari", price: "৳20,000 - ৳28,000", days: "3 Days / 2 Nights", image: "/Home/sundarban.png" },
    { name: "Summer Escape – Cox’s Bazar", price: "৳12,000 - ৳18,000", days: "3 Days / 2 Nights", image: "/Home/cox-bazar.png" },
    { name: "Hill Paradise – Bandarban & Rangamati", price: "৳15,000 - ৳22,000", days: "3 Days / 2 Nights", image: "/Home/bandarban.png" },
    { name: "Sundarbans Wildlife Safari", price: "৳20,000 - ৳28,000", days: "3 Days / 2 Nights", image: "/Home/sundarban.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Curated Tour Packages
        </h2>
        <p className="text-gray-600 mb-10">
          Choose from our handpicked packages designed for unforgettable experiences
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-105"
              data-aos="zoom-in"
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                {/* Days Tag */}
                <div className="absolute top-3 right-3 bg-[#009966] text-white text-xs px-3 py-1 rounded-full">
                  {pkg.days}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-gray-900 font-semibold mb-1">{pkg.name}</h3>
                <p className="text-[#009966] font-semibold mb-4">{pkg.price}</p>
               <Link href="/package">
                <button className="w-full bg-[#009966] hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition">
                  View Attractions →
                </button>
               </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}