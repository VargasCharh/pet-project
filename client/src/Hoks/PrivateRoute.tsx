import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouteProps = {
  isAllowed: boolean;
  children?: JSX.Element;
  redirect: string;
};

export default function PrivateRoute({
  isAllowed,
  children,
  redirect,
}: PrivateRouteProps): JSX.Element {
  if (!isAllowed) return <Navigate to={redirect} />;
  return children || <Outlet />;
}

