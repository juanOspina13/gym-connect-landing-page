import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'demo',
    initialState: {
        requestBody: <any>{},
        tokenId: <string> '',
        userRol: <any>null
    },
    reducers: {
        loginStep2Action: (state, action) => {
            state.requestBody = action.payload
        },
        setOTP: (state, action) => {
            state.requestBody.callbacks[0].input[0].value = action.payload
        },
        setTokenId: (state, action) => {
            state.tokenId = action.payload
        },
        setUserRol: (state, action) => {
            state.userRol = action.payload;
        }
    }

});

export const {loginStep2Action, setOTP, setTokenId, setUserRol} = loginSlice.actions

export default loginSlice.reducer;