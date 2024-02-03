import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistration,
  userLogIn,
  userLogOut,
  fetchCurrentUser,
} from '../../redux/auth/authThunks.js';

const userInitialState = {
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshed: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshed = false;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshed = false;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshed = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshed = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshed = false;
      });
  },
});

export const authReducer = authSlice.reducer;
