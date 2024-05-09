import type { ReactElement } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import PrivateRoute from './components/molecules/PrivateRoute';
import { PublicRoute } from './components/molecules/PublicRoute';
import Layout from './components/organisms/Layout/Layout';
import { Home } from './components/templates/Homepage/Homepage';
import { List } from './components/templates/ListTemplate';
import { Login } from './components/templates/Login';
import { AppContextProvider } from './contexts/AppContext';
import { AuthProvider } from './contexts/AuthContext';

const App = (): ReactElement => (
  <BrowserRouter>
    <AppContextProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<PublicRoute />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="list" element={<PrivateRoute />}>
              <Route index element={<List />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </AppContextProvider>
  </BrowserRouter>
);

export default App;
