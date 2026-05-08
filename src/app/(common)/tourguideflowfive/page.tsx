"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Eye,
  Calendar,
  DollarSign,
  Star,
  TrendingUp,
  Users,
  Lightbulb
} from 'lucide-react';

export default function GuideDashboard() {
  const router = useRouter();

  const handleContactSupport = () => {
    console.log('Contact support clicked');
    router.push('/support');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Views */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600 font-medium">Total Views</span>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 mr-1 text-[#00C950]" />
              N/A
            </div>
          </div>

          {/* Bookings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600 font-medium">Bookings</span>
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 mr-1 text-[#00C950]" />
              N/A
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600 font-medium">Revenue</span>
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">৳0</div>
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 mr-1  text-[#00C950]" />
              N/A
            </div>
          </div>

          {/* Rating */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600 font-medium">Rating</span>
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">N/A</div>
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 mr-1 text-[#00C950]" />
              N/A
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
              
              {/* Empty State */}
              <div className="text-center py-16">
                <div className="flex justify-center mb-4">
                  <Users className="w-20 h-20 text-gray-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">No activity yet</h3>
                <p className="text-sm text-gray-500">
                  Activity will appear here once your listing is approved
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Need Help & Pro Tips */}
          <div className="lg:col-span-1 space-y-6">
            {/* Need Help Card */}
            <div className="bg-teal-600 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-lg font-semibold mb-3">Need Help?</h2>
              <p className="text-sm text-white/90 mb-5">
                Our support team is available 24/7 to assist you
              </p>
              <button
                onClick={handleContactSupport}
                className="w-full bg-white hover:bg-gray-50 text-teal-600 font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Contact Support
              </button>
            </div>

            {/* Pro Tips Card */}
            <div className="bg-[#BEDBFF] rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <h2 className="text-lg font-semibold text-gray-900">Pro Tips</h2>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Add high-quality images to attract bookings</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Keep your availability calendar updated</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Respond quickly to inquiries for better ratings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}