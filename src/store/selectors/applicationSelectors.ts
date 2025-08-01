import type { StoreState } from "../index";

// Basic selectors
export const selectApplicationName = (state: StoreState) => state.name;
export const selectApplicationHealth = (state: StoreState) => state.health;
