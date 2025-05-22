
import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import AdminDashboard from "../features/admin/AdminDashboard";













const children = [

      { element: <AdminDashboard />, path: "/" }
   
     
     
     
  
     
];


export const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "",
      errorElement: (
        <a href="/" className="text-center">
          This page does not exist
        </a>
      ),
      children,
    },
  ]);
