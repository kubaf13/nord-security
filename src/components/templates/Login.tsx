import type { ReactElement } from 'react';

import { useAuth } from '../../contexts/AuthContext';

export const Login = (): ReactElement => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Log In</button>
    </div>
  );
};
