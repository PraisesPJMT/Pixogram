import React from "react";
import router from "./routes/routes";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
