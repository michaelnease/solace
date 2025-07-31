import type { StoreState } from "../index";

// Filter selectors
export const selectActiveFilters = (state: StoreState) => state.activeFilters;
export const selectSearchTerm = (state: StoreState) => state.searchTerm;
