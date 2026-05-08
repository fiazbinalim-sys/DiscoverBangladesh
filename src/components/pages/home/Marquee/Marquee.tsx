import { Sparkles } from 'lucide-react';

export default function MarqueeComponent() {
  const marqueeText = "Explore the Sundarbans Mangrove Forest • Visit the World's Longest Sea Beach in Cox's Bazar • Discover Ancient Archaeological Sites • Experience Rich Bengali Culture • Taste Authentic Bangladeshi Cuisine • Cruise the Mighty Rivers • Witness Traditional Handicrafts • Enjoy Vibrant Festivals • Trek Through Hill Tracts • Explore the Capital City Dhaka";

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-500 to-green-600 py-4 ">
      <div className="flex items-center">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          <Sparkles className="w-5 h-5 text-yellow-300 mx-3 flex-shrink-0" />
          <span className="text-white font-medium text-lg">{marqueeText}</span>
          <Sparkles className="w-5 h-5 text-yellow-300 mx-3 flex-shrink-0" />
          <span className="text-white font-medium text-lg">{marqueeText}</span>
          <Sparkles className="w-5 h-5 text-yellow-300 mx-3 flex-shrink-0" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}