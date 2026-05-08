// components/HeroSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import CountDown from '../CountDown/CountDown';

export default function Offer() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  // Array of customer avatars

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif mb-8 leading-tight">
              Experience Bangladesh — for{' '}
              <span className="text-green-300">Nature, Culture</span>
              <br />
              and <span className="text-green-300">Heritage</span> Meet.
            </h1>
            <button className="bg-white border border-[#009966] text-[#009966] px-8 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium">
              Learn More
            </button>
          </div>

          {/* Right Side - Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {!isVideoPlaying ? (
                <div className="relative">
                  <Image
                    src="/hero-video-thumbnail.jpg"
                    alt=""
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <button
                    onClick={handleVideoClick}
                    className="absolute inset-0 flex items-center justify-center bg-green-500/20 transition-colors group"
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-gray-800 ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>
              ) : (
                <video
                  src="/Home/Discover-Bangladesh1.mp4"
                  controls
                  autoPlay
                  className="w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                {/* <p className="text-sm font-medium whitespace-nowrap">
                  Watch a Video about us
                </p> */}
              </div>
            </div>

            {/* Discount Sticker */}
            <div className="absolute -top-8 -left-8 w-32 h-32 lg:w-40 lg:h-40">
              <Image
                src="/Offer/sticker.png"
                alt="Up to 25% off"
                width={160}
                height={160}
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
    <div>
        <CountDown />
    </div>
      </div>
    </section>
  );
}