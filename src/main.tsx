import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './app/components/layout/Layout';
import { Home } from './app/pages/Home';
import { Shop } from './app/pages/Shop';
import { ProductDetail } from './app/pages/ProductDetail';
import { About } from './app/pages/About';
import { Journal } from './app/pages/Journal';
import { JournalPost } from './app/pages/JournalPost';
import { Subscriptions } from './app/pages/Subscriptions';
import { Cafes } from './app/pages/Cafes';
import { NotFound } from './app/pages/NotFound';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout><Home /></Layout>} path="/" />
      <Route element={<Layout><Shop /></Layout>} path="/shop" />
      <Route element={<Layout><ProductDetail /></Layout>} path="/shop/:id" />
      <Route element={<Layout><About /></Layout>} path="/about" />
      <Route element={<Layout><Journal /></Layout>} path="/journal" />
      <Route element={<Layout><JournalPost /></Layout>} path="/journal/:id" />
      <Route element={<Layout><Subscriptions /></Layout>} path="/subscriptions" />
      <Route element={<Layout><Cafes /></Layout>} path="/cafes" />
      <Route element={<Layout><NotFound /></Layout>} path="*" />
    </Routes>
  </BrowserRouter>
);
