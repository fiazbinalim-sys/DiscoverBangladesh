"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Download,
  ShieldAlert
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { motion } from "framer-motion";
import CustomDropdown from "@/components/ui/CustomDropdown";
import { toast } from "sonner";

const analyticsStats = [
  { title: "Total Revenue", value: "Rs. 3.73M", change: "22.5%", isUp: true },
  { title: "Total Visitors", value: "24,500", change: "18.2%", isUp: true },
  { title: "Conversion Rate", value: "3.2%", change: "2.1%", isUp: false },
  { title: "Avg. Order Value", value: "Rs. 45,200", change: "8.4%", isUp: true },
];

const revenueData = [
  { name: "Jan", revenue: 450000 },
  { name: "Feb", revenue: 520000 },
  { name: "Mar", revenue: 610000 },
  { name: "Apr", revenue: 580000 },
  { name: "May", revenue: 720000 },
  { name: "Jun", revenue: 830000 },
];

const trafficSourceData = [
  { name: "Jan", direct: 1200, organic: 1400, referral: 800, social: 500 },
  { name: "Feb", direct: 1300, organic: 1600, referral: 900, social: 600 },
  { name: "Mar", direct: 1500, organic: 1800, referral: 1000, social: 700 },
  { name: "Apr", direct: 1400, organic: 1700, referral: 1100, social: 800 },
  { name: "May", direct: 1700, organic: 2000, referral: 1200, social: 900 },
  { name: "Jun", direct: 1900, organic: 2300, referral: 1300, social: 1000 },
];

const deviceData = [
  { name: "Desktop", value: 45, color: "#0157C8" },
  { name: "Mobile", value: 40, color: "#3B82F6" },
  { name: "Tablet", value: 15, color: "#93C5FD" },
];

const performingPackages = [
  { name: "Colombo City Explorer", bookings: 145, revenue: "Rs. 2175.0K" },
  { name: "Cultural Triangle Tour", bookings: 98, revenue: "Rs. 4410.0K" },
  { name: "Maldives Beach Paradise", bookings: 76, revenue: "Rs. 13680.0K" },
  { name: "Hill Country Adventure", bookings: 62, revenue: "Rs. 2170.0K" },
];

const priorityOptions = [
  { label: "All Priority", value: "all" },
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
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

export default function AnalyticsReports() {
  const [priority, setPriority] = useState("all");

  const handleExport = () => {
    toast.success("Analytical report exported successfully!", {
      icon: <Download className="h-4 w-4 text-emerald-500" />,
    });
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8 pb-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-outfit">Analytics & Reports</h2>
          <p className="text-sm text-gray-500 font-medium">Insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <CustomDropdown 
            options={priorityOptions} 
            value={priority} 
            onChange={setPriority} 
            icon={<ShieldAlert className="h-4 w-4" />}
          />
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExport}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#10B981] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#10B981]/20 transition-all"
          >
            <Download className="h-4 w-4" /> Export Report
          </motion.button>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat) => (
          <motion.div 
            key={stat.title} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:shadow-gray-200/50"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.title}</p>
              {stat.isUp ? <TrendingUp className="h-4 w-4 text-emerald-500" /> : <TrendingDown className="h-4 w-4 text-red-500" />}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">{stat.value}</h3>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-bold ${stat.isUp ? "text-emerald-500" : "text-red-500"}`}>
                {stat.isUp ? "↑" : "↓"} {stat.change}
              </span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">vs last period</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-8 font-outfit">Revenue Overview</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF', fontWeight: 600 }} />
                <Tooltip cursor={{ fill: '#F9FAFB' }} />
                <Bar dataKey="revenue" fill="#0157C8" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-8 font-outfit">Traffic Sources</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficSourceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF', fontWeight: 600 }} />
                <Tooltip />
                <Legend iconType="circle" />
                <Line type="monotone" dataKey="direct" stroke="#0157C8" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="organic" stroke="#3B82F6" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="referral" stroke="#60A5FA" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="social" stroke="#93C5FD" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Row 2: Distribution & Top Performing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-8 font-outfit">Device Distribution</h3>
          <div className="flex items-center gap-8">
            <div className="h-[250px] w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4 w-1/2">
              {deviceData.map((device) => (
                <div key={device.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: device.color }}></div>
                    <span className="text-sm font-bold text-gray-600">{device.name}</span>
                  </div>
                  <span className="text-sm font-black text-gray-900">{device.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6 font-outfit">Top Performing Packages</h3>
          <div className="space-y-6">
            {performingPackages.map((pkg, index) => (
              <motion.div 
                key={pkg.name} 
                whileHover={{ x: 10 }}
                className="flex items-center justify-between group cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-black text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-[#10B981] transition-colors">{pkg.name}</p>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tight">{pkg.bookings} bookings</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-gray-900 tracking-tight">{pkg.revenue}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Revenue</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
