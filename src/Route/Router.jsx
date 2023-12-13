import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login/Login";
import Reg from "../Pages/Login/Reg";
import Cheackout from "../Pages/Cheackout";
import Bookings from "../Pages/Bookings";
import PrivetRoot from "../Root/PrivetRoot";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/service",
          element: <Service/>,
        },
        {
          path: "/blog",
          element: <Blog/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "reg",
          element: <Reg/>,
        },
        {
          path: "cheackout/:id",
          element: <PrivetRoot><Cheackout></Cheackout></PrivetRoot>,
          loader: ({params}) => fetch(`https://car-doctor-server-eta-ruddy.vercel.app/services/${params.id}`)

        },
        {
          path: "booking",
          element: <PrivetRoot><Bookings></Bookings></PrivetRoot>,
        },
      ],
    },
  ]);

  export default router