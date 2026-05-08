"use client"

import { useState } from 'react';
import { Search, MapPin, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Resort {
  id: number;
  name: string;
  location: string;
  contact: string;
  image: string;
  verified: boolean;
}

const resorts: Resort[] = [
  {
    id: 1,
    name: "Sunset Resort",
    location: "Nazimabad, Asadni, Dhaka",
    contact: "sunsetresortbangladesh.com",
    image: "/ResortDetail/hotelimage.png",
    verified: true
  },
  {
    id: 2,
    name: "Sunset Resort",
    location: "Nazimabad, Asadni, Dhaka",
    contact: "sunsetresortbangladesh.com",
    image: "/ResortDetail/hotelimage.png",
    verified: true
  },
  {
    id: 3,
    name: "Sunset Resort",
    location: "Nazimabad, Asadni, Dhaka",
    contact: "sunsetresortbangladesh.com",
    image: "/ResortDetail/hotelimage.png",
    verified: true
  },
  {
    id: 4,
    name: "Sunset Resort",
    location: "Nazimabad, Asadni, Dhaka",
    contact: "sunsetresortbangladesh.com",
    image: "/ResortDetail/hotelimage.png",
    verified: true
  },
  {
    id: 5,
    name: "Sunset Resort",
    location: "Nazimabad, Asadni, Dhaka",
    contact: "sunsetresortbangladesh.com",
    image: "/ResortDetail/hotelimage.png",
    verified: true
  }
];

const districts = [
  'Dhaka', 'Narayanganj', 'Gazipur', 'Tangail', 'Munshiganj', 
  'Manikganj', 'Kishoreganj', 'Narsingdi', 'Rajbari', 
  'Faridpur', 'Gopalganj', 'Madaripur', 'Shariatpur', 'Rajshahi'
];

export default function DiscoverBangladesh() {
  const [selectedDistrict, setSelectedDistrict] = useState('Dhaka');
  const [showDistrictMenu, setShowDistrictMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Mobile District Selector */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowDistrictMenu(!showDistrictMenu)}
            className="w-full bg-white rounded-lg shadow-sm p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">{selectedDistrict}</span>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${showDistrictMenu ? 'rotate-180' : ''}`} />
          </button>

          {/* Mobile District Dropdown */}
          {showDistrictMenu && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowDistrictMenu(false)}>
              <div className="bg-white rounded-t-2xl absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Select District</h3>
                  <button onClick={() => setShowDistrictMenu(false)}>
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="overflow-y-auto max-h-[calc(70vh-60px)] p-4">
                  <div className="space-y-2">
                    {districts.map((district) => (
                      <button
                        key={district}
                        onClick={() => {
                          setSelectedDistrict(district);
                          setShowDistrictMenu(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition ${
                          selectedDistrict === district
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {district}
                      </button>
                    ))}
                    <button className="w-full text-left px-4 py-3 text-blue-600 text-sm font-medium">
                      See all
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Sidebar - Districts (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">DISTRICTS</h3>
              <div className="space-y-1 max-h-[500px] overflow-y-auto">
                {districts.map((district) => (
                  <button
                    key={district}
                    onClick={() => setSelectedDistrict(district)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      selectedDistrict === district
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {district}
                  </button>
                ))}
                <button className="w-full text-left px-3 py-2 text-blue-600 text-sm font-medium">
                  See all
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Choose place from {selectedDistrict}&rsquo;s map
              </h2>
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96">
                <Image
                  src="/Plan-trip/map.png" 
                  alt="Dhaka Map" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center text-gray-400 absolute inset-0 bg-gray-100">
                  <div className="text-center px-4">
                    <MapPin className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2" />
                    <p className="text-sm sm:text-base">Map of {selectedDistrict} will be displayed here</p>
                    <p className="text-xs sm:text-sm mt-1">Add your map image: /public/Plan-trip/map.png</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurant and Resorts Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Restaurant and Resorts</h2>
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>

              {/* Resort List */}
              <div className="space-y-3 sm:space-y-4">
                {resorts.map((resort) => (
                  <div key={resort.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={resort.image}
                        alt={resort.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500">
                        <span className="text-white text-xs font-bold">SUNSET</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full sm:w-auto">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{resort.name}</h3>
                        {resort.verified && (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">{resort.location}</p>
                      <p className="text-xs text-gray-500">{resort.contact}</p>
                    </div>

                    <Link href={`/Resort-Detail/${resort.id}`}>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-green-700 transition w-full sm:w-auto whitespace-nowrap">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t">
                <span className="text-xs sm:text-sm text-gray-600">Showing 1 out of 200</span>
                <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
                  <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded">Previous</button>
                  <button className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 text-white rounded text-xs sm:text-sm font-medium">1</button>
                  <button className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600 hover:bg-gray-100 rounded text-xs sm:text-sm">2</button>
                  <button className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600 hover:bg-gray-100 rounded text-xs sm:text-sm">3</button>
                  <span className="text-gray-400 text-xs sm:text-sm">...</span>
                  <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded">Next</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - About Dhaka */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/Plan-trip/dhaka.png" 
                    alt="Dhaka" 
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-green-400 to-blue-500"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">{selectedDistrict}</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Dhaka, the vibrant capital of Bangladesh, is a city of contrasts where ancient traditions meet modern aspirations. 
                Known for its rich history, colorful festivals, and bustling markets, Dhaka offers an immersive cultural experience 
                that captivates both locals and travelers alike.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Dhaka is not just about its historic monuments and vibrant culture. The city is also a hub for commerce, 
                education, and innovation, making it a dynamic place where the past and future coexist harmoniously.
              </p>

              <div className="flex flex-col sm:grid sm:grid-cols-3 items-start sm:items-center gap-3 sm:gap-4 lg:gap-10 mt-4 sm:mt-6">
                <span className="text-xs sm:text-sm text-gray-500">Contributed by</span>
                <div className="flex -space-x-2 sm:-space-x-3 relative">
                  <Image
                    src="/Plan-trip/Ellipse 1.png" 
                    alt="Contributor 1"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white relative z-40"
                  />
                  <Image
                    src="/Plan-trip/Ellipse 5.png" 
                    alt="Contributor 2"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white relative z-30"
                  />
                  <Image
                    src="/Plan-trip/Ellipse 3.png" 
                    alt="Contributor 3"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white relative z-20"
                  />
                  <Image
                    src="/Plan-trip/Ellipse 7.png" 
                    alt="Contributor 4"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white relative z-10"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-medium">+200 Contributors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}