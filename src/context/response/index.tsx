import { Mbti } from '@/src/model/mbti';
import React from 'react';

type ResponseDataStructure = {
  [key: string]: Mbti;
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
