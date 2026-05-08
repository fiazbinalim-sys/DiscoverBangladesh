import React from 'react';
import { FileText, UserCheck, CreditCard, RefreshCw, Shield, AlertTriangle, Users, Ban, Scale, Globe, BookOpen, Mail } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-teal-100 text-sm">Last Updated: December 7, 2025</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
          <h3 className="font-bold text-gray-800 mb-2 text-sm">IMPORTANT NOTICE</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            These Terms and Conditions (&quot;Terms&quot;) govern your use of TripLink&apos;s platform and services. By accessing or using our services, 
            you agree to be bound by these Terms. Please read them carefully. If you do not agree to these Terms, you must not use our platform. 
            These Terms constitute a legally binding agreement between you and TripLink.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-10 bg-[#F3F4F6] p-6 rounded-lg border shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-teal-600" />
                Acceptance of Terms
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Agreement to Terms</h3>
              <p className="leading-relaxed">
                By creating an account, accessing, or using TripLink&apos;s services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and our Privacy Policy. This agreement is effective as of the date you first 
                access or use our services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Eligibility</h3>
              <p className="leading-relaxed mb-2">
                To use our services, you must:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be prohibited from using our services under applicable laws</li>
                <li>Provide accurate and complete information during registration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Account Responsibility</h3>
              <p className="leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that 
                occur under your account. You must notify us immediately of any unauthorized use of your account or any security breach.
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
                <Users className="w-6 h-6 text-teal-600" />
                User Roles and Responsibilities
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Travelers</h3>
              <p className="leading-relaxed mb-2">
                As a traveler using TripLink, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate booking information and special requirements</li>
                <li>Communicate respectfully with local experts</li>
                <li>Honor confirmed bookings and cancellation policies</li>
                <li>Pay all applicable fees and charges on time</li>
                <li>Follow local laws and customs during your travels</li>
                <li>Leave honest and fair reviews based on your experience</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Local Experts</h3>
              <p className="leading-relaxed mb-2">
                As a local expert on TripLink, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate descriptions of your services and expertise</li>
                <li>Maintain appropriate licenses and insurance as required by local laws</li>
                <li>Deliver services as described and maintain professional standards</li>
                <li>Respond promptly to traveler inquiries and booking requests</li>
                <li>Honor confirmed bookings and provide adequate notice for cancellations</li>
                <li>Comply with our expert guidelines and quality standards</li>
              </ul>
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
                <CreditCard className="w-6 h-6 text-teal-600" />
                Bookings and Payments
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Booking Process</h3>
              <p className="leading-relaxed">
                When you make a booking through TripLink, you enter into a direct contract with the local expert. TripLink acts 
                as a platform facilitator and is not a party to the contract between you and the expert. All bookings are subject 
                to acceptance by the local expert.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Payment Terms</h3>
              <p className="leading-relaxed mb-2">
                All payments must be made through TripLink&apos;s secure payment system. We accept various payment methods including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Credit and debit cards (Visa, Mastercard, American Express)</li>
                <li>Digital wallets and online payment services</li>
                <li>Bank transfers for specific regions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Service Fees</h3>
              <p className="leading-relaxed">
                TripLink charges a service fee for using our platform. This fee covers payment processing, customer support, 
                and platform maintenance. Service fees are clearly displayed before you complete your booking and are non-refundable 
                except as required by law.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Pricing and Currency</h3>
              <p className="leading-relaxed">
                All prices are displayed in the currency selected at the time of booking. Prices may be subject to currency 
                conversion fees charged by your financial institution. We reserve the right to correct pricing errors.
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
                <RefreshCw className="w-6 h-6 text-teal-600" />
                Cancellations and Refunds
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Cancellation Policies</h3>
              <p className="leading-relaxed">
                Each local expert sets their own cancellation policy. The applicable policy is displayed on the service listing 
                and at the time of booking. Common cancellation policies include flexible, moderate, and strict options. 
                Please review the cancellation policy carefully before booking.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Traveler Cancellations</h3>
              <p className="leading-relaxed">
                If you need to cancel a booking, refunds will be processed according to the expert&apos;s cancellation policy. 
                To cancel, you must use the cancellation feature in your account. Cancellations made outside the platform 
                are not eligible for refunds through TripLink.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Cancellations</h3>
              <p className="leading-relaxed">
                If a local expert cancels a confirmed booking, you will receive a full refund including service fees. 
                We may also assist in finding alternative services or provide compensation as appropriate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Refund Processing</h3>
              <p className="leading-relaxed">
                Approved refunds are processed within 5-10 business days to the original payment method. The time it takes 
                for the refund to appear in your account depends on your financial institution.
              </p>
            </div>
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
                <Shield className="w-6 h-6 text-teal-600" />
                Platform Usage and Content
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Acceptable Use</h3>
              <p className="leading-relaxed mb-2">
                You agree to use TripLink only for lawful purposes. You must not:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Violate any local, national, or international laws</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful code or viruses</li>
                <li>Engage in fraudulent activities or misrepresentation</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to circumvent our payment system</li>
                <li>Create multiple accounts or impersonate others</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">User Content</h3>
              <p className="leading-relaxed">
                You may post reviews, photos, and other content on TripLink. By posting content, you grant us a worldwide, 
                non-exclusive, royalty-free license to use, display, and distribute your content in connection with our services. 
                You represent that you own or have permission to use all content you post.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Content Moderation</h3>
              <p className="leading-relaxed">
                We reserve the right to remove any content that violates these Terms or is otherwise objectionable. 
                This includes but is not limited to content that is illegal, abusive, defamatory, or infringes on third-party rights.
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
                <AlertTriangle className="w-6 h-6 text-teal-600" />
                Liability and Disclaimers
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Platform Role</h3>
              <p className="leading-relaxed">
                TripLink is a platform that connects travelers with local experts. We do not provide travel services directly. 
                We are not responsible for the actions, conduct, or services of local experts or travelers. All interactions 
                and transactions are between users.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Disclaimer of Warranties</h3>
              <p className="leading-relaxed">
                Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee 
                that our services will be uninterrupted, error-free, or secure. We make no warranties regarding the quality, 
                accuracy, or reliability of services provided by local experts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Limitation of Liability</h3>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, TripLink shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising from your use of our platform. Our total liability for any claim 
                shall not exceed the amount you paid to TripLink in the 12 months preceding the claim.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Indemnification</h3>
              <p className="leading-relaxed">
                You agree to indemnify and hold TripLink harmless from any claims, damages, or expenses arising from your use 
                of the platform, your violation of these Terms, or your violation of any rights of another party.
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
                <BookOpen className="w-6 h-6 text-teal-600" />
                Intellectual Property
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Platform Ownership</h3>
              <p className="leading-relaxed">
                All content, features, and functionality of TripLink, including but not limited to text, graphics, logos, 
                icons, images, and software, are owned by TripLink or its licensors and are protected by copyright, trademark, 
                and other intellectual property laws.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">License to Use</h3>
              <p className="leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to access and use our platform for personal, 
                non-commercial purposes. This license does not include any rights to copy, modify, distribute, or create 
                derivative works from our platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Trademark Usage</h3>
              <p className="leading-relaxed">
                TripLink&apos;s trademarks, service marks, and logos may not be used without our prior written permission. 
                Unauthorized use may violate trademark laws.
              </p>
            </div>
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
                <Ban className="w-6 h-6 text-teal-600" />
                Account Suspension and Termination
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Our Right to Terminate</h3>
              <p className="leading-relaxed mb-2">
                We reserve the right to suspend or terminate your account at any time for:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Violation of these Terms or our policies</li>
                <li>Fraudulent or illegal activity</li>
                <li>Providing false or misleading information</li>
                <li>Abuse of other users or our staff</li>
                <li>Any conduct that we deem harmful to our platform or community</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Your Right to Terminate</h3>
              <p className="leading-relaxed">
                You may terminate your account at any time through your account settings. Upon termination, you remain liable 
                for all outstanding obligations, including confirmed bookings and unpaid fees.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Effect of Termination</h3>
              <p className="leading-relaxed">
                Upon termination, your right to access and use the platform will immediately cease. We may retain certain 
                information as required by law or for legitimate business purposes.
              </p>
            </div>
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
                Dispute Resolution
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Informal Resolution</h3>
              <p className="leading-relaxed">
                In the event of a dispute, we encourage you to contact us first to seek an informal resolution. 
                Many disputes can be resolved quickly through communication with our support team.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Mediation and Arbitration</h3>
              <p className="leading-relaxed">
                If informal resolution is unsuccessful, disputes will be resolved through binding arbitration in accordance 
                with the rules of [Arbitration Body]. The arbitration will be conducted in English and held in [Jurisdiction].
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Class Action Waiver</h3>
              <p className="leading-relaxed">
                You agree to resolve disputes with TripLink on an individual basis. You waive any right to participate in 
                class actions or class-wide arbitration.
              </p>
            </div>
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
                <Globe className="w-6 h-6 text-teal-600" />
                Governing Law
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Applicable Law</h3>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to 
                its conflict of law provisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Jurisdiction</h3>
              <p className="leading-relaxed">
                Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in 
                Dhaka, Bangladesh, and you consent to personal jurisdiction in such courts.
              </p>
            </div>
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
                <FileText className="w-6 h-6 text-teal-600" />
                General Provisions
              </h2>
            </div>
          </div>
          <div className="ml-14 space-y-4 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Entire Agreement</h3>
              <p className="leading-relaxed">
                These Terms, together with our Privacy Policy and any other legal notices published by us, constitute the 
                entire agreement between you and TripLink regarding the use of our platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Severability</h3>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue 
                to be valid and enforceable to the fullest extent permitted by law.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Waiver</h3>
              <p className="leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. 
                Any waiver must be in writing and signed by an authorized representative of TripLink.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Assignment</h3>
              <p className="leading-relaxed">
                You may not assign or transfer these Terms or your account without our prior written consent. We may assign 
                our rights and obligations under these Terms without restriction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Updates to Terms</h3>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting 
                the updated Terms on our platform and updating the &quot;Last Updated&quot; date. Your continued use of the platform 
                after changes constitutes acceptance of the modified Terms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-teal-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="text-teal-100 mb-6 text-sm">
            If you have any questions or concerns about these Terms & Conditions,<br />
            please contact our legal team.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>legal@triplink.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Legal Department</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              <span>123 Business Avenue, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}