import { createBrowserRouter } from "react-router";
import App from "./App";
import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: AuthLayout },
      { path: "dashboard", Component: AppLayout },
    ],
  },
]);

export default router;
