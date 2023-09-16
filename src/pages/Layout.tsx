import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Spinner from '@/components/spinner/Spinner';
import {
  useRefreshTokenMutation,
  useLogoutMutation,
} from '@/store/services/auth';
import useAuth from '@/hooks/useAuth';

import '@/assets/styles/_Global.scss';

const Layout = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  const [refreshToken, { isError: refreshError }] = useRefreshTokenMutation();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    if (isAuth && !refreshError) {
      refreshToken(null);
    }

    if (refreshError && isAuth) logout(null);
  }, [isAuth, refreshError, location]);
  return (
    <Suspense
      fallback={
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export default Layout;
