
// import { RouterProvider } from "react-router-dom";
import { useReducer, useState } from "react";
import { AppContext } from "./AppContext";
import { RouterProvider} from "react-router-dom";
import { router } from "../router/AppRouter";
import { cartReducer } from "./CartReducer";
import { interns as initialInterns } from "../../src/features/data";
import {Provider} from 'react-redux'
import { store } from "../app/Store";







const ContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(cartReducer, []);
  const [interns, setInterns] = useState(initialInterns);
  

 
   // Handler to remove an intern
   const removeIntern = (id) => {
     const updatedInterns = interns.filter((intern) => intern.id !== id);
     setInterns(updatedInterns);
   };

   const addIntern = (newIntern) => {
  setInterns((prevInterns) => [...prevInterns, newIntern]);
};



  return (
    <AppContext.Provider
    value={{dispatch,state,interns, 
       removeIntern, 
      initialInterns, 
      addIntern,
    
    
  }}
    
    >
       {children} 
      
    </AppContext.Provider>
  );
};



export const AppProvider = () => {
  return(
    <Provider store={store}>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
    </Provider>
  
  );
};










