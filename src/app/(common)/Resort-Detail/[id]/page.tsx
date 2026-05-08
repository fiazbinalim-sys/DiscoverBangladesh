"use client";

import { ChevronLeft, ChevronRight, MapPin, Star, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Fake JSON data
const resortData = {
  name: "Sunset Resort",
  verified: true,
  location: "Manuriabad, Ashulia, Dhaka",
  website: "www.sunsetresort.com",
  heroImage: "/resort-hero.jpg",
  roomImage: "/resort-room.jpg",
  about:
    "Sunset Resort is one of the oldest resorts in the area. Our mission is to provide high quality services and hospitality which our guests surely enjoy. Our resort is designed and built by world-class architects in such a way that we can provide high-quality modern amenities. One of the best things we have is a really dedicated and hard-working team who ensures seamless hospitality ensuring you only do one thing, which is to party or relax at your own pace. Whether you are only a day visitor or you are staying for days, we'll make sure that your experience is world-class, providing to our highest standard.",
  rating: 4.5,
  totalReviews: 128,
  mapImage: "/resort-map.jpg",
};

const visitorsComments = [
  {
    id: 1,
    name: "Asad Latif",
    avatar: "/avatar1.jpg",
    date: "3 days ago",
    rating: 5,
    comment:
      "The staff was really friendly and helpful. The resort has great facilities for kids. The staff was knowledgeable and helpful throughout the whole process.",
  },
  {
    id: 2,
    name: "Sophia Clark",
    avatar: "/avatar2.jpg",
    date: "5 days ago",
    rating: 5,
    comment:
      "The resort service was a great selection of cars. The staff was knowledgeable and helpful throughout the whole process.",
  },
  {
    id: 3,
    name: "Emma Johnson",
    avatar: "/avatar3.jpg",
    date: "1 week ago",
    rating: 4,
    comment:
      "The resort service was a great selection of cars. The staff was knowledgeable and helpful throughout the whole process.",
  },
  {
    id: 4,
    name: "Sophia Clark",
    avatar: "/avatar4.jpg",
    date: "2 weeks ago",
    rating: 5,
    comment:
      "The resort service was a great selection of cars. The staff was knowledgeable and helpful throughout the whole process.",
  },
];

const nearbyResorts = [
  {
    id: 1,
    name: "Sunset Resort",
    verified: true,
    location: "Manuriabad, Ashulia, Dhaka",
    rating: 4.5,
    logo: "/ResortDetail/hotelimage.png",
    website: "www.sunsetresort.com",
  },
  {
    id: 2,
    name: "Sunset Resort",
    verified: true,
    location: "Manuriabad, Ashulia, Dhaka",
    rating: 4.5,
    logo: "/ResortDetail/hotelimage.png",
    website: "www.sunsetresort.com",
  },
  {
    id: 3,
    name: "Sunset Resort",
    verified: true,
    location: "Manuriabad, Ashulia, Dhaka",
    rating: 4.5,
    logo: "/ResortDetail/hotelimage.png",
    website: "www.sunsetresort.com",
  },
  {
    id: 4,
    name: "Sunset Resort",
    verified: true,
    location: "Manuriabad, Ashulia, Dhaka",
    rating: 4.5,
    logo: "/ResortDetail/hotelimage.png",
    website: "www.sunsetresort.com",
  },
];

const SunsetResortPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [readMore, setReadMore] = useState(false);
  const [showNearbyResorts, setShowNearbyResorts] = useState(false);
  const totalPages = 4;

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const Avatar = ({ name }: { name: string }) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    const color = colors[name.length % colors.length];

    return (
      <div
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${color} flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0`}
      >
        {initials}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <Image
          src="/ResortDetail/resortbanner.png"
          alt="Resort Hero"
          height={1200}
          width={1200}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="300"%3E%3Crect fill="%23e5e7eb" width="1200" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" text-anchor="middle" fill="%239ca3af" dy=".3em"%3EResort Pool%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      {/* Mobile Nearby Resorts Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowNearbyResorts(!showNearbyResorts)}
          className="bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors"
        >
          {showNearbyResorts ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nearby Resorts Overlay */}
      {showNearbyResorts && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowNearbyResorts(false)}>
          <div className="bg-white rounded-t-2xl absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-lg font-bold text-gray-900">Nearby Resorts</h2>
              <button onClick={() => setShowNearbyResorts(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(80vh-60px)] p-4">
              <div className="space-y-4">
                {nearbyResorts.map((resort) => (
                  <div
                    key={resort.id}
                    className="flex gap-3 pb-4 border-b last:border-0"
                  >
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={resort.logo}
                        alt={resort.name}
                        height={56}
                        width={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">
                          {resort.name}
                        </h3>
                        {resort.verified && (
                          <svg
                            className="w-4 h-4 text-blue-500 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-2 truncate">
                        {resort.location}
                      </p>
                      <a
                        href={`https://${resort.website}`}
                        className="text-xs text-teal-600 hover:underline truncate block"
                      >
                        {resort.website}
                      </a>
                      <button className="mt-3 w-full px-4 py-2 bg-teal-500 text-white text-xs font-medium rounded hover:bg-teal-600 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Header Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 -mt-8 sm:-mt-12 lg:-mt-16 relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/ResortDetail/hotelimage.png"
                    alt="Sunset Resort Logo"
                    height={96}
                    width={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 w-full sm:w-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {resortData.name}
                    </h1>
                    {resortData.verified && (
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 mb-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{resortData.location}</span>
                  </div>
                  <a
                    href={`https://${resortData.website}`}
                    className="text-xs sm:text-sm text-teal-600 hover:underline truncate block"
                  >
                    {resortData.website}
                  </a>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    About Sunset Resort
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {readMore ? (
                      resortData.about
                    ) : (
                      <>
                        {resortData.about.substring(0, 280)}
                        <span
                          onClick={() => setReadMore(true)}
                          className="text-teal-600 font-semibold cursor-pointer hover:underline ml-1"
                        >
                          ...Read more
                        </span>
                      </>
                    )}
                  </p>
                  {readMore && (
                    <span
                      onClick={() => setReadMore(false)}
                      className="text-teal-600 font-semibold cursor-pointer hover:underline text-xs sm:text-sm inline-block mt-1"
                    >
                      Read less
                    </span>
                  )}
                </div>
                <div className="w-full lg:w-64 h-40 sm:h-48 flex-shrink-0">
                  <Image
                    src="/ResortDetail/hotelInterior.png"
                    alt="Resort Room"
                    height={192}
                    width={256}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="256" height="192"%3E%3Crect fill="%23fed7aa" width="256" height="192"/%3E%3Crect fill="%23fb923c" x="60" y="40" width="136" height="80" rx="4"/%3E%3Ccircle cx="128" cy="80" r="20" fill="%23fef3c7"/%3E%3Ctext x="50%25" y="160" font-size="12" text-anchor="middle" fill="%239ca3af"%3EResort Interior%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Location
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Conveniently located in Ashulia, Dhaka. Within easy reach you
                can explore Savar, Uttara and Mirpur.
              </p>
              <div className="w-full h-48 sm:h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/Plan-trip/map.png"
                  alt="Resort Location Map"
                  height={400}
                  width={800}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23dcfce7" width="800" height="400"/%3E%3Cpath d="M 100 100 Q 200 150 300 100 T 500 100" stroke="%2393c5fd" stroke-width="4" fill="none"/%3E%3Ccircle cx="400" cy="200" r="8" fill="%23ef4444"/%3E%3Ctext x="400" y="230" font-size="14" text-anchor="middle" fill="%23374151"%3ESunset Resort%3C/text%3E%3Ctext x="50%25" y="95%25" font-size="12" text-anchor="middle" fill="%239ca3af"%3EMap View%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>

            {/* Visitor's Comments */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Visitor&apos;s Comments
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {visitorsComments.map((comment) => (
                  <div key={comment.id} className="flex gap-3 sm:gap-4">
                    <Avatar name={comment.name} />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {comment.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {comment.date}
                        </span>
                      </div>
                      <StarRating rating={comment.rating} />
                      <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t">
                <button className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">
                  Showing
                </button>
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className="p-1 hover:bg-gray-100 rounded"
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </button>

                  <div className="flex gap-1">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded text-xs sm:text-sm ${
                          currentPage === i + 1
                            ? "bg-teal-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <span className="text-xs sm:text-sm text-gray-600 mx-1 sm:mx-2">
                    of {totalPages}
                  </span>

                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    className="p-1 hover:bg-gray-100 rounded"
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Nearby Resorts (Desktop Only) */}
          <div className="hidden lg:block lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Nearby Resorts
              </h2>
              <div className="space-y-4">
                {nearbyResorts.map((resort) => (
                  <div
                    key={resort.id}
                    className="flex gap-3 pb-4 border-b last:border-0"
                  >
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={resort.logo}
                        alt={resort.name}
                        height={56}
                        width={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">
                          {resort.name}
                        </h3>
                        {resort.verified && (
                          <svg
                            className="w-4 h-4 text-blue-500 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-2 truncate">
                        {resort.location}
                      </p>
                      <a
                        href={`https://${resort.website}`}
                        className="text-xs text-teal-600 hover:underline truncate block"
                      >
                        {resort.website}
                      </a>
                      <button className="mt-3 w-full px-4 py-2 bg-teal-500 text-white text-xs font-medium rounded hover:bg-teal-600 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunsetResortPage;