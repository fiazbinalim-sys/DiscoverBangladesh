import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Package() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/package/package1.png"
          alt="Hill Paradise Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block bg-teal-600 text-xs px-3 py-1 rounded mb-3">
              FEATURED
            </div>
            <h1 className="text-4xl font-bold mb-2">
              Hill Paradise - Bandarban & Rangamati
            </h1>
            <p className="text-sm mb-4">Discover the mountains and lakes</p>
            <div className="flex gap-6 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                3 Days / 2 Nights
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Moderate
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Next: October to February
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Journey through Bangladesh&apos;s most scenic hill stations. Experience majestic mountains, serene lakes, indigenous culture, and panoramic valley views.
              </p>

              {/* Tour Highlights */}
              <h3 className="text-xl font-semibold mb-4">Tour Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Visit Nilgiri hills for cloud views</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Boat tour in Kaptai Lake</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Explore tribal villages</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Golden Temple visit</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Hanging Bridge experience</span>
                </div>
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Day-by-Day Itinerary</h2>

              {/* Day 1 */}
              <div className="mb-6 border-l-4 border-teal-600 bg-white p-6 rounded-r shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">Bandarban Arrival & Nilgiri</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm ml-11">
                  <li>• Early morning departure from Dhaka</li>
                  <li>• Arrive in Bandarban</li>
                  <li>• Check-in at resort</li>
                  <li>• Lunch at resort</li>
                  <li>• Visit Nilgiri hills</li>
                  <li>• Cloud view and photography</li>
                  <li>• Return to resort</li>
                  <li>• Bonfire dinner</li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="mb-6 border-l-4 border-teal-600 bg-white p-6 rounded-r shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">Temple & Rangamati Transfer</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm ml-11">
                  <li>• Breakfast at resort</li>
                  <li>• Visit Golden Temple (Buddha Dhatu Jadi)</li>
                  <li>• Explore Bhudu village (optional)</li>
                  <li>• Lunch at Rangamati town</li>
                  <li>• Transfer to Rangamati</li>
                  <li>• Check-in at hotel</li>
                  <li>• Visit Hanging Bridge (Parjatan Hanging Bridge)</li>
                  <li>• Dinner at hotel</li>
                </ul>
              </div>

              {/* Day 3 */}
              <div className="mb-6 border-l-4 border-teal-600 bg-white p-6 rounded-r shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">Kaptai Lake & Return</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm ml-11">
                  <li>• Early breakfast</li>
                  <li>• Boat tour in Kaptai Lake</li>
                  <li>• Visit Shuvolong waterfall</li>
                  <li>• Tribal village visit</li>
                  <li>• Lunch at Rangamati</li>
                  <li>• Visit Rajban Vihara</li>
                  <li>• Departure to Dhaka</li>
                  <li>• Arrive Dhaka (late evening)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              {/* Pricing */}
              <div className="mb-6">
                <h3 className="text-sm text-gray-600 mb-1">Starting from</h3>
                <div className="text-3xl font-bold text-gray-900">
                  ৳10,000 <span className="text-lg text-gray-600">- ৳12,000</span>
                </div>
                <p className="text-sm text-gray-600">Per person</p>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>3 Days / 2 Nights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Min 2 persons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Moderate difficulty</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Best: October to February</span>
                </div>
              </div>

             <Link href="/packagedetail">
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg mb-3 transition-colors">
                Book This Package
              </button>
             </Link>
              <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg mb-6 transition-colors">
                Contact Us for Custom Trip
              </button>

              <div className="text-center text-sm text-gray-600 mb-6">
                Need help? Call us at<br />
                <span className="font-semibold text-gray-900">+880 1234-567890</span>
              </div>

              {/* What's Included */}
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">What&apos;s Included & Excluded</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Inclusions</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AC transportation throughout</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 nights accommodation (3/4 variations)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Daily breakfast and dinner</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Boat ride in Kaptai Lake</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All entrance fees and permits</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Experienced guide</span>
                  </div>
                </div>

                <div className="space-y-2 border-t pt-4">
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="font-medium">Exclusions</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Lunch meals</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Personal shopping</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Additional boat rides</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Photography fees at some sites</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Travel insurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}