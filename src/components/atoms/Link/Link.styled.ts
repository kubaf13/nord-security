import styled from 'styled-components';

import { getVariant } from '../Button/Button.styled';
import type { STYLING_VARIANT } from '../Button/Button.types';

export const StyledLink = styled.a<{ variant: STYLING_VARIANT }>`
  ${({ variant }) => getVariant(variant)};
  text-align: center;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.cairo};
  font-weight: 400;
`;
