import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import { ROUTES } from "@/routes/utils";
import { lazy, Suspense } from "react";
import { ROLES } from "@/config/roles";

const Requests = lazy(() => import("@/pages/Requests"));

const DashboardLayout = lazy(
  () => import("@/components/_layout/DashboardLayout")
);
const Categories = lazy(() => import("@/pages/Categories"));
const CategoriesProcedures = lazy(() => import("@/pages/CategoriesProcedures"));
const CategoriesDepartments = lazy(
  () => import("@/pages/CategoriesDepartment")
);
const CategoriesFaculties = lazy(() => import("@/pages/CategoriesFaculties"));
const General = lazy(() => import("@/pages/General"));
const GeneralInstructors = lazy(() => import("@/pages/GeneralInstructors"));
const GeneralStudents = lazy(() => import("@/pages/GeneralStudents"));
const GeneralAccounts = lazy(() => import("@/pages/GeneralAccounts"));
// const GeneralRoles = lazy(() => import("@/pages/GeneralRoles"));
const Login = lazy(() => import("@/pages/Login"));
const Profile = lazy(() => import("@/pages/Profile"));
const Procedures = lazy(() => import("@/pages/Procedures"));

const RolesGuard = lazy(() => import("@/components/RolesGuard"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <DashboardLayout />,
    children: [
      {
        path: ROUTES.REQUESTS,
        element: <Requests />,
      },
      {
        path: ROUTES.REQUESTS_ADD,
        element: <>tạo yêu cầu page</>,
      },
      {
        path: ROUTES.DOCUMENTS,
        element: <>document page</>,
      },
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTES.INSTRUCTORS,
        element: (
          <RolesGuard hasRoles={[ROLES.INSTRUCTOR]}>
            <Outlet />
          </RolesGuard>
        ),
        children: [
          {
            index: true,
            element: <>Instructor dashboard</>,
          },
        ],
      },
      {
        path: ROUTES.ADMIN,
        element: (
          <RolesGuard hasRoles={[ROLES.ADMIN]}>
            <Outlet />
          </RolesGuard>
        ),
        children: [
          {
            index: true,
            element: <div>Dashboard</div>,
          },
          {
            path: ROUTES.ADMIN_PROCEDURES,
            element: <Procedures />,
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
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
