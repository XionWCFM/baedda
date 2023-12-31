'use client';
import React from 'react';
import { createContext, useContext } from 'react';

export const MbtiContext = createContext<null>(null);

export const MbtiDispatchContext = createContext<React.Dispatch<
  React.SetStateAction<null>
> | null>(null);

export const useMbtiContext = () => {
  const value = useContext(MbtiContext);
  if (value === null) throw new Error('컨텍스트가 있는 환경에서 써주세요');
  return value;
};
export const useMbtiDispatchContext = () => {
  const value = useContext(MbtiDispatchContext);
  if (value === null) throw new Error('컨텍스트가 있는 환경에서 써주세요');
  return value;
};

export const MbtiContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [mbti, setMbti] = React.useState(null);
  return (
    <MbtiContext.Provider value={mbti}>
      <MbtiDispatchContext.Provider value={setMbti}>
        {children}
      </MbtiDispatchContext.Provider>
    </MbtiContext.Provider>
  );
};
