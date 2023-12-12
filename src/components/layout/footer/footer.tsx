import Link from 'next/link';
import React from 'react';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className=" flex justify-center items-center gap-x-16">
      <section className=" text-black-60">
        <Link href={'https://github.com/XionWCFM'} target={'_blank'}>
          github
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
