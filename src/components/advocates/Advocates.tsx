"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "@/lib/endpoints";

export default function Advocates() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["advocates"],
    queryFn: async () => {
      const response = await fetch(ENDPOINTS.ADVOCATES);
      if (!response.ok) {
        throw new Error("Failed to fetch advocates");
      }
      return response.json();
    },
  });

  // Log the results
  useEffect(() => {
    if (data) {
      console.log("Advocates data:", data);
    }
    if (error) {
      console.error("Advocates error:", error);
    }
  }, [data, error]);

  if (isLoading) {
    return <div>Loading advocates...</div>;
  }

  if (error) {
    return <div>Error loading advocates: {error.message}</div>;
  }

  return <div>Advocates</div>;
}
