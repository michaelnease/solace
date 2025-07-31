import { StateCreator } from "zustand";

export interface AdvocatesSlice {
  searchTerm: string;
  activeFilters: Record<string, string | string[] | number>;

  // Actions
  setSearchTerm: (term: string) => void;
  setFilter: (key: string, value: string | string[] | number) => void;
  clearFilter: (key: string) => void;
  clearAllFilters: () => void;
  resetFilters: () => void;
}

const initialState = {
  searchTerm: "",
  activeFilters: {},
};

export const createAdvocatesSlice: StateCreator<AdvocatesSlice> = (
  set,
  get,
  store
) => ({
  ...initialState,

  setSearchTerm: (term) => {
    set({ searchTerm: term });
  },

  setFilter: (key, value) => {
    set((state) => ({
      activeFilters: {
        ...state.activeFilters,
        [key]: value,
      },
    }));
  },

  clearFilter: (key) => {
    set((state) => {
      const newFilters = { ...state.activeFilters };
      delete newFilters[key];
      return { activeFilters: newFilters };
    });
  },

  clearAllFilters: () => {
    set({ searchTerm: "", activeFilters: {} });
  },

  resetFilters: () => {
    set({ searchTerm: "", activeFilters: {} });
  },
});
