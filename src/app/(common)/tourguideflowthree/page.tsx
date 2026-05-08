"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft,
  ArrowRight,
//   Building2,
//   UtensilsCrossed,
//   Mountain,
//   Users,
//   Camera,
//   Bike,
//   Leaf,
//   ShoppingBag,
//   Moon,
//   Sparkles,
  Calendar,
  DollarSign,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function GuideServices() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [pricing, setPricing] = useState({
    hourlyRate: '',
    dailyRate: ''
  });

  const serviceTypes = [
    { id: 'city-tours', name: 'City Tours', icon: '🏙️' },
    { id: 'food-tours', name: 'Food Tours', icon: '🍴' },
    { id: 'hiking', name: 'Hiking & Trekking', icon: '🥾' },
    { id: 'cultural', name: 'Cultural Experiences', icon: '🎭' },
    { id: 'photography', name: 'Photography Tours', icon: '📸' },
    { id: 'adventure', name: 'Adventure Sports', icon: '🏄' },
    { id: 'wildlife', name: 'Wildlife & Nature', icon: '🦁' },
    { id: 'shopping', name: 'Shopping Tours', icon: '🛍️' },
    { id: 'nightlife', name: 'Nightlife Tours', icon: '🌃' },
    { id: 'custom', name: 'Custom Experiences', icon: '✨' }
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handlePricingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPricing(prev => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    console.log('Back clicked');
    router.back();
  };

  const handleContinue = () => {
    console.log('Services:', selectedServices);
    console.log('Days:', selectedDays);
    console.log('Pricing:', pricing);
    router.push('/guide/complete');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">What Services Do You Offer?</h1>
        <p className="text-gray-600 text-sm mb-8">
          Select the types of experiences you`&apos;ll provide and set your availability.
        </p>

        {/* Service Types */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Service Types</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {serviceTypes.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  selectedServices.includes(service.id)
                    ? 'border-teal-600 bg-teal-50'
                    : 'border-gray-200 bg-white hover:border-teal-300'
                }`}
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <div className="text-xs font-medium text-gray-700">{service.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Weekly Availability */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-teal-600" />
            <h2 className="text-base font-semibold text-gray-900">Weekly Availability</h2>
          </div>
          <div className="grid grid-cols-7 gap-3 mb-3">
            {weekDays.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  selectedDays.includes(day)
                    ? 'border-teal-600 bg-teal-600 text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-teal-300'
                }`}
              >
                <div className="text-sm font-medium">{day}</div>
                <div className="w-6 h-6 rounded-full border-2 mx-auto mt-2 ${
                  selectedDays.includes(day) ? 'border-white bg-white' : 'border-gray-300'
                }"></div>
              </button>
            ))}
          </div>
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>You can set specific hours for each day after registration</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-teal-600" />
            <h2 className="text-base font-semibold text-gray-900">Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hourly Rate */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Hourly Rate
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  name="hourlyRate"
                  value={pricing.hourlyRate}
                  onChange={handlePricingChange}
                  placeholder="50"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Recommended: $40-$80/hour</p>
            </div>

            {/* Daily Rate */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Daily Rate
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  name="dailyRate"
                  value={pricing.dailyRate}
                  onChange={handlePricingChange}
                  placeholder="300"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Recommended: $250-$500/day</p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              Platform fee: 15% per booking. You`&apos;ll receive 85% of your listed rate.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleBack}
            className="px-6 py-3 border-2 border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <Link href="/tourguideflowfour">
          <button
            onClick={handleContinue}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}