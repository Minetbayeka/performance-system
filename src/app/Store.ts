import {configureStore, Store} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { adminApi } from './services/admin/admin.service'



export const store:Store = configureStore({
    reducer: {
       [adminApi.reducerPath]:adminApi.reducer 

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(adminApi.middleware)
})

// setupListeners(store.dispatch)