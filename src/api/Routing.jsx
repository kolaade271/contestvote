import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken,  getAdmin } from './storage';
import { VerifyToken } from './Auth';

export function PrivateRoute({ children }) {
  VerifyToken();
  const auth = getToken();
  const islogin = getAdmin();
  return auth && islogin ? children : <Navigate to="/" />;
}

export function PublicRoute({ children }) {
  const auth = getToken();

  return auth ? <Navigate to="/mainpage" /> : children;
}