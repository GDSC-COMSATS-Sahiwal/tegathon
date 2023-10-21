import MobileSidebar from '@/components/mobile-sidebar';
import NavLinks from '@/components/NavLinks';
import HomeButton from '@/components/HomeButton';

const Nav = () => {
  return (
    <div className="flex items-center justify-center w-full sticky top-0 z-50">
      <div className="w-full justify-end hidden sm:flex">
        <NavLinks />
      </div>

      <div className="w-11/12 flex justify-between sm:hidden p-3 bg-black/25 bg-opacity-25 shadow-md backdrop-blur-md backdrop-filter border-opacity-25 border-[#FDD200] rounded-2xl border-2 items-center max-container absolute top-4 text-white">
        <HomeButton />
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Nav;
