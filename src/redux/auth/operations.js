import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: 'loginApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://connections-api.herokuapp.com',
            prepareHeaders: (headers, { getState }) => {
                const token = getState().auth.token
                if (token) {
                    headers.set('authorization', `Bearer ${token}`)
                    
                }
                return headers
            }
        }),
    tagTypes: ['Auth'],
    endpoints: builder => ({
        refreshToken: builder.query({
            query: () => ({
                url: '/users/current',
              
            }),
            invalidatesTags: ['Auth'],
        }),
        registerUser: builder.mutation({
            query: newUser => ({
                url: '/users/signup',
                method: 'POST',
                body:newUser,
            }),
            invalidatesTags:['Auth'],
        }),
        loginUser: builder.mutation({
            query: userData => ({
                url: '/users/login',
                method: 'POST',
                body:userData,
            }),
            invalidatesTags: ['Auth'],
        }),
        logOutUser: builder.mutation({
            query: () => ({
                url: '/users/logout',
                method:"POST",
            }),
            invalidatesTags: ['Auth'],
        }),
   
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogOutUserMutation,
    useRefreshTokenQuery
} = loginApi




// export const loginApi = createApi({
//     reducerPath: 'loginApi', 
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://connections-api.herokuapp.com',
//         prepareHeaders: (headers, { getState }) => {
//             const token = getState().auth.token;
//             if (token) {
//                 headers.set('authorization', `Bearer ${token}`)
//             }
//             return headers
//         },
//     }),
//     tagTypes: ['Auth'],
//     endpoints: builder => ({
//         registerUser: builder.mutation({
//             query: newUser => ({
//                 url: '/users/signup',
//                 method: 'POST',
//                 body: newUser,
                
//             }),
//             invalidatesTags: ['Auth'] ,


                
//         }),
//         loginUser: builder.mutation({
//             query: newData => ({
//                 url: '/users/login',
//                 method: 'Post',
//                 body: newData,
//             }),
//             invalidatesTags: ['Auth'],

//         }),
//         logOutUser: builder.mutation({
//             query: () => ({
//                 url: '/users/logout',
//                 method: 'Post '
//             }),
//             invalidatesTags: ['Auth'],
//         }),
//         fetchCurrentUser: builder.query({
//             query: () => ({
//                 url: '/users/current',
//             }),
//             invalidatesTags: ['Auth'],
//         }),



// })


// })

// export const {
//     useRegisterUserMutation, useLoginUserMutation, useLogOutUserMutation, useFetchCurrentUserQuery
    
// } = loginApi


    





