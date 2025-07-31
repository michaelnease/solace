import { StateCreator } from "zustand";

export interface ApplicationSlice {
  name: string;
  health: "healthy" | "degraded" | "unhealthy";

  // Actions
  setHealth: (health: "healthy" | "degraded" | "unhealthy") => void;
}

const initialState = {
  name: "Solace Advocates",
  health: "healthy" as const,
};

export const createApplicationSlice: StateCreator<ApplicationSlice> = (
  set,
  get,
  store
) => ({
  ...initialState,

  setHealth: (health) => set({ health }),
});
