// src/components/Login.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import type { ReactElement } from 'react';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';
import { loginSchema } from '../../../validation/loginSchema';
import Button from '../../atoms/Button';
import { STYLING_VARIANT } from '../../atoms/Button/Button.types';
import {
  ErrorMessage,
  EyeCrossIcon,
  EyeOpenIcon,
  InputContainer,
  LoginForm,
  LoginTemplate,
  MessageWrapper,
  StyledInput,
  StyledLabel,
  Tooltip,
} from './Login.styled';

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login = (): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const [loginError, setLoginError] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
    try {
      const response = await axios.post(
        'https://playground.tesonet.lt/v1/tokens',
        data,
      );
      const token = response.data.token;
      signIn(token);
      navigate('/list');
    } catch (error) {
      setLoginError('Invalid username or password');
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 3500);
      console.error(error);
    }
  };

  return (
    <LoginTemplate>
      <MessageWrapper>
        <h2>Please</h2>
        <p>type your data</p>
      </MessageWrapper>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessage className={errorVisible ? 'active' : ''}>
          {loginError}
        </ErrorMessage>
        <InputContainer>
          <StyledLabel htmlFor="username">Username:</StyledLabel>
          <StyledInput
            id="username"
            {...register('username')}
            placeholder="type username..."
          />
          {errors.username && <Tooltip>{errors.username.message}</Tooltip>}
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="type password..."
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeCrossIcon /> : <EyeOpenIcon />}
          </button>
          {errors.password && <Tooltip>{errors.password.message}</Tooltip>}
        </InputContainer>
        <div>
          <Button
            variant={STYLING_VARIANT.BUTTON}
            label="Log In"
            type="submit"
            ariaLabel="Log in to your account"
          />
        </div>
      </LoginForm>
    </LoginTemplate>
  );
};

export default Login;
