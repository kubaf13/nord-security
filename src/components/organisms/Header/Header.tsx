import React, { useContext, useState } from 'react';

import { VIEWPORTS } from '../../../consts/viewports';
import AppContext from '../../../contexts/AppContext';
import DesktopNavigation from '../../molecules/Navigation/Desktop';
import Navigation from '../../molecules/Navigation/Mobile';
import { MenuIcon } from '../../molecules/Navigation/Mobile/MobileNavigation.styled';
import { navigationMocks } from '../../molecules/Navigation/Navigation.mocks';
import { HamburgerIcon, HeaderContainer } from './Header.styled';
import type { Header as HeaderType } from './Header.types';

export const Header: HeaderType = () => {
  const {
    state: { viewportState },
  } = useContext(AppContext);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <HeaderContainer>
      {viewportState !== VIEWPORTS.MOBILE ? (
        <DesktopNavigation />
      ) : (
        <>
          <MenuIcon onClick={() => setNavOpen(!isNavOpen)}>
            <HamburgerIcon />
          </MenuIcon>
          <Navigation
            isOpen={isNavOpen}
            onClose={() => setNavOpen(false)}
            links={navigationMocks.links}
          />
        </>
      )}
    </HeaderContainer>
  );
};
