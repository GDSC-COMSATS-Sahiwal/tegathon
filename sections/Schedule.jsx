import { eventSchedule } from '../constants';
import blacklines from '@/public/sections/schedule/blacklines.svg';
import redlines from '@/public/sections/schedule/redlines.svg';
import Image from 'next/image';

const Schedule = () => {
  return (
    <>
      <Image
        priority={true}
        src={blacklines}
        alt="lines"
        width={400}
        height={400}
        className="absolute w-1/2 sm:w-[52%] left-0 top-0"
      />
      <Image
        priority={true}
        src={redlines}
        alt="lines"
        width={500}
        height={500}
        className="absolute w-1/2 sm:w-[42%] right-0 bottom-0"
      />
      <section className=" text-white w-full flex flex-col items-center gap-8 max-container padding">
        <h1 className="section-title text-center relative">Event Schedule</h1>
        <div className="w-[95vw] max-lg:mb-[30rem]  max-lg:pl-[1.5rem]">
          <div className="overflow-x-scroll flex lg:justify-center gap-4 snap-x snap-mandatory no-scrollbar">
            {eventSchedule.map((event) => (
              <Card key={event.eventTitle} event={event} />
            ))}
          </div>
        </div>
        <div className="xl:mt-[30rem] ultrawide:mt-[50rem] font-bold md:font-black text-center">
          <h1
            style={{ WebkitTextStroke: '1px #FDD200' }}
            className="text-[1.75rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6vw] uppercase text-transparent relative"
          >
            Tech - Game - Code
          </h1>
          <h2 className="md:text-[2rem] lg:text-[2.9rem] xl:text-[3.5vw] relative">
            Challenge Yourself, Change the Game!
          </h2>
        </div>
      </section>
    </>
  );
};

const Card = ({ event }) => {
  return (
    <div className="max-lg:min-w-[80vw] snap-start xl:max-w-[24rem] ultrawide:max-w-full relative">
      <div className="flex justify-between mb-4 ml-4 mr-4 gap-4 ">
        <h3 className="md:text-lg font-bold whitespace-nowrap">
          {event.eventTitle}
        </h3>
        <h3>{event.eventDate}</h3>
      </div>
      <div className="rounded-3xl glass-container">
        <div className="text-sm sm:text-lg rounded-t-3xl px-6 py-4 flex gap-8 text-[#FDD200] font-black border-b border-[#FDD200]">
          <p>Starts at</p>
          <p>Session Title</p>
        </div>
        {event.eventDetails.map((session) => (
          <MiniCard key={session.startsAt} session={session} />
        ))}
      </div>
    </div>
  );
};

const MiniCard = ({ session }) => {
  return (
    <div className="text-sm sm:text-lg  last-of-type:rounded-b-3xl px-6 py-4 flex gap-8 font-normal border-b last-of-type:border-none border-[#FDD200]">
      <p className="min-w-fit">{session.startsAt}</p>
      <p>{session.sessionTitle}</p>
    </div>
  );
};

export default Schedule;
