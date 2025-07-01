import AdminDashboard from "@features/admin/AdminDashboard";
import AdminLayout from "@features/components/partials/Layout";
import UserManagement from "@features/userAdmin/UserManagement";

import { Route } from "react-router-dom";



// AdminRoutes.jsx
const AdminRoutes = [
  {
    path: "/admins",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
    ],
  },
];

export default AdminRoutes;



// import { createBrowserRouter } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import Layout from "../layout/Layout";
// import AdminDashboard from "../features/admin/AdminDashboard";
// import InternDashboard from "../features/interns/InternDashboard";
// import Login from "../Authentication/Login";
// import Unauthorized from "../pages/Unauthorized";

// // Simulate user data
// const user = {
//   isLoggedIn: true,
//   role: "admin", // or "intern", etc.
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "admin",
//         element: (
//           <ProtectedRoute user={user} allowedRoles={["admin"]}>
//             <AdminDashboard />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "intern",
//         element: (
//           <ProtectedRoute user={user} allowedRoles={["intern"]}>
//             <InternDashboard />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
//   { path: "/login", element: <Login /> },
//   { path: "/unauthorized", element: <Unauthorized /> },
// ]);

// export default router;
