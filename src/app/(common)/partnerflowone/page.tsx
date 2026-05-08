"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Eye, 
  EyeOff,
  User,
  Mail,
  Phone,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export default function HotelPartnerRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleBack = () => {
    console.log('Back button clicked - Navigating to partner selection');
    router.back();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    const updatedValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: updatedValue
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    console.log(`Input Changed - ${name}:`, updatedValue);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact person name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the terms and privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('=== FORM SUBMISSION ATTEMPT ===');
    console.log('Current Form Data:', formData);

    if (validateForm()) {
      console.log('=== FORM VALIDATION PASSED ===');
      console.log('Form Data Submitted:', formData);
      console.log('Redirecting to business details...');
      router.push('/partner/business-details');
    } else {
      console.log('=== FORM VALIDATION FAILED ===');
      console.log('Errors:', errors);
    }
  };

  const handleSignIn = () => {
    console.log('Sign in link clicked');
    router.push('/signin');
  };

  return (
    <div className="min-h-screen bg-teal-700 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>

        {/* Step Indicator */}
        <div className="mb-6">
          <span className="inline-block bg-teal-600 text-white text-xs px-3 py-1.5 rounded">
            Step 1 of 3
          </span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
          <p className="text-white/80 text-sm">Register as a Hotel/Resort partner</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Person Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-2.5 border ${
                    errors.contactName ? 'border-red-400' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400`}
                />
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {errors.contactName && (
                <p className="mt-1 text-sm text-red-500">{errors.contactName}</p>
              )}
            </div>

            {/* Email Address */}
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
                  placeholder="your.email@example.com"
                  className={`w-full pl-10 pr-4 py-2.5 border ${
                    errors.email ? 'border-red-400' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400`}
                />
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
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
                  placeholder="+880 1234-567890"
                  className={`w-full pl-10 pr-4 py-2.5 border ${
                    errors.phone ? 'border-red-400' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400`}
                />
                <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Minimum 8 characters"
                  className={`w-full pl-10 pr-12 py-2.5 border ${
                    errors.password ? 'border-red-400' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400`}
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Re-enter your password"
                  className={`w-full pl-10 pr-12 py-2.5 border ${
                    errors.confirmPassword ? 'border-red-400' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400`}
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3">
              <div className="flex items-center h-5 mt-0.5">
                <input
                  id="terms"
                  name="agreedToTerms"
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 border-gray-300 rounded focus:ring-teal-500 text-teal-600"
                />
              </div>
              <div className="text-sm">
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the{' '}
                  <a href="/terms" className="text-teal-600 hover:text-teal-700 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-teal-600 hover:text-teal-700 hover:underline">
                    Privacy Policy
                  </a>
                </label>
                {errors.agreedToTerms && (
                  <p className="mt-1 text-red-500">{errors.agreedToTerms}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
          <Link href="/partnerflowtwo">
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 mt-5"
            >
              Continue to Business Details
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </Link>

            {/* Sign In Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="text-teal-600 hover:text-teal-700 font-medium hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}