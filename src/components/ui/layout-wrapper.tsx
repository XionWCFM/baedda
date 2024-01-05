import { Flex } from '@radix-ui/themes';
import React from 'react';

interface LayoutWrapperProps extends React.PropsWithChildren {}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'between'}
      className=" min-h-screen max-h-screen pt-16 pb-12"
    >
      {children}
    </Flex>
  );
};

export default LayoutWrapper;
