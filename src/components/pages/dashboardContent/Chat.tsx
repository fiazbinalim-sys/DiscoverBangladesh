"use client";

import React, { useState } from "react";
import { 
  MessageSquare, 
  Clock, 
  CheckCircle, 
 
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomDropdown from "@/components/ui/CustomDropdown";
import { toast } from "sonner";

const supportStats = [
  { title: "Total Tickets", value: "6", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Pending", value: "2", icon: Clock, color: "text-yellow-500", bg: "bg-yellow-50" },
  { title: "Active", value: "3", icon: MessageCircle, color: "text-emerald-500", bg: "bg-emerald-50" },
  { title: "Resolved", value: "1", icon: CheckCircle, color: "text-purple-500", bg: "bg-purple-50" },
];

const tickets = [
  { id: "TKT-001", customer: "John Doe", subject: "Booking payment issue", priority: "High", created: "2024-01-20 10:30" },
  { id: "TKT-002", customer: "Sarah Wilson", subject: "Cannot access booking details", priority: "Medium", created: "2024-01-20 09:15" },
  { id: "TKT-003", customer: "Mike Johnson", subject: "Request package customization", priority: "Low", created: "2024-01-19 16:45" },
  { id: "TKT-004", customer: "Emily Brown", subject: "Refund request for cancelled booking", priority: "High", created: "2024-01-19 14:20" },
];

const priorityOptions = [
  { label: "All Priority", value: "all" },
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const getPriorityStyle = (priority: string) => {
  switch (priority) {
    case "High": return "bg-[#FEF2F2] text-[#DC2626]";
    case "Medium": return "bg-[#FFFBEB] text-[#B45309]";
    case "Low": return "bg-[#F0FDF4] text-[#15803D]";
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

export default function ChatSupport() {
  const [priority, setPriority] = useState("all");

  const handleViewChat = (id: string) => {
    toast.info(`Opening chat for ticket ${id}...`);
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
        <h2 className="text-xl font-bold text-gray-900 font-outfit">Chat & Support</h2>
        <p className="text-sm text-gray-500 font-medium">Manage customer support tickets</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportStats.map((stat) => (
          <motion.div 
            key={stat.title} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-xl hover:shadow-gray-200/50"
          >
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{stat.title}</p>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filter */}
      <motion.div variants={itemVariants} className="flex items-center gap-4">
        <CustomDropdown 
          options={priorityOptions} 
          value={priority} 
          onChange={setPriority} 
          icon={<ShieldAlert className="h-4 w-4" />}
        />
      </motion.div>

      {/* Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Ticket ID</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Priority</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Created</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="popLayout">
                {tickets.map((ticket) => (
                  <motion.tr 
                    key={ticket.id} 
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                    className="transition-colors group"
                  >
                    <td className="px-6 py-4 text-sm font-black text-[#10B981]">{ticket.id}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 group-hover:text-[#10B981] transition-colors">{ticket.customer}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{ticket.subject}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight ${getPriorityStyle(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 font-medium">{ticket.created}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleViewChat(ticket.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-[#10B981] text-white rounded-xl text-[12px] font-bold shadow-lg shadow-[#10B981]/20 hover:bg-[#059669] transition-all"
                        >
                          <MessageCircle className="h-4 w-4" /> View Chat
                        </motion.button>
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
          <p className="text-sm text-gray-500 font-medium">Showing <span className="font-bold text-gray-900">4</span> out of <span className="font-bold text-gray-900">1,450</span></p>
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
            {[1, 2, 3].map((p, i) => (
              <motion.button 
                key={i} 
                whileHover={{ y: -2 }}
                className={`w-8 h-8 flex items-center justify-center rounded-xl text-sm font-bold shadow-sm transition-all ${p === 1 ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/20" : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"}`}
              >
                {p}
              </motion.button>
            ))}
            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
