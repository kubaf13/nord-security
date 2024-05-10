import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 20px;

  ul {
    margin: 0 auto;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: flex-end;

    li {
      a,
      button {
        color: ${({ theme }) => theme.palette.background};
        font-size: 16px;
        text-decoration: none;
        margin: 0 10px;
      }
    }
  }
`;
