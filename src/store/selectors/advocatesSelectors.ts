import type { StoreState } from "../index";

// Basic selectors
export const selectAdvocatesNames = (state: StoreState) => state.names;
export const selectAdvocatesCount = (state: StoreState) => state.names.length;

// Computed selectors
export const selectAdvocatesInfo = (state: StoreState) => ({
  names: state.names,
  count: state.names.length,
  isEmpty: state.names.length === 0,
  hasNames: state.names.length > 0,
});

export const selectAdvocateByName = (name: string) => (state: StoreState) =>
  state.names.includes(name);

export const selectAdvocatesByFirstLetter =
  (letter: string) => (state: StoreState) =>
    state.names.filter((name) =>
      name.toLowerCase().startsWith(letter.toLowerCase())
    );

// Action selectors
export const selectAddName = (state: StoreState) => state.addName;
export const selectRemoveName = (state: StoreState) => state.removeName;
export const selectSetNames = (state: StoreState) => state.setNames;
export const selectClearNames = (state: StoreState) => state.clearNames;
