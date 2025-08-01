import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { createApplicationSlice } from "./slices/applicationSlice";
import { createAdvocatesSlice } from "./slices/advocatesSlice";

// Devtools configuration
const devtoolsConfig = {
  name: "solace-store",
  enabled: process.env.NODE_ENV === "development",
};

// Combined store type
export type StoreState = ReturnType<typeof createApplicationSlice> &
  ReturnType<typeof createAdvocatesSlice>;

// Create the main store
export const useStore = create<StoreState>()(
  devtools(
    (set, get, store) => ({
      ...createApplicationSlice(set, get, store),
      ...createAdvocatesSlice(set, get, store),
    }),
    {
      ...devtoolsConfig,
      name: "Solace Advocates",
    }
  )
);

// Re-export devtools for use in slices
export { devtools, devtoolsConfig };

// Re-export selectors
export * from "./selectors";
