import React, { useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import Loader from 'components/Loader/Loader';
import CssBaseline from '@mui/material/CssBaseline';
import { fetchCurrentUser } from '../../redux/auth/authThunks';
import { getIsRefreshed } from '../../redux/auth/selectors';

const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshed);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="register"
              element={<RestrictedRoute component={<Register />} />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={<Login />} />}
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
