import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./Login";
import Movi from "./Movi";
import { Provider } from "react-redux";
import Store from "../redux/store";
import MoviBackground from "./MoviBackground";
import Signup from "./Signup";
const Body = ()=> {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:'/movi',
            element:<Movi />
        },
        {
            path:'/signup',
            element:<Signup />
        },
      

    ])
  
    return(
        <>
        <Provider store={Store}>
         <RouterProvider router={appRouter} />
         </Provider>
        </>
    )
}
export default Body;