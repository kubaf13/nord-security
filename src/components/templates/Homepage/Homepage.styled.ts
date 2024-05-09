import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 75px);

  p {
    margin: 10px 0 20px;
  }

  a {
    margin: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.accent};
`;
