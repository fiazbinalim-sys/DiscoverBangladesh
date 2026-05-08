"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}

export default function CustomDropdown({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select option",
  icon 
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:border-[#10B981] transition-all min-w-[140px] justify-between group"
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-400 group-hover:text-[#10B981] transition-colors">{icon}</span>}
          <span>{selectedOption?.label || placeholder}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-[#10B981]" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-[100] mt-2 w-full min-w-[180px] bg-white border border-gray-50 rounded-2xl shadow-xl shadow-gray-200/50 py-2 overflow-hidden"
          >
            <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
              {options.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                    ${value === option.value ? "text-[#10B981] font-bold bg-[#10B981]/5" : "text-gray-600 font-medium hover:text-gray-900"}`}
                >
                  {option.label}
                  {value === option.value && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <Check className="h-4 w-4" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
