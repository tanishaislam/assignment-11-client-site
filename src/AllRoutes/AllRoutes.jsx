import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayouts/Main";
import Home from "../Pages/Homes/Home";
import ErrorPage from "../Pages/ErrorPage";

const myCreateRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default myCreateRouter;