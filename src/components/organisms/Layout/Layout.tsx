import { Outlet } from 'react-router-dom';

import Footer from '../../atoms/Footer';
import Header from '../Header';
import type { Layout as LayoutType } from './Layout.types';

export const Layout: LayoutType = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);
