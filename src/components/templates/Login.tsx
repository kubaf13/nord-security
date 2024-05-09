// src/components/Login.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import type { ReactElement } from 'react';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { loginSchema } from '../../validation/loginSchema';

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

  const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
    try {
      const response = await axios.post(
        'https://playground.tesonet.lt/v1/tokens',
        data,
      );
      const token = response.data.token;
      signIn(token); // Zaktualizuj, aby przekazać token
      navigate('/list');
    } catch (error) {
      alert('Invalid username or password');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default Login;
