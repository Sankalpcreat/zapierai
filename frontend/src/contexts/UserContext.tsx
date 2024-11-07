import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types/user';
import { loginUser } from '../services/userService';

interface UserContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<User>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<User> => {
    const user = await loginUser({ email, password });
    setCurrentUser(user);
    return user;
  };

  return (
    <UserContext.Provider value={{ currentUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
