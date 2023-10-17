import { Button } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import hamburger from '@/public/icons/hamburger.svg';

import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className="bg-black/30 rounded-2xl border-2 border-[#FDD200] p-2 flex justify-between items-center max-container">
        <Link href="/">
          <Button className="bg-[#FDD200] text-black hover:bg-yellow-500 hover:text-white px-10 py-6">
            Home
          </Button>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-white">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
