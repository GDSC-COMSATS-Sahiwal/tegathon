import MobileSidebar from '@/components/mobile-sidebar';
import NavLinks from '@/components/NavLinks';
import HomeButton from '@/components/HomeButton';

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full sticky top-0 z-50">
        <div className="w-full justify-end hidden sm:flex">
          <NavLinks />
        </div>

        <div className="w-11/12 flex justify-between sm:hidden p-3 rounded-3xl  items-center max-container absolute top-4 text-white glass-container">
          <HomeButton />
          <MobileSidebar />
        </div>
      </div>
    </>
  );
};

export default Nav;
