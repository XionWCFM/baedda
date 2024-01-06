import { MbtiUnion } from '@/src/model/mbti';
import React, { useContext } from 'react';

type ResponseDataStructure = {
  [key: string]: MbtiUnion;
};

const ResponseContext = React.createContext<ResponseDataStructure | null>(null);
const ResponseDispatchContext = React.createContext<React.Dispatch<
  React.SetStateAction<ResponseDataStructure>
> | null>(null);

export const ResponseProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [response, setResponse] = React.useState<ResponseDataStructure>({});
  return (
    <ResponseContext.Provider value={response}>
      <ResponseDispatchContext.Provider value={setResponse}>
        {children}
      </ResponseDispatchContext.Provider>
    </ResponseContext.Provider>
  );
};

export const useResponseDispatchContext = () => {
  const value = useContext(ResponseDispatchContext);
  if (value === null) throw new Error('');
  return value;
};

export const useResponseContext = () => {
  const value = useContext(ResponseContext);
  if (value === null) throw new Error('');
  return value;
};
