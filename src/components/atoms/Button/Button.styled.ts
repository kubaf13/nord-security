import styled, { css } from 'styled-components';

import { STYLING_VARIANT } from './Button.types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getVariant = (variant: STYLING_VARIANT) => {
  switch (variant) {
    case STYLING_VARIANT.BUTTON:
      return css`
        font-size: 16px;
        border: 1px solid ${({ theme }) => theme.palette.text};
        color: ${({ theme }) => theme.palette.background};
        position: relative;
        background-color: rgba(0, 0, 0, 0);
        padding: 5px 30px;
        z-index: 10;
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
    case STYLING_VARIANT.SIMPLE:
      return css`
        font-size: 16px;
        text-decoration: none;
        color: ${({ theme }) => theme.palette.text};
      `;
    default:
      return;
  }
};

export const ButtonWrapper = styled.button<{ variant: STYLING_VARIANT }>`
  ${({ variant }) => getVariant(variant)};
`;

export const CenteringWrapper = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
