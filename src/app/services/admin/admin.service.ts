import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath:"adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://dummyjson.com"
    }),
    endpoints:(builder) =>({
        //get all projects
        getAllProduct :builder.query({
            query:() =>"/products",
        }) ,

    }),
});


export const {
    useGetAllProductQuery
} = adminApi