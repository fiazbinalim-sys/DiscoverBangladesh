"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface TopNavProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function TopNav({ isCollapsed, setIsCollapsed }: TopNavProps) {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard Overview";
    if (pathname.includes("/destinations")) return "Destination Management";
    if (pathname.includes("/packages")) return "Packages";
    if (pathname.includes("/business")) return "Business Listings";
    if (pathname.includes("/bookings")) return "Bookings & Requests";
    if (pathname.includes("/reviews")) return "Reviews & Ratings";
    if (pathname.includes("/users")) return "User Management";
    if (pathname.includes("/chat")) return "Chat & Support";
    if (pathname.includes("/analytics")) return "Analytics & Reports";
    if (pathname.includes("/settings")) return "System Settings";
    return "Dashboard";
  };

  return (
    <nav className="h-full px-6 flex items-center justify-between bg-white/80 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#F3F4F6" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-xl transition-colors hidden lg:block"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-5 w-5 text-gray-600" />
          ) : (
            <PanelLeftClose className="h-5 w-5 text-gray-600" />
          )}
        </motion.button>

        {/* Page Title with Transition */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={getPageTitle()}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-2xl font-bold text-[#111827] tracking-tight"
          >
            {getPageTitle()}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <motion.input
            whileFocus={{ width: 280 }}
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-[240px] transition-all"
          />
        </div>

        {/* Notifications */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors"
        >
          <Bell className="h-5 w-5" />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold"
          >
            2
          </motion.span>
        </motion.button>

        {/* User Profile */}
        <motion.div
          whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
          className="flex items-center gap-3 pl-3 py-1 pr-1 cursor-pointer group rounded-2xl transition-colors"
        >
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 leading-none">
              Admin User
            </p>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">
              Super Admin
            </p>
          </div>
          <div className="relative w-10 h-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-full h-full relative"
            >
              <Image
                src="/office.png"
                alt="Admin User"
                fill
                className="rounded-xl object-cover ring-2 ring-[#10B981]/10"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-white rounded-full"
              />
            </motion.div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-transform group-hover:translate-y-0.5" />
        </motion.div>
      </div>
    </nav>
  );
}
