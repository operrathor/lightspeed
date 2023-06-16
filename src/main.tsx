import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/app.tsx";
import Bills from "./routes/bills.tsx";
import Home from "./routes/home.tsx";
import Login from "./routes/login.tsx";
import Profile from "./routes/profile.tsx";
import Root from "./routes/root.tsx";
import Support from "./routes/support.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "app",
        element: <App />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "bills",
            element: <Bills />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "support",
            element: <Support />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
