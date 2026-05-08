"use client";

import { format } from "date-fns";
import { Calendar, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface City {
  name: string;
  places: number;
  image: string;
}

const cities: City[] = [
  { name: "Dhaka", places: 60, image: "/search/dhaka.png" },
  { name: "Cox's Bazar", places: 45, image: "/search/cox.png" },
  { name: "Sylhet", places: 38, image: "/search/sylhet.png" },
  { name: "Bandarban", places: 50, image: "/search/bandarban.png" },
  { name: "Rangamati", places: 32, image: "/search/rangamati.png" },
  { name: "Sundarban", places: 28, image: "/search/sundarban.png" },
];

export default function TravelPlanner() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  // Dropdown states
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [openDep, setOpenDep] = useState(false);
  const [openRet, setOpenRet] = useState(false);
  const [currentMonthDep, setCurrentMonthDep] = useState(new Date());
  const [currentMonthRet, setCurrentMonthRet] = useState(new Date());

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const depRef = useRef<HTMLDivElement>(null);
  const retRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(e.target as Node)) setOpenFrom(false);
      if (toRef.current && !toRef.current.contains(e.target as Node)) setOpenTo(false);
      if (depRef.current && !depRef.current.contains(e.target as Node)) setOpenDep(false);
      if (retRef.current && !retRef.current.contains(e.target as Node)) setOpenRet(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calendar Component
  const renderCalendar = (
    currentMonth: Date,
    selectedDate: Date | null,
    onSelect: (date: Date) => void,
    setCurrentMonth: (date: Date) => void
  ) => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="w-80 bg-white border border-gray-200 rounded-xl shadow-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-gray-100 rounded-lg">
            ←
          </button>
          <div className="font-semibold text-gray-900">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-gray-100 rounded-lg">
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-sm">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();

            return (
              <button
                key={day}
                onClick={() => onSelect(date)}
                className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
                  isSelected ? "bg-teal-600 text-white font-medium" : "hover:bg-teal-50"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // Combined From → To Component with proper gap
  const CityFromToSelector = () => {
    const fromSelected = cities.find(c => c.name === fromCity);
    const toSelected = cities.find(c => c.name === toCity);

    return (
      <div className="flex gap-4">
        {/* FROM */}
        <div className="flex-1 relative" ref={fromRef}>
          <button
            onClick={() => setOpenFrom(!openFrom)}
            className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-left flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm"
          >
            {fromSelected ? (
              <>
                <Image src={fromSelected.image} alt={fromSelected.name} width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
                <span className="font-medium text-gray-900">{fromSelected.name}</span>
              </>
            ) : (
              <span className="text-gray-500">From</span>
            )}
            <ChevronDown className={`ml-auto w-5 h-5 text-gray-600 transition-transform ${openFrom ? "rotate-180" : ""}`} />
          </button>

          {/* From Dropdown */}
          {openFrom && (
            <div className="absolute top-full mt-2 left-0 right-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
              {cities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => {
                    setFromCity(city.name);
                    setOpenFrom(false);
                  }}
                  className="w-full px-5 py-4 flex items-center gap-4 hover:bg-teal-50 text-left border-b border-gray-100 last:border-b-0 transition-colors"
                >
                  <Image src={city.image} alt={city.name} width={48} height={48} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">{city.name}</div>
                    <div className="text-sm text-gray-500">{city.places} places available</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TO */}
        <div className="flex-1 relative" ref={toRef}>
          <button
            onClick={() => setOpenTo(!openTo)}
            className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-left flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm"
          >
            {toSelected ? (
              <>
                <Image src={toSelected.image} alt={toSelected.name} width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
                <span className="font-medium text-gray-900">{toSelected.name}</span>
              </>
            ) : (
              <span className="text-gray-500">To</span>
            )}
            <ChevronDown className={`ml-auto w-5 h-5 text-gray-600 transition-transform ${openTo ? "rotate-180" : ""}`} />
          </button>

          {/* To Dropdown */}
          {openTo && (
            <div className="absolute top-full mt-2 left-0 right-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
              {cities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => {
                    setToCity(city.name);
                    setOpenTo(false);
                  }}
                  className="w-full px-5 py-4 flex items-center gap-4 hover:bg-teal-50 text-left border-b border-gray-100 last:border-b-0 transition-colors"
                >
                  <Image src={city.image} alt={city.name} width={48} height={48} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">{city.name}</div>
                    <div className="text-sm text-gray-500">{city.places} places available</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">Plan Your Perfect Trip</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Create your personalized travel plan with local insights, guided routes, and exclusive tour packages.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-teal-100 rounded-3xl p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            {/* From → To Connected Bar (spans 5 columns) */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-4 text-sm font-medium mb-2">
                <label>From</label>
                <label>To</label>
              </div>
              <CityFromToSelector />
            </div>

            {/* Departure Date */}
            <div className="md:col-span-3" ref={depRef}>
              <label className="block text-sm font-medium mb-2">Departure Date</label>
              <div className="relative">
                <button
                  onClick={() => setOpenDep(!openDep)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-left flex items-center gap-3 hover:border-gray-400 transition-all shadow-sm"
                >
                  <Calendar className="w-5 h-5 text-gray-500" />
                  {departureDate ? (
                    <div>
                      <div className="font-medium text-gray-900">{format(departureDate, "dd MMM yyyy")}</div>
                      <div className="text-xs text-gray-500">{format(departureDate, "EEEE")}</div>
                    </div>
                  ) : (
                    <span className="text-gray-500">Select Date</span>
                  )}
                </button>
                {openDep && (
                  <div className="absolute top-full mt-2 left-0 z-50">
                    {renderCalendar(currentMonthDep, departureDate, (d) => { setDepartureDate(d); setOpenDep(false); }, setCurrentMonthDep)}
                  </div>
                )}
              </div>
            </div>

            {/* Return Date */}
            <div className="md:col-span-2" ref={retRef}>
              <label className="block text-sm font-medium mb-2">Return Date</label>
              <div className="relative">
                <button
                  onClick={() => setOpenRet(!openRet)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-left flex items-center gap-3 hover:border-gray-400 transition-all shadow-sm"
                >
                  <Calendar className="w-5 h-5 text-gray-500" />
                  {returnDate ? (
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{format(returnDate, "dd MMM")}</div>
                    </div>
                  ) : (
                    <span className="text-gray-500">Select</span>
                  )}
                </button>
                {openRet && (
                  <div className="absolute top-full mt-2 left-0 z-50">
                    {renderCalendar(currentMonthRet, returnDate, (d) => { setReturnDate(d); setOpenRet(false); }, setCurrentMonthRet)}
                  </div>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <Link href="/AiTreap-Plan">
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-5 px-8 rounded-xl transition-all shadow-md transform hover:scale-105">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}