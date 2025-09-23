import { Navigate, Outlet } from "react-router";

import Header from "@/components/_layout/DashboardLayout/components/Header";
import Sidebar from "@/components/_layout/DashboardLayout/components/Sidebar";
import SubHeader from "@/components/_layout/DashboardLayout/components/SubHeader";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/routes/utils";

export default function DashboardLayout() {
  const { isLoggedIn, activeRole } = useAuth();
  if (!isLoggedIn || !activeRole) return <Navigate to={ROUTES.LOGIN} replace />;

  return (
    <div className="size-full h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <SubHeader />
          <div className="flex-1 bg-accent overflow-auto min-h-[calc(100vh-88px)]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
