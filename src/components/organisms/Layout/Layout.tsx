import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../../contexts/AuthContext';
// import backgroundImage from '../../../static/images/background.png';

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
  //padding: 10px;
  text-align: center;
  height: 25px;
  position: relative;
  bottom: 0;
`;

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// const Image = styled.div`
//   background-image: url(${backgroundImage});
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
//   z-index: 0;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: auto;
// `;

const Footer = (): ReactElement => (
  <FooterContainer>© 2024 My Website</FooterContainer>
);

const Layout = (): ReactElement => (
  <LayoutContainer>
    <Navigation />
    <main>
      <Outlet />
    </main>
    {/*<Image />*/}
    <Footer />
  </LayoutContainer>
);

export default Layout;
