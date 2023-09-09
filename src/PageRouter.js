import * as React from "react";
import {createBrowserRouter } from "react-router-dom"; 
import Home from "./Pages/Home"; 
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
    { 
      path: "/",
      element: <Home/> ,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
  ]
  );

  export default router;   