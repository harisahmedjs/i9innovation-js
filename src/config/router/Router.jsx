import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../screens/Blogs";





const Router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />
  }
])

export default Router