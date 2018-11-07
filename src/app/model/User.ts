import { Role } from '../auth/auth.gaurd';

export interface User {
  id?: number;
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  role?: Role;
  dateOfBirth?: any;
}
