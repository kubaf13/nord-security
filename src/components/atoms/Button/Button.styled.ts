import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.palette.text};
  color: ${({ theme }) => theme.palette.background};
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  width: 80%;

  &:after {
    content: '';
    background-color: ${({ theme }) => theme.palette.accent};
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    &:after {
      top: 0px;
      left: 0px;
    }
  }
`;

export const CenteringWrapper = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
