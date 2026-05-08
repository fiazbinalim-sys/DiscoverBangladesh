import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";

// Array of customer avatars
const customerAvatars = [
  "/Offer/Ellipse 1.png",
  "/Offer/Ellipse 2.png",
  "/Offer/Ellipse 3.png",
  "/Offer/Ellipse 4.png",
  "/Offer/Ellipse 5.png",
];

export default function CountDown() {
  const [counts] = useState({
    peoples: 1200,
    services: 4,
    cuisines: 50,
  });

  const formatCount = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <div className="bg-green-50 border border-green-600 rounded-2xl shadow-lg p-8 lg:p-12">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Stat 1 - Customers */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
            <CountUp
              className="text-5xl lg:text-6xl font-bold"
              end={counts.peoples}
              duration={5}
              formattingFn={(value) => formatCount(value)}
            />
          </div>

          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
            {/* Customer Avatars */}
            <div className="flex -space-x-3">
              {customerAvatars.map((avatar, index) => (
                <div
                  key={index}
                  className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image
                    src={avatar}
                    alt={`Customer ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-green-200 flex items-center justify-center text-sm font-semibold text-gray-600">
                +
              </div>
            </div>
          </div>
        </div>

        {/* Stat 2 - Years of Service */}
        <div className="text-center md:text-left border-l-0 md:border-l-2 border-green-600 md:pl-12">
          <CountUp
            className="text-5xl lg:text-6xl font-bold"
            end={counts.services}
            duration={5}
          />
          <span className="text-5xl lg:text-6xl font-bold">+</span>

          <p className="text-gray-600 font-medium">
            Years of
            <br />
            Services
          </p>
        </div>

        {/* Stat 3 - Local Cuisines */}
        <div className="text-center md:text-left border-l-0 md:border-l-2 border-green-600 md:pl-12">
          <CountUp
            className="text-5xl lg:text-6xl font-bold"
            end={counts.cuisines}
            duration={5}
          />
          <span className="text-5xl lg:text-6xl font-bold">+</span>

          <p className="text-gray-600 font-medium">Local Cuisines</p>
        </div>
      </div>
    </div>
  );
}
