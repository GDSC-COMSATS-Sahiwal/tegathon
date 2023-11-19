'use client';
import { navLinks } from '../constants';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="space-y-4 py-12 flex flex-col h-screen text-[#fffffe] glass-container border-0">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1 mt-8">
          {navLinks.map((navLink) => (
            <Link
              href={navLink.href}
              key={navLink.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cusror-pointer text-[#FDD200] hover:text-white hover:bg-white/25 rounded-lg transition"
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
