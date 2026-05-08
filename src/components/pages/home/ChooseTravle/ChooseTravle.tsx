import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ChooseTravel() {
  const agents = [
    {
      id: 1, // Numeric ID
      name: 'Faiyaz Alim',
      image: '/Home/faiyaz1.jpeg',
      position: 'top-left'
    },
    {
      id: 2, // Numeric ID
      name: 'Puja Acharjee',
      image: '/Home/puja1.jpeg',
      position: 'top-right'
    },
    {
      id: 3, // Numeric ID
      name: 'Arpa Mitra',
      image: '/Home/arpa.jpeg',
      position: 'bottom-left'
    },
    {
      id: 4, // Numeric ID
      name: 'Muhaiminul Islam',
      image: '/Home/muhaiminul2.jpeg',
      position: 'bottom-right'
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container with Center Text */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Map through agents array */}
          {agents.map((agent) => (
            <div 
              key={agent.id}
              id={`agent-${agent.id}`} // ID with numeric value
              className="relative group overflow-hidden rounded-3xl h-72 md:h-80"
            >
              {/* Background Image */}
              <Image
                src={agent.image}
                alt={`Travel Agent ${agent.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Agent Name and Info */}
             <Link href={`/GuidProfileDetails/${agent.id}`}>
              <div className="absolute bottom-6 left-56 z-10">
                <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-5 py-2.5 rounded-lg font-medium shadow-lg transition-all duration-300 group-hover:shadow-xl hover:scale-105">
                  Travel with {agent.name}
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                </button>
              </div>
             </Link>
            </div>
          ))}

          {/* Center Text Overlay */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none bg-white bg-opacity-100 rounded-3xl">
            <div className=" px-12 py-10 text-center ">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-teal-600 block">Choose</span>
                <span className="text-teal-600 block">Your</span>
                <span className="text-gray-700 block">Travel</span>
                <span className="text-teal-600 block">Agent</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile Title */}
        <div className="block md:hidden text-center mt-8 mb-4">
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-teal-600">Choose Your</span>
            <br />
            <span className="text-gray-700">Travel</span>{' '}
            <span className="text-teal-600">Agent</span>
          </h2>
        </div>
      </div>
    </div>
  );
}