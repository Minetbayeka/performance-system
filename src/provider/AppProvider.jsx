
import { RouterProvider } from "react-router-dom";
import { AppContext } from "./AppContext";



const ContextProvider = ({children}) => {



  return (
    <AppContext.Provider
    value={
      {

         
      }}
    
    >
       {children} 
      
    </AppContext.Provider>
  );
};

export default ContextProvider;

export const AppProvider = () => {
  return(
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  
  );
};