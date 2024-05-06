import { ButtonWrapper } from './Button.styled';
import type { Button as ButtonType } from './Button.types';

export const Button: ButtonType = ({ label, ariaLabel, onClick }) => (
  <ButtonWrapper onClick={onClick} aria-label={ariaLabel}>
    {label}
  </ButtonWrapper>
);
