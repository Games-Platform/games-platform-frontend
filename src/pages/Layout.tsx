import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Spinner from '../components/spinner/Spinner';

import '@/assets/styles/_global.scss';

const Layout = () => (
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

export default Layout;
