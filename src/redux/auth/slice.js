import { createSlice } from "@reduxjs/toolkit";


import { loginApi } from "./operations";







const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn:false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addMatcher(
            loginApi.endpoints.registerUser.matchFulfilled,
            (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn=true
            },
        )
        builder.addMatcher(
            loginApi.endpoints.loginUser.matchFulfilled,
            (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn=true
            },
        )
        builder.addMatcher(
            loginApi.endpoints.logOutUser.matchFulfilled,
            (state, _) => {
                state.user = initialState.user
                state.token = initialState.token
                state.isLoggedIn = false
                
            },
        )
        builder.addMatcher(
            loginApi.endpoints.refreshToken.matchFulfilled,
            (state, action) => {
                state.user = action.payload
                state.isLoggedIn=true
            }
        )
   }
})



// const initialState = {
//     user: { name: null, email: null },
//    token: null,
//     isLoggedIn: false,

// };

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     extraReducers: builder => {
//         builder.addMatcher(
//             loginApi.endpoints.registerUser.matchFulfilled,
//             (state, { payload }) => {
//             state.user = payload.user
//             state.token = payload.token
//             state.isLoggedIn = true

//         },)
//         builder.addMatcher(
//             loginApi.endpoints.loginUser.matchFulfilled,
//             (state, { payload }) => {
//             state.user = payload.user
//             state.token = payload.token
//             state.isLoggedIn = true

//         },)
//         builder.addMatcher(
//             loginApi.endpoints.logOutUser.matchFulfilled,
//             (state, _) => {
//     state.user = initialState.user
//     state.token = initialState.token
//     state.isLoggedIn = false
//         },)
//         builder.addMatcher(
//             loginApi.endpoints.fetchCurrentUser.matchFulfilled,
//             (state, { payload }) => {
//             state.user = payload
//             state.isLoggedIn = true
// })



//     },
// });






