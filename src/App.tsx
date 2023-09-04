import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/header/Header';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RequireAuth from '@/components/requireAuth/RequireAuth';
import Footer from './components/footer/Footer';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import SingleGame from '@/pages/SingleGame';

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
