const About = () => {
  return (
    <section
      id="about"
      className="text-white w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <h1 class="text-[2.25rem] md:text-[5rem] lg:text-8xl font-black">
        What is Tegathon?
      </h1>
      <h4 class="text-1xl">
        Tegathon is a unique, three-day event that brings together the worlds of
        technology, gaming, and coding in an exhilarating fusion of innovation
        and fun. We've coined the term "Tegathon" by combining "Te" form Tech,
        "Ga" form Gaming, and "Thon" form Marathon, signifying our commitment to
        marathon-like endurance and excitement.
      </h4>
      <div className="xl:mt-[30rem] font-bold md:font-black text-center">
        <h1
          style={{ WebkitTextStroke: "1px #FDD200" }}
          className="text-[1.75rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] uppercase text-transparent"
        >
          1 --- 2 --- 3
        </h1>
        <h2 className="md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]">
          Open-source Day Inter City Coding Competition Gaming Competition
        </h2>
      </div>
    {/* </section> */}
    </section>
  );
};

export default About;
