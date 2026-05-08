"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Building2,
  MapPin,
  Mail,
  Phone,
  Globe,
  ChevronDown,
  Check
} from 'lucide-react';
import Link from 'next/link';

export default function BusinessDetailsForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: '',
    category: 'Luxury Hotel',
    description: '',
    streetAddress: '',
    city: '',
    district: '',
    businessEmail: '',
    businessPhone: '',
    website: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [charCount, setCharCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const maxChars = 500;
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    'Luxury Hotel',
    'Budget Hotel',
    'Resort',
    'Boutique Hotel',
    'Guest Hotel',
    'Eco Resort'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBack = () => {
    console.log('Back button clicked');
    router.back();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'description') {
      if (value.length <= maxChars) {
        setFormData(prev => ({ ...prev, [name]: value }));
        setCharCount(value.length);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    console.log(`Input Changed - ${name}:`, value);
  };

  const handleCategorySelect = (category: string) => {
    setFormData(prev => ({ ...prev, category }));
    setIsDropdownOpen(false);
    console.log(`Category selected: ${category}`);
    
    // Clear error if exists
    if (errors.category) {
      setErrors(prev => ({ ...prev, category: '' }));
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Street address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.district.trim()) {
      newErrors.district = 'District is required';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address';
    }

    if (!formData.businessPhone.trim()) {
      newErrors.businessPhone = 'Business phone is required';
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
      console.log('Redirecting to property details...');
      router.push('/partner/property-details');
    } else {
      console.log('=== FORM VALIDATION FAILED ===');
      console.log('Errors:', errors);
    }
  };

  return (
    <div className="min-h-screen bg-teal-700 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-all duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back</span>
        </button>

        {/* Step Indicator */}
        <div className="mb-6">
          <span className="inline-block bg-teal-600 text-white text-xs px-3 py-1.5 rounded">
            Step 2 of 3
          </span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Business Details</h1>
          <p className="text-white/80 text-sm">Tell us about your business to help travelers find you</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Enter your business name"
                  className={`w-full pl-10 pr-4 py-2.5 border ${
                    errors.businessName ? 'border-red-400' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                />
                <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {errors.businessName && (
                <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.businessName}</p>
              )}
            </div>

            {/* Custom Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              
              {/* Dropdown Trigger */}
              <button
                type="button"
                onClick={toggleDropdown}
                className={`w-full px-4 py-2.5 border ${
                  errors.category ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 bg-white flex items-center justify-between hover:border-teal-400`}
              >
                <span className="truncate">{formData.category}</span>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                  <div className="max-h-60 overflow-y-auto custom-scrollbar">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleCategorySelect(cat)}
                        className={`w-full px-4 py-3 text-left hover:bg-teal-50 transition-colors duration-200 flex items-center justify-between ${
                          formData.category === cat ? 'bg-teal-50 text-teal-700' : 'text-gray-700'
                        }`}
                      >
                        <span>{cat}</span>
                        {formData.category === cat && (
                          <Check className="w-4 h-4 text-teal-600 animate-fadeIn" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {errors.category && (
                <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.category}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Describe your business, what makes it unique, and what guests can expect..."
                className={`w-full px-4 py-3 border ${
                  errors.description ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400 resize-none`}
              ></textarea>
              <div className="flex justify-between items-center mt-1">
                {errors.description && (
                  <p className="text-sm text-red-500 animate-pulse">{errors.description}</p>
                )}
                <p className={`text-xs ml-auto transition-colors duration-200 ${
                  charCount === maxChars ? 'text-red-500' : 'text-gray-500'
                }`}>
                  {charCount} / {maxChars} characters
                </p>
              </div>
            </div>

            {/* Location Information */}
            <div className="pt-4">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Location Information</h2>
              
              {/* Street Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="Street address, building name/number"
                    className={`w-full pl-10 pr-4 py-2.5 border ${
                      errors.streetAddress ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                  />
                  <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
                {errors.streetAddress && (
                  <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.streetAddress}</p>
                )}
              </div>

              {/* City and District */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className={`w-full px-4 py-2.5 border ${
                      errors.city ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    placeholder="District"
                    className={`w-full px-4 py-2.5 border ${
                      errors.district ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                  />
                  {errors.district && (
                    <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.district}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-4">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Contact Information</h2>
              
              {/* Business Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="business@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 border ${
                      errors.businessEmail ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                  />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
                {errors.businessEmail && (
                  <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.businessEmail}</p>
                )}
              </div>

              {/* Business Phone */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Phone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="businessPhone"
                    value={formData.businessPhone}
                    onChange={handleInputChange}
                    placeholder="+880 1234-567890"
                    className={`w-full pl-10 pr-4 py-2.5 border ${
                      errors.businessPhone ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                  />
                  <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
                {errors.businessPhone && (
                  <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.businessPhone}</p>
                )}
              </div>

              {/* Website (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://www.yourbusiness.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                  />
                  <Globe className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
           <Link href="partnerflowthree">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-5"
            >
              <span>Continue to Property Details</span>
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
           </Link>
          </form>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f1f5f9;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
      `}</style>
    </div>
  );
}