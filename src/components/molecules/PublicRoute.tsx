import type { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

export const PublicRoute = (): ReactElement => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
