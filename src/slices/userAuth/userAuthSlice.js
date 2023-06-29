import { createSlice } from '@reduxjs/toolkit'

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    authenticated: false,
    userId: '',
    userLabels: [],
    userNodeId: null,
    instance: null
  },
  reducers: {
    login: (state, action) => {
      state.authenticated = true;
      state.userId = action.payload.userId;
      state.userLabels = action.payload.userLabels;
      state.userNodeId = action.payload.userNodeId;
      state.instance = action.payload.instance;
    },
    logout: (state) => {
      state.authenticated = false;
      state.userId = '';
      state.userLabels = [];
      state.userNodeId = null;
      state.instance = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userAuthSlice.actions

export default userAuthSlice.reducer