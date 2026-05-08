"use client";

import CustomDropdown from "@/components/ui/CustomDropdown";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  Filter,
  Package2,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const packageStats = [
  {
    title: "Total Packages",
    value: "8",
    icon: Package2,
    color: "text-[#10B981]",
    bg: "bg-[#10B981]/10",
  },
  {
    title: "Local",
    value: "3",
    icon: Filter,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "International",
    value: "3",
    icon: Filter,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "Seasonal",
    value: "2",
    icon: Filter,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

const packages = [
  {
    name: "Thailand Island Hopping",
    type: "International",
    price: "Rs. 95,000",
    duration: "6 Days",
    bookings: "12",
    status: "Published",
  },
  {
    name: "Sajek Valley Tour",
    type: "Local",
    price: "Rs. 15,000",
    duration: "3 Days",
    bookings: "45",
    status: "Published",
  },
  {
    name: "Dubai Desert Safari",
    type: "International",
    price: "Rs. 120,000",
    duration: "5 Days",
    bookings: "8",
    status: "Draft",
  },
  {
    name: "Cox's Bazar Relax",
    type: "Local",
    price: "Rs. 25,000",
    duration: "4 Days",
    bookings: "30",
    status: "Published",
  },
];

const typeOptions = [
  { label: "All types", value: "all" },
  { label: "Local", value: "local" },
  { label: "International", value: "international" },
];

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Draft", value: "draft" },
  { label: "Published", value: "published" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Packages() {
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");

  const handleAction = (action: string, name: string) => {
    if (action === "export") toast.success("Packages exported successfully!");
    if (action === "create") toast.info("Opening package creator...");
    if (action === "delete") toast.error(`Deleting ${name}...`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      {/* Header & Create Button */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-outfit">
            Tour Package Management
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            Create and manage tour packages
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleAction("create", "")}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#10B981] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#10B981]/20 transition-all self-start"
        >
          <Plus className="h-4 w-4" /> Create Package
        </motion.button>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packageStats.map((stat) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:shadow-gray-200/50"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {stat.title}
              </p>
              <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
              {stat.value}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Filters & Export */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <CustomDropdown
            options={typeOptions}
            value={type}
            onChange={setType}
            icon={<Filter className="h-4 w-4" />}
          />
          <CustomDropdown
            options={statusOptions}
            value={status}
            onChange={setStatus}
            icon={<CheckCircle2 className="h-4 w-4" />}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleAction("export", "")}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 shadow-sm rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all self-start md:self-auto"
        >
          <Download className="h-4 w-4" /> Export
        </motion.button>
      </motion.div>

      {/* Table */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Package Name
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Price (LKR)
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Bookings
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="popLayout">
                {packages.map((pkg) => (
                  <motion.tr
                    key={pkg.name}
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                    className="transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-gray-900 group-hover:text-[#10B981] transition-colors">
                        {pkg.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight ${
                          pkg.type === "International"
                            ? "bg-purple-50 text-purple-600"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        {pkg.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-bold">
                      {pkg.price}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      {pkg.duration}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-black">
                      {pkg.bookings}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight ${
                          pkg.status === "Published"
                            ? "bg-[#F0FDF4] text-[#15803D]"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {pkg.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-2 text-gray-400 hover:text-[#10B981] transition-colors rounded-xl hover:bg-[#10B981]/5"
                        >
                          <Eye className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-xl hover:bg-blue-50"
                        >
                          <Pencil className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => handleAction("delete", pkg.name)}
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
        <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-50">
          <p className="text-sm text-gray-500 font-medium">
            Showing <span className="font-bold text-gray-900">4</span> out of{" "}
            <span className="font-bold text-gray-900">1,450</span>
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
                  page === 1
                    ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/20"
                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
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
