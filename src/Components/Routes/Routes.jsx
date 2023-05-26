import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import AllToys from "../AllToys/AllToys";
import Register from "../Register/Register";
import AddToys from "../AddToys/AddToys";
import MyToys from "../MyToys/MyToys";
import ToyDetails from "../ToyDetails/ToyDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Update from "../Update/Update";
import CategoryDetails from "../CategoryDetails/Categorydetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/all-toys',
          element:<AllToys></AllToys>,
          loader:()=>fetch('https://toy-land-server-xi.vercel.app/allToys')
        },
        {
          path:'/view-details/:id',
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://toy-land-server-xi.vercel.app/toy/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params})=>fetch(`https://toy-land-server-xi.vercel.app/toy/${params.id}`)
        },
        {
          path:'/categoryDetail/:id',
          element:<PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://toy-land-server-xi.vercel.app/toy/${params.id}`)
        },
        {
          path:'/add-toys',
          element:<AddToys></AddToys>
        },
        {
          path:'/my-toys',
          element:<MyToys></MyToys>
        },
        {
          path:'/Login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
      ]
    },
  ]);
export default router