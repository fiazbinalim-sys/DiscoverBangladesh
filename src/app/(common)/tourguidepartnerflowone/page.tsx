"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Globe,
  TrendingUp,
  Shield,
  Users,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function BecomeGuide() {
  const router = useRouter();

  const handleGetStarted = () => {
    console.log('Get started clicked');
    router.push('/guide/register');
  };

  const handleJoinAsGuide = () => {
    console.log('Join as guide clicked');
    router.push('/guide/register');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px]  overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/package/tourguide.png"
            alt="Palm trees"
            fill
            className="object-cover "
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
            Share Your Passion. Become a Travel Guide.
          </h1>
          <p className="text-white/90 text-sm md:text-base mb-8 max-w-xl">
            Join thousands of local experts earning income by sharing authentic travel experiences with curious explorers worldwide.
          </p>
          <Link href="/tourguideflowone">
          <button
            onClick={handleGetStarted}
            className="bg-white hover:bg-gray-50 text-teal-700 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 shadow-lg"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          </Link>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Join Our Community?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Global Reach */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#009966] rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-sm text-gray-600">
              Connect with travelers from around the world and share authentic local experiences
            </p>
          </div>

          {/* Flexible Income */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#009966] rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Income</h3>
            <p className="text-sm text-gray-600">
              Set your own schedule and pricing. Work when you want, how you want
            </p>
          </div>

          {/* Secure Platform */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#009966] rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Platform</h3>
            <p className="text-sm text-gray-600">
              Verified payments, insurance coverage, and 24/7 support for your peace of mind
            </p>
          </div>

          {/* Expert Community */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#009966] rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Community</h3>
            <p className="text-sm text-gray-600">
              Join a network of passionate guides sharing best practices and tips
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Active Guides */}
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">12,000+</div>
            <div className="text-sm text-gray-600">Active Guides</div>
          </div>

          {/* Average Monthly Earnings */}
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">$2,500</div>
            <div className="text-sm text-gray-600">Avg Monthly Earnings</div>
          </div>

          {/* Average Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Registration takes just 10 minutes. Start earning and sharing your expertise today.
          </p>
        <Link href="/tourguideflowone">
          <button
            onClick={handleJoinAsGuide}
            className="bg-[#009966] hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Join as a Guide
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}