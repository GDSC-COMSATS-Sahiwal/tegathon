import Image from 'next/image'
const Partners = () => {
  return (
    <section
      id="partners"
      className="w-full h-full text-white flex flex-col items-center justify-start min-h-0 gap-10 max-container"
    >
      <h1 className=" text-[2.25rem] md:text-[5rem] lg:text-8xl font-black">
        Partners
      </h1>

      <div class="grid grid-cols-8 w-full ">
        <div class="col-start-1 col-span-3 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400 rounded-tl-3xl">
          <Image
            src="/images/partners/github.png"
            height={350}
            width={350}
            alt="Github"
          />
        </div>
        <div class="col-start-4 col-span-2 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400">
          <Image
            src="/images/partners/universe.png"
            height={350}
            width={350}
            alt="Universe23"
          />
        </div>
        <div class="col-start-6 col-span-3 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400 rounded-tr-3xl ">
          <Image
            src="/images/partners/universe.png"
            height={350}
            width={350}
            alt="Universe23"
          />
        </div>
        <div class="col-start-1 col-span-2 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400 rounded-bl-3xl ">
          <Image
            src="/images/partners/universe.png"
            height={350}
            width={350}
            alt="Universe23"
          />
        </div>
        <div class="col-start-3 col-span-2 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400">
          <Image
            src="/images/partners/universe.png"
            height={350}
            width={350}
            alt="Universe23"
          />
        </div>
        <div class="col-start-5 col-span-2 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400">
          <Image
            src="/images/partners/universe.png"
            height={350}
            width={350}
            alt="Universe23"
          />
        </div>
        <div class="col-start-7 col-span-2 p-4 flex items-center justify-center border backdrop-blur-sm border-yellow-400 rounded-br-3xl ">
          <Image
            src="/images/partners/universe.png"
            height={350}
            width={350}
            alt="Universe23"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
