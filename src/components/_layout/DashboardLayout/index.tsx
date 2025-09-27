import { Navigate, Outlet } from "react-router";

import Header from "@/components/_layout/DashboardLayout/components/Header";
import Sidebar from "@/components/_layout/DashboardLayout/components/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/routes/utils";
import { useSidebar } from "@/hooks/useSidebar";

export default function DashboardLayout() {
  const { isLoggedIn, activeRole } = useAuth();
  const { width } = useSidebar();

  if (!isLoggedIn || !activeRole) return <Navigate to={ROUTES.LOGIN} replace />;

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-12 shrink-0 sticky top-0 z-50">
        <Header />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div
          className="overflow-y-auto overflow-x-hidden shrink-0 bg-background transition-[width] delay-200 ease-in-out border-r flex flex-col pt-12 z-50"
          style={{ width }}
        >
          <Sidebar />
        </div>

        <main className="flex-1 flex flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
