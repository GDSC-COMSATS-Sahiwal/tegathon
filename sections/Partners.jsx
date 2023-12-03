import Image from 'next/image';
const Partners = () => {
  return (
    <section className="w-full h-full text-white flex flex-col items-center justify-start min-h-0 gap-10 max-container">
      <h1 className="section-title">Partners</h1>

      <div className="grid grid-cols-8 max-sm:grid-cols-6 w-full glass-container rounded-lg md:rounded-3xl border border-[#FDD200]">
        <div className="col-start-1 col-span-3 p-4 max-sm:col-span-3 max-sm:col-start-1 flex items-center justify-center rounded-tl-lg md:rounded-tl-3xl border-[#FDD200] max-sm:border-r max-sm:rounded-tl-lg">
          <Image
            src="/sections/partner/github.webp"
            height={350}
            width={350}
            className='max-h-40 object-contain'
            alt="Github"
          />
        </div>
        <div className="col-start-4 col-span-2 p-4 max-sm:col-span-3 max-sm:col-start-4 flex items-center justify-center sm:border-l border-t max-sm:border-t-0 border-yellow-400">
          <Image
            src="/sections/partner/mlsa.webp"
            height={350}
            width={350}
            className='max-h-40 object-contain'
            alt="Universe23"
          />
        </div>
        <div className="col-start-6 col-span-3 max-sm:col-span-2 max-sm:col-start-1 p-4 flex items-center justify-center sm:border-l border-t border-yellow-400 rounded-tr-lg max-sm:border-r md:rounded-tr-3xl  max-sm:rounded-none">
          <Image
            src="/sections/partner/gdsc.webp"
            height={350}
            width={350}
            className='max-h-40 object-contain'
            alt="Universe23"
          />
        </div>
        <div className="col-start-1 col-span-2 max-sm:col-span-2 max-sm:col-start-3 p-4 flex items-center justify-center border-t border-yellow-400 rounded-bl-lg md:rounded-bl-3xl max-sm:border-r  max-sm:rounded-none">
          <Image
            src="/sections/partner/universe.webp"
            height={350}
            width={350}
            className='max-h-40 object-contain'
            alt="Universe23"
          />
        </div>
        <div className="col-start-3 col-span-2 max-sm:col-span-2 max-sm:col-start-5 p-4 flex items-center justify-center sm:border-l border-t border-yellow-400">
          <Image
            src="/sections/partner/devhub.webp"
            height={350}
            width={350}
            className='max-h-40 object-contain'
            alt="Universe23"
          />
        </div>
        <div className="col-start-5 col-span-2 max-sm:col-span-3 max-sm:col-start-1 p-4 flex items-center justify-center max-sm:border-r sm:border-l border-t border-yellow-400">
          <Image
            src="/sections/partner/datacamp.webp"
            height={350}
            width={350}
            className='max-h-40 object-contain'
            alt="Universe23"
          />
        </div>
        <div className="col-start-7 col-span-2 p-4 max-sm:col-span-3 max-sm:col-start-4 flex items-center justify-center sm:border-l border-t border-yellow-400 rounded-br-lg md:rounded-br-3xl  max-sm:rounded-bl-lg">
          <Image
            src="/sections/partner/aws.webp"
            height={350}
            width={350}
            className='max-h-40 object-contain'
            alt="Universe23"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
