import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/header/Header';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RequireAuth from '@/components/require-auth/RequireAuth';
import Footer from './components/footer/Footer';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

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
  </>
);

export default App;
