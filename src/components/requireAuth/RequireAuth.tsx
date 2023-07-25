import { useLocation, Navigate, Outlet } from 'react-router';
import { useMemo } from 'react';
import useAuth from '@/hooks/useAuth';

const RequireAuth = () => {
  const { isAuth, isLoading } = useAuth();

  const location = useLocation();

  const protectedRoute = useMemo(
    () =>
      isAuth ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      ),
    [isAuth],
  );

  return isLoading ? <p>loading</p> : protectedRoute;
};
export default RequireAuth;
