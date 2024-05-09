import { EyeIcon } from '@heroicons/react/24/solid';
import { EyeSlashIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const LoginTemplate = styled.section`
  width: 90vw;
  max-width: 500px;
  margin: 0 auto;
`;

export const MessageWrapper = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tooltip = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  z-index: 1000;
  top: -35px; // Możesz dostosować pozycję względem inputu
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 14px;
  visibility: hidden; // Ukryj domyślnie
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 35px;
  width: 100%;

  button {
    position: absolute;
    right: 20px;
  }

  &:focus-within ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid transparent;
  outline: none;
  font-size: 16px;
  transition: all 0.2s;
  border-bottom-color: ${({ theme }) => theme.palette.accent};

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: -20px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.accent};

  left: 0;
  pointer-events: none;
  transition: all 0.2s;

  &:focus {
    transform: translate(0.25rem, -65%) scale(0.8);
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: -80px;
  color: white;
  width: 100%;
  background: ${({ theme }) => theme.palette.error};
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const EyeCrossIcon = styled(EyeSlashIcon)`
  color: ${({ theme }) => theme.palette.accent};
  width: 24px;
  height: 24px;
`;

export const EyeOpenIcon = styled(EyeIcon)`
  color: ${({ theme }) => theme.palette.accent};
  width: 24px;
  height: 24px;
`;
