import { StateCreator } from "zustand";
import { HealthStatus } from "@/types/application";
import { ENDPOINTS } from "@/lib/endpoints";

export interface ApplicationSlice {
  name: string;
  health: HealthStatus;
  fetchHealth: () => Promise<void>;
}

const initialState = {
  name: "Solace Advocates",
  health: HealthStatus.HEALTHY,
};

export const createApplicationSlice: StateCreator<ApplicationSlice> = (
  set
) => ({
  ...initialState,

  fetchHealth: async () => {
    try {
      const response = await fetch(ENDPOINTS.HEALTH);
      if (response.ok) {
        set({ health: HealthStatus.HEALTHY });
      } else {
        set({ health: HealthStatus.UNHEALTHY });
      }
    } catch (error) {
      set({ health: HealthStatus.UNHEALTHY });
    }
  },
});
