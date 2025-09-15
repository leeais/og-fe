import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarState = {
  width: 250 | 56;
  isExpand: boolean;
};

type SidebarActions = {
  toggleSidebar: () => void;
  expandSidebar: () => void;
  collapseSidebar: () => void;
};

const initialState: SidebarState = {
  width: 250,
  isExpand: true,
};

const useSidebarStore = create<SidebarState & SidebarActions>()(
  persist(
    (set) => ({
      ...initialState,

      toggleSidebar: () =>
        set((state) =>
          state.isExpand
            ? { width: 56, isExpand: false }
            : { width: 250, isExpand: true }
        ),
      expandSidebar: () => set(() => ({ width: 250, isExpand: true })),
      collapseSidebar: () => set(() => ({ width: 56, isExpand: false })),
    }),
    { name: "sidebar" }
  )
);

export default useSidebarStore;
