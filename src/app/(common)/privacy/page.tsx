import React from 'react';
import { Shield, Database, Users, Lock, FileText, UserCheck, Cookie, Bell, Scale, Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-teal-100 text-sm">Last Updated: December 7, 2025</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <p className="text-gray-700 text-sm leading-relaxed">
            At TripLink, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. 
            Please read this policy carefully to understand our practices regarding your personal data.
          </p>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-12">
          By accessing or using TripLink&apos;s services, you agree to the terms outlined in this Privacy Policy. 
          If you do not agree with any part of this policy, please do not use our platform.
        </p>

        {/* Section 1 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Database className="w-6 h-6 text-teal-600" />
                Information We Collect
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
              <p className="leading-relaxed mb-2">
                When you create an account or use our services, we may collect personal information including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name and contact details (email address, phone number)</li>
                <li>Profile information and preferences</li>
                <li>Payment and billing information</li>
                <li>Government-issued identification for verification purposes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Usage Information</h3>
              <p className="leading-relaxed">
                We automatically collect information about how you interact with our platform, including your IP address, 
                browser type, device information, pages visited, and the time and date of your visits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Location Data</h3>
              <p className="leading-relaxed">
                With your permission, we may collect location data to provide location-based services and enhance your experience 
                with local expert recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <FileText className="w-6 h-6 text-teal-600" />
                How We Use Your Information
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">We use the collected information for various purposes:</p>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Service Delivery</h3>
              <p className="leading-relaxed">
                To provide, maintain, and improve our platform, process transactions, and connect you with local experts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Communication</h3>
              <p className="leading-relaxed">
                To send you important updates, newsletters, marketing communications, and respond to your inquiries. 
                You can opt-out of marketing communications at any time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Personalization</h3>
              <p className="leading-relaxed">
                To customize your experience, provide relevant recommendations, and improve our services based on your preferences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Security and Fraud Prevention</h3>
              <p className="leading-relaxed">
                To protect our platform, users, and business from fraudulent activities, unauthorized access, and other security threats.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-teal-600" />
                Sharing of Information
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">We may share your information in the following circumstances:</p>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">With Local Experts</h3>
              <p className="leading-relaxed">
                We share necessary information with local experts to facilitate bookings and provide services you request.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Service Providers</h3>
              <p className="leading-relaxed">
                We work with third-party service providers who assist us with payment processing, data analysis, marketing, 
                and other business operations. These providers are contractually obligated to protect your information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Legal Requirements</h3>
              <p className="leading-relaxed">
                We may disclose your information when required by law, legal processes, or to protect our rights, safety, 
                and the rights of our users.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Business Transfers</h3>
              <p className="leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              4
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Lock className="w-6 h-6 text-teal-600" />
                Data Security
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. Our security practices include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Secure authentication and access controls</li>
              <li>Employee training on data protection and privacy</li>
              <li>Compliance with industry best practices and standards</li>
            </ul>
            <p className="leading-relaxed">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your personal 
              information, we cannot guarantee absolute security.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              5
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-teal-600" />
                Your Rights and Choices
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">You have certain rights regarding your personal information:</p>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Access and Correction</h3>
              <p className="leading-relaxed">
                You can access, update, or correct your personal information through your account settings at any time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Data Deletion</h3>
              <p className="leading-relaxed">
                You may request deletion of your personal information, subject to legal and contractual obligations. 
                We will retain certain information as required by law or for legitimate business purposes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Opt-Out</h3>
              <p className="leading-relaxed">
                You can opt-out of receiving marketing communications by following the unsubscribe instructions in our emails 
                or adjusting your communication preferences in your account settings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Data Portability</h3>
              <p className="leading-relaxed">
                You have the right to request a copy of your personal information in a structured, commonly used format.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              6
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Cookie className="w-6 h-6 text-teal-600" />
                Cookies and Tracking
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Cookie Usage</h3>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
                and understand user behavior. Cookies are small text files stored on your device.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Types of Cookies</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><span className="font-medium">Essential Cookies:</span> Required for the platform to function properly</li>
                <li><span className="font-medium">Performance Cookies:</span> Help us understand how visitors interact with our platform</li>
                <li><span className="font-medium">Functionality Cookies:</span> Remember your preferences and settings</li>
                <li><span className="font-medium">Marketing Cookies:</span> Used to deliver relevant advertisements</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Managing Cookies</h3>
              <p className="leading-relaxed">
                You can control cookie settings through your browser preferences. Note that disabling certain cookies may 
                affect the functionality of our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              7
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Bell className="w-6 h-6 text-teal-600" />
                Third-Party Links
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">
              Our platform may contain links to third-party websites or services. We are not responsible for the privacy 
              practices or content of these external sites. We encourage you to review the privacy policies of any third-party 
              sites you visit.
            </p>
            <p className="leading-relaxed">
              When you click on third-party links, you leave our platform and are subject to the terms and policies of those 
              external websites.
            </p>
          </div>
        </div>

        {/* Section 8 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              8
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-teal-600" />
                Children&apos;s Privacy
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information 
              from children under 13. If we become aware that we have collected information from a child under 13, we will take 
              steps to delete such information promptly.
            </p>
            <p className="leading-relaxed">
              Parents or guardians who believe their child has provided personal information to us should contact us immediately.
            </p>
          </div>
        </div>

        {/* Section 9 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              9
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Scale className="w-6 h-6 text-teal-600" />
                International Data Transfers
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have different data protection laws than your jurisdiction.
            </p>
            <p className="leading-relaxed">
              By using our services, you consent to the transfer of your information to these countries. We take appropriate 
              steps to ensure your information is protected in accordance with this Privacy Policy and applicable laws.
            </p>
          </div>
        </div>

        {/* Section 10 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              10
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <FileText className="w-6 h-6 text-teal-600" />
                Data Retention
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
              resolve disputes, and enforce our agreements.
            </p>
            <p className="leading-relaxed">
              When your information is no longer needed, we will securely delete or anonymize it. The retention period varies 
              depending on the type of information and the purpose for which it was collected.
            </p>
          </div>
        </div>

        {/* Section 11 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              11
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Bell className="w-6 h-6 text-teal-600" />
                Changes to Privacy Policy
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the updated policy on our platform and updating the 
              &quot;Last Updated&quot; date.
            </p>
            <p className="leading-relaxed">
              We encourage you to review this Privacy Policy periodically. Your continued use of our services after any changes 
              constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-teal-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions or Concerns?</h2>
          <p className="text-teal-100 mb-6 text-sm">
            If you have any questions about this Privacy Policy or our data practices,<br />
            please don&apos;t hesitate to contact us.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>privacy@triplink.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <span>Data Protection Officer</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>123 Business Avenue, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}