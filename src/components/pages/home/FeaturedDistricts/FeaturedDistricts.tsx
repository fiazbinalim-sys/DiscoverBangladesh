
'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface District {
  name: string;
  description: string;
  image: string;
}

export default function FeaturedDistricts() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Match the data-aos-duration in the card
      once: true, // Animation happens only once on scroll
    });
  }, []);

  const districts: District[] = [
    {
      name: "Cox's Bazar",
      description: "World's longest natural sea beach",
      image: "/Home/cox-bazar.png",
    },
    {
      name: "Sylhet",
      description: "The land of tea gardens and spirituality",
      image: "/Home/sylhet.png",
    },
    {
      name: "Bandarban",
      description: "Hills, waterfalls, and tribal culture",
      image: "/Home/bandarban.png",
    },
    {
      name: "Sundarbans",
      description: "The land of rivers and royal bengal tigers",
      image: "/Home/sundarban.png",
    },
    {
      name: "Rangamati",
      description: "Lakes, hills, and hanging bridges",
      image: "/Home/rangamati.png",
    },
    {
      name: "Dhaka",
      description: "Rich heritage and vibrant culture",
      image: "/Home/dhaka.png",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="customContainer mx-auto max-w-7xl px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Featured Districts
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the diverse beauty and rich culture across Bangladesh&apos;s most
            enchanting destinations
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {districts.map((district, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            >
              {/* Image with Overlay Text */}
              <div className="relative h-64 w-full group overflow-hidden">
                <Image
                  src={district.image}
                  alt={district.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="text-xl font-bold mb-1">{district.name}</h3>
                  <p className="text-sm text-gray-200">{district.description}</p>
                </div>
              </div>

              {/* Button */}
              <div className="p-4 mt-5">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:gap-3">
                  View Attractions
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
