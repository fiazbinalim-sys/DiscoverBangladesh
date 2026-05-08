
'use client';

import { TrendingUp, Users, DollarSign, Headphones, Building2, Utensils, Plane, MapPin } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface PartnerType {
  label: string;
  icon: string;
}

export default function PartnerSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
    });
  }, []);

  const partnerTypes: PartnerType[] = [
    { label: 'Hotels & Resorts', icon: 'building' },
    { label: 'Restaurants & Cafes', icon: 'utensils' },
    { label: 'Travel Agencies', icon: 'plane' },
    { label: 'Tour Guides', icon: 'map' },
  ];

  const benefits: Benefit[] = [
    {
      title: 'Grow Your Business',
      description: 'Increase visibility and bookings',
      icon: 'trending',
    },
    {
      title: 'Get Discovered',
      description: 'Reach more travelers',
      icon: 'users',
    },
    {
      title: 'Flexible Pricing',
      description: 'Set your own rates',
      icon: 'dollar',
    },
    {
      title: '24/7 Support',
      description: "We're here to help",
      icon: 'headphones',
    },
  ];

  const renderIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6';
    switch (iconName) {
      case 'trending':
        return <TrendingUp className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      case 'dollar':
        return <DollarSign className={iconClass} />;
      case 'headphones':
        return <Headphones className={iconClass} />;
      case 'building':
        return <Building2 className={iconClass} />;
      case 'utensils':
        return <Utensils className={iconClass} />;
      case 'plane':
        return <Plane className={iconClass} />;
      case 'map':
        return <MapPin className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-16 text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#009966] to-[#00786F]"></div>

      <div className="relative customContainer mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Partner with Us</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Connect your hotel, restaurant, or travel agency to our tourism
              network and reach thousands of travelers across Bangladesh
            </p>

            {/* Partner Types */}
            <div className="space-y-3">
              {partnerTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <div className="w-5 h-5">{renderIcon(type.icon)}</div>
                  <span className="font-medium">{type.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 cursor-pointer flex items-center gap-2 hover:shadow-lg">
                Join as a Partner
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer"
                data-aos="zoom-out-down"
                data-aos-delay={index * 100}
              >
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {renderIcon(benefit.icon)}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
