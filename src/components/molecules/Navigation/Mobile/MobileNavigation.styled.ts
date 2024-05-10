import { XMarkIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const NavContainer = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background-color: #fff;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;

  li {
    a,
    button {
      color: ${({ theme }) => theme.palette.accent};
      font-size: 25px;
      text-decoration: none;
    }
  }
`;

export const Close = styled(XMarkIcon)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.palette.accent};
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
