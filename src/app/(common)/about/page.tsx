import {
  Award,
  Eye,
  Globe,
  Lightbulb,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function TravelExpertsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Connecting Travelers with
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Local Experts Worldwide
          </h2>
          <p className="text-teal-100 text-sm md:text-base">
            With TripLink, create unforgettable tours and become the gateway to
            authentic experiences
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#F9FAFB] p-6 rounded-lg">
          <div className="text-center">
            <div className="inline-block p-3 bg-[#009966] rounded-lg mb-3">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800">
              10,000+
            </div>
            <div className="text-sm text-gray-600">Active Guides</div>
          </div>
          <div className="text-center">
            <div className="inline-block p-3 bg-[#009966] rounded-lg mb-3">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800">
              150+
            </div>
            <div className="text-sm text-gray-600">Countires</div>
          </div>
          <div className="text-center">
            <div className="inline-block p-3 bg-[#009966] rounded-lg mb-3">
              <Star className="w-10 h-10 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800">
              2M+
            </div>
            <div className="text-sm text-gray-600">Tours Completed</div>
          </div>
          <div className="text-center">
            <div className="inline-block p-3 bg-[#009966] rounded-lg mb-3">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800">
              4.8/5
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 border-b-2 pb-4 border-[#009966]">
          Our Story
        </h2>

        <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
          <p>
            TripLink&apos;s journey started from a simple vision—to help travelers
            like you find local experts who know their destinations inside and
            out. We realized that the most memorable travel experiences come
            from connecting with people who live and breathe the culture,
            history, and hidden gems of their home. Instead of cookie-cutter
            tours, we wanted to offer something real, something personal.
          </p>
          <p>
            Every expert on TripLink has a story to tell. Whether it&apos;s a food
            lover in Bangkok sharing secret street food spots, a historian in
            Rome bringing ancient ruins to life, or an adventurer in New Zealand
            taking you off the beaten path—our experts aren&apos;t just guides,
            they&apos;re storytellers, friends, and passionate locals who want to
            share their world with you.
          </p>
          <p>
            We created TripLink to be a trusted space where travelers can
            connect directly with these experts, ask questions, customize their
            trips, and book unforgettable experiences. For the experts, it&apos;s a
            way to share their passion with the world, connect with curious
            travelers, and create meaningful connections that go beyond the
            typical tourist experience.
          </p>
          <p>
            Today, TripLink is more than a platform—it&apos;s a global community.
            We&apos;re connecting thousands of travelers with local voices, one
            authentic experience at a time. Whether you&apos;re seeking adventure,
            relaxation, or cultural immersion, we&apos;re here to help you discover
            the world through the eyes of those who know it best.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="inline-block p-3 bg-[#009966] rounded-lg mb-4">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We create value and make a difference through our commitment to
              connecting travelers with authentic local experiences. We empower
              local experts worldwide to share their knowledge and passion,
              creating meaningful connections that transform how people explore
              the world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="inline-block p-3 bg-[#009966] rounded-lg mb-4">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              A future where every traveler can access authentic local expertise
              anywhere in the world. We envision a global community where
              cultural exchange flourishes, supporting local economies while
              creating transformative travel experiences that build bridges
              between cultures and communities.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Our Values
        </h2>
        <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
          These principles guide our decisions, shape our culture, and drive us
          forward as we grow.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4 border bg-[#F3F4F6] p-6 rounded-lg shadow-sm   ">
            <div className="flex-shrink-0">
              <div className="p-3 bg-[#009966] rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Authentic Leadership
              </h3>
              <p className="text-gray-600 text-sm">
                We lead with integrity and transparency, empowering both
                travelers and local experts to create genuine connections and
                meaningful experiences.
              </p>
            </div>
          </div>
          <div className="flex gap-4 border bg-[#F3F4F6] p-6 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <div className="p-3 bg-[#009966] rounded-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Trust & Safety
              </h3>
              <p className="text-gray-600 text-sm">
                Building trust through verified experts, secure transactions,
                and consistent quality in every interaction to ensure safe and
                reliable travel experiences.
              </p>
            </div>
          </div>
          <div className="flex gap-4 border bg-[#F3F4F6] p-6 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <div className="p-3 bg-[#009966] rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Community First
              </h3>
              <p className="text-gray-600 text-sm">
                Prioritizing the needs of our community of travelers and local
                experts, fostering connections that benefit everyone and
                strengthen local economies.
              </p>
            </div>
          </div>
          <div className="flex gap-4 border bg-[#F3F4F6] p-6 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <div className="p-3 bg-[#009966] rounded-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Pursuing excellence in everything we do, continuously improving
                our platform and services to deliver exceptional experiences
                that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Our Journey
          </h2>
          <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
            Key milestones in building our community of expert local guides.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="w-0.5 h-16 bg-teal-300"></div>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Founded
                </h3>
                <p className="text-gray-600 text-sm">
                  Launched with a vision to connect travelers with authentic
                  local experiences worldwide.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="w-0.5 h-16 bg-teal-300"></div>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Global Expansion
                </h3>
                <p className="text-gray-600 text-sm">
                  Expanded to 50+ countries, building a diverse network of
                  passionate local experts.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <div className="w-0.5 h-16 bg-teal-300"></div>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Hit 1 Mln
                </h3>
                <p className="text-gray-600 text-sm">
                  Reached 1 million happy travelers who discovered the world
                  through local eyes.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="w-0.5 h-16 bg-teal-300"></div>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  AI Integration
                </h3>
                <p className="text-gray-600 text-sm">
                  Introduced smart matching technology to connect travelers with
                  their perfect local expert.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  <Star className="w-6 h-6" />
                </div>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  150 Guides
                </h3>
                <p className="text-gray-600 text-sm">
                  Growing community of 150+ verified local experts sharing their
                  passion and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Leadership Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
          Meet Our Leadership
        </h2>
        <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
          Dedicated individuals driving our vision of connecting travelers with
          local experts worldwide.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="/about/Doremon.png"
              alt="Sarah Johnson"
              height={400}
              width={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Sarah Johnson
              </h3>
              <p className="text-teal-600 text-sm mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Former travel journalist with 15+ years exploring authentic
                cultural experiences worldwide.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="/about/group.png"
              alt="Sarah Johnson"
              height={400}
              width={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Michael Chen
              </h3>
              <p className="text-teal-600 text-sm mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Tech innovator passionate about building platforms that create
                meaningful human connections.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="/about/sofa.png"
              alt="Sarah Johnson"
              height={400}
              width={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Maria Garcia
              </h3>
              <p className="text-teal-600 text-sm mb-3">Head of Community</p>
              <p className="text-gray-600 text-sm">
                Community builder dedicated to empowering local guides and
                ensuring traveler satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
