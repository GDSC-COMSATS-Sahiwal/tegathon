"use client";

import HeroTimer from "@/components/Clock";
import tegathonLogo from "/public/sections/hero/logo.png";
import Image from "next/image";

const Hero = () => {
  const seconds = 86300;
  const timeStamp = new Date(Date.now() + seconds * 1000);
  return (
    // Hero Section
    <section id="home" className=" relative ">
      <div className="py-20 sm:padding max-container">
        {/* Grid Container */}
        <div className="grid px-5 md:py-28 py-10 gap-16 md:gap-4 md:grid-cols-2">
          {/* Hero img, text, and button */}
          <div className="md:space-y-12 space-y-4">
            <div className="flex w-full items-center justify-center">
              <Image
                priority={true}
                src={tegathonLogo}
                alt="tegathon logo"
                width={800}
                height={800}
              />
            </div>
            <div className="md:space-y-12 space-y-4 md:px-10 ">
              <p className="text-white text-center md:text-left md:text-lg text-sm leading-relaxed">
                At Tegathon, we're all about having a blast with technology,
                computer coding, and video games. It's a 3-day event where you
                can learn, compete, and make new friends. Don't miss out!
              </p>
              <div className="flex items-center w-full justify-center md:justify-start">
                <button className="bg-[#FDD200] text-[#333333] text-base md:p-5 sm:px-2 px-4 py-4 font-bold sm:rounded-3xl rounded-2xl">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          {/* Hero Countdown */}
          <div className="flex items-center justify-center">
            <div className="glass-container py-2 px-6 rounded-3xl text-center relative md:-mb-24 md:-mr-10 text-[#FDD200] font-bold">
              <HeroTimer expiryTimestamp={timeStamp} />
            </div>
          </div>
        </div>
      </div>
      {/* news line animation  */}
      <div className="absolute bottom-0 right-0 py-3 md:py-4 w-full overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-600">
        <p className="text-lg md:text-xl  text-black font-normal scrolling-text whitespace-nowrap">
          Tegathon is a unique, three-day event that brings together the worlds
          of technology, gaming, and coding in an exhilarating fusion of
          innovation and fun. We've coined the term "Tegathon" by combining "Te"
          for Tech, "Ga" for Gaming, and "Thon" for Marathon, signifying our
          commitment to marathon-like endurance and excitement.
        </p>
      </div>
    </section>
  );
};

export default Hero;
