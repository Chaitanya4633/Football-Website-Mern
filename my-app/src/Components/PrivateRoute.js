// src/Components/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? <Element /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;