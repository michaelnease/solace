"use client";

import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ENDPOINTS } from "@/lib/endpoints";
import { MESSAGES } from "@/lib/messages";
import { useStore } from "@/store";
import AdvocatesTable from "./AdvocatesTable";
import { selectActiveFilters, selectSearchTerm } from "@/store/selectors";

export default function Advocates() {
  const activeFilters = useStore(selectActiveFilters);
  const searchTerm = useStore(selectSearchTerm);

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
        throw new Error(MESSAGES.ERROR.FETCH_ADVOCATES_ERROR);
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <div>{MESSAGES.LOADING.FETCH_ADVOCATES}</div>;
  }

  if (error) {
    return toast.error(MESSAGES.ERROR.FETCH_ADVOCATES);
  }

  return (
    <div>
      <AdvocatesTable advocates={advocates.data} />
    </div>
  );
}
