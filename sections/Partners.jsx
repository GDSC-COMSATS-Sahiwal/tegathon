import Image from "next/image";

import github from "../public/images/partners/github.png";
import universe from "../public/images/partners/universe.png";

const Partners = () => {
  return (
    <section
      id="partners"
      className="w-full h-full text-white flex flex-col items-center justify-start min-h-0 gap-10 max-container"
    >
      <h1 className=" text-[2.25rem] md:text-[5rem] lg:text-8xl font-black">
        Partners
      </h1>

      <div className="grid grid-cols-8 max-sm:grid-cols-1 w-full border border-yellow-400 rounded-lg md:rounded-3xl max-sm:border-none">
        <div className="col-start-1 col-span-3 p-4 max-sm:col-span-1 max-sm:col-start-1 flex items-center justify-center border backdrop-blur-sm border-yellow-400 rounded-tl-lg md:rounded-tl-3xl max-sm:rounded-tr-lg">
          <Image src={github} height={350} width={350} alt="Github" />
        </div>
        <div className="col-start-4 col-span-2 p-4 max-sm:col-span-1 max-sm:col-start-1 flex items-center justify-center border backdrop-blur-sm border-yellow-400">
          <Image src={universe} height={350} width={350} alt="Universe23" />
        </div>
        <div className="col-start-6 col-span-3 max-sm:col-span-1 max-sm:col-start-1 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400 rounded-tr-lg md:rounded-tr-3xl  max-sm:rounded-none">
          <Image src={universe} height={350} width={350} alt="Universe23" />
        </div>
        <div className="col-start-1 col-span-2 max-sm:col-span-1 max-sm:col-start-1 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400 rounded-bl-lg md:rounded-bl-3xl  max-sm:rounded-none">
          <Image src={universe} height={350} width={350} alt="Universe23" />
        </div>
        <div className="col-start-3 col-span-2 max-sm:col-span-1 max-sm:col-start-1 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400">
          <Image src={universe} height={350} width={350} alt="Universe23" />
        </div>
        <div className="col-start-5 col-span-2 max-sm:col-span-1 max-sm:col-start-1 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400">
          <Image src={universe} height={350} width={350} alt="Universe23" />
        </div>
        <div className="col-start-7 col-span-2 p-4 max-sm:col-span-1 max-sm:col-start-1 flex items-center justify-center border backdrop-blur-sm border-yellow-400 rounded-br-lg md:rounded-br-3xl  max-sm:rounded-bl-lg">
          <Image src={universe} height={350} width={350} alt="Universe23" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
