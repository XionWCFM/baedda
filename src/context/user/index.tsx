'use client';
import { User } from '@/src/model/user';
import React from 'react';
import { createContext, useContext } from 'react';

export const UserContext = createContext<User | null>(null);

export const UserDispatchContext = createContext<React.Dispatch<
  React.SetStateAction<User>
> | null>(null);

export const useUserContext = () => {
  const value = useContext(UserContext);
  if (value === null) throw new Error('컨텍스트가 있는 환경에서 써주세요');
  return value;
};
export const useUserDispatchContext = () => {
  const value = useContext(UserDispatchContext);
  if (value === null) throw new Error('컨텍스트가 있는 환경에서 써주세요');
  return value;
};
export const UserContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [user, setUser] = React.useState<User>({
    name: '',
    gender: 'other',
  });
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
