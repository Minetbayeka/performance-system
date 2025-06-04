
import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import AdminDashboard from "../features/admin/AdminDashboard";
import InternDashboard from "../features/interns/internDashboard";
import Login from "../Authentication/Login";
import Charts from "../components/atoms/Charts";
import UserProfile from "../components/atoms/UserProfile";
import AddIntern from "../features/interns/AddIntern";
import UserManagement from "../features/userAdmin/UserManagement";
import CreateUsers from "../features/userAdmin/CreateUsers";
import Rolepermission from "../features/userAdmin/components/Rolepermission";
import ActivityHistory from "../features/userAdmin/components/ActivityHistory";






const children = [

      { element: <AdminDashboard />, path: "/" },
      { element: <InternDashboard />, path: "/dashboard" },
      { element: <Login />, path: "/login" },
      { element: <Charts />, path: "/chart" },
      { element: <UserProfile />, path: "/userProfile" },
      { element: <AddIntern />, path: "/addintern" },
      { element: <UserManagement />, path: "/usermanagement" },
      { element: <CreateUsers />, path: "/createuser" },
      { element: <Rolepermission />, path: "/role" },
      { element: <ActivityHistory />, path: "/activityhistory" },
     
     
   
     
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
