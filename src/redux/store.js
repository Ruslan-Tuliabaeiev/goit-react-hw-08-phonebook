
 import {contactApi} from './contactApi'
import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { filterReducer } from "./fiter/reducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';

import { authSlice, loginApi} from './auth';
import storage  from "redux-persist/lib/storage";



const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        filter: filterReducer,
       
        auth: persistReducer(authPersistConfig, authSlice.reducer),
        [contactApi.reducerPath]: contactApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }
    ),
        contactApi.middleware,
        loginApi.middleware,
    ]
});
export  const persistor = persistStore(store);
setupListeners(store.dispatch);



// import { setupListeners } from "@reduxjs/toolkit/query";  //

// import { filterReducer } from './fiter/reducer';
// import { configureStore} from "@reduxjs/toolkit";
// import { contactApi } from './contactApi';


// export const store = configureStore({
//     reducer: {
//         filter: filterReducer,
//         [contactApi.reducerPath]: contactApi.reducer,
//     } ,
//     middleware: getDefaultMiddleware => [
//         ...getDefaultMiddleware(),
//         contactApi.middleware,

//     ]

// })

// setupListeners(store.dispatch)


// // getDefaultMiddleware,


