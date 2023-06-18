import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex justify-between items-center border-b-2 p-3">
      <Link href="/" className="p-3 font-extrabold text-4xl rounded-full">
        THE ZD
      </Link>
      <Link href="/intro" className="p-3 bg-brandBlue rounded-full">
        intro
      </Link>
    </div>
  );
};

export default Nav;
