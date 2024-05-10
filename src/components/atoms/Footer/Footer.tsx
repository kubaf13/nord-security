import { FooterContainer } from './Footer.styled';
import type { Footer as FooterType } from './Footer.types';

const currentYear = new Date().getFullYear();

export const Footer: FooterType = () => (
  <FooterContainer>Jakub Flis | {currentYear} </FooterContainer>
);
