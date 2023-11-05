import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayouts/Main";
import Home from "../Pages/Homes/Home";

const myCreateRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default myCreateRouter;