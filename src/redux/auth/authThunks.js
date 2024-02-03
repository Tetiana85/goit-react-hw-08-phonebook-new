import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const userRegistration = createAsyncThunk(
  'user/signup',
  async (credentials, thrunkAPI) => {
    try {
      const user = await axios.post('/users/signup', credentials);
      setAuthHeader(user.data.token);
      return user.data;
    } catch (error) {
      return thrunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'user/login',
  async (credentials, thrunkAPI) => {
    try {
      const user = await axios.post('/users/login', credentials);
      setAuthHeader(user.data.token);
      return user.data;
    } catch (error) {
      return thrunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'user/logout',
  async (_, thrunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thrunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thrunkAPI) => {
    const state = thrunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) return thrunkAPI.rejectWithValue('no token');
    setAuthHeader(persistedToken);
    try {
      const currentUser = await axios.get('/users/current');
      return currentUser.data;
    } catch (error) {
      return thrunkAPI.rejectWithValue(error.message);
    }
  }
);
