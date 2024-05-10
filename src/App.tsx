import type { ReactElement } from 'react';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import PrivateRoute from './components/molecules/Routes/PrivateRoute';
import { PublicRoute } from './components/molecules/Routes/PublicRoute';
import Layout from './components/organisms/Layout';
import { Home } from './components/templates/Homepage/Homepage';
import { homepageMocks } from './components/templates/Homepage/Homepage.mocks';
import Listing from './components/templates/Listing/Listing';
import Login from './components/templates/Login/Login';
import { AppContextProvider } from './contexts/AppContext';
import { AuthProvider } from './contexts/AuthContext';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.key} timeout={200} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home {...homepageMocks} />} />
            <Route path="login" element={<PublicRoute />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="list" element={<PrivateRoute />}>
              <Route index element={<Listing />} />
            </Route>
          </Route>
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

const App = (): ReactElement => (
  <BrowserRouter>
    <AppContextProvider>
      <AuthProvider>
        <AnimatedRoutes />
      </AuthProvider>
    </AppContextProvider>
  </BrowserRouter>
);
export default App;
