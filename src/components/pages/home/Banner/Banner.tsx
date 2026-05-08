"use client";
import { Typewriter } from "react-simple-typewriter";
import { MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Home/Discover-Bangladesh1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="customContainer mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Heading with Typewriter */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              DISCOVER THE BEAUTY
              <br />
              OF
              <span className="inline-block ml-3">
                <Typewriter
                  words={['BANGLADESH']}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore destinations, find local guides, and plan your perfect
              <br />
              journey across 64 districts.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/destination">
                <button className="group flex items-center gap-2 bg-transparent text-white font-medium px-8 py-3 rounded-lg border-2 border-white transition-all duration-300 cursor-pointer hover:scale-105 transform hover:border-[#10B981]">
                  <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300">
                    Explore Destinations
                  </span>
                </button>
              </Link>
              <Link href="/Plan-Trip">
                <button className="group flex items-center gap-2 bg-transparent text-white font-medium px-8 py-3 rounded-lg border-2 border-white transition-all duration-300 cursor-pointer hover:scale-105 transform hover:border-[#10B981]">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300">
                    Plan Your Trip
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}