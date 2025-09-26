import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { ROUTES } from "@/routes/utils";
import { ROLES } from "@/config/roles";

const SplashScreen = lazy(() => import("@/pages/SplashScreen"));
const Login = lazy(() => import("@/pages/Login"));
const RolesGuard = lazy(() => import("@/components/RolesGuard"));
const GuestOnlyRoute = lazy(() => import("@/components/GuestOnlyRoute"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Forbidden = lazy(() => import("@/pages/Forbidden"));
const DashboardLayout = lazy(
  () => import("@/components/_layout/DashboardLayout")
);

const Home = lazy(() => import("@/pages/Home"));
const RequestCreation = lazy(() => import("@/pages/RequestCreation"));
const Requests = lazy(() => import("@/pages/Requests"));
const Documents = lazy(() => import("@/pages/Documents"));
const Settings = lazy(() => import("@/pages/Settings"));
const SettingsProfile = lazy(() => import("@/pages/SettingsProfile"));

// instructors
const RequestProcessing = lazy(() => import("@/pages/RequestProcessing"));

// admin
const Procedures = lazy(() => import("@/pages/Procedures"));
const Categories = lazy(() => import("@/pages/Categories"));
const CategoriesProcedures = lazy(() => import("@/pages/CategoriesProcedures"));
const CategoriesClasses = lazy(() => import("@/pages/CategoriesClasses"));
const CategoriesBatches = lazy(() => import("@/pages/CategoriesBatches"));
const CategoriesDepartments = lazy(
  () => import("@/pages/CategoriesDepartments")
);
const CategoriesFaculties = lazy(() => import("@/pages/CategoriesFaculties"));
const General = lazy(() => import("@/pages/General"));
const GeneralInstructors = lazy(() => import("@/pages/GeneralInstructors"));
const GeneralStudents = lazy(() => import("@/pages/GeneralStudents"));
const GeneralAccounts = lazy(() => import("@/pages/GeneralAccounts"));
const GeneralRoles = lazy(() => import("@/pages/GeneralRoles"));
const GeneralPaymentMethods = lazy(
  () => import("@/pages/GeneralPaymentMethods")
);
const GeneralSessions = lazy(() => import("@/pages/GeneralSessions"));

const router = createBrowserRouter([
  // have layout
  {
    path: ROUTES.ROOT,
    element: (
      <RolesGuard hasRoles="*">
        <DashboardLayout />
      </RolesGuard>
    ),
    children: [
      {
        index: true,
        element: (
          <RolesGuard hasRoles={[ROLES.STUDENT]}>
            <Home />
          </RolesGuard>
        ),
      },
      {
        path: ROUTES.REQUEST_CREATION,
        element: (
          <RolesGuard hasRoles={[ROLES.STUDENT, ROLES.INSTRUCTOR]}>
            <RequestCreation />
          </RolesGuard>
        ),
      },
      {
        path: ROUTES.REQUESTS,
        element: (
          <RolesGuard hasRoles={[ROLES.STUDENT, ROLES.INSTRUCTOR]}>
            <Requests />
          </RolesGuard>
        ),
      },
      {
        path: ROUTES.DOCUMENTS,
        element: (
          <RolesGuard hasRoles={[ROLES.STUDENT, ROLES.INSTRUCTOR]}>
            <Documents />
          </RolesGuard>
        ),
      },
      {
        path: ROUTES.SETTINGS,
        element: (
          <RolesGuard hasRoles={[ROLES.STUDENT, ROLES.INSTRUCTOR, ROLES.ADMIN]}>
            <Settings />
          </RolesGuard>
        ),
      },
      {
        path: ROUTES.SETTINGS_PROFILE,
        element: (
          <RolesGuard hasRoles={[ROLES.STUDENT, ROLES.INSTRUCTOR, ROLES.ADMIN]}>
            <SettingsProfile />
          </RolesGuard>
        ),
      },
      // instructors
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
            element: <>Instructor Dashboard</>,
          },
          {
            path: ROUTES.INSTRUCTORS_REQUEST_PROCESSING,
            element: <RequestProcessing />,
          },
        ],
      },
      // admin
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
            element: <>Admin Dashboard</>,
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
            path: ROUTES.ADMIN_CATEGORIES_DEPARTMENTS,
            element: <CategoriesDepartments />,
          },
          {
            path: ROUTES.ADMIN_CATEGORIES_FACULTIES,
            element: <CategoriesFaculties />,
          },
          {
            path: ROUTES.ADMIN_CATEGORIES_PROCEDURES,
            element: <CategoriesProcedures />,
          },
          {
            path: ROUTES.ADMIN_CATEGORIES_CLASSES,
            element: <CategoriesClasses />,
          },
          {
            path: ROUTES.ADMIN_CATEGORIES_BATCHES,
            element: <CategoriesBatches />,
          },
          {
            path: ROUTES.ADMIN_GENERAL,
            element: <General />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_ACCOUNTS,
            element: <GeneralAccounts />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_INSTRUCTORS,
            element: <GeneralInstructors />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_ROLES,
            element: <GeneralRoles />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_STUDENTS,
            element: <GeneralStudents />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_PAYMENT_METHODS,
            element: <GeneralPaymentMethods />,
          },
          {
            path: ROUTES.ADMIN_GENERAL_SESSIONS,
            element: <GeneralSessions />,
          },
        ],
      },
    ],
  },
  // without layout
  {
    path: ROUTES.LOGIN,
    element: (
      <GuestOnlyRoute>
        <Login />
      </GuestOnlyRoute>
    ),
  },
  {
    path: ROUTES.FORBIDDEN,
    element: <Forbidden />,
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
