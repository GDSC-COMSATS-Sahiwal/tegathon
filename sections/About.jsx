const About = () => {
  return (
    <section
      id="about"
      className="text-white text-center w-full flex flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="p-2 xl:padding ">
        <h1 className="section-title">What is Tegathon?</h1>
        <p className="text-lg sm:text-2xl font-normal text-center ">
          Tegathon is a unique, three-day event that brings together the worlds
          of technology, gaming, and coding in an exhilarating fusion of
          innovation and fun. We&apos;ve coined the term &quot;Tegathon&quot; by
          combining &quot;Te&quot; form Tech, &quot;Ga&quot; form Gaming, and
          &quot;Thon&quot; form Marathon, signifying our commitment to
          marathon-like endurance and excitement.
        </p>
      </div>
      <div className="flex xl:padding justify-evenly flex-col sm:flex-row items-center">
        <div className="text-center sm:text-left my-4">
          <h1
            style={{ WebkitTextStroke: '1px #FFFFFF' }}
            className="lg:text-8xl text-4xl uppercase text-transparent font-bold md:font-black"
          >
            1
          </h1>
          <h3 className="text-2xl font-medium">Open-source Day</h3>
          <p className="text-2xl font-normal">Date</p>
        </div>
        <hr className="border border-white w-24" />
        <div className="text-center my-4">
          <h1
            style={{ WebkitTextStroke: '1px #FFFFFF' }}
            className="lg:text-8xl text-4xl uppercase text-transparent font-bold md:font-black"
          >
            2
          </h1>
          <h3 className="text-2xl font-medium">
            Inter City Coding Competition
          </h3>
          <p className="text-2xl font-normal">Date</p>
        </div>
        <hr className="border border-white w-24" />
        <div className="text-center sm:text-right my-4">
          <h1
            style={{ WebkitTextStroke: '1px #FFFFFF' }}
            className="lg:text-8xl text-4xl uppercase text-transparent font-bold md:font-black"
          >
            3
          </h1>
          <h3 className="text-2xl font-medium">Gaming Competition</h3>
          <p className="text-2xl font-normal">Date</p>
        </div>
      </div>
    </section>
  );
};

export default About;
