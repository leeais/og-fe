import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import { ROUTES } from "@/routes/utils";
import { lazy, Suspense } from "react";

const DashboardLayout = lazy(
  () => import("@/components/_layout/DashboardLayout")
);
const Categories = lazy(() => import("@/pages/Categories"));
const CategoriesProcedures = lazy(() => import("@/pages/CategoriesProcedures"));
const CategoriesDepartments = lazy(() => import("@/pages/CategoriesDepartment"));
const CategoriesFaculties = lazy(() => import("@/pages/CategoriesFaculties"));
const General = lazy(() => import("@/pages/General"));
const GeneralInstructors = lazy(() => import("@/pages/GeneralInstructors"));
const GeneralStudents = lazy(() => import("@/pages/GeneralStudents"));
const GeneralAccounts = lazy(() => import("@/pages/GeneralAccounts"));
// const GeneralRoles = lazy(() => import("@/pages/GeneralRoles"));

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <DashboardLayout />,
    children: [
      {
        path: ROUTES.ADMIN,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <div>Dashboard</div>,
          },
          {
            path: ROUTES.ADMIN_CATEGORIES,
            element: <Categories />,
          },
          {
            path: ROUTES.ADMIN_CATEGORIES_PROCEDURES,
            element: <CategoriesProcedures />,
          },
          {
            path: ROUTES.ADMIN_CATEGORIES_DEPARTMENTS,
            element: <CategoriesDepartments />,
          },
          {
            path: ROUTES.ADMIN_CATEGORIES_FACULTIES,
            element: <CategoriesFaculties />,
          },
          {
            path: ROUTES.ADMIN_GENERAL,
            element: <General />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_INSTRUCTORS,
            element: <GeneralInstructors />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_STUDENTS,
            element: <GeneralStudents />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_ACCOUNTS,
            element: <GeneralAccounts />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_ROLES,
            element: <div>Roles</div>,
          }
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
