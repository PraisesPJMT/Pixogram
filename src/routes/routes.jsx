import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/HomePage";
import Loginpage from "../pages/login/Loginpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
]);

export default router;
