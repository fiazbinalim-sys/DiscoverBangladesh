"use client";

import React, { useState } from "react";
import { 
  Download, 
  Plus, 
  Eye, 
  Pencil, 
  Trash2,
  Filter,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomDropdown from "@/components/ui/CustomDropdown";
import { toast } from "sonner";

const destinations = [
  { name: "Dhaka", district: "Dambulla", type: "Historical", visitors: "2,500", status: "Active" },
  { name: "Cox's Bazar", district: "Hambantota", type: "Wildlife", visitors: "1,800", status: "Active" },
  { name: "Sylhet", district: "Kandy", type: "Religious", visitors: "3,200", status: "Active" },
  { name: "Bandarban", district: "Galle", type: "Historical", visitors: "2,100", status: "Active" },
  { name: "Rangamati", district: "Ella", type: "Scenic", visitors: "1,500", status: "Active" },
  { name: "Sundarban", district: "Matara", type: "Beach", visitors: "1,900", status: "Active" },
];

const districtOptions = [
  { label: "All district", value: "all" },
  { label: "Dhaka", value: "dhaka" },
  { label: "Cox's Bazar", value: "cox" },
  { label: "Sylhet", value: "sylhet" },
];

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Destinations() {
  const [district, setDistrict] = useState("all");
  const [status, setStatus] = useState("all");

  const handleExport = () => {
    toast.success("Destinations data exported successfully!", {
      icon: <Download className="h-4 w-4 text-emerald-500" />,
    });
  };

  const handleAddNew = () => {
    toast.info("Opening Add Destination form...");
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      {/* Sub Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <CustomDropdown 
            options={districtOptions} 
            value={district} 
            onChange={setDistrict} 
            icon={<Filter className="h-4 w-4" />}
          />
          <CustomDropdown 
            options={statusOptions} 
            value={status} 
            onChange={setStatus} 
            icon={<CheckCircle2 className="h-4 w-4" />}
          />
        </div>
        <div className="flex items-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 border border-gray-100 bg-white shadow-sm rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all"
          >
            <Download className="h-4 w-4" /> Export
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#059669" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddNew}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#10B981] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#10B981]/20 transition-all"
          >
            <Plus className="h-4 w-4" /> Add New Destination
          </motion.button>
        </div>
      </div>

      {/* Table */}
      <motion.div 
        variants={itemVariants}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Destination Name</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">District</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Monthly Visitors</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence>
                {destinations.map((dest) => (
                  <motion.tr 
                    key={dest.name} 
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                    className="transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-[#10B981]/10 rounded-lg">
                          <MapPin className="h-3.5 w-3.5 text-[#10B981]" />
                        </div>
                        <span className="text-sm font-bold text-gray-900">{dest.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 font-medium">{dest.district}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 font-medium">{dest.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#10B981] font-bold">{dest.visitors}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight bg-[#F0FDF4] text-[#15803D]">
                        {dest.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-gray-400 hover:text-[#10B981] transition-colors rounded-xl hover:bg-[#10B981]/5">
                          <Eye className="h-4 w-4" />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-xl hover:bg-blue-50">
                          <Pencil className="h-4 w-4" />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1 }} 
                          onClick={() => toast.error(`Deleting ${dest.name}...`)}
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
      </motion.div>
    </motion.div>
  );
}
