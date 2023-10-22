import { navLinks } from '../constants';
import Link from 'next/link';
import { Button } from './ui/button';

const NavLinks = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full top-0">
      <nav className="glass-container rounded-3xl p-2 flex justify-between items-center max-container">
        <Link href="/">
          <Button className="bg-[#FDD200] text-[#333333] text-base font-bold hover:bg-yellow-500 hover:text-white px-12 py-6 rounded-2xl">
            Home
          </Button>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-6 xl:gap-16 max-lg:hidden text-white">
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
      </nav>
    </header>
  );
};

export default NavLinks;
