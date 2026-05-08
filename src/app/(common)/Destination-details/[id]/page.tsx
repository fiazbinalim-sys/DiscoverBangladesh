"use client";

import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  Users,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

// All destinations data
const destinationsData = {
  "1": {
    hero: {
      title: "Cox's Bazar",
      location: "Chittagong",
      reviews: "50K+ reviews",
      rating: 4.8,
      tags: ["Beach", "Cultural"],
      image: "/destination/sea.png",
    },
    about: {
      title: "About Cox's Bazar",
      description:
        "Cox's Bazar is the longest natural sea beach in the world stretching over 120 kilometers of golden sandy shores. This seaside paradise offers breathtaking sunsets, fresh seafood delicacies, and a vibrant local culture. Visitors can enjoy water sports, explore nearby islands, visit Buddhist temples, and experience the unique blend of natural beauty and cultural richness that makes Cox's Bazar one of Bangladesh's most cherished destinations.",
    },
    gallery: {
      title: "Photo Gallery",
      images: [
        "/destinationDetails/sunset.png",
        "/destinationDetails/chair.jpg",
        "/destinationDetails/seabeach.jpg",
        "/destinationDetails/boat.jpg",
      ],
    },
    attractions: {
      title: "Nearby Attractions",
      subtitle: "Discover more amazing places near your selected destination",
      items: [
        { id: 1, name: "Inani Beach" },
        { id: 2, name: "Himchari National Park" },
        { id: 3, name: "Moheshkhali Island" },
        { id: 4, name: "Teknaf Wildlife Sanctuary" },
      ],
    },
    reviews: {
      title: "User Reviews",
      items: [
        {
          id: 1,
          name: "Sophia Clark",
          email: "sophiaclark003@gmail.com",
          rating: 5,
          date: "Local Expert",
          comment:
            "Absolutely breathtaking! The beaches and the sunrises/sunsets are incredible.",
        },
        {
          id: 2,
          name: "Raj Patel",
          rating: 5,
          date: "Local Expert",
          comment:
            "Beautiful vacation spot with plenty of activities. Don't miss the fresh seafood!",
        },
        {
          id: 3,
          name: "Hira Marup",
          rating: 4,
          date: "Cox's Bazar",
          comment:
            "Beautiful coastline with plenty of activities. Don't miss the fresh seafood!",
        },
      ],
    },
    resorts: {
      title: "Nearby Resorts",
      items: [
        {
          id: 1,
          name: "Sunset Resort",
          location: "Kolatoli, Cox's Bazar",
          address: "Motijharna, Kolatoli, Dhaka",
          website: "www.SunsetresortBd.com",
          verified: true,
        },
        {
          id: 2,
          name: "Ocean Paradise Hotel",
          location: "Marine Drive, Cox's Bazar",
          address: "Sea Beach Road, Cox's Bazar",
          website: "www.oceanparadise.com",
          verified: true,
        },
      ],
    },
  },
  "2": {
    hero: {
      title: "Sylhet",
      location: "Sylhet Division",
      reviews: "35K+ reviews",
      rating: 4.7,
      tags: ["Tea Gardens", "Nature"],
      image: "/destination/tea.png",
    },
    about: {
      title: "About Sylhet",
      description:
        "Famous for its rolling tea gardens, spiritual sites, and natural beauty. Sylhet is a region of tea plantations and rain forests in northeastern Bangladesh. The Lawachara National Park's trees shelter birds and hoolock gibbons. Visit Ratargul Swamp Forest and Jaflong for breathtaking views of crystal-clear waters and stone collections.",
    },
    gallery: {
      title: "Photo Gallery",
      images: [
        "/destinationDetails/teahill.jpg",
        "/destinationDetails/rocks.jpg",
        "/destinationDetails/Teaman.jpg",
        "/destinationDetails/garden.jpg",
      ],
    },
    attractions: {
      title: "Nearby Attractions",
      subtitle: "Discover more amazing places near your selected destination",
      items: [
        { id: 1, name: "Ratargul Swamp Forest" },
        { id: 2, name: "Jaflong" },
        { id: 3, name: "Lawachara National Park" },
        { id: 4, name: "Srimangal Tea Gardens" },
      ],
    },
    reviews: {
      title: "User Reviews",
      items: [
        {
          id: 1,
          name: "Karim Ahmed",
          email: "karim.ahmed@email.com",
          rating: 5,
          date: "Travel Enthusiast",
          comment:
            "The tea gardens are stunning! Perfect place for nature lovers and photographers.",
        },
        {
          id: 2,
          name: "Lisa Wong",
          rating: 5,
          date: "Nature Lover",
          comment:
            "Ratargul Swamp Forest is magical. The boat ride through the forest is unforgettable!",
        },
      ],
    },
    resorts: {
      title: "Nearby Resorts",
      items: [
        {
          id: 1,
          name: "Tea Resort & Museum",
          location: "Srimangal, Sylhet",
          address: "Sreemangal, Sylhet",
          website: "www.tearesort.com",
          verified: true,
        },
        {
          id: 2,
          name: "Grand Sylhet Hotel",
          location: "Zindabazar, Sylhet",
          address: "Mirabazar, Sylhet",
          website: "www.grandsylhet.com",
          verified: true,
        },
      ],
    },
  },
  "3": {
    hero: {
      title: "Dhaka",
      location: "Dhaka Division",
      reviews: "80K+ reviews",
      rating: 4.5,
      tags: ["Capital", "Heritage"],
      image: "/destination/dhaka.png",
    },
    about: {
      title: "About Dhaka",
      description:
        "The vibrant capital city blending ancient heritage with modern life. Experience Lalbagh Fort, Ahsan Manzil, and bustling street food. Dhaka is the economic, political, and cultural center of Bangladesh. The city has a rich history spanning over 400 years and offers a unique blend of old and new architectural marvels.",
    },
    gallery: {
      title: "Photo Gallery",
      images: [
        "/destination/dhaka.png",
        "/destinationDetails/ahsan-monjil.jpg",
        "/destinationDetails/sonarga.jpg",
        "/destinationDetails/lalbagh-fort.jpg",
      ],
    },
    attractions: {
      title: "Nearby Attractions",
      subtitle: "Discover more amazing places near your selected destination",
      items: [
        { id: 1, name: "Lalbagh Fort" },
        { id: 2, name: "Ahsan Manzil" },
        { id: 3, name: "Sadarghat River Port" },
        { id: 4, name: "National Museum" },
      ],
    },
    reviews: {
      title: "User Reviews",
      items: [
        {
          id: 1,
          name: "Michael Chen",
          email: "michael.chen@email.com",
          rating: 5,
          date: "History Buff",
          comment:
            "Rich cultural heritage everywhere! Lalbagh Fort is a must-visit historical site.",
        },
        {
          id: 2,
          name: "Fatima Khan",
          rating: 4,
          date: "Local Guide",
          comment:
            "The bustling streets and amazing street food make Dhaka truly unique!",
        },
      ],
    },
    resorts: {
      title: "Nearby Hotels",
      items: [
        {
          id: 1,
          name: "Pan Pacific Sonargaon",
          location: "Karwan Bazar, Dhaka",
          address: "107 Kazi Nazrul Islam Avenue",
          website: "www.panpacific.com",
          verified: true,
        },
      ],
    },
  },
  "4": {
    hero: {
      title: "Sundarbans",
      location: "Khulna Division",
      reviews: "25K+ reviews",
      rating: 4.9,
      tags: ["Wildlife", "UNESCO"],
      image: "/destination/boat.png",
    },
    about: {
      title: "About Sundarbans",
      description:
        "The largest mangrove forest and UNESCO World Heritage Site. Home to Bengal tigers, diverse wildlife, and serene boat excursions. The Sundarbans is a vast forest in the coastal region of the Bay of Bengal and one of the natural wonders of the world. It's famous for the Royal Bengal Tiger and diverse aquatic life.",
    },
    gallery: {
      title: "Photo Gallery",
      images: [
        "/destination/boat.png",
        "/destinationDetails/Sundarban_Tiger.jpg",
        "/destinationDetails/Sundarban-National-Park.jpg",
        "/destinationDetails/shundorban-river.jpg",
      ],
    },
    attractions: {
      title: "Nearby Attractions",
      subtitle: "Discover more amazing places near your selected destination",
      items: [
        { id: 1, name: "Katka Beach" },
        { id: 2, name: "Hiron Point" },
        { id: 3, name: "Dublar Char" },
        { id: 4, name: "Tin Kona Island" },
      ],
    },
    reviews: {
      title: "User Reviews",
      items: [
        {
          id: 1,
          name: "David Miller",
          email: "david.miller@email.com",
          rating: 5,
          date: "Wildlife Photographer",
          comment:
            "An incredible experience! Saw Royal Bengal Tigers and countless bird species.",
        },
      ],
    },
    resorts: {
      title: "Nearby Resorts",
      items: [
        {
          id: 1,
          name: "Sundarbans Tiger Camp",
          location: "Mongla, Khulna",
          address: "Sundarbans Reserve Forest",
          website: "www.sundarbantigercamp.com",
          verified: true,
        },
      ],
    },
  },
  "5": {
    hero: {
      title: "Rangamati",
      location: "Chittagong Hill Tracts",
      reviews: "20K+ reviews",
      rating: 4.6,
      tags: ["Peaceful", "Hills"],
      image: "/destination/rangamati.png",
    },
    about: {
      title: "About Rangamati",
      description:
        "A picturesque hill district with panoramic lakes, tribal culture, and hanging bridges. Perfect for peaceful retreat into nature. Rangamati is known for its scenic beauty, Kaptai Lake, and indigenous tribal culture. The region offers a tranquil escape with its lush green hills and serene waterways.",
    },
    gallery: {
      title: "Photo Gallery",
      images: [
        "/destinationDetails/Rangamati-Bandarban-Coxs-Ba.jpg",
        "/destinationDetails/rangajhorna.jpg",
        "/destinationDetails/rangaboat.jpg",
        "/destinationDetails/rangalake.jpg",
      ],
    },
    attractions: {
      title: "Nearby Attractions",
      subtitle: "Discover more amazing places near your selected destination",
      items: [
        { id: 1, name: "Kaptai Lake" },
        { id: 2, name: "Hanging Bridge" },
        { id: 3, name: "Shuvolong Waterfall" },
        { id: 4, name: "Tribal Cultural Institute" },
      ],
    },
    reviews: {
      title: "User Reviews",
      items: [
        {
          id: 1,
          name: "Nadia Islam",
          email: "nadia.islam@email.com",
          rating: 5,
          date: "Adventure Seeker",
          comment:
            "The hanging bridge and lake views are absolutely breathtaking!",
        },
      ],
    },
    resorts: {
      title: "Nearby Resorts",
      items: [
        {
          id: 1,
          name: "Parjatan Holiday Complex",
          location: "Rangamati Sadar",
          address: "Reserve Bazar, Rangamati",
          website: "www.parjatan.gov.bd",
          verified: true,
        },
      ],
    },
  },
  "6": {
    hero: {
      title: "Chittagong",
      location: "Chittagong Division",
      reviews: "1.8M+ reviews",
      rating: 4.6,
      tags: ["Beach", "Port City"],
      image: "/destination/chitagong.png",
    },
    about: {
      title: "About Chittagong",
      description:
        "Bangladesh's port city offering a unique blend of beaches, hills, and history. Visit Patenga Beach and Foy's Lake. Chittagong is the second-largest city and the primary seaport of Bangladesh. The city features both natural beauty and urban attractions, making it a diverse destination.",
    },
    gallery: {
      title: "Photo Gallery",
      images: [
        "/destinationDetails/chitaport.jpg",
        "/destinationDetails/chitabridge.jpg",
        "/destinationDetails/cox-bazar.jpg",
        "/destinationDetails/chitaboat.jpg",
      ],
    },
    attractions: {
      title: "Nearby Attractions",
      subtitle: "Discover more amazing places near your selected destination",
      items: [
        { id: 1, name: "Patenga Beach" },
        { id: 2, name: "Foy's Lake" },
        { id: 3, name: "Bhatiari Lakes" },
        { id: 4, name: "Ethnological Museum" },
      ],
    },
    reviews: {
      title: "User Reviews",
      items: [
        {
          id: 1,
          name: "Rashid Ahmed",
          email: "rashid.ahmed@email.com",
          rating: 5,
          date: "Local Resident",
          comment:
            "Perfect combination of beaches and hills. Patenga Beach sunset is amazing!",
        },
      ],
    },
    resorts: {
      title: "Nearby Hotels",
      items: [
        {
          id: 1,
          name: "Radisson Blu Chittagong",
          location: "Agrabad, Chittagong",
          address: "Commercial Area, Chittagong",
          website: "www.radissonblu.com",
          verified: true,
        },
      ],
    },
  },
};

const DestinationDetailsPage = () => {
  const params = useParams();
  const destinationId = params?.id as string;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  // Get destination data based on ID
  const pageData =
    destinationsData[destinationId as keyof typeof destinationsData] ||
    destinationsData["1"];

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pageData.gallery.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [pageData.gallery.images.length, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % pageData.gallery.images.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(
      (prev) =>
        (prev - 1 + pageData.gallery.images.length) %
        pageData.gallery.images.length
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 sm:w-4 sm:h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-b from-black/50 to-black/30">
        <div className="absolute inset-0">
          <Image
            src={pageData.hero.image}
            alt={pageData.hero.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full flex flex-col justify-end pb-6 sm:pb-8 md:pb-12">
          <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
            {pageData.hero.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {pageData.hero.title}
          </h1>
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-white text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="truncate">{pageData.hero.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>{pageData.hero.reviews}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
              <span>{pageData.hero.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors"
        >
          {showSidebar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showSidebar && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowSidebar(false)}>
          <div className="bg-white rounded-t-2xl absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
              <h2 className="text-lg font-bold text-gray-900">Quick Info</h2>
              <button onClick={() => setShowSidebar(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(85vh-60px)] p-4 space-y-4">
              {/* Nearby Attractions */}
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <h3 className="text-base font-bold mb-2">{pageData.attractions.title}</h3>
                <p className="text-xs text-gray-600 mb-4">{pageData.attractions.subtitle}</p>
                <div className="space-y-2">
                  {pageData.attractions.items.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Your Visit */}
              <div className="bg-teal-700 rounded-lg p-4 text-white">
                <h3 className="text-base font-bold mb-2">Plan Your Visit</h3>
                <p className="text-xs text-teal-100 mb-4">
                  Get personalized recommendations and insider tips for your trip
                </p>
                <button className="w-full bg-white text-teal-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                  Contact Travel Agent
                </button>
              </div>

              {/* Nearby Resorts */}
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <h3 className="text-base font-bold mb-4">{pageData.resorts.title}</h3>
                <div className="space-y-3">
                  {pageData.resorts.items.map((resort) => (
                    <div key={resort.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex gap-3 mb-2">
                        <Image
                          src="/ResortDetail/hotelimage.png"
                          alt={resort.name}
                          width={48}
                          height={48}
                          className="rounded-lg flex-shrink-0 object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-1">
                            <h4 className="font-semibold text-sm truncate">{resort.name}</h4>
                            {resort.verified && (
                              <CheckCircle className="w-3 h-3 text-teal-500 fill-teal-500 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-gray-600 truncate">{resort.location}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mb-1 truncate">{resort.address}</p>
                      <p className="text-xs text-teal-600 mb-2 truncate">{resort.website}</p>
                      <button className="w-full bg-teal-500 text-white py-1.5 rounded text-xs font-semibold hover:bg-teal-600 transition-colors">
                        View Profile
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                {pageData.about.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {pageData.about.description}
              </p>
            </div>

            {/* Photo Gallery - Fixed Slider */}
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
                {pageData.gallery.title}
              </h2>
              
              {/* Main Slider */}
              <div className="relative rounded-lg overflow-hidden mb-3 sm:mb-4 bg-gray-200">
                <div className="relative h-48 sm:h-64 md:h-80">
                  {pageData.gallery.images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {pageData.gallery.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === idx 
                          ? "bg-white scale-125" 
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>

                {/* Slide Counter */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {currentSlide + 1} / {pageData.gallery.images.length}
                </div>
              </div>

              {/* Thumbnail Preview - Horizontal Scroll */}
              <div className="flex gap-2 sm:gap-3 overflow-x-auto py-2 px-1">
                {pageData.gallery.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-14 sm:w-24 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentSlide === index 
                        ? "border-teal-500 ring-2 ring-teal-200 scale-105" 
                        : "border-gray-300 hover:border-teal-300"
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* User Reviews */}
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
                {pageData.reviews.title}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {pageData.reviews.items.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-4 sm:pb-6 last:border-0"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm sm:text-base truncate">{review.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-500 truncate">
                              {review.email || review.date}
                            </p>
                          </div>
                          <button className="bg-teal-500 text-white px-3 sm:px-4 py-1 rounded text-xs sm:text-sm hover:bg-teal-600 transition-colors self-start">
                            Comment
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs sm:text-sm text-gray-600">
                            {review.date}
                          </span>
                          <StarRating rating={review.rating} />
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Desktop Only */}
          <div className="hidden lg:block space-y-6">
            {/* Nearby Attractions */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-2">
                {pageData.attractions.title}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {pageData.attractions.subtitle}
              </p>
              <div className="space-y-3">
                {pageData.attractions.items.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan Your Visit */}
            <div className="bg-teal-700 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Plan Your Visit</h2>
              <p className="text-sm text-teal-100 mb-6">
                Get personalized recommendations and insider tips for your trip
              </p>
              <button className="w-full bg-white text-teal-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Travel Agent
              </button>
            </div>

            {/* Nearby Resorts */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-6">
                {pageData.resorts.title}
              </h2>
              <div className="space-y-4">
                {pageData.resorts.items.map((resort) => (
                  <div
                    key={resort.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-colors"
                  >
                    <div className="flex gap-4 mb-3">
                      <Image
                        src="/ResortDetail/hotelimage.png"
                        alt={resort.name}
                        width={64}
                        height={64}
                        className="rounded-lg flex-shrink-0 object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold truncate">{resort.name}</h3>
                          {resort.verified && (
                            <CheckCircle className="w-4 h-4 text-teal-500 fill-teal-500 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                          {resort.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 truncate">
                      {resort.address}
                    </p>
                    <p className="text-xs text-teal-600 mb-3 truncate">
                      {resort.website}
                    </p>
                    <button className="w-full bg-teal-500 text-white py-2 rounded text-sm font-semibold hover:bg-teal-600 transition-colors">
                      View Profile
                    </button>
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

export default DestinationDetailsPage;