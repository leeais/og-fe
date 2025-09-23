import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import { ROUTES } from "@/routes/utils";
import { lazy, Suspense } from "react";
import { ROLES } from "@/config/roles";
import Home from "@/pages/Home";
import useAuthStore from "@/store/auth.store";

// common
const SplashScreen = lazy(() => import("@/pages/SplashScreen"));
const Login = lazy(() => import("@/pages/Login"));
const RolesGuard = lazy(() => import("@/components/RolesGuard"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const DashboardLayout = lazy(
  () => import("@/components/_layout/DashboardLayout")
);

const RequestCreation = lazy(() => import("@/pages/RequestCreation"));
const Requests = lazy(() => import("@/pages/Requests"));
const RequestProcessing = lazy(() => import("@/pages/RequestProcessing"));

const Documents = lazy(() => import("@/pages/Documents"));

const SettingsProfile = lazy(() => import("@/pages/SettingsProfile"));

const Settings = lazy(() => import("@/pages/Settings"));

// admin
const Procedures = lazy(() => import("@/pages/Procedures"));

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
const GeneralRoles = lazy(() => import("@/pages/GeneralRoles"));

const activeRole = useAuthStore.getState().activeRole;

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.REQUEST_CREATION,
        element: <RequestCreation />,
      },
      {
        path: ROUTES.REQUESTS,
        element: <Requests />,
      },
      {
        path: ROUTES.DOCUMENTS,
        element: <Documents />,
      },
      {
        path: ROUTES.SETTINGS,
        element: <Settings />,
      },
      {
        path: ROUTES.SETTINGS_PROFILE,
        element: <SettingsProfile />,
      },
      // instructor
      activeRole === ROLES.INSTRUCTOR
        ? {
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
              {
                path: ROUTES.INSTRUCTORS_REQUEST_PROCESSING,
                element: <RequestProcessing />,
              },
            ],
          }
        : {},
      // admin
      activeRole === ROLES.ADMIN
        ? {
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
                element: <GeneralRoles />,
              },
            ],
          }
        : {},
    ],
  },
  // without layout
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.CATCH_ALL,
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
