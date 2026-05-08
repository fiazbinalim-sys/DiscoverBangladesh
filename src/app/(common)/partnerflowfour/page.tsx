"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
//   CheckCircle2,
  FileText,
  Bell,
  Calendar,
  ArrowRight,
  CircleCheckBig
} from 'lucide-react';
import Link from 'next/link';

export default function ApplicationSuccess() {
  const router = useRouter();

  const handleDashboard = () => {
    console.log('Navigating to dashboard');
    router.push('/partner/dashboard');
  };

  const handleBackHome = () => {
    console.log('Navigating to home');
    router.push('/');
  };

  const handleContactSupport = () => {
    console.log('Opening contact support');
    router.push('/support');
  };

  return (
    <div className="min-h-screen bg-teal-700 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Main Success Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#DCFCE7] rounded-full flex items-center justify-center">
              <CircleCheckBig className="w-10 h-10 text-[#009966]" strokeWidth={2.5} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-3">
            Application Submitted Successfully!
          </h1>

          {/* Subtitle */}
          <div className="text-center text-gray-600 mb-8 ">
            <p className="text-sm">Thank you for registering with us.</p>
            <p className="text-sm">Your application is now under review.</p>
          </div>
          <hr />

          {/* What happens next section */}
          <div className="mb-8">
            <h2 className="text-center text-lg font-semibold text-gray-900 mb-6 mt-2">
              What happens next?
            </h2>

            {/* Three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Review Process */}
              <div className="text-center  bg-[#F9FAFB] p-3 rounded-lg">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Review Process</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our team will review your application within 24-48 hours
                </p>
              </div>

              {/* Get Notified */}
              <div className="text-center bg-[#F9FAFB] p-3 rounded-lg">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Bell className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Get Notified</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  You&apos;ll receive an email notification about your approval status
                </p>
              </div>

              {/* Start Receiving Bookings */}
              <div className="text-center bg-[#F9FAFB] p-3 rounded-lg">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Start Receiving Bookings</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Once approved, your property can go live and start receiving bookings
                </p>
              </div>
            </div>
          </div>

          {/* Important Information Box */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Important Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-xs text-gray-700">
                <span className="text-teal-600 mr-2 mt-0.5">•</span>
                <span>Check your email regularly for updates on your application status</span>
              </li>
              <li className="flex items-start text-xs text-gray-700">
                <span className="text-teal-600 mr-2 mt-0.5">•</span>
                <span>You can track your application status from your partner dashboard</span>
              </li>
              <li className="flex items-start text-xs text-gray-700">
                <span className="text-teal-600 mr-2 mt-0.5">•</span>
                <span>Our support team is available 24/7 if you have any questions</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
           <Link href="/partnerflowfive">
            <button
              onClick={handleDashboard}
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
           </Link>
            <button
              onClick={handleBackHome}
              className="flex-1 bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Back to Home
            </button>
          </div>

          <hr />

          {/* Contact Support Link */}
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">
              Need help?{' '}
              <button
                onClick={handleContactSupport}
                className="text-teal-600 hover:text-teal-700 font-medium hover:underline"
              >
                Contact Support
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}