'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import useHash from '@/hooks/useHash';

import { navLinks } from '../constants';

const NavLinks = () => {
  const linkPath = useHash();
  const [urlPath, setUrlPath] = useState('');

  useEffect(() => {
    setUrlPath(linkPath);
  }, [linkPath]);

  return (
    <header className="py-8 absolute z-10 w-full top-0 px-2">
      <nav className="glass-container rounded-[32px] p-2 flex justify-between items-center py-8 mx-auto max-w-min">
        <ul className="flex-1 flex justify-center items-center gap-2 max-lg:hidden text-white">
          {navLinks.map((item) => {
            const handleClick = (path) => {
              setUrlPath(path);
            };
            return (
              <li className="max-w-full" key={item.label}>
                <Link
                  onClick={() => handleClick(item.href)}
                  href={item.href}
                  className={`font-montserrat leading-normal text-base font-bold text-slate-gray max-w-full py-6 link-px rounded-3xl transition-all ease-linear duration-100 ${
                    urlPath === item.href
                      ? 'bg-[#FDD200] hover:bg-[#FDD200]/80 text-[#333333]'
                      : 'hover:bg-white/10 text-yellow-400'
                  } `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavLinks;
