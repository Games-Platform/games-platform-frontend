import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import Header from '@/components/header/Header';
import Layout from '@/pages/Layout';
import Footer from '@/components/footer/Footer';
import PopularGames from '@/pages/PopularGames';

const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/Login'));
const Profile = lazy(() => import('@/pages/Profile'));
const RequireAuth = lazy(() => import('@/components/requireAuth/RequireAuth'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Register = lazy(() => import('@/pages/Register'));
const ScrollToTop = lazy(() => import('@/components/scrollToTop/ScrollToTop'));
const SingleGame = lazy(() => import('@/pages/SingleGame'));
// const PopularGames = lazy(() => import('@/pages/PopularGames'));

const App = () => (
  <>
    <Header />

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />

        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />
        <Route path="game/:id" element={<SingleGame />} />

        <Route path="most-popular-games" element={<PopularGames />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    <Footer />

    <Toaster />

    <ScrollToTop />
  </>
);

export default App;
