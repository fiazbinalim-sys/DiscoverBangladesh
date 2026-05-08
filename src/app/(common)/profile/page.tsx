/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from 'react';
import { 
  User, Calendar, Heart, CreditCard, Shield, Bell, Settings,
  MapPin, Mail, Phone, Globe, Edit, Eye, EyeOff, Trash2, Star
} from 'lucide-react';
import Image from 'next/image';
import { useGetUserProfileMutation } from '@/redux/features/auth/authApi';
import { useAppSelector } from '@/redux/hooks';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';

// Types
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  aboutMe: string;
}

interface Booking {
  id: string;
  title: string;
  guide: string;
  location: string;
  date: string;
  time: string;
  price: number;
  image: string;
  status: 'confirmed' | 'pending' | 'completed';
}

interface SavedTour {
  id: string;
  title: string;
  guide: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

interface NotificationPreference {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

// Fake Data
const fakeUserData: PersonalInfo = {
  firstName: 'Faiaz',
  lastName: ' Bin Alim',
  email: 'Fiazbinalim@gmail.com',
  phone: '+1 (555) 123-4567',
  city: 'San Francisco',
  country: 'United States',
  aboutMe: ''
};

const fakeBookings: Booking[] = [
  {
    id: '1',
    title: 'Paris City Walking Tour',
    guide: 'Marie Dubois',
    location: 'Paris, France',
    date: 'Jan 15, 2025',
    time: '10:00 AM',
    price: 120,
    image: '/profile/booking1.png',
    status: 'confirmed'
  },
  {
    id: '2',
    title: 'Tokyo Food & Culture Experience',
    guide: 'Kenji Tanaka',
    location: 'Tokyo, Japan',
    date: 'Feb 22, 2025',
    time: '2:00 PM',
    price: 180,
    image: '/profile/booking2.png',
    status: 'pending'
  },
  {
    id: '3',
    title: 'Bali Temples & Rice Terraces',
    guide: 'Wayan Putra',
    location: 'Bali, Indonesia',
    date: 'Dec 10, 2024',
    time: '9:00 AM',
    price: 95,
    image: '/profile/booking3.png',
    status: 'completed'
  }
];

const fakeSavedTours: SavedTour[] = [
  {
    id: '1',
    title: 'New York Street Art Tour',
    guide: 'Alex Johnson',
    rating: 4.9,
    reviews: 234,
    price: 75,
    image: '/profile/new-York.png'
  },
  {
    id: '2',
    title: 'Eiffel Tower Sunset Experience',
    guide: 'Sophie Laurent',
    rating: 4.8,
    reviews: 189,
    price: 140,
    image: '/profile/paris.png'
  }
];

const fakePaymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'Visa',
    last4: '4242',
    expiry: '12/25',
    isDefault: true
  },
  {
    id: '2',
    type: 'Mastercard',
    last4: '8888',
    expiry: '03/26',
    isDefault: false
  }
];

const fakeNotifications: NotificationPreference[] = [
  {
    id: '1',
    title: 'Booking Confirmations',
    description: 'Get notified when your booking is confirmed',
    enabled: true
  },
  {
    id: '2',
    title: 'Tour Reminders',
    description: 'Receive reminders before your scheduled tours',
    enabled: true
  },
  {
    id: '3',
    title: 'Guide Messages',
    description: 'Notifications when guides send you messages',
    enabled: true
  },
  {
    id: '4',
    title: 'Special Offers',
    description: 'Receive promotional emails about deals and discounts',
    enabled: false
  },
  {
    id: '5',
    title: 'Newsletter',
    description: 'Weekly travel tips and destination highlights',
    enabled: false
  },
  {
    id: '6',
    title: 'Review Requests',
    description: 'Reminders to review completed tours',
    enabled: false
  }
];

// Tabs Component (Simple Implementation)
const Tabs: React.FC<{ defaultValue: string; children: React.ReactNode }> = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className="tabs-container" data-active-tab={activeTab}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
};

const TabsList: React.FC<{ children: React.ReactNode; activeTab?: string; setActiveTab?: (value: string) => void }> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200 bg-white overflow-x-auto">
      <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 px-4 sm:px-6 min-w-max">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { activeTab, setActiveTab });
          }
          return child;
        })}
      </div>
    </div>
  );
};

const TabsTrigger: React.FC<{ value: string; children: React.ReactNode; icon?: React.ReactNode; activeTab?: string; setActiveTab?: (value: string) => void }> = ({ value, children, icon, activeTab, setActiveTab }) => {
  const isActive = activeTab === value;
  
  return (
    <button
      onClick={() => setActiveTab?.(value)}
      className={`relative py-3 sm:py-4 px-1 sm:px-2 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1 sm:gap-2 whitespace-nowrap ${
        isActive 
          ? 'text-teal-600' 
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      <span className="hidden sm:inline">{icon}</span>
      <span className="sm:hidden">{icon && React.cloneElement(icon as React.ReactElement, { className: 'w-3.5 h-3.5' } as any)}</span>
      <span className="hidden xs:inline">{children}</span>
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"></span>
      )}
    </button>
  );
};

const TabsContent: React.FC<{ value: string; children: React.ReactNode; activeTab?: string }> = ({ value, children, activeTab }) => {
  if (activeTab !== value) return null;
  
  return <div className="py-6">{children}</div>;
};

// Main Component
export default function ProfileDashboard() {
  const currentUser = useAppSelector(selectCurrentUser);
  const [getUserProfile] = useGetUserProfileMutation();
  const [profileEmail, setProfileEmail] = useState<string | null>(null);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(fakeUserData);
  const [bookings, setBookings] = useState<Booking[]>(fakeBookings);
  const [savedTours, setSavedTours] = useState<SavedTour[]>(fakeSavedTours);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(fakePaymentMethods);
  const [notifications, setNotifications] = useState<NotificationPreference[]>(fakeNotifications);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [bookingFilter, setBookingFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [billingAddress, setBillingAddress] = useState({
    street: '123 Main Street',
    city: 'San Francisco',
    state: 'California',
    postal: '94102'
  });

  useEffect(() => {
    const emailFromState = (currentUser as { email?: string } | null)?.email;
    if (emailFromState) {
      setProfileEmail(emailFromState);
      return;
    }


    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("authEmail");
      if (storedEmail) {
        setProfileEmail(storedEmail);
      }
    }
  }, [currentUser]);
  
  useEffect(() => {
    if (!profileEmail) return;

    const loadProfile = async () => {

          try {
      const response = await getUserProfile({ email: profileEmail }).unwrap();
      console.log("getUserProfile response:", response);

      if (!response?.success || !response?.data) return;
      // ...
    } catch (error) {
      console.error("profile load failed:", error);
    }

      try {
        const response = await getUserProfile({ email: profileEmail }).unwrap();

        if (!response?.success || !response?.data) return;

        const fetchedName = (response?.data?.name || response?.data?.authId?.name || '').trim();
        const fetchedEmail = response?.data?.email || profileEmail;

        setPersonalInfo((prev) => {
          if (!fetchedName) {
            return { ...prev, email: fetchedEmail };
          }

          const nameParts = fetchedName.split(/\s+/);

          return {
            ...prev,
            firstName: nameParts[0] || prev.firstName,
            lastName: nameParts.slice(1).join(' '),
            email: fetchedEmail,
          };
        });
      } catch {
        // Intentionally silent to avoid interrupting profile UI.
      }
    };

    loadProfile();
  }, [profileEmail, getUserProfile]);

  // Handlers
  const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: keyof typeof passwords, value: string) => {
    setPasswords(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Password updated successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  const handleNotificationToggle = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
      )
    );
  };

  const handleSetDefaultPayment = (id: string) => {
    setPaymentMethods(prev =>
      prev.map(method => ({
        ...method,
        isDefault: method.id === id
      }))
    );
  };

  const handleRemovePayment = (id: string) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== id));
  };

  const handleUnsaveTour = (id: string) => {
    setSavedTours(prev => prev.filter(tour => tour.id !== id));
  };

  const handleCancelBooking = (id: string) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      setBookings(prev => prev.filter(booking => booking.id !== id));
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (bookingFilter === 'all') return true;
    if (bookingFilter === 'upcoming') return booking.status !== 'completed';
    if (bookingFilter === 'completed') return booking.status === 'completed';
    return true;
  });


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-teal-700 text-xs">✓</span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{personalInfo.firstName} {personalInfo.lastName}</h1>
                <p className="text-teal-100 mt-1">{personalInfo.email}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-teal-100">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {personalInfo.city}, CA
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Member since Jan 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-teal-600 rounded-lg px-6 py-4 text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-teal-100">Tours Booked</div>
              </div>
              <div className="bg-teal-600 rounded-lg px-6 py-4 text-center">
                <div className="text-3xl font-bold">8</div>
                <div className="text-sm text-teal-100">Saved Tours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile" icon={<User className="w-4 h-4" />}>
              Profile
            </TabsTrigger>
            <TabsTrigger value="bookings" icon={<Calendar className="w-4 h-4" />}>
              My Bookings
            </TabsTrigger>
            <TabsTrigger value="saved" icon={<Heart className="w-4 h-4" />}>
              Saved Tours
            </TabsTrigger>
            <TabsTrigger value="payments" icon={<CreditCard className="w-4 h-4" />}>
              Payments
            </TabsTrigger>
            <TabsTrigger value="security" icon={<Shield className="w-4 h-4" />}>
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" icon={<Bell className="w-4 h-4" />}>
              Notifications
            </TabsTrigger>
            <TabsTrigger value="settings" icon={<Settings className="w-4 h-4" />}>
              Settings
            </TabsTrigger>
          </TabsList>

        {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="px-4 sm:px-6">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold">Personal Information</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors w-full sm:w-auto justify-center text-sm sm:text-base">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                      <User className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={personalInfo.firstName}
                        onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                        className="flex-1 bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                      <User className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={personalInfo.lastName}
                        onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                        className="flex-1 bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                        className="flex-1 bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                        className="flex-1 bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={personalInfo.city}
                        onChange={(e) => handlePersonalInfoChange('city', e.target.value)}
                        className="flex-1 bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={personalInfo.country}
                        onChange={(e) => handlePersonalInfoChange('country', e.target.value)}
                        className="flex-1 bg-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">About Me</h2>
                <textarea
                  value={personalInfo.aboutMe}
                  onChange={(e) => handlePersonalInfoChange('aboutMe', e.target.value)}
                  placeholder="Tell other travelers and guides about yourself..."
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 outline-none focus:ring-2 focus:ring-teal-500 resize-none text-sm sm:text-base"
                  rows={4}
                />
              </div>
            </div>
          </TabsContent>

          {/* My Bookings Tab */}
          <TabsContent value="bookings">
            <div className="px-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">My Bookings</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setBookingFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      bookingFilter === 'all' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Bookings
                  </button>
                  <button
                    onClick={() => setBookingFilter('upcoming')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      bookingFilter === 'upcoming' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setBookingFilter('completed')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      bookingFilter === 'completed' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Completed
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredBookings.map((booking) => (
                  <div key={booking.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="flex gap-6 p-6">
                      <Image
                        src={booking.image}
                        alt={booking.title}
                        height={600}
                        width={900}
                        className="w-48 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{booking.title}</h3>
                            <p className="text-sm text-gray-600">with {booking.guide}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                            booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                          <MapPin className="w-4 h-4" />
                          {booking.location}
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">⏰</span>
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-gray-400" />
                            <span className="font-semibold">${booking.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {booking.status === 'completed' ? (
                          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
                            Leave a Review
                          </button>
                        ) : booking.status === 'pending' ? (
                          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium">
                            Complete Payment
                          </button>
                        ) : (
                          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
                            View Details
                          </button>
                        )}
                        <button
                          onClick={() => handleCancelBooking(booking.id)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                        >
                          Cancel Booking
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

         {/* Saved Tours Tab */}
          <TabsContent value="saved">
            <div className="px-4 sm:px-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">Saved Tours</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {savedTours.map((tour) => (
                  <div key={tour.id} className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                    <button
                      onClick={() => handleUnsaveTour(tour.id)}
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 sm:w-10 h-9 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
                    >
                      <Heart className="w-4 sm:w-5 h-4 sm:h-5 fill-red-500 text-red-500" />
                    </button>
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      height={600}
                      width={900}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                    <div className="p-4 sm:p-5 lg:p-6">
                      <h3 className="text-base sm:text-lg font-semibold mb-1 line-clamp-1">{tour.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">by {tour.guide}</p>
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium">{tour.rating}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500">({tour.reviews})</span>
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <span className="text-xl sm:text-2xl font-bold">${tour.price}</span>
                        <div className="flex flex-col xs:flex-row gap-2 w-full">
                          <button className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap">
                            Book Now
                          </button>
                          <button className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>


          {/* Payments Tab */}
         {/* Payments Tab */}
          <TabsContent value="payments">
            <div className="px-4 sm:px-6">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold">Payment Methods</h2>
                  <button className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap">
                    + Add Payment Method
                  </button>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-sm sm:text-base truncate">
                            {method.type} •••• {method.last4}
                            {method.isDefault && (
                              <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full whitespace-nowrap">
                                Default
                              </span>
                            )}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">Expires {method.expiry}</div>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        {!method.isDefault && (
                          <button
                            onClick={() => handleSetDefaultPayment(method.id)}
                            className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap"
                          >
                            Set Default
                          </button>
                        )}
                        <button
                          onClick={() => handleRemovePayment(method.id)}
                          className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
                        >
                          <Trash2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 lg:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Billing Address</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      value={billingAddress.street}
                      onChange={(e) => setBillingAddress({...billingAddress, street: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={billingAddress.city}
                      onChange={(e) => setBillingAddress({...billingAddress, city: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">State/Province</label>
                    <input
                      type="text"
                      value={billingAddress.state}
                      onChange={(e) => setBillingAddress({...billingAddress, state: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      value={billingAddress.postal}
                      onChange={(e) => setBillingAddress({...billingAddress, postal: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <div className="px-6">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6">Change Password</h2>
                <form onSubmit={handleUpdatePassword} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={passwords.current}
                        onChange={(e) => handlePasswordChange('current', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={passwords.new}
                      onChange={(e) => handlePasswordChange('new', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={passwords.confirm}
                      onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                  >
                    Update Password
                  </button>
                </form>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6">Two-Factor Authentication</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium mb-1">Enable two-factor authentication</div>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <button
                    onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      twoFactorEnabled ? 'bg-teal-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        twoFactorEnabled ? 'translate-x-7' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Active Sessions</h2>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-medium">Chrome on Mac • San Francisco, CA</div>
                      <div className="text-sm text-gray-600">Current session • Last active now</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <div className="px-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium mb-1">{notif.title}</div>
                        <p className="text-sm text-gray-600">{notif.description}</p>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle(notif.id)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          notif.enabled ? 'bg-teal-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            notif.enabled ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="px-6">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6">Account Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>JPY (¥)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500">
                      <option>Pacific Time (PT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Central Time (CT)</option>
                      <option>Eastern Time (ET)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-red-200">
                <h2 className="text-xl font-semibold text-red-600 mb-2">Danger Zone</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Delete Account
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
