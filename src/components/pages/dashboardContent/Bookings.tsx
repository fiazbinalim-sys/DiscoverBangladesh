"use client";

import React, { useState } from "react";
import { 
  Download,
  ChevronLeft,
  ChevronRight,
  Filter,
  CalendarDays,
  CircleCheck,
  CreditCard,
  History
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomDropdown from "@/components/ui/CustomDropdown";
import { toast } from "sonner";

const bookingStats = [
  { title: "Total Bookings", value: "7", icon: CalendarDays, color: "text-[#10B981]", bg: "bg-[#10B981]/10" },
  { title: "Pending", value: "2", icon: History, color: "text-orange-500", bg: "bg-orange-50" },
  { title: "Confirmed", value: "3", icon: CircleCheck, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Revenue (LKR)", value: "443,000", icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-50" },
];

const bookings = [
  { id: "BK-001", customer: "John Doe", package: "Colombo City Explorer", date: "2024-01-15", amount: "Rs. 15,000", status: "Confirmed" },
  { id: "BK-002", customer: "Sarah Johnson", package: "Cultural Triangle Tour", date: "2024-01-18", amount: "Rs. 45,000", status: "Pending" },
  { id: "BK-003", customer: "Mike Wilson", package: "Maldives Beach Paradise", date: "2024-01-20", amount: "Rs. 180,000", status: "Confirmed" },
  { id: "BK-004", customer: "Emily Brown", package: "Hill Country Adventure", date: "2024-01-22", amount: "Rs. 35,000", status: "Pending" },
];

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Confirmed", value: "confirmed" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

const priorityOptions = [
  { label: "All Priority", value: "all" },
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Confirmed": return "bg-[#EFF6FF] text-[#1D4ED8]";
    case "Pending": return "bg-[#FFFBEB] text-[#B45309]";
    case "Cancelled": return "bg-[#FEF2F2] text-[#DC2626]";
    case "Completed": return "bg-[#F0FDF4] text-[#15803D]";
    default: return "bg-gray-100 text-gray-600";
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Bookings() {
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");

  const handleExport = () => {
    toast.success("Booking report exported!");
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-bold text-gray-900 font-outfit">Bookings & Requests</h2>
        <p className="text-sm text-gray-500 font-medium">Manage all customer bookings</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bookingStats.map((stat) => (
          <motion.div 
            key={stat.title} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:shadow-gray-200/50"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.title}</p>
              <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <CustomDropdown 
            options={statusOptions} 
            value={status} 
            onChange={setStatus} 
            icon={<Filter className="h-4 w-4" />}
          />
          <CustomDropdown 
            options={priorityOptions} 
            value={priority} 
            onChange={setPriority} 
            icon={<History className="h-4 w-4" />}
          />
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleExport}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 shadow-sm rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all"
        >
          <Download className="h-4 w-4" /> Export Report
        </motion.button>
      </motion.div>

      {/* Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Booking ID</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Package</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Date</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Amount</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="popLayout">
                {bookings.map((booking) => (
                  <motion.tr 
                    key={booking.id} 
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                    className="transition-colors group"
                  >
                    <td className="px-6 py-4 text-sm font-black text-[#10B981]">{booking.id}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{booking.customer}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{booking.package}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium text-center">{booking.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-black text-right">{booking.amount}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight ${getStatusStyle(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-50">
          <p className="text-sm text-gray-500 font-medium">
            Showing <span className="font-bold text-gray-900">4</span> out of <span className="font-bold text-gray-900">1,450</span>
          </p>
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            {[1, 2, 3].map((page, i) => (
              <motion.button 
                key={i}
                whileHover={{ y: -2 }}
                className={`w-8 h-8 flex items-center justify-center rounded-xl text-sm font-bold shadow-sm transition-all ${
                  page === 1 ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/20" : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                }`}
              >
                {page}
              </motion.button>
            ))}
            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
