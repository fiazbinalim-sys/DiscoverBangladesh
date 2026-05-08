"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle2,
  Mail,
  FileSearch,
  Rocket,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function GuideApplicationSuccess() {
  const router = useRouter();

  const handleVisitCenter = () => {
    console.log('Visit help center clicked');
    router.push('/help');
  };

  const handleContactSupport = () => {
    console.log('Contact support clicked');
    router.push('/support');
  };

  const handleGuideResources = () => {
    console.log('Guide resources clicked');
    router.push('/resources');
  };

  const handleDashboard = () => {
    console.log('Go to dashboard clicked');
    // This will be handled by the Link component
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              {/* Animated rings */}
              <div className="absolute inset-0 w-20 h-20 border-2 border-teal-200 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 text-center">
            Application Submitted Successfully!
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-2xl mx-auto text-center leading-relaxed">
            Thank you for joining our community! We&apos;re excited to have you share your expertise with travelers around the world.
          </p>

          {/* What Happens Next Section */}
          <div className="mb-12 bg-gradient-to-br from-teal-50 to-white border border-teal-100 p-6 md:p-8 rounded-xl shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">
              What Happens Next?
            </h2>

            {/* Three Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-5 shadow-md">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-teal-600 mb-1 tracking-wider">STEP 1</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-base">Email Confirmation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Check your inbox and spam folder for updates about your application status.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-5 shadow-md">
                  <FileSearch className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-teal-600 mb-1 tracking-wider">STEP 2</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-base">Review Process</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our team will carefully review your profile within 24-48 hours.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-5 shadow-md">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-teal-600 mb-1 tracking-wider">STEP 3</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-base">Start Earning</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Once approved, start accepting bookings and earning immediately!
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-teal-100">
              <div className="text-center bg-white border border-teal-50 rounded-xl p-5 shadow-sm hover:shadow transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">24-48h</div>
                <div className="text-sm text-gray-600 font-medium">Average Review Time</div>
              </div>
              <div className="text-center bg-white border border-teal-50 rounded-xl p-5 shadow-sm hover:shadow transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">95%</div>
                <div className="text-sm text-gray-600 font-medium">Approval Rate</div>
              </div>
              <div className="text-center bg-white border border-teal-50 rounded-xl p-5 shadow-sm hover:shadow transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">$2,500+</div>
                <div className="text-sm text-gray-600 font-medium">Avg Monthly Income</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/tourguideflowfive" className="flex-1">
              <button
                onClick={handleDashboard}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* Help Section */}
          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm md:text-base text-gray-600 mb-6 text-center">
              Need help? Have questions about your application?
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
              <button
                onClick={handleVisitCenter}
                className="text-teal-600 hover:text-teal-700 text-sm font-medium hover:underline flex items-center gap-1 transition-colors duration-200"
              >
                Visit Help Center
              </button>
              <div className="hidden sm:block text-gray-300">•</div>
              <button
                onClick={handleContactSupport}
                className="text-teal-600 hover:text-teal-700 text-sm font-medium hover:underline flex items-center gap-1 transition-colors duration-200"
              >
                Contact Support
              </button>
              <div className="hidden sm:block text-gray-300">•</div>
              <button
                onClick={handleGuideResources}
                className="text-teal-600 hover:text-teal-700 text-sm font-medium hover:underline flex items-center gap-1 transition-colors duration-200"
              >
                Guide Resources
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            You can also track your application status from your profile dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}