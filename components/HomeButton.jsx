import Link from 'next/link';

const HomeButton = () => {
  return (
    <>
      <Link
        className=" text-[#FDD200] active:text-white text-base font-bold  px-4 py-4 rounded-2xl"
        href="/"
      >
        Home
      </Link>
    </>
  );
};

export default HomeButton;
