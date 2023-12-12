import Link from 'next/link';
import React from 'react';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className=" flex items-center justify-between">
      <Link href={'/'}>메인가기</Link>
      <Link href={'/login'}>hi</Link>
    </header>
  );
};

export default Header;
