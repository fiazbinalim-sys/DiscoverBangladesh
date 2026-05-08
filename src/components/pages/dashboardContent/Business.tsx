"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Hotel, 
  Utensils, 
  Plane,
  Eye,
  CheckCircle,
  XCircle,
  Star
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const tabs = [
  { id: "resorts", name: "Resorts", count: 3, icon: Building2 },
  { id: "hotels", name: "Hotels", count: 3, icon: Hotel },
  { id: "restaurants", name: "Restaurants", count: 3, icon: Utensils },
  { id: "agencies", name: "Travel Agencies", count: 3, icon: Plane },
];

const businessStats = [
  { title: "Total Resorts", value: "3", color: "text-gray-900" },
  { title: "Pending Approval", value: "1", color: "text-orange-500" },
  { title: "Approved", value: "2", color: "text-emerald-500" },
];

const businesses = [
  { name: "Paradise Bay Resort", location: "Bentota", contact: "+94 77 123 4567", rating: 4.8, status: "Approved" },
  { name: "Ocean View Resort", location: "Hikkaduwa", contact: "+94 77 234 5678", rating: 4.5, status: "Pending" },
  { name: "Mountain Retreat", location: "Nuwara Eliya", contact: "+94 77 345 6789", rating: 4.7, status: "Approved" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function BusinessListings() {
  const [activeTab, setActiveTab] = useState("resorts");

  const handleApprove = (name: string) => {
    toast.success(`${name} approved successfully!`);
  };

  const handleReject = (name: string) => {
    toast.error(`${name} rejected.`);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-bold text-gray-900">Business Management</h2>
        <p className="text-sm text-gray-500 font-medium">Manage partner businesses and approvals</p>
      </motion.div>

      {/* Tabs */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all relative ${
              activeTab === tab.id 
                ? "text-[#10B981]" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <tab.icon className={`h-4 w-4 transition-transform ${activeTab === tab.id ? "scale-110" : ""}`} />
            {tab.name}
            <span className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-lg text-[10px] font-black ${
              activeTab === tab.id ? "bg-[#10B981]/10 text-[#10B981]" : "bg-gray-100 text-gray-500"
            }`}>
              {tab.count}
            </span>
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#10B981] rounded-t-full"
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {businessStats.map((stat) => (
          <motion.div 
            key={stat.title} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">{stat.title}</p>
            <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Business Name</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Rating</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="popLayout">
                {businesses.map((biz) => (
                  <motion.tr 
                    key={biz.name} 
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                    className="transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-gray-900 group-hover:text-[#10B981] transition-colors">{biz.name}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{biz.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{biz.contact}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1.5 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-bold text-gray-900">{biz.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight ${
                        biz.status === "Approved" ? "bg-[#F0FDF4] text-[#15803D]" : "bg-[#FFFBEB] text-[#B45309]"
                      }`}>
                        {biz.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-gray-400 hover:text-[#10B981] transition-colors rounded-xl hover:bg-[#10B981]/5">
                          <Eye className="h-4 w-4" />
                        </motion.button>
                        {biz.status === "Pending" && (
                          <>
                            <motion.button 
                              whileHover={{ scale: 1.1 }}
                              onClick={() => handleApprove(biz.name)}
                              className="p-2 text-emerald-500 hover:bg-emerald-50 transition-colors rounded-xl border border-emerald-100"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </motion.button>
                            <motion.button 
                              whileHover={{ scale: 1.1 }}
                              onClick={() => handleReject(biz.name)}
                              className="p-2 text-red-500 hover:bg-red-50 transition-colors rounded-xl border border-red-100"
                            >
                              <XCircle className="h-4 w-4" />
                            </motion.button>
                          </>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
