"use client";

import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "@/lib/endpoints";
import { useStore } from "@/store";
import AdvocatesTable from "./AdvocatesTable";

export default function Advocates() {
  const { activeFilters, searchTerm } = useStore();

  const {
    data: advocates,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["advocates", activeFilters, searchTerm],
    queryFn: async () => {
      const params = new URLSearchParams();

      if (activeFilters.yearsOfExperience) {
        params.append(
          "yearsOfExperience",
          String(activeFilters.yearsOfExperience)
        );
      }

      if (activeFilters.degree) {
        params.append("degree", String(activeFilters.degree));
      }

      if (searchTerm) {
        params.append("search", searchTerm);
      }

      const query = params.toString();
      const url = `${ENDPOINTS.ADVOCATES}${query ? `?${query}` : ""}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch advocates");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading advocates...</div>;
  }

  if (error) {
    return <div>Error loading advocates: {error.message}</div>;
  }

  return (
    <div>
      <AdvocatesTable advocates={advocates.data} />
    </div>
  );
}
