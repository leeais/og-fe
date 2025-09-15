import { createBrowserRouter, RouterProvider } from "react-router";

import { ROUTES } from "@/routes/utils";
import { lazy, Suspense } from "react";

const DashboardLayout = lazy(
  () => import("@/components/_layout/DashboardLayout")
);
const Categories = lazy(() => import("@/pages/Categories"));
const CategoriesProcedures = lazy(() => import("@/pages/CategoriesProcedures"));

const router = createBrowserRouter([
  {
    path: ROUTES.ADMIN,
    element: <DashboardLayout />,
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
