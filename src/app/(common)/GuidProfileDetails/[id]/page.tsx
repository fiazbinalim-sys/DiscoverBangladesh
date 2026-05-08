"use client";
import React from 'react';
import { Star, Users, Award, CheckCircle,  } from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Tour {
  id: string;
  title: string;
  image: string;
  duration: string;
  price: string;
  badge?: string;
}

interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
}

interface Agent {
  id: number;
  name: string;
  image: string;
  title: string;
  bio: string;
  rating: number;
  reviewCount: number;
  experiences: number;
  hoursCompleted: number;
  languages: string[];
}

const TourGuideProfile = () => {
  const params = useParams();
  const agentId = params?.id ? parseInt(params.id as string) : 1;
//   const [activeTab, setActiveTab] = useState('overview');

  // Agent data based on ID
  const agentsData: { [key: number]: Agent } = {
    1: {
      id: 1,
      name: 'Faiyaz Alim',
      image: '/Home/faiyaz1.jpeg',
      title: 'Certified Local Trailblazer',
      bio: 'Passionate about sharing the authentic Barcelonian experience! Born and raised in the Gothic Quarter, I\'ve spent the last 8 years guiding visitors through the hidden gems and iconic landmarks of this incredible city. I specialize in architecture, local cuisine, and creating personalized experiences that go beyond typical tourist routes.',
      rating: 4.9,
      reviewCount: 97,
      experiences: 3456,
      hoursCompleted: 124,
      languages: ['English', 'Spanish', 'French']
    },
    2: {
      id: 2,
      name: 'Puja Acharjee',
      image: '/Home/puja1.jpeg',
      title: 'Expert Cultural Guide',
      bio: 'With over 10 years of experience in tourism, I love showing travelers the real Barcelona. From hidden tapas bars to breathtaking mountain views, I create unforgettable memories. My passion is connecting people with the soul of this magnificent city.',
      rating: 4.8,
      reviewCount: 143,
      experiences: 4521,
      hoursCompleted: 256,
      languages: ['English', 'German', 'Spanish']
    },
    3: {
      id: 3,
      name: 'Arpa Mitra',
      image: '/Home/arpa.jpeg',
      title: 'Adventure & Nature Specialist',
      bio: 'Nature lover and adventure enthusiast! I specialize in outdoor experiences and sustainable tourism. Whether it\'s hiking Montserrat or exploring coastal trails, I bring energy and expertise to every adventure. Let\'s discover Barcelona\'s natural beauty together!',
      rating: 4.9,
      reviewCount: 189,
      experiences: 5234,
      hoursCompleted: 312,
      languages: ['English', 'Italian', 'Catalan']
    },
    4: {
      id: 4,
      name: 'Muhaiminul Islam',
      image: '/Home/muhaiminul2.jpeg',
      title: 'Food & Wine Connoisseur',
      bio: 'Food is my love language! As a certified sommelier and local foodie, I take you on culinary journeys through Barcelona\'s best markets, restaurants, and wine bars. Discover authentic flavors and traditional recipes passed down through generations.',
      rating: 5.0,
      reviewCount: 167,
      experiences: 3892,
      hoursCompleted: 198,
      languages: ['English', 'Portuguese', 'Spanish']
    }
  };

  const currentAgent = agentsData[agentId] || agentsData[1];

  const tours: Tour[] = [
    {
      id: '1',
      title: 'Gothic Quarter Walking Tour',
      image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=400',
      duration: '3 hours',
      price: '$57 - $75',
      badge: 'PRIVATE'
    },
    {
      id: '2',
      title: 'Montserrat Adventure Trek',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
      duration: '6 hours',
      price: '$95 - $120',
      badge: 'POPULAR'
    },
    {
      id: '3',
      title: 'Gaudí & Modernism Experience',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400',
      duration: '4 hours',
      price: '$67 - $89'
    },
    {
      id: '4',
      title: 'Tapas & Market Food Tour',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
      duration: '3 hours',
      price: '$45 - $65',
      badge: "Host's Guide"
    }
  ];

  const reviews: Review[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      date: 'October 2025',
      rating: 5,
      text: `${currentAgent.name} was absolutely fantastic! Their knowledge of Barcelona's architecture was astounding and they took us to places we never would have found on our own. The tapas tour was a real highlight of our trip. Highly recommend!`
    },
    {
      id: '2',
      name: 'Michael Chen',
      date: 'October 2025',
      rating: 5,
      text: `Had the most amazing time! ${currentAgent.name} was not only incredibly fun and approachable but absolutely professional. The Montserrat trek was so challenging but absolutely worth it. Professional, friendly, and knowledgeable!`
    },
    {
      id: '3',
      name: 'Emma Thompson',
      date: 'September 2025',
      rating: 5,
      text: `Best tour guide experience we've had anywhere. ${currentAgent.name} paid such attention to detail, flexible with our interests and pace. For anyone thinking of the Gothic Quarter tour - Do it! Cannot recommend enough!`
    }
  ];

  const activityData = [
    [1, 0, 2, 1, 0, 0, 1],
    [2, 1, 3, 2, 1, 0, 0],
    [1, 2, 4, 3, 2, 1, 1],
    [3, 2, 5, 4, 3, 2, 1],
    [2, 3, 4, 5, 4, 2, 2],
    [1, 2, 3, 4, 3, 2, 1],
    [0, 1, 2, 3, 2, 1, 0]
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-48 md:h-56 lg:h-64 bg-gradient-to-r from-gray-700 to-gray-900">
        <Image 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200" 
          alt="Cover" 
          fill
          className="w-full h-full object-cover opacity-40"
          sizes="100vw"
          priority
        />
        
        {/* Profile Card Overlay */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start justify-between">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="relative mx-auto sm:mx-0">
                  <Image 
                    src={currentAgent.image} 
                    alt={currentAgent.name} 
                    width={600}
                    height={600}
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="pt-2 text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{currentAgent.name}</h1>
                  <p className="text-gray-600 mb-3 text-sm sm:text-base">{currentAgent.title}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-center sm:justify-start gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{currentAgent.rating}</span>
                      <span>({currentAgent.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-1">
                      <Users className="w-4 h-4" />
                      <span>{currentAgent.experiences.toLocaleString()} experiences</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-1">
                      <Award className="w-4 h-4" />
                      <span>{currentAgent.hoursCompleted} hours</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button className="w-full sm:w-auto px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-medium text-sm sm:text-base">
                      Book This Guide
                    </button>
                    <button className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm sm:text-base">
                      Message Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">About {currentAgent.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                {currentAgent.bio}
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {['Architecture', 'Food', 'Photography', 'History', 'Nature', 'Adventure'].map(tag => (
                    <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Languages Spoken</h3>
                <div className="flex flex-wrap gap-2">
                  {currentAgent.languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-lg text-xs sm:text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 rounded-lg text-xs sm:text-sm text-gray-500">Conversational</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">What Makes Me Different</h3>
                <div className="space-y-2">
                  {[
                    "Born and raised Barcelona - I know local insights",
                    "Certified photographer and sommelier",
                    "Specialized in off-the-beaten-path experiences",
                    "Flexible itineraries - I tailor to each interest",
                    "Small groups only (max 6 people) for personalized attention"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Locations Section */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Locations I Cover</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Barcelona', 'Sitges', 'Montserrat', 'Girona', 'Costa Brava'].map(location => (
                  <span key={location} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-emerald-500 text-emerald-600 rounded-lg text-xs sm:text-sm font-medium">
                    {location}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Can travel to other nearby locations upon request (contact for discuss options if needed)
              </p>
            </div>

            {/* Tours Section */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Tour Services Offered</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {tours.map(tour => (
                  <div key={tour.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image 
                        src={tour.image} 
                        alt={tour.title} 
                        width={600}
                        height={600}
                        className="w-full h-32 sm:h-40 object-cover"
                      />
                      {tour.badge && (
                        <span className="absolute top-2 right-2 px-2 py-1 bg-white text-gray-800 text-xs font-semibold rounded-full">
                          {tour.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{tour.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">
                        Barcelona is a monument and the ancient architecture you can&apos;t miss! Get ready to fall in love with Gothic streets and secret courtyards.
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs sm:text-sm text-gray-600">⏱️ {tour.duration}</span>
                        <span className="text-xs sm:text-sm font-semibold text-emerald-600">{tour.price}</span>
                      </div>
                      <button className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-medium text-sm sm:text-base">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Reviews & Ratings</h2>
                <a href="#" className="text-emerald-600 text-sm hover:underline text-center sm:text-left">
                  View all {currentAgent.reviewCount} reviews
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{currentAgent.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{currentAgent.reviewCount} reviews</div>
                </div>
                
                <div className="sm:col-span-2 space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => {
                    const count = rating === 5 ? 114 : rating === 4 ? 12 : rating === 3 ? 1 : 0;
                    const percentage = (count / 127) * 100;
                    return (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-600 w-10 sm:w-12">{rating} stars</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 rounded-full" 
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-600 w-6 sm:w-8">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {review.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mb-2">{review.date}</p>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Availability Calendar */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Availability</h3>
              <div className="text-center mb-4">
                <span className="text-sm font-medium">December 2025</span>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
                  <div key={day} className="text-center text-xs text-gray-600 font-medium">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {activityData.flat().map((activity, idx) => (
                  <div 
                    key={idx} 
                    className={`aspect-square rounded ${
                      activity === 0 ? 'bg-gray-100' :
                      activity === 1 ? 'bg-emerald-200' :
                      activity === 2 ? 'bg-emerald-300' :
                      activity === 3 ? 'bg-emerald-400' :
                      activity === 4 ? 'bg-emerald-500' :
                      'bg-emerald-600'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs">
                <div className="w-3 h-3 bg-emerald-200 rounded"></div>
                <span className="text-gray-600">Available</span>
                <div className="w-3 h-3 bg-emerald-600 rounded ml-2"></div>
                <span className="text-gray-600">Booked</span>
              </div>
              <button className="w-full mt-4 py-2 border-2 border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 font-medium text-sm sm:text-base">
                View my Contact Data
              </button>
            </div>

            {/* Safety & Verification */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Safety & Verification</h3>
              <div className="space-y-3">
                {[
                  { title: "Identity Verified", desc: "Government ID confirmed" },
                  { title: "Locally-based Credentials", desc: "Certified by Tour Board" },
                  { title: "Insurance Details", desc: "Fully covered liability" },
                  { title: "First Aid Certified", desc: "CPR & emergency training" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-xs sm:text-sm text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Quick facts</h3>
              <div className="space-y-3">
                {[
                  { label: "Response time:", value: "1 hour" },
                  { label: "Response rate:", value: "100%" },
                  { label: "Cancellation rate:", value: "0%" },
                  { label: "Member since:", value: "2018" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
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

export default TourGuideProfile;