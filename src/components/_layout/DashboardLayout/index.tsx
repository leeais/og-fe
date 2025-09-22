import { Outlet } from "react-router";

import Header from "@/components/_layout/DashboardLayout/components/Header";
import Sidebar from "@/components/_layout/DashboardLayout/components/Sidebar";
import SubHeader from "@/components/_layout/DashboardLayout/components/SubHeader";
import RolesGuard from "@/components/RolesGuard";
import { ROLES } from "@/config/roles";

export default function DashboardLayout() {
  return (
    <RolesGuard hasRoles={[ROLES.ADMIN, ROLES.INSTRUCTOR, ROLES.STUDENT]}>
      <div className="w-full flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <SubHeader />
            <div className="flex-1 overflow-x-hidden bg-accent">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </RolesGuard>
  );
}
