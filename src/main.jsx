import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Cat from "./routes/cat";
import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    // nested routes
    children: [
      {
        path: "cats",
        element: <Cat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
