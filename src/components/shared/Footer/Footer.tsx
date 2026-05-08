"use client";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

 
export default function Footer() {
const pathname = usePathname();
      const isActive = (path: string) => {
         
    return pathname === path;
  };
  return (
    <footer className="bg-[#101828] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
         
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Image src="/Home/logo.png" alt="Discover Bangladesh" 
                        height={300}
                        width={300}
                         className="w-8 h-8" />
              <h3 className="text-white font-semibold text-lg">Discover Bangladesh</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your gateway to exploring the beauty and culture of Bangladesh.
            </p>
          </div>
 
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about"  className={`${
                  isActive('/about') 
                    ? 'text-blue-400 font-semibold' 
                    : 'text-white'
                } hover:text-[#73B7FF] transition-colors`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`${
                  isActive('/contact') 
                    ? 'text-blue-400 font-semibold' 
                    : 'text-white'
                } hover:text-[#73B7FF] transition-colors`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={`${
                  isActive('/privacy') 
                    ? 'text-blue-400 font-semibold' 
                    : 'text-white'
                } hover:text-[#73B7FF] transition-colors`}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={`${
                  isActive('/terms') 
                    ? 'text-blue-400 font-semibold' 
                    : 'text-white'
                } hover:text-[#73B7FF] transition-colors`}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
 
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">+880-1234-567890</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">info@discoverbangladesh.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
 
          {/* Follow Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#2a3544] rounded-md flex items-center justify-center hover:bg-[#3a4554] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a3544] rounded-md flex items-center justify-center hover:bg-[#3a4554] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a3544] rounded-md flex items-center justify-center hover:bg-[#3a4554] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
 
      {/* Copyright */}
      <div className="border-t  border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Discover Bangladesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}