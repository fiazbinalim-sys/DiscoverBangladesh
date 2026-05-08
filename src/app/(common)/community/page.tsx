"use client";

import {
  ArrowRight,
  Facebook,
  Hash,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Tag,
  Twitter,
  Upload,
  Youtube,
} from "lucide-react";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component

export default function FollowJourneyPage() {
  const [email, setEmail] = useState("");

  const socialPlatforms = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@triplink",
      followers: "25M+",
      description:
        "Daily travel inspiration, guide stories, and behind-the-scenes highlights",
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      link: "#",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "TripLink",
      followers: "15M+",
      description: "Travel tips, updates, events, and community conversations",
      color: "bg-blue-600",
      link: "#",
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@triplink",
      followers: "8M+",
      description: "Get real-time tips, industry news, and quick highlights",
      color: "bg-sky-500",
      link: "#",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "TripLink",
      followers: "4M+",
      description: "Professional networking for guides and industry updates",
      color: "bg-blue-700",
      link: "#",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "TripLink TV",
      followers: "10M+",
      description:
        "Get in-depth guide tutorials, destination highlights, and documentaries",
      color: "bg-red-600",
      link: "#",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "Community Group",
      followers: "12K Members",
      description:
        "Join our WhatsApp community for real-time updates and discussions",
      color: "bg-green-500",
      link: "#",
    },
  ];

  const communityImages = [
    "/Home/sylhet.png",
    "/Home/bandarban.png",
    "/Home/sundarban.png",
    "/Home/rangamati.png",
    "/Home/dhaka.png",
    "/Home/cox-bazar.png",
    "/Home/bandarban.png",
    "/Home/sylhet.png",
  ];

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Follow Our Journey
          </h1>
          <p className="text-teal-100 text-lg mb-6">
            Join our community and share your travel experiences
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>250K+ Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>100+ Platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Daily Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Connect With Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Connect With Us
          </h2>
          <p className="text-gray-600">
            Choose your favorite platform and become part of our global
            community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Followers</div>
                    <div className="text-lg font-bold text-gray-800">
                      {platform.followers}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {platform.name}
                </h3>
                <p className="text-sm text-teal-600 mb-3">{platform.handle}</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {platform.description}
                </p>

                <a
                  href={platform.link}
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                >
                  Follow Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
              <Mail className="w-8 h-8 text-teal-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for exclusive travel tips, guide
              stories, and special offers
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Join 50,000+ travelers already in our list | Privacy Protected
            </p>
          </div>
        </div>
      </div>

      {/* Community Highlights Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Community Highlights
          </h2>
          <p className="text-gray-600">
            Real moments from our guides and travelers around the world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {communityImages.map((img, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Use Next.js Image Component */}
              <Image
                src={img}
                alt={`Community highlight ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay with Instagram icon */}
            
            </div>
          ))}
        </div>

        {/* Share Your Journey Section */}
        <div className="bg-teal-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Share Your Journey</h3>
          <p className="text-teal-100 mb-6">
            Tag us in your travel photos and stories
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button className="flex items-center gap-2 bg-white text-teal-700 px-5 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium">
              <Upload className="w-4 h-4" />
              Upload Photo
            </button>
            <button className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-5 py-2 rounded-full transition-colors text-sm font-medium">
              <Tag className="w-4 h-4" />
              TripLinkStories
            </button>
            <button className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-5 py-2 rounded-full transition-colors text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Add Location
            </button>
            <button className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-5 py-2 rounded-full transition-colors text-sm font-medium">
              <Hash className="w-4 h-4" />
              TravelWithExperts
            </button>
          </div>

          <p className="text-sm text-teal-100">
            Get featured on our social channels and inspire thousands of
            travelers worldwide!
          </p>
        </div>
      </div>
    </div>
  );
}