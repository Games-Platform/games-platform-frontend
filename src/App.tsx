import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/header/Header';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routed */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* private routed */}
        <Route path="profile" element={<Profile />} />

        {/* catch all */}
        <Route path="*" element={<p>404</p>} />
      </Route>
    </Routes>
    <Toaster />
  </>
);

export default App;
