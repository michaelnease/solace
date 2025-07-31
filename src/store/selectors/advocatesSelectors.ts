import type { StoreState } from "../index";

// Filter selectors
export const selectActiveFilters = (state: StoreState) => state.activeFilters;
export const selectSearchTerm = (state: StoreState) => state.searchTerm;

// Computed selectors
export const selectHasActiveFilters = (state: StoreState) =>
  Object.keys(state.activeFilters).length > 0;

export const selectFilterCount = (state: StoreState) =>
  Object.keys(state.activeFilters).length;

export const selectIsSearching = (state: StoreState) =>
  state.searchTerm.length > 0;

// Action selectors
export const selectSetFilter = (state: StoreState) => state.setFilter;
export const selectClearFilter = (state: StoreState) => state.clearFilter;
export const selectClearAllFilters = (state: StoreState) =>
  state.clearAllFilters;
export const selectSetSearchTerm = (state: StoreState) => state.setSearchTerm;
