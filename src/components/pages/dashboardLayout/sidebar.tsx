/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  LayoutDashboard,
  MapPin,
  Package,
  Building2,
  CalendarCheck,
  Star,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  ChevronRight,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { logoutHandler } from "@/utils/handleLogout";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const isActive = (href: string) => pathname === href;

  const handleLogout = () => {
    logoutHandler(dispatch, router);
    window.dispatchEvent(new Event("logout"));
  };

  const navItems = [
    { name: "Dashboard Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Destinations", href: "/dashboard/destinations", icon: MapPin, hasSubmenu: true },
    { name: "Tour Packages", href: "/dashboard/packages", icon: Package, hasSubmenu: true },
    { name: "Business Listings", href: "/dashboard/business", icon: Building2, hasSubmenu: true },
    { name: "Bookings & Requests", href: "/dashboard/bookings", icon: CalendarCheck },
    { name: "Reviews & Ratings", href: "/dashboard/reviews", icon: Star },
    { name: "Users Management", href: "/dashboard/users", icon: Users },
    { name: "Chat & Support", href: "/dashboard/chat", icon: MessageSquare },
    { name: "Analytics & Reports", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "System Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-xl bg-white shadow-lg border border-gray-100"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </motion.button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: isCollapsed ? 80 : 256,
          x: isMobileMenuOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -256 : 0)
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 left-0 z-[70] bg-white border-r border-gray-100 flex flex-col overflow-hidden lg:static"
      >
        {/* Logo */}
        <div className={`h-20 px-6 flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-[#10B981]/20"
            >
              <MapPin className="text-white h-5 w-5" />
            </motion.div>
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-xl font-bold text-[#111827] tracking-tight whitespace-nowrap"
                >
                  TourismPro
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2 custom-scrollbar">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: isCollapsed ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center px-3 py-3 rounded-xl transition-colors duration-200 group relative cursor-pointer
                  ${isActive(item.href) 
                    ? "bg-[#D1FAE5] text-[#059669] font-semibold" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}
                  ${isCollapsed ? "justify-center" : "justify-between"}`}
                title={isCollapsed ? item.name : ""}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${isActive(item.href) ? "text-[#059669]" : "text-gray-400 group-hover:text-gray-600"}`} />
                  <AnimatePresence mode="wait">
                    {!isCollapsed && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="text-[14px] whitespace-nowrap"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                {!isCollapsed && item.hasSubmenu && (
                  <ChevronRight className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 ${isActive(item.href) ? "text-[#059669]" : "text-gray-300"}`} />
                )}
                
                {/* Active Indicator Line */}
                {isActive(item.href) && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 w-1 h-6 bg-[#059669] rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-50">
          <motion.button
            whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-3 text-red-500 rounded-xl transition-colors
              ${isCollapsed ? "justify-center" : ""}`}
            title={isCollapsed ? "Logout" : ""}
          >
            <LogOut className="h-5 w-5 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-[14px] font-semibold"
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.aside>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[65] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

