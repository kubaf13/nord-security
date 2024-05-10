import type { ReactElement } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../../contexts/AuthContext';
import { STYLING_VARIANT } from '../../../atoms/Button/Button.types';
import CustomLink from '../../../atoms/Link';
import { NavContainer } from './DesktopNavigation.styled';

export const DesktopNavigation = (): ReactElement => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <NavContainer>
      <ul>
        {!isAuthenticated && (
          <li>
            <Link to="/login">login</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/list">list</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={logout}>log out</button>
          </li>
        )}
        <li>
          <CustomLink
            url="https://www.figma.com/file/TqErV4Vd7uwfdUcJlltZcB/Nord-Task?type=design&node-id=0%3A1&mode=design&t=RaGx0MSn7yZqFpq4-1"
            label="figma project"
            ariaLabel="go to my figma project"
            openInNewTab
            variant={STYLING_VARIANT.SIMPLE}
          />
          <CustomLink
            url="https://github.com/kubaf13"
            label="my github profile"
            ariaLabel="go to my github profile"
            openInNewTab
            variant={STYLING_VARIANT.SIMPLE}
          />
        </li>
      </ul>
    </NavContainer>
  );
};
