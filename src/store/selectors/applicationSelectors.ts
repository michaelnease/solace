import type { StoreState } from "../index";

// Basic selectors
export const selectApplicationName = (state: StoreState) => state.name;
export const selectApplicationHealth = (state: StoreState) => state.health;

// Computed selectors
export const selectApplicationHealthStatus = (state: StoreState) => ({
  health: state.health,
  isHealthy: state.health === "healthy",
  isDegraded: state.health === "degraded",
  isUnhealthy: state.health === "unhealthy",
});

export const selectApplicationInfo = (state: StoreState) => ({
  name: state.name,
  health: state.health,
  healthStatus: selectApplicationHealthStatus(state),
});

// Action selectors
export const selectSetHealth = (state: StoreState) => state.setHealth;
