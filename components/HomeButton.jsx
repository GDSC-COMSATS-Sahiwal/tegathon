import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomeButton = () => {
  return (
    <>
      <Link href="/">
        <Button className="bg-[#FDD200] text-[#333333] text-base font-bold hover:bg-yellow-500 hover:text-white px-12 py-6 rounded-2xl">
          Home
        </Button>
      </Link>
    </>
  );
};

export default HomeButton;
