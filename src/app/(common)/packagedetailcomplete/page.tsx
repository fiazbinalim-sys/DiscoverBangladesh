"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  Home, 
//   Calendar, 
//   Users, 
//   MapPin, 
//   FileText,
//   Mail,
//   Phone,
//   MapPinHouse
} from 'lucide-react';

export default function PackageDetailComplete() {
  const router = useRouter();

  // Mock booking data - you can replace this with actual data from props or context
  const bookingData = {
    bookingId: 'TRV-2024-7890',
    packageName: 'Hill Paradise - Bandarban & Rangamati',
    duration: '3 Days / 2 Nights',
    startDate: '2024-12-25',
    travelers: '2 Persons',
    totalPrice: '৳30,000',
    customerName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+880 1234-567890',
    address: '123 Main Street, Dhaka, Bangladesh',
    specialRequests: 'Vegetarian meal preferences',
    bookingDate: '2024-12-10',
    status: 'Confirmed'
  };

  const handleBackToHome = () => {
    console.log('Navigating back to home page');
    router.push('/');
  };

  const handlePrintTicket = () => {
    console.log('Printing booking ticket for:', bookingData.bookingId);
    window.print();
  };

  const handleShareBooking = () => {
    console.log('Sharing booking:', bookingData.bookingId);
    if (navigator.share) {
      navigator.share({
        title: `My Travel Booking: ${bookingData.packageName}`,
        text: `I've booked ${bookingData.packageName} starting on ${bookingData.startDate}!`,
        url: window.location.href,
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Booking link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Confirmation Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with decorative gradient */}
          <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-8 text-white text-center relative">
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
              <div className="text-xs font-semibold">#{bookingData.bookingId}</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <CheckCircle className="w-24 h-24 text-white animate-pulse" />
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              </div>
              
              <h1 className="text-4xl font-bold mt-4">
                Congratulations! Your Travel Adventure Is
              </h1>
              <div className="text-5xl font-black bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Officially Booked
              </div>
              
              <p className="text-teal-100 text-lg max-w-2xl mx-auto">
                Get ready for an unforgettable journey! Your booking is confirmed and all details have been sent to your email.
              </p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Trip Details */}
              <div className="space-y-6">
                {/* <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-teal-600" />
                  Trip Details
                </h2> */}
                
                {/* <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Package</p>
                      <p className="font-semibold text-gray-900">{bookingData.packageName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration & Start Date</p>
                      <p className="font-semibold text-gray-900">
                        {bookingData.duration} • {bookingData.startDate}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Travelers</p>
                      <p className="font-semibold text-gray-900">{bookingData.travelers}</p>
                    </div>
                  </div>
                </div> */}

                {/* Booking Status Badge */}
                {/* <div className="mt-6">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">{bookingData.status}</span>
                    <span className="text-sm">• Booked on {bookingData.bookingDate}</span>
                  </div>
                </div> */}
              </div>

              {/* Right Column - Customer & Payment */}
              <div className="space-y-6">
                {/* <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Users className="w-6 h-6 text-teal-600" />
                  Customer Information
                </h2> */}
                
                {/* <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-semibold text-gray-900">{bookingData.customerName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-gray-900">{bookingData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold text-gray-900">{bookingData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <MapPinHouse className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-semibold text-gray-900">{bookingData.address}</p>
                    </div>
                  </div>
                </div> */}

                {/* Special Requests */}
                {/* {bookingData.specialRequests && (
                  <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h3 className="font-semibold text-amber-800 mb-1">Special Requests</h3>
                    <p className="text-amber-700 text-sm">{bookingData.specialRequests}</p>
                  </div>
                )} */}
              </div>
            </div>

            {/* Total Price Card */}
            <div className="mt-8 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Total Amount Paid</h3>
                  <p className="text-gray-600 text-sm">Inclusive of all taxes and fees</p>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <div className="text-4xl font-bold text-teal-600">{bookingData.totalPrice}</div>
                  <p className="text-gray-500 text-sm">Payment Completed • {bookingData.bookingDate}</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-semibold text-blue-800 mb-3">What&apos;s Next?</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  You&apos;ll receive a confirmation email with itinerary details within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Our travel coordinator will contact you 3 days before your trip
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Please carry a printed copy of this confirmation and your ID
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBackToHome}
                className="flex-1 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Back to Home
              </button>
              
              <button
                onClick={handlePrintTicket}
                className="flex-1 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold py-4 px-6 rounded-xl transition-colors duration-300"
              >
                Print Booking Ticket
              </button>
              
              <button
                onClick={handleShareBooking}
                className="flex-1 border-2 border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-700 font-semibold py-4 px-6 rounded-xl transition-colors duration-300"
              >
                Share Booking
              </button>
            </div>

            {/* Support Info */}
            <div className="mt-8 text-center text-gray-600 text-sm">
              <p>Need help? Contact our support team at <span className="text-teal-600 font-semibold">support@discoverbangladesh.com</span></p>
              <p className="mt-1">or call us at <span className="text-teal-600 font-semibold">+880 9600-000000</span></p>
            </div>
          </div>
        </div>

        {/* Print-only styles */}
        <style jsx global>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-confirmation,
            .print-confirmation * {
              visibility: visible;
            }
            .print-confirmation {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            button {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}