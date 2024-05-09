import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Login is required'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
});
