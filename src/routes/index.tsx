import { createBrowserRouter } from "react-router-dom";
import {
  bank,
  chartSquare,
  email,
  finance,
  group,
  homeHashtag,
  list,
  setting,
} from "../components/Svg";
import React from "react";

const Redirect = React.lazy(() => import("../components/Redirect"));
const MainLayout = React.lazy(() => import("../layouts/mainLayout"));
const Dashboard = React.lazy(() => import("../components/dashboard/dashboard"));

const router = [
  {
    path: "/",
    element: <Redirect navig="dashboard" />,
  },
  {
    path: "/*",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        showInNav: true,
        element: <Dashboard />,
        icon: <div>{homeHashtag}</div>,
      },
      {
        path: "report",
        name: "Report",
        showInNav: true,
        element: <Dashboard />,
        icon: <div>{chartSquare}</div>,
      },
      {
        path: "bank",
        name: "Bank",
        showInNav: true,
        element: <Dashboard />,
        icon: <div>{bank}</div>,
      },
      {
        path: "email",
        name: "Email",
        showInNav: true,
        element: <Dashboard />,
        icon: <div>{email}</div>,
      },
      {
        path: "group",
        name: "Group",
        showInNav: true,
        element: <Dashboard />,
        icon: <div>{group}</div>,
      },
      {
        path: "list",
        name: "List",
        showInNav: true,
        element: <Dashboard />,
        icon: <div>{list}</div>,
      },
      {
        path: "finance",
        name: "Finance",
        showInNav: true,
        element: <Dashboard />,
        icon: <div>{finance}</div>,
      },
      {
        path: "setting",
        name: "Setting",
        showInNav: false,
        element: <Dashboard />,
        icon: <div>{setting}</div>,
      },
    ],
  },
];

const CreateRouter = createBrowserRouter(router);

export { router, CreateRouter };
