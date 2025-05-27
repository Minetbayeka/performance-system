
import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import AdminDashboard from "../features/admin/AdminDashboard";
import InternDashboard from "../features/interns/internDashboard";














const children = [

      { element: <AdminDashboard />, path: "/" },
      { element: <InternDashboard />, path: "/dashboard" },
      
      

  
   
     
     
     
  
     
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
