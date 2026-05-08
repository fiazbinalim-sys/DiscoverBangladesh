"use client";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Compass,
  DollarSign,
  Headphones,
  Map,
  Plane,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

export default function JoinPartner() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  const partnerTypes = [
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Hotels & Resorts",
      description:
        "List your hotel or resort property and reach thousands of travelers",
      features: ["Room listings", "Booking management", "Guest reviews"],
      link: "/partnerflowone",
      type: "hotel"
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-white" />,
      title: "Restaurants & Cafes",
      description: "Showcase your dining establishment to food enthusiasts",
      features: ["Menu showcase", "Table reservations", "Customer reviews"],
      link: "/partnerflowone",
      type: "restaurant"
    },
    {
      icon: <Plane className="w-6 h-6 text-white" />,
      title: "Travel Agencies",
      description: "Offer travel packages and tours to adventure seekers",
      features: ["Tour packages", "Itinerary planning", "Group bookings"],
      link: "/partnerflowone",
      type: "agency"
    },
    {
      icon: <Map className="w-6 h-6 text-white" />,
      title: "Tour Guides",
      description: "Provide guided tour services and local expertise",
      features: ["Profile showcase", "Tour scheduling", "Client feedback"],
      link: "/tourguidepartnerflowone",
      type: "guide"
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      title: "Grow Your Business",
      description: "Increase visibility and bookings",
    },
    {
      icon: <Compass className="w-5 h-5 text-white" />,
      title: "Get Discovered",
      description: "Reach more travelers",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-white" />,
      title: "Flexible Pricing",
      description: "Set your own rates",
    },
    {
      icon: <Headphones className="w-5 h-5 text-white" />,
      title: "24/7 Support",
      description: "We're here to help",
    },
  ];

  const handleCardClick = (partnerType: string, link: string) => {
    console.log(`Partner type selected: ${partnerType}`);
    console.log(`Navigating to: ${link}`);
    
    // You could also pass data via query params
    // router.push(`${link}?type=${partnerType}`);
    
    router.push(link);
  };

  return (
    <div className="min-h-screen bg-teal-700 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackToHome}
          className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-all duration-200 hover:gap-3 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join as a Partner
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Select your business type to get started. Connect with thousands of
            travelers across Bangladesh.
          </p>
        </div>

        {/* Partner Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {partnerTypes.map((partner, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(partner.type, partner.link)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer group hover:transform hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                  {partner.icon}
                </div>
                <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:transform group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {partner.title}
              </h3>

              <p className="text-white/80 mb-6">{partner.description}</p>

              <ul className="space-y-2">
                {partner.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-white/90 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer group hover:transform hover:-translate-y-1"
            >
              <div className="bg-white/20 p-2.5 rounded-lg w-fit mb-4 group-hover:bg-white/30 transition-colors">
                {benefit.icon}
              </div>
              <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}