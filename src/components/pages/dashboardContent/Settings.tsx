"use client";

import React, { useState } from "react";
import { 
  Save
} from "lucide-react";
import { motion} from "framer-motion";
import { toast } from "sonner";

export default function SystemSettings() {
  const [settings, setSettings] = useState({
    siteName: "TourismPro",
    contactEmail: "info@tourismpro.com",
    contactPhone: "+94 11 234 5678",
    paypalEnabled: true,
    stripeEnabled: false,
    bankTransferEnabled: false,
    emailNotifications: false,
    smsNotifications: true,
    bookingAlerts: true,
    facebookUrl: "https://facebook.com/...",
    instagramHandle: "@yourusername",
    twitterHandle: "@yourusername",
    youtubeChannel: "https://youtube.com/..."
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!", {
      description: "Your system configuration has been updated.",
    });
  };

  const handleCancel = () => {
    toast.error("Changes discarded", {
      description: "No changes were saved to the system.",
    });
  };

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

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-5xl space-y-8 pb-12"
    >
      {/* Website Configuration */}
      <motion.section variants={itemVariants} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 transition-all hover:shadow-xl hover:shadow-gray-200/50">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-4 font-outfit">Website Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Site Name</label>
            <input 
              type="text" 
              value={settings.siteName}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Contact Email</label>
            <input 
              type="email" 
              value={settings.contactEmail}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Contact Phone</label>
            <input 
              type="text" 
              value={settings.contactPhone}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
            />
          </div>
        </div>
      </motion.section>

      {/* Payment Settings */}
      <motion.section variants={itemVariants} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 transition-all hover:shadow-xl hover:shadow-gray-200/50">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-4 font-outfit">Payment Settings</h3>
        <div className="space-y-4">
          {[
            { id: 'paypalEnabled', label: 'PayPal Integration', desc: 'Accept payments via PayPal' },
            { id: 'stripeEnabled', label: 'Stripe integration', desc: 'Accept credit card payments' },
            { id: 'bankTransferEnabled', label: 'Bank Transfer', desc: 'Manual bank transfer option' },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 pb-4 last:pb-0">
              <div>
                <p className="text-sm font-bold text-gray-900">{item.label}</p>
                <p className="text-[12px] text-gray-500 font-medium">{item.desc}</p>
              </div>
              <button 
                onClick={() => setSettings(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof settings] }))}
                className={`w-12 h-6.5 rounded-full transition-all relative ${settings[item.id as keyof typeof settings] ? 'bg-[#10B981]' : 'bg-gray-200'}`}
              >
                <motion.div 
                  animate={{ x: settings[item.id as keyof typeof settings] ? 24 : 4 }}
                  className="absolute top-1 w-4.5 h-4.5 rounded-full bg-white shadow-sm"
                />
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Notification Settings */}
      <motion.section variants={itemVariants} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 transition-all hover:shadow-xl hover:shadow-gray-200/50">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-4 font-outfit">Notification Settings</h3>
        <div className="space-y-4">
          {[
            { id: 'emailNotifications', label: 'Email Notifications', desc: 'Receive notifications via email' },
            { id: 'smsNotifications', label: 'SMS Notifications', desc: 'Receive notifications via SMS' },
            { id: 'bookingAlerts', label: 'Booking Alerts', desc: 'Get notified on new bookings' },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 pb-4 last:pb-0">
              <div>
                <p className="text-sm font-bold text-gray-900">{item.label}</p>
                <p className="text-[12px] text-gray-500 font-medium">{item.desc}</p>
              </div>
              <button 
                onClick={() => setSettings(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof settings] }))}
                className={`w-12 h-6.5 rounded-full transition-all relative ${settings[item.id as keyof typeof settings] ? 'bg-[#10B981]' : 'bg-gray-200'}`}
              >
                <motion.div 
                  animate={{ x: settings[item.id as keyof typeof settings] ? 24 : 4 }}
                  className="absolute top-1 w-4.5 h-4.5 rounded-full bg-white shadow-sm"
                />
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Social Media Integration */}
      <motion.section variants={itemVariants} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 transition-all hover:shadow-xl hover:shadow-gray-200/50">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-4 font-outfit">Social Media Integration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Facebook Page URL', value: settings.facebookUrl, id: 'facebookUrl' },
            { label: 'Instagram Handle', value: settings.instagramHandle, id: 'instagramHandle' },
            { label: 'Twitter Handle', value: settings.twitterHandle, id: 'twitterHandle' },
            { label: 'YouTube Channel', value: settings.youtubeChannel, id: 'youtubeChannel' },
          ].map((item) => (
            <div key={item.id} className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{item.label}</label>
              <input type="text" value={item.value} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all" />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="flex justify-end gap-4 pt-6 border-t border-gray-100">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCancel}
          className="px-10 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm"
        >
          Cancel
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "#059669" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="flex items-center gap-2 px-10 py-3 bg-[#10B981] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#10B981]/20 transition-all"
        >
          <Save className="h-4 w-4" /> Save All Settings
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
