'use client';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/Sidebar';
import HomeButton from '@/components/HomeButton';
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
          <div className="lg:hidden">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-full">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
