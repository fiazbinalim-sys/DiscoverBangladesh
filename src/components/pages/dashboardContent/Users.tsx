"use client";

import React, { useState } from "react";
import { 
  Download, 
  Eye, 
  Pencil, 
  Trash2,
 
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomDropdown from "@/components/ui/CustomDropdown";
import { toast } from "sonner";

const userStats = [
  { title: "Total Users", value: "8", color: "text-gray-900" },
  { title: "Admins", value: "1", color: "text-[#7C3AED]" },
  { title: "Managers", value: "2", color: "text-[#2563EB]" },
  { title: "Partners", value: "2", color: "text-[#EA580C]" },
];

const users = [
  { name: "John Doe", email: "john@example.com", role: "User", registered: "2023-12-15", status: "Active" },
  { name: "Sarah Johnson", email: "sarah@example.com", role: "Manager", registered: "2023-11-20", status: "Active" },
  { name: "Mike Wilson", email: "mike@example.com", role: "Partner", registered: "2023-10-05", status: "Active" },
  { name: "Emily Brown", email: "emily@example.com", role: "User", registered: "2024-01-08", status: "Active" },
  { name: "David Lee", email: "david@example.com", role: "Admin", registered: "2023-09-15", status: "Active" },
  { name: "Lisa Anderson", email: "lisa@example.com", role: "User", registered: "2024-01-12", status: "Active" },
];

const roleOptions = [
  { label: "All Roles", value: "all" },
  { label: "Admin", value: "admin" },
  { label: "Manager", value: "manager" },
  { label: "Partner", value: "partner" },
  { label: "User", value: "user" },
];

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Active", value: "active" },
  { label: "Draft", value: "draft" },
];

const getRoleStyle = (role: string) => {
  switch (role) {
    case "Admin": return "bg-[#F5F3FF] text-[#7C3AED]";
    case "Manager": return "bg-[#EFF6FF] text-[#2563EB]";
    case "Partner": return "bg-[#FFF7ED] text-[#EA580C]";
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

export default function UserManagement() {
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");

  const handleExport = () => {
    toast.success("Users data exported!");
  };

  const handleEdit = (name: string) => {
    toast.info(`Editing ${name}...`);
  };

  const handleDelete = (name: string) => {
    toast.error(`Deleting user ${name}...`);
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
        <h2 className="text-xl font-bold text-gray-900 font-outfit">User Management</h2>
        <p className="text-sm text-gray-500 font-medium">Manage system users and permissions</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat) => (
          <motion.div 
            key={stat.title} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:shadow-gray-200/50"
          >
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{stat.title}</p>
            <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Filters & Export */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <CustomDropdown 
            options={roleOptions} 
            value={role} 
            onChange={setRole} 
            icon={<ShieldCheck className="h-4 w-4" />}
          />
          <CustomDropdown 
            options={statusOptions} 
            value={status} 
            onChange={setStatus} 
            icon={<UserCheck className="h-4 w-4" />}
          />
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleExport}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 shadow-sm rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all"
        >
          <Download className="h-4 w-4" /> Export
        </motion.button>
      </motion.div>

      {/* Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Registered</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="popLayout">
                {users.map((user) => (
                  <motion.tr 
                    key={user.email} 
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                    className="transition-colors group"
                  >
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-medium">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight ${getRoleStyle(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium text-center">{user.registered}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight ${
                        user.status === "Active" ? "bg-[#F0FDF4] text-[#15803D]" : "bg-gray-100 text-gray-500"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-gray-400 hover:text-[#10B981] transition-colors rounded-xl hover:bg-[#10B981]/5">
                          <Eye className="h-4 w-4" />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1 }} 
                          onClick={() => handleEdit(user.name)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-xl hover:bg-blue-50"
                        >
                          <Pencil className="h-4 w-4" />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1 }} 
                          onClick={() => handleDelete(user.name)}
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
          <p className="text-sm text-gray-500 font-medium">Showing <span className="font-bold text-gray-900">6</span> out of <span className="font-bold text-gray-900">1,450</span></p>
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
            {[1, 2, 3].map((p, i) => (
              <motion.button 
                key={i} 
                whileHover={{ y: -2 }}
                className={`w-8 h-8 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${p === 1 ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/20" : "text-gray-500 hover:bg-gray-100"}`}
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
