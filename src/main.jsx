
import '../src/assets/styles/Styles.css'
import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/AppRouter";
import { AppProvider } from './provider/AppProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider/>

    {/* <RouterProvider router={router

    } /> */}
  </React.StrictMode>,
)
