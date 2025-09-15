import { Outlet } from "react-router";

import Header from "@/components/_layout/DashboardLayout/components/Header";
import Sidebar from "@/components/_layout/DashboardLayout/components/Sidebar";
import SubHeader from "@/components/_layout/DashboardLayout/components/SubHeader";

export default function DashboardLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden bg-accent">
          <SubHeader />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
