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
      <nav className="glass-container rounded-3xl p-2 flex justify-between items-center py-5 max-container">
        <ul className="flex-1 flex justify-center items-center gap-2 max-lg:hidden text-white">
          {navLinks.map((item) => {
            const handleClick = (path) => {
              setUrlPath(path);
            };
            return (
              <li key={item.label}>
                <Link
                  onClick={() => handleClick(item.href)}
                  href={item.href}
                  className={`font-montserrat leading-normal text-base font-bold text-slate-gray px-3 py-3 rounded-2xl transition-all ease-linear duration-100 ${
                    urlPath === item.href
                      ? 'bg-[#FDD200] hover:bg-[#FDD200]/75 text-[#333333]'
                      : 'hover:bg-slate-50/10 hover:text-white text-white/80'
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
