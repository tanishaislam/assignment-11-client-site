import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayouts/Main";
import Home from "../Pages/Homes/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssaignment from "../Pages/CreateAssaignment/CreateAssaignment";

const myCreateRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/createAssaignment',
          element:<CreateAssaignment></CreateAssaignment>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default myCreateRouter;