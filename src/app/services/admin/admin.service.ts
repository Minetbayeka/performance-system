
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath:"adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://intern-performance-analysis.onrender.com/api"
    }),
    endpoints:(builder) =>({
        //get all projects
        getAllProduct :builder.query({
            query:() =>"/products",
        }) ,
        
        CreateUsers :builder.mutation({
          query: (newUser)=>({
            url:"/user/register",
            method:"POST",
            body:newUser ,
          })
        }),
        

    }),
});


export const {
    useGetAllProductQuery,
    useCreateUsersMutation,
    
} = adminApi