import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayouts/Main";
import Home from "../Pages/Homes/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssaignment from "../Pages/CreateAssaignment/CreateAssaignment";
import PrivateRoutes from "../Providers/PrivateRoutes";
import Assignments from "../Pages/Assignments/Assignments";
import AllAssignments from "../Pages/AllAssignments/AllAssignments";
import UpdateAssign from "../Pages/Assignments/UpdateAssign";

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
          element:<PrivateRoutes>
                    <CreateAssaignment></CreateAssaignment>
                  </PrivateRoutes>
        },
        {
          path: '/assignments',
          element: <PrivateRoutes>
            <Assignments></Assignments>
          </PrivateRoutes>
        },
        {
          path:'/allAssignment',
          element:<AllAssignments></AllAssignments>
        },
        {
          path:'/update/:id',
          element:<PrivateRoutes><UpdateAssign></UpdateAssign></PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)
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