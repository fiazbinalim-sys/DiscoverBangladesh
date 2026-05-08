"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Eye,
  Calendar,
  DollarSign,
  Star,
  Settings,
  TrendingUp,
  CalendarCheck,
  DollarSignIcon,
  Lightbulb,
  Edit,
  Users
} from 'lucide-react';

export default function PartnerDashboard() {
  const router = useRouter();

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
    router.push('/partner/edit-profile');
  };

  const handleSettings = () => {
    console.log('Settings clicked');
    router.push('/partner/settings');
  };

  const handleContactSupport = () => {
    console.log('Contact support clicked');
    router.push('/support');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Total Views */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Total Views</span>
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">0</div>
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 mr-1 text-[#00C950]" />
              N/A
            </div>
          </div>

          {/* Bookings */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Bookings</span>
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white " />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">0</div>
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 mr-1 text-[#00C950]" />
              N/A
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Revenue</span>
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">৳0</div>
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 mr-1 text-[#00C950]" />
              N/A
            </div>
          </div>

          {/* Rating */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Rating</span>
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">N/A</div>
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 mr-1 text-[#00C950]" />
              N/A
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Property Listing & Recent Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Listing Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Property Listing</h2>
                <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                  Edit
                </button>
              </div>

              {/* Property Image */}
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/package/partnerflowfive.png"
                  alt="Sunrise Resort"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Property Info */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sunrise Resort</h3>
              <p className="text-sm text-gray-600 mb-4">
                Your property listing is ready and will go live once approved by our team.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleEditProfile}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
                <button
                  onClick={handleSettings}
                  className="px-4 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
              
              {/* Empty State */}
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  <Users className="w-16 h-16 text-gray-300" />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">No activity yet</h3>
                <p className="text-sm text-gray-500">
                  Activity will appear here once your listing is approved
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Pro Tips */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Update Property Details</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                  <CalendarCheck className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Manage Availability</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                  <DollarSignIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Update Pricing</span>
                </button>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-teal-600 rounded-lg shadow-sm p-6 text-white">
              <h2 className="text-lg font-semibold mb-3">Need Help?</h2>
              <p className="text-sm text-white/90 mb-4">
                Our support team is available 24/7 to assist you
              </p>
              <button
                onClick={handleContactSupport}
                className="w-full bg-white hover:bg-gray-50 text-teal-600 font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                Contact Support
              </button>
            </div>

            {/* Pro Tips Card */}
            <div className="bg-[#BEDBFF] rounded-lg shadow-sm p-6 ">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <h2 className="text-lg font-semibold text-gray-900">Pro Tips</h2>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-teal-600 mt-0.5">•</span>
                  <span>Add high-quality images to attract bookings</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-teal-600 mt-0.5">•</span>
                  <span>Keep your availability calendar updated</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-teal-600 mt-0.5">•</span>
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