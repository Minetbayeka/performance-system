
import { createSlice } from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://intern-performance-analysis.onrender.com/api"
    }),
    endpoints:(builder) =>({
        //get all projects
    
        login: builder.mutation({
            query:(Ilogin)=>({
                url:"/user/login",
                method:"POST",
                body:Ilogin
            })

        })

    }),
});

//slice

const authSlice = createSlice({
  name: "auth",
   initialState: {
    token: null,
    user: null,
  },
  reducers: {
    saveUser: (state, action) => {
      try {
        const { token, user, intern, supervisor, admin } = action.payload;
        

        const completeUser = {  
        ...user,
        intern,
        supervisor,
        admin, 
         
     };

        state.token = token;
        state.user = completeUser;

        LocalStorage.save("intern-performance-auth-token", token);
        LocalStorage.save("intern-performance-user-info", completeUser);
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    },

    logOutUser: (state) => {
      try {
        state.token = null;
        state.user = null;

        LocalStorage.remove("intern-performance-auth-token");
        LocalStorage.remove("intern-performance-user-info");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
  },
});

export const {
    useLoginMutation
} = authApi

export const { saveUser, logOutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;

