import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.palette.accent};
  color: ${({ theme }) => theme.palette.background};
  text-align: center;
  height: 40px;
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
