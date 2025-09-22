import { Outlet } from "react-router";

import Header from "@/components/_layout/DashboardLayout/components/Header";
import Sidebar from "@/components/_layout/DashboardLayout/components/Sidebar";
import SubHeader from "@/components/_layout/DashboardLayout/components/SubHeader";
import RolesGuard from "@/components/RolesGuard";
import { ROLES } from "@/config/roles";

export default function DashboardLayout() {
  return (
    <RolesGuard hasRoles={[ROLES.ADMIN, ROLES.INSTRUCTOR, ROLES.STUDENT]}>
      <div className="size-full h-screen">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 overflow-hidden">
            <SubHeader />
            <div className="flex-1 bg-accent overflow-auto">
              <Outlet />
              <div className="h-[1000px]" />
            </div>
          </main>
        </div>
      </div>
    </RolesGuard>
  );
}
