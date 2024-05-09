import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../../contexts/AuthContext';

const NavContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Navigation = (): ReactElement => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <NavContainer>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>
        Home
      </Link>
      {!isAuthenticated && (
        <Link to="/login" style={{ margin: '0 10px', color: 'white' }}>
          Login
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/list" style={{ margin: '0 10px', color: 'white' }}>
          List
        </Link>
      )}
      {isAuthenticated && <button onClick={logout}>Log Out</button>}
    </NavContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Footer = (): ReactElement => (
  <FooterContainer>© 2024 My Website</FooterContainer>
);

const Layout = (): ReactElement => (
  <>
    <Navigation />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
