import { User } from '@/src/model/user';
import { createContext, useContext } from 'react';

export const UserContext = createContext<User | null>(null);

export const UserDispatchContext =
  createContext<React.SetStateAction<User> | null>(null);

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
  value,
}: {
  children?: React.ReactNode;
  value: [User, React.SetStateAction<User>];
}) => {
  const [user, setUser] = value;
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
