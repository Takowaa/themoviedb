import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../Pages/Homepage/index.js";
import OneMovie from "../Pages/oneMovie/index.js";

export  const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Homepage />,

      },
      {
        path: '/movie/:id',
        element: <OneMovie />
      }
    ]
  }
])