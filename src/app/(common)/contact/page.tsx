"use client";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We&apos;re Here to Help
          </h1>
          <p className="text-teal-100 text-lg mb-8">
            Have questions? We&apos;d love to hear from you. Send us a{" "}
            <span className="font-semibold text-white">message</span>
            <br />
            and we&apos;ll respond as soon as possible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors">
              <MessageCircle className="w-5 h-5" />
              Get Started
            </button>
            <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-teal-700 font-semibold px-6 py-3 rounded-full transition-colors">
              <Phone className="w-5 h-5" />
              Live Chat
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto -mt-12 px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-4">
              <MapPin className="w-7 h-7 text-teal-700" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-sm text-gray-600">
              123 Business Avenue Suite,
              <br />
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-4">
              <Phone className="w-7 h-7 text-teal-700" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-sm text-gray-600">+880 123-456-789</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-4">
              <Mail className="w-7 h-7 text-teal-700" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-sm text-gray-600">info@triptraveling.com</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-4">
              <Clock className="w-7 h-7 text-teal-700" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Working Hours</h3>
            <p className="text-sm text-gray-600">
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Send Us a Message Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F3F3F5]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F3F3F5]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F3F3F5]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none bg-[#F3F3F5]"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Business Hours */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-800">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-800">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-800">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Departments */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Departments
              </h2>

              <div className="space-y-6">
                {/* Customer Support */}
                <div className="pb-6 border-b border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-1">
                    Customer Support
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Get help with bookings and inquiries
                  </p>
                  <a
                    href="mailto:support@triptraveling.com"
                    className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    support@triptraveling.com
                  </a>
                </div>

                {/* Business Partnership */}
                <div className="pb-6 border-b border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-1">
                    Business Partnership
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Collaborate with us
                  </p>
                  <a
                    href="mailto:partnership@triptraveling.com"
                    className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    partnership@triptraveling.com
                  </a>
                </div>

                {/* Marketing & PR */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Marketing & PR
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Media and press inquiries
                  </p>
                  <a
                    href="mailto:marketing@triptraveling.com"
                    className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    marketing@triptraveling.com
                  </a>
                </div>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-teal-700 text-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Need Immediate Help?</h3>
                  <p className="text-sm text-teal-100">
                    Chat with our support team
                  </p>
                </div>
              </div>
              <button className="w-full bg-white hover:bg-gray-100 text-teal-700 font-semibold py-3 rounded-lg transition-colors">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Location Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Our Location
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Conveniently located in Mohammadpur, Asadgate, with easy access to
            major city attractions
          </p>

          {/* Map Container */}
          <div className="w-full h-96 relative rounded-lg overflow-hidden">
            <Image
              src="/Plan-trip/map.png"
              alt="Location Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
