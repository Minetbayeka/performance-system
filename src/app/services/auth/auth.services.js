
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


export const {
    useLoginMutation
    
} = authApi