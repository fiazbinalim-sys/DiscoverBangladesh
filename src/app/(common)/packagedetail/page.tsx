"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';

export default function PackageDetail() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    startDate: '',
    travelers: '2 Persons',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Update form data
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    
    setFormData(updatedFormData);
    
    // Log to console
    console.log(`Input Changed - ${name}:`, value);
    console.log('Current Form Data:', updatedFormData);
  };

  const handleBackClick = () => {
    console.log('Back button clicked - Navigating to package details');
    toast.info('Navigating back to package details');
    // Navigate back or to package details page
    router.back(); // Or use specific route: router.push('/packages')
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('=== FORM SUBMISSION ===');
    console.log('Form Data Submitted:', formData);
    console.log('=====================');
    
    // Show success toast
    toast.success('Booking submitted successfully!', {
      description: 'We have received your booking request.',
      duration: 5000,
    });
    
    // Show additional info toast with details
    // toast.info('Form Data Logged', {
    //   description: 'Check browser console for complete form data.',
    //   duration: 3000,
    // });
    
    // Here you would typically send data to an API
    // Example API call:
    // try {
    //   const response = await fetch('/api/bookings', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   if (response.ok) {
    //     toast.success('Booking confirmed!');
    //   }
    // } catch (error) {
    //   toast.error('Failed to submit booking');
    // }
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    
    // Show warning toast before resetting
    toast.warning('Are you sure?', {
      description: 'This will reset all form data.',
      duration: 4000,
      action: {
        label: 'Reset',
        onClick: () => {
          // Reset form
          setFormData({
            startDate: '',
            travelers: '2 Persons',
            fullName: '',
            email: '',
            phone: '',
            address: '',
            specialRequests: ''
          });
          
          // Show success toast
          toast.success('Form reset successfully!', {
            description: 'All fields have been cleared.',
            duration: 3000,
          });
          
          console.log('Form reset to initial values');
        },
      },
      cancel: {
        label: 'Keep',
        onClick: () => {
          toast.info('Form data preserved');
        },
      },
    });
  };

  const handleSpecialRequestsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      specialRequests: value
    });
    console.log('Special Requests:', value);
  };

  // Log initial form data on component mount
  React.useEffect(() => {
    console.log('Component mounted with initial form data:', formData);
    
    // Show welcome toast on mount
    // toast('Welcome to Booking Page', {
    //   description: 'Fill out the form to book your trip.',
    //   duration: 4000,
    // });
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button - Now Functional */}
        <button 
          onClick={handleBackClick}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6 font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Package Details
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleContinue} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Book Your Trip</h1>
                <p className="text-gray-600 text-sm">Complete the form below to reserve your spot</p>
              </div>

              {/* Travel Details */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Travel Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Start Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        placeholder="Select a date"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none appearance-none cursor-pointer"
                      required
                    >
                      <option value="2 Persons">2 Persons</option>
                      <option value="3 Persons">3 Persons</option>
                      <option value="4 Persons">4 Persons</option>
                      <option value="5 Persons">5 Persons</option>
                      <option value="6+ Persons">6+ Persons</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        placeholder="Enter your full name"
                        required
                      />
                      <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          placeholder="your@email.com"
                          required
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          placeholder="+880 1234-567890"
                          required
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        placeholder="Your full address"
                        required
                      />
                      <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Special Requests</h2>
                <p className="text-sm text-gray-600 mb-3">
                  Any dietary restrictions, accessibility needs, or other requests?
                </p>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleSpecialRequestsChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about any special requirements..."
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/packagedetailcomplete">
                <button 
                  type="submit"
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Continue to Confirmation
                </button>
              </Link>
                <button 
                  type="button"
                  onClick={handleCancel}
                  className="sm:w-auto px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h2>
              
              {/* Tour Image */}
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/package/packagedetail.png"
                  alt="Hill Paradise Resort"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tour Title */}
              <h3 className="font-semibold text-gray-900 mb-2">
                Hill Paradise - Bandarban & Rangamati
              </h3>
              <div className="inline-block bg-teal-600 text-white text-xs px-2 py-1 rounded mb-4">
                3 Days / 2 Nights
              </div>

              {/* Booking Details */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Start Date:</span>
                  <span className="font-medium text-gray-900">
                    {formData.startDate || 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Travelers:</span>
                  <span className="font-medium text-gray-900">{formData.travelers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Price per person:</span>
                  <span className="font-medium text-gray-900">৳15,000</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base font-semibold text-gray-900">Total Price:</span>
                  <span className="text-xl font-bold text-teal-600">৳30,000</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">Note:</span> This is an estimated price. Final price will be confirmed after we review your booking details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}