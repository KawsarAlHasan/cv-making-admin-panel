import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import CheckCode from "../pages/login/CheckCode";
import ForgotPassword from "../pages/login/ForgotPassword";
import SetNewPassword from "../pages/login/SetNewPassword";
import Unauthorized from "../components/Unauthorized";

import { AdminProvider } from "../context/AdminContext";
import MainLayout from "../layout/MainLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Administrators from "../pages/administrators/Administrators";

import NotFound from "../components/NotFound";
import UserManagement from "../pages/user-management/UserManagement";
import Campaign from "../pages/campaign/Campaign";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/check-code",
    element: <CheckCode />,
  },
  {
    path: "/set-new-password",
    element: <SetNewPassword />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/",
    element: (
      <AdminProvider>
        <MainLayout />
      </AdminProvider>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/user-management",
        element: <UserManagement />,
      },
      {
        path: "/administrators",
        element: <Administrators />,
      },
      {
        path: "/campaign",
        element: <Campaign />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
