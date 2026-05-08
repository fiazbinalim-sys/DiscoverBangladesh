"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Image as ImageIcon,
  Wifi,
//   Pool,
  Utensils,
//   Spa,
  Car,
  Dumbbell,
  Bell,
  Wind,
  Waves,
  Users,
  Shirt,
  Plane,
  PawPrint,
  Gamepad2,
  TreePine,
  Check,
  Upload,
  Eye,
  PenTool,
  Space,
  Sparkle,

} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PropertyDetailsForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    rooms: '20',
    guests: '50',
    price: '5000',
    priceUnit: 'per night'
  });
  
  const [images, setImages] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<Record<string, boolean>>({
    wifi: false,
    pool: false,
    restaurant: false,
    spa: false,
    parking: false,
    gym: false,
    roomService: false,
    ac: false,
    beach: false,
    conference: false,
    bar: false,
    laundry: false,
    shuttle: false,
    petFriendly: false,
    kidsArea: false,
    garden: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const amenitiesList = [
    { id: 'wifi', label: 'Wi-Fi', icon: <Wifi className="w-5 h-5" /> },
    { id: 'pool', label: 'Swimming Pool', icon: <PenTool className="w-5 h-5" /> },
    { id: 'restaurant', label: 'Restaurant', icon: <Utensils className="w-5 h-5" /> },
    { id: 'spa', label: 'Spa & Wellness', icon: <Space className="w-5 h-5" /> },
    { id: 'parking', label: 'Parking', icon: <Car className="w-5 h-5" /> },
    { id: 'gym', label: 'Gym/Fitness Center', icon: <Dumbbell className="w-5 h-5" /> },
    { id: 'roomService', label: 'Room Service', icon: <Bell className="w-5 h-5" /> },
    { id: 'ac', label: 'Air Conditioning', icon: <Wind className="w-5 h-5" /> },
    { id: 'beach', label: 'Beach Access', icon: <Waves className="w-5 h-5" /> },
    { id: 'conference', label: 'Conference Room', icon: <Users className="w-5 h-5" /> },
    { id: 'bar', label: 'Bar/Lounge', icon: <Sparkle className="w-5 h-5" /> },
    { id: 'laundry', label: 'Laundry Service', icon: <Shirt className="w-5 h-5" /> },
    { id: 'shuttle', label: 'Airport Shuttle', icon: <Plane className="w-5 h-5" /> },
    { id: 'petFriendly', label: 'Pet Friendly', icon: <PawPrint className="w-5 h-5" /> },
    { id: 'kidsArea', label: 'Kids Play Area', icon: <Gamepad2 className="w-5 h-5" /> },
    { id: 'garden', label: 'Garden/Terrace', icon: <TreePine className="w-5 h-5" /> }
  ];

  const priceUnits = ['per night', 'per week', 'per month'];

  const handleBack = () => {
    console.log('Back button clicked');
    router.back();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    console.log(`Input Changed - ${name}:`, value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    
    Array.from(files).forEach(file => {
      if (images.length + newImages.length >= 10) {
        alert('Maximum 10 images allowed');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        newImages.push(result);
        
        if (newImages.length === Math.min(files.length, 10 - images.length)) {
          setImages(prev => [...prev, ...newImages]);
          console.log(`Added ${newImages.length} images`);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageUrlAdd = () => {
    const url = prompt('Enter image URL:');
    if (url && images.length < 10) {
      setImages(prev => [...prev, url]);
      console.log('Added image URL:', url);
    } else if (images.length >= 10) {
      alert('Maximum 10 images allowed');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    console.log('Removed image at index:', index);
  };

  const handleAmenityToggle = (amenityId: string) => {
    setAmenities(prev => ({
      ...prev,
      [amenityId]: !prev[amenityId]
    }));
    console.log(`Amenity toggled - ${amenityId}:`, !amenities[amenityId]);
  };

  const handleUseDemoImages = () => {
    const demoImages = [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w-800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop'
    ];
    
    setImages(demoImages.slice(0, Math.min(10 - images.length, demoImages.length)));
    console.log('Added demo images');
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (images.length === 0) {
      newErrors.images = 'Please add at least one property image';
    }

    if (!formData.rooms.trim() || parseInt(formData.rooms) <= 0) {
      newErrors.rooms = 'Number of rooms is required';
    }

    if (!formData.guests.trim() || parseInt(formData.guests) <= 0) {
      newErrors.guests = 'Maximum guests is required';
    }

    if (!formData.price.trim() || parseInt(formData.price) <= 0) {
      newErrors.price = 'Starting price is required';
    }

    if (!formData.priceUnit) {
      newErrors.priceUnit = 'Please select a price unit';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('=== FORM SUBMISSION ATTEMPT ===');
    console.log('Current Form Data:', formData);
    console.log('Selected Amenities:', amenities);
    console.log('Images Count:', images.length);

    if (validateForm()) {
      setIsSubmitting(true);
      console.log('=== FORM VALIDATION PASSED ===');
      console.log('Form Data Submitted:', { formData, amenities, images: images.length });
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        console.log('Redirecting to success page...');
        router.push('/partner/success');
      }, 1500);
    } else {
      console.log('=== FORM VALIDATION FAILED ===');
      console.log('Errors:', errors);
    }
  };

  return (
    <div className="min-h-screen bg-teal-700 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
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
            Step 3 of 3
          </span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Property Details</h1>
          <p className="text-white/80 text-sm">Showcase your property with images, amenities, and pricing</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Images Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Property Images <span className="text-red-500">*</span>
              </h2>
              <p className="text-gray-600 text-sm mb-4">Add up to 10 high-quality images of your property</p>
              
              {/* Image Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-400 transition-colors duration-200">
                <div className="flex flex-col items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-gray-600 mb-2">Drag & drop images or click to upload</p>
                  <p className="text-gray-500 text-sm mb-4">(Max 10 images, JPG, PNG up to 5MB each)</p>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Upload Images
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleImageUrlAdd}
                      className="border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2.5 px-5 rounded-lg transition-colors duration-200"
                    >
                      Add Image URL
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleUseDemoImages}
                      className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2.5 px-5 rounded-lg transition-colors duration-200"
                    >
                      Use Sample Images
                    </button>
                  </div>
                </div>
                
                {/* Image Preview Grid */}
                {images.length > 0 && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">
                        Selected Images ({images.length}/10)
                      </h3>
                      <span className="text-xs text-gray-500">
                        Click on image to preview
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {images.map((img, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                            <Image
                              src={img}
                              alt={`Property image ${index + 1}`}
                                width={200}
                                height={200}

                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                          >
                            ×
                          </button>
                          <button
                            type="button"
                            onClick={() => window.open(img, '_blank')}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center w-10 h-10 rounded-lg"
                          >
                            <Eye className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {errors.images && (
                  <p className="mt-3 text-sm text-red-500 text-center">{errors.images}</p>
                )}
              </div>
            </div>

            {/* Capacity Section */}
            <div className="pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Capacity</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Number of Rooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Rooms <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    min="1"
                    className={`w-full px-4 py-2.5 border ${
                      errors.rooms ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                  />
                  {errors.rooms && (
                    <p className="mt-1 text-sm text-red-500">{errors.rooms}</p>
                  )}
                </div>

                {/* Maximum Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Guests <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    min="1"
                    className={`w-full px-4 py-2.5 border ${
                      errors.guests ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                  />
                  {errors.guests && (
                    <p className="mt-1 text-sm text-red-500">{errors.guests}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Amenities & Features <span className="text-red-500">*</span>
              </h2>
              <p className="text-gray-600 text-sm mb-6">Select all amenities available at your property</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {amenitiesList.map((amenity) => (
                  <button
                    key={amenity.id}
                    type="button"
                    onClick={() => handleAmenityToggle(amenity.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                      amenities[amenity.id]
                        ? 'border-teal-500 bg-teal-50 text-teal-700'
                        : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className={`p-1.5 rounded ${
                      amenities[amenity.id] ? 'bg-teal-100' : 'bg-gray-100'
                    }`}>
                      {amenity.icon}
                    </div>
                    <span className="text-sm font-medium">{amenity.label}</span>
                    {amenities[amenity.id] && (
                      <Check className="w-4 h-4 ml-auto text-teal-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Starting Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Starting Price (৳) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">৳</span>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      min="1"
                      className={`w-full pl-8 pr-4 py-2.5 border ${
                        errors.price ? 'border-red-400' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                    />
                  </div>
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                  )}
                </div>

                {/* Price Unit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Unit <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="priceUnit"
                    value={formData.priceUnit}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.priceUnit ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 appearance-none bg-white cursor-pointer`}
                  >
                    {priceUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                  {errors.priceUnit && (
                    <p className="mt-1 text-sm text-red-500">{errors.priceUnit}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-8 border-t border-gray-200">
             
              
             <Link href="partnerflowfour">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit for Review </span>
                    <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              </Link>

               <div className=" border-blue-200 rounded-lg p-4 mb-6 ">
                <p className="text-sm text-gray-700 text-center">
                  <span className="font-semibold">Note:</span> Your listing will be reviewed within 24-48 hours
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}