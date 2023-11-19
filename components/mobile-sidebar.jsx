'use client';

import Menu from '../public/Menu.svg';
import Image from 'next/image';

import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from '@/components/ui/customsheet';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';

const MobileSidebar = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="lg:hidden glass-container p-3 rounded-2xl">
            <Image width={24} height={24} src={Menu} priority={true} />
            <span className="sr-only">Menu</span>
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 w-2/3 bg-transparent border-r border-yellow-400 border-opacity-50"
        >
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
