import { createSlice } from '@reduxjs/toolkit'

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    authenticated: false,
    userId: '',
    userLabels: []
  },
  reducers: {
    get: (state) => {
        return state;
    },
    login: (state, action) => {
        state.userId = action.payload.userId;
        state.userLabels = action.payload.userLabels; 
        
        state.authenticated = true;
    },
    logout: (state) => {
        state.userId = '';
        state.userLabels = [];
        state.authenticated = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { get, login, logout } = userAuthSlice.actions

export default userAuthSlice.reducer