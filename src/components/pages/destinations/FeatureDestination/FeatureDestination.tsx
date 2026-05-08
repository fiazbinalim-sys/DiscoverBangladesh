import React from 'react';
import Image from 'next/image'; // Required for images
import { MapPin, Users, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Cox's Bazar",
      description: "Known for the world's longest natural sea beach, swimming in turquoise waters, Experience stunning sunsets, fresh seafood, and coral formations.",
      image: "/destination/sea.png",
      attractions: 15,
      visitors: "50K+ visitors",
      rating: 4.8,
      badge: null
    },
    {
      id: 2,
      name: "Sylhet",
      description: "Famous for its rolling tea gardens, spiritual sites, and natural beauty. Visit Ratargul Swamp Forest and Jaflong for breathtaking views.",
      image: "/destination/tea.png",
      attractions: 12,
      visitors: "35K+ visitors",
      rating: 4.7,
      badge: null
    },
    {
      id: 3,
      name: "Dhaka",
      description: "The vibrant capital city blending ancient heritage with modern life. Experience Lalbagh Fort, Ahsan Manzil, and bustling street food.",
      image: "/destination/dhaka.png",        // make sure this file exists
      attractions: 20,
      visitors: "80K+ visitors",
      rating: 4.5,
    //   badge: { text: "Capital", color: "bg-yellow-500" }
    },
    {
      id: 4,
      name: "Sundarbans",
      description: "The largest mangrove forest and UNESCO World Heritage Site. Home to Bengal tigers, diverse wildlife, and serene boat excursions.",
      image: "/destination/boat.png",    // make sure this file exists
      attractions: 8,
      visitors: "25K+ visitors",
      rating: 4.9,
    //   badge: { text: "Wildlife", color: "bg-yellow-500" }
    },
    {
      id: 5,
      name: "Rangamati",
      description: "A picturesque hill district with panoramic lakes, tribal culture, and hanging bridges. Perfect for peaceful retreat into nature.",
      image: "/destination/rangamati.png",
      attractions: 10,
      visitors: "20K+ visitors",
      rating: 4.6,
    //   badge: { text: "Peaceful", color: "bg-yellow-500" }
    },
    {
      id: 6,
      name: "Chittagong",
      description: "Bangladesh's port city offering a unique blend of beaches, hills, and history. Visit Patenga Beach and Foy's Lake.",
      image: "/destination/chitagong.png",
      attractions: 14,
      visitors: "1.8M+ visitors",
      rating: 4.6,
    //   badge: { text: "Beach", color: "bg-yellow-500" }
    }
  ];

  const nearbyAttractions = [
    "Pawn Beach",
    "Inani/Unal National Park",
    "Maheshkhali Island",
    "Ramu Wildlife Sanctuary"
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York",
      rating: 5,
      comment: "Absolutely breathtaking. The beaches are pristine and the food is incredibly affordable."
    },
    {
      id: 2,
      name: "Ahmad Rahman",
      location: "Dhaka",
      rating: 5,
      comment: "Perfect place to relax and reset. My garden can't because."
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Singapore",
      rating: 4,
      comment: "Rich culture and history everywhere you look. Dhaka is full of surprises."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Featured Destinations</h1>
          <p className="text-sm text-gray-600">Explore our curated selection of must-visit districts</p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-md  hover:shadow-2xl transition-all  duration-500 group">
              {/* Image - Fixed with next/image */}
              <div className="relative h-72">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={destination.id <= 2}   // faster loading for first two cards
                />
                {/* {destination.badge && (
                  <div className={`absolute top-3 right-3 ${destination.badge.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md`}>
                    {destination.badge.text}
                  </div>
                )} */}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{destination.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.attractions} attractions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{destination.visitors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{destination.rating}</span>
                  </div>
                </div>

                {/* Button */}
               <Link href={`/Destination-details/${destination.id}`}>
                <button className="w-full bg-teal-700 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors flex items-center justify-center gap-2">
                  Explore More
                  <span>→</span>
                </button>
               </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Nearby Attractions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Nearby Attractions</h2>
            <p className="text-sm text-gray-600 mb-6">Discover more nearby places that track additional destinations</p>
            <div className="space-y-3">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{attraction}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Reviews */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">User Reviews</h2>
            <div className="space-y-5">
              {reviews.map((review) => (
                <div key={review.id} className="pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}