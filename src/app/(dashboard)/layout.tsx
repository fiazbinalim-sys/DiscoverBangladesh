"use client";

import { useState } from "react";
import Sidebar from "@/components/pages/dashboardLayout/sidebar";
import TopNav from "@/components/pages/dashboardLayout/top-nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex h-screen bg-gray-50`}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="flex flex-1 flex-col min-w-0">
        <header className="h-16 border-b border-gray-200 bg-white sticky top-0 z-40">
          <TopNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
