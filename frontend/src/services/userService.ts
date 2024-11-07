import api from './api';
import { UserCreate, UserLogin, User } from '../types/user';

export const registerUser = async (userData: UserCreate): Promise<User> => {
  const response = await api.post<User>('/users/register', userData);
  return response.data;
};

export const loginUser = async (loginData: UserLogin): Promise<User> => {
  const response = await api.post<User>('/users/login', loginData);
  return response.data;
};
