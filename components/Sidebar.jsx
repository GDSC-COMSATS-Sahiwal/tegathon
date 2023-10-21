'use client';
import { navLinks } from '../constants';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-screen text-[#fffffe] bg-black/25 bg-opacity-25 shadow-md backdrop-blur-md backdrop-filter border-opacity-25 border-[#FDD200] border-2">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {navLinks.map((navLink) => (
            <Link
              href={navLink.href}
              key={navLink.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cusror-pointer hover:text-[#0f0e17] hover:bg-[#0f0e17]/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">{navLink.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
