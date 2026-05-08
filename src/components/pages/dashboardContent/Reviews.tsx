/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { 
  Star, 
  Eye, 
  Trash2,
  CheckCircle,
  XCircle,
  X,
  Filter,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ThumbsUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomDropdown from "@/components/ui/CustomDropdown";
import { toast } from "sonner";

const reviewStats = [
  { title: "Total Reviews", value: "6", icon: MessageSquare, color: "text-[#10B981]", bg: "bg-[#10B981]/10" },
  { title: "Pending", value: "2", icon: Filter, color: "text-orange-500", bg: "bg-orange-50" },
  { title: "Avg Rating", value: "4.3", icon: Star, color: "text-yellow-500", bg: "bg-yellow-50", hasStar: true },
  { title: "5 Stars", value: "3", icon: ThumbsUp, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Low Ratings", value: "1", icon: XCircle, color: "text-red-500", bg: "bg-red-50" },
];

const reviews = [
  { user: "John Doe", destination: "Sigiriya Rock", rating: 5, comment: "Absolutely breathtaking experienc...", date: "2024-01-15", status: "Approved" },
  { user: "Sarah Wilson", destination: "Yala National Park", rating: 4, comment: "Great safari experience, saw lots of wildlife.", date: "2024-01-14", status: "Pending" },
  { user: "Mike Ross", destination: "Ella Odyssey", rating: 3, comment: "Train was delayed but views were good.", date: "2024-01-13", status: "Approved" },
];

const starOptions = [
  { label: "All Stars", value: "all" },
  { label: "5 Stars", value: "5" },
  { label: "4 Stars", value: "4" },
  { label: "3 Stars", value: "3" },
  { label: "2 Stars", value: "2" },
  { label: "1 Star", value: "1" },
];

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Approved", value: "approved" },
  { label: "Pending", value: "pending" },
];

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

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState<any>(null);
  const [stars, setStars] = useState("all");
  const [status, setStatus] = useState("all");

  const handleAction = (type: string, name: string) => {
    if (type === "approve") toast.success(`Review from ${name} approved!`);
    if (type === "reject") toast.error(`Review from ${name} rejected.`);
    if (type === "delete") toast.warning(`Review from ${name} deleted.`);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex gap-6 relative"
    >
      <div className={`flex-1 space-y-6 transition-all duration-500 ${selectedReview ? "pr-[340px]" : ""}`}>
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-gray-900 font-outfit">Reviews & Ratings</h2>
          <p className="text-sm text-gray-500 font-medium">Moderate user reviews and feedback</p>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {reviewStats.map((stat) => (
            <motion.div 
              key={stat.title} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm group"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.title}</p>
                <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                  <stat.icon className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <h3 className={`text-xl font-bold ${stat.color}`}>{stat.value}</h3>
                {stat.hasStar && <Star className="h-4 w-4 text-yellow-400 fill-current" />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <CustomDropdown 
            options={starOptions} 
            value={stars} 
            onChange={setStars} 
            icon={<Star className="h-4 w-4" />}
          />
          <CustomDropdown 
            options={statusOptions} 
            value={status} 
            onChange={setStatus} 
            icon={<Filter className="h-4 w-4" />}
          />
        </motion.div>

        {/* Table */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Destination</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <AnimatePresence mode="popLayout">
                  {reviews.map((review, index) => (
                    <motion.tr 
                      key={review.user + index} 
                      variants={itemVariants}
                      whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                      className="transition-colors group"
                    >
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{review.user}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">{review.destination}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <div className="flex text-yellow-400">
                            {Array(5).fill(0).map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < review.rating ? "fill-current" : "text-gray-200"}`} />
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-400 font-bold">({review.rating})</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">{review.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight ${
                          review.status === "Approved" ? "bg-[#F0FDF4] text-[#15803D]" : "bg-[#FFFBEB] text-[#B45309]"
                        }`}>
                          {review.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setSelectedReview(review)}
                            className="p-2 text-gray-400 hover:text-[#10B981] transition-colors rounded-xl hover:bg-[#10B981]/5"
                          >
                            <Eye className="h-4 w-4" />
                          </motion.button>
                          {review.status === "Pending" && (
                            <>
                              <motion.button 
                                whileHover={{ scale: 1.1 }}
                                onClick={() => handleAction("approve", review.user)}
                                className="p-2 text-emerald-500 hover:bg-emerald-50 transition-colors rounded-xl border border-emerald-100"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </motion.button>
                              <motion.button 
                                whileHover={{ scale: 1.1 }}
                                onClick={() => handleAction("reject", review.user)}
                                className="p-2 text-red-500 hover:bg-red-50 transition-colors rounded-xl border border-red-100"
                              >
                                <XCircle className="h-4 w-4" />
                              </motion.button>
                            </>
                          )}
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            onClick={() => handleAction("delete", review.user)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-xl hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
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
            <p className="text-sm text-gray-500 font-medium">Showing <span className="font-bold text-gray-900">3</span> out of <span className="font-bold text-gray-900">1,450</span></p>
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
              {[1, 2, 3].map((p, i) => (
                <motion.button 
                  key={i} 
                  whileHover={{ y: -2 }}
                  className={`w-8 h-8 flex items-center justify-center rounded-xl text-sm font-bold shadow-sm transition-all ${p === 1 ? "bg-[#10B981] text-white shadow-[#10B981]/20" : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"}`}
                >
                  {p}
                </motion.button>
              ))}
              <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Review Details Side Panel */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div 
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="absolute right-0 top-0 w-[320px] bg-white rounded-3xl border border-gray-100 shadow-2xl p-6 h-fit z-50 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-gray-900">Review Details</h3>
              <motion.button 
                whileHover={{ rotate: 90 }}
                onClick={() => setSelectedReview(null)} 
                className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">User</p>
                <p className="text-sm font-bold text-gray-900">{selectedReview.user}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Destination</p>
                <p className="text-sm font-bold text-gray-900">{selectedReview.destination}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Rating</p>
                <div className="flex text-yellow-400 gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < selectedReview.rating ? "fill-current" : "text-gray-200"}`} />
                  ))}
                </div>
              </div>
              <div className="p-4 bg-[#10B981]/5 border border-[#10B981]/10 rounded-2xl italic text-sm text-gray-600">
                <p className="text-[10px] font-black text-[#10B981] uppercase tracking-widest mb-2 not-italic">User Comment</p>
                &quot;{selectedReview.comment}&quot;
              </div>
              
              <div className="pt-4 border-t border-gray-100 flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 bg-[#10B981] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#10B981]/20"
                >
                  Approve
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 bg-red-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-red-500/20"
                >
                  Reject
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
