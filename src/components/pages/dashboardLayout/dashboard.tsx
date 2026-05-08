"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Building,
  Calendar,
  MapPin,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const stats = [
  {
    title: "Total Users",
    value: "12,482",
    change: "12.5%",
    isUp: true,
    icon: Users,
    color: "text-[#0D9488]",
    bgLight: "bg-[#0D9488]/10",
  },
  {
    title: "Total Bookings",
    value: "3,246",
    change: "8.2%",
    isUp: true,
    icon: Calendar,
    color: "text-[#10B981]",
    bgLight: "bg-[#10B981]/10",
  },
  {
    title: "Active Destinations",
    value: "06",
    change: "3.1%",
    isUp: true,
    icon: MapPin,
    color: "text-[#F59E0B]",
    bgLight: "bg-[#F59E0B]/10",
  },
  {
    title: "Partner Businesses",
    value: "89",
    change: "5.4%",
    isUp: false,
    icon: Building,
    color: "text-[#EF4444]",
    bgLight: "bg-[#EF4444]/10",
  },
];

const lineData = [
  { name: "Jan", bookings: 45 },
  { name: "Feb", bookings: 52 },
  { name: "Mar", bookings: 61 },
  { name: "Apr", bookings: 58 },
  { name: "May", bookings: 72 },
  { name: "Jun", bookings: 83 },
  { name: "Jul", bookings: 89 },
];

const barData = [
  { name: "Dhaka", visits: 1250 },
  { name: "Cox's bazar", visits: 1000 },
  { name: "Sylhet", visits: 850 },
  { name: "Bandarban", visits: 750 },
  { name: "Sundarban", visits: 650 },
  { name: "Rangamati", visits: 650 },
];

const recentActivities = [
  {
    type: "Booking",
    description: 'New booking by John Doe for "Dhaka City Tour"',
    status: "Pending",
    time: "5 min ago",
    statusColor: "bg-[#FFFBEB] text-[#B45309]",
  },
  {
    type: "Review",
    description: 'Sarah Johnson rated "Paradise Resort" 5 stars',
    status: "Active",
    time: "12 min ago",
    statusColor: "bg-[#F0FDF4] text-[#15803D]",
  },
  {
    type: "Business",
    description: 'New hotel "Ocean View" submitted for approval',
    status: "Pending",
    time: "1 hour ago",
    statusColor: "bg-[#FFFBEB] text-[#B45309]",
  },
  {
    type: "Booking",
    description: "Booking #12345 confirmed and payment received",
    status: "Confirmed",
    time: "2 hours ago",
    statusColor: "bg-[#EFF6FF] text-[#1D4ED8]",
  },
  {
    type: "Review",
    description: 'New review on "Rangamati Cultural Package"',
    status: "Active",
    time: "3 hours ago",
    statusColor: "bg-[#F0FDF4] text-[#15803D]",
  },
];

export default function Dashboard() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 pb-8"
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all cursor-default group"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <div className="flex items-center gap-1.5">
                  <div
                    className={`flex items-center gap-1 px-1.5 py-0.5 rounded-md ${stat.isUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}
                  >
                    {stat.isUp ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span className="text-[10px] font-bold">{stat.change}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">
                    vs last month
                  </span>
                </div>
              </div>
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`${stat.bgLight} p-3 rounded-2xl transition-colors group-hover:bg-opacity-80`}
              >
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-gray-900">
              Monthly Bookings
            </h3>
            <motion.button
              whileHover={{ x: 3 }}
              className="flex items-center gap-1 text-sm font-bold text-[#0157C8] hover:underline"
            >
              View Details <ArrowUpRight className="h-4 w-4" />
            </motion.button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F3F4F6"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF", fontWeight: 500 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF", fontWeight: 500 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#0157C8"
                  strokeWidth={4}
                  dot={{
                    r: 4,
                    fill: "#0157C8",
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-gray-900">
              Top Districts by Visits
            </h3>
            <motion.button
              whileHover={{ x: 3 }}
              className="flex items-center gap-1 text-sm font-bold text-[#0157C8] hover:underline"
            >
              View All <ArrowUpRight className="h-4 w-4" />
            </motion.button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F3F4F6"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF", fontWeight: 500 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF", fontWeight: 500 }}
                />
                <Tooltip
                  cursor={{ fill: "#F9FAFB" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar dataKey="visits" radius={[6, 6, 0, 0]} barSize={40}>
                  {barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill="#0157C8"
                      fillOpacity={1 - index * 0.1}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-50">
          <h3 className="text-lg font-bold text-gray-900">Recent Activities</h3>
          <button className="text-sm font-bold text-[#10B981] hover:underline transition-all">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentActivities.map((activity, index) => (
                <motion.tr
                  key={index}
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                  className="transition-colors group"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#10B981] transition-colors">
                      {activity.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 font-medium">
                      {activity.description}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight ${activity.statusColor}`}
                    >
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400 font-medium">
                      {activity.time}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
