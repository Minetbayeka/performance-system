import {configureStore, Store} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { adminApi } from './services/admin/admin.service'
import { authApi } from './services/auth/auth.services'



export const store:Store = configureStore({
    reducer: {
       [adminApi.reducerPath]:adminApi.reducer,
       [authApi.reducerPath]:authApi.reducer 

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(adminApi.middleware)
        .concat(authApi.middleware)
})

// setupListeners(store.dispatch)