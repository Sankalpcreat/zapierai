import { EmailStr } from 'pydantic';

export interface UserCreate {
  username: string;
  email: EmailStr;
  password: string;
}

export interface UserLogin {
  email: EmailStr;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: EmailStr;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
