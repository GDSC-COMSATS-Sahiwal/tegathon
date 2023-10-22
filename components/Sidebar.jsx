'use client';
import { navLinks } from '../constants';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-screen text-[#fffffe] glass-container">
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
