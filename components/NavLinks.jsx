import { navLinks } from '../constants';
import Link from 'next/link';
import { Button } from './ui/button';

const NavLinks = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full top-0">
      <nav className="bg-black/25 bg-opacity-25 shadow-md backdrop-blur-md backdrop-filter border-opacity-25 border-[#FDD200] rounded-2xl border-2 p-2 flex justify-between  items-center max-container">
        <Link href="/">
          <Button className="bg-[#FDD200] text-black hover:bg-yellow-500 hover:text-white px-10 py-6">
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
