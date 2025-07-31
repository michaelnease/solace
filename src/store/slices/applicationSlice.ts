import { StateCreator } from "zustand";
import { ENDPOINTS } from "@/lib/endpoints";

export interface ApplicationSlice {
  name: string;
  health: "healthy" | "degraded" | "unhealthy";

  // Actions
  setHealth: (health: "healthy" | "degraded" | "unhealthy") => void;
  fetchHealth: () => Promise<void>;
}

const initialState = {
  name: "Solace Advocates",
  health: "healthy" as const,
};

export const createApplicationSlice: StateCreator<ApplicationSlice> = (
  set
) => ({
  ...initialState,

  setHealth: (health) => set({ health }),

  fetchHealth: async () => {
    try {
      const response = await fetch(ENDPOINTS.HEALTH);
      if (response.ok) {
        const data = await response.json();
        set({ health: data.status });
      } else {
        set({ health: "unhealthy" });
      }
    } catch (error) {
      set({ health: "unhealthy" });
    }
  },
});
