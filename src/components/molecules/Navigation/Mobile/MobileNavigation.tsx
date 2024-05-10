import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../../../contexts/AuthContext';
import CustomLink from '../../../atoms/Link';
import type { Navigation as NavigationType } from '../Navigation.types';
import { Close, List, NavContainer } from './MobileNavigation.styled';

const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavigation: NavigationType = ({
  isOpen,
  onClose,
  links,
}) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <NavContainer isOpen={isOpen}>
      <CloseIcon onClick={onClose}>
        <Close />
      </CloseIcon>
      <List>
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
        {links.map(link => (
          <li key={link.url}>
            <CustomLink {...link} />
          </li>
        ))}
      </List>
    </NavContainer>
  );
};
