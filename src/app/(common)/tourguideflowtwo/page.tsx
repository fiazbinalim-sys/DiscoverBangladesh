"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Camera,
  MapPin,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function GuideProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    bio: '',
    languages: [] as string[],
    expertise: [] as string[]
  });
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const languageOptions = [
    'English', 'Spanish', 'French', 'German', 'Italian',
    'Portuguese', 'Mandarin', 'Japanese', 'Arabic', 'Hindi'
  ];

  const expertiseOptions = [
    'Cultural Tours', 'Food & Cuisine', 'Adventure Sports',
    'Historical Sites', 'Wildlife & Nature', 'Photography',
    'Beach Activities', 'Mountain Hiking', 'City Walking Tours',
    'Wine Tasting'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'bio') {
      if (value.length <= maxChars) {
        setFormData(prev => ({ ...prev, [name]: value }));
        setCharCount(value.length);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleSelection = (category: 'languages' | 'expertise', item: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter(i => i !== item)
        : [...prev[category], item]
    }));
  };

  const handleBack = () => {
    console.log('Back clicked');
    router.back();
  };

  const handleContinue = () => {
    console.log('Form data:', formData);
    router.push('/guide/availability');
  };

  const handlePhotoUpload = () => {
    console.log('Photo upload clicked');
    // Handle photo upload logic
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell Us About Yourself</h1>
        <p className="text-gray-600 text-sm mb-8">
          Create a compelling profile that showcases your expertise and attracts travelers.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Photo
              </label>
              <button
                onClick={handlePhotoUpload}
                className="w-full border-2 border-teal-600 border-dashed rounded-lg p-12 hover:bg-teal-50 transition-colors flex flex-col items-center justify-center gap-3"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-center">
                  <p className="text-gray-700 font-medium">Click to upload your photo</p>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                </div>
              </button>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Barcelona, Spain"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400"
                />
                <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={6}
                placeholder="Share your story, experience, and what makes you a great guide..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder:text-gray-400 resize-none"
              ></textarea>
              <div className="flex justify-end mt-1">
                <p className="text-xs text-gray-500">
                  {charCount} / {maxChars} characters
                </p>
              </div>
            </div>

            {/* Languages You Speak */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Languages You Speak
              </label>
              <div className="flex flex-wrap gap-2">
                {languageOptions.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => toggleSelection('languages', lang)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      formData.languages.includes(lang)
                        ? 'bg-teal-600 text-white border-2 border-teal-600'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-teal-600'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Areas of Expertise */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Areas of Expertise
              </label>
              <div className="flex flex-wrap gap-2">
                {expertiseOptions.map((exp) => (
                  <button
                    key={exp}
                    type="button"
                    onClick={() => toggleSelection('expertise', exp)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      formData.expertise.includes(exp)
                        ? 'bg-teal-600 text-white border-2 border-teal-600'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-teal-600'
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-3 border-2 border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
         <Link href="/tourguideflowthree">
          <button
            onClick={handleContinue}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
         </Link>


        </div>
      </div>
    </div>
  );
}