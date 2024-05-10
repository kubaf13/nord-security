import { Bars3Icon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.palette.accent};
  color: ${({ theme }) => theme.palette.background};
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.media.tablet} {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const HamburgerIcon = styled(Bars3Icon)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.palette.background};
`;
