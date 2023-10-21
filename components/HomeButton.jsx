import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomeButton = () => {
  return (
    <Link href="/">
      <Button className="bg-[#FDD200] text-white sm:text-black hover:bg-yellow-500 hover:text-white px-10 py-6 font-bold">
        Home
      </Button>
    </Link>
  );
};

export default HomeButton;
