import useSidebarStore from "@/store/sidebar.store";

export const useSidebar = () => {
  const sidebarStore = useSidebarStore();
  return { ...sidebarStore };
};
