import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/HomePage";
import Loginpage from "../pages/login/Loginpage";
import NoticeModal from "../globals/notice/Notice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Homepage />
        <NoticeModal />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Loginpage />
        <NoticeModal />
      </>
    ),
  },
]);

export default router;
