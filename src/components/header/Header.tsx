"use client";

import React, { useEffect } from "react";
import { useStore } from "@/store";
import {
  selectApplicationName,
  selectApplicationHealth,
} from "@/store/selectors";
import { MESSAGES } from "@/lib/messages";

export default function Header() {
  const applicationName = useStore(selectApplicationName);
  const health = useStore(selectApplicationHealth);
  const fetchHealth = useStore((state) => state.fetchHealth);

  useEffect(() => {
    // Fetch health on component mount
    fetchHealth();

    // Set up interval to fetch health every 30 seconds
    const interval = setInterval(fetchHealth, 30000);

    return () => clearInterval(interval);
  }, [fetchHealth]);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            {applicationName || MESSAGES.APPLICATION.NAME}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Status:</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                health === "healthy"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {health || "unknown"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
