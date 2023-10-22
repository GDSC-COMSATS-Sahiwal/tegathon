import { eventSchedule } from '../constants';

const Schedule = () => {
  return (
    <section
      id="schedule"
      className=" text-white w-full flex flex-col items-center min-h-screen gap-8 max-container"
    >
      <h1 className="section-title text-center">Event Schedule</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {eventSchedule.map((event) => (
          <Card key={event.eventTitle} event={event} />
        ))}
      </div>
      <div className="xl:mt-[30rem] font-bold md:font-black text-center">
        <h1
          style={{ WebkitTextStroke: '1px #FDD200' }}
          className="text-[1.75rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] uppercase text-transparent"
        >
          Tech - Game - Code
        </h1>
        <h2 className="md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]">
          Challenge Yourself, Change the Game!
        </h2>
      </div>
    </section>
  );
};

const Card = ({ event }) => {
  return (
    <div className="max-w-[24rem]">
      <div className="flex justify-between mb-4 ml-4 mr-4 gap-4 ">
        <h3 className="md:text-lg font-bold">{event.eventTitle}</h3>
        <h3>{event.eventDate}</h3>
      </div>
      <div className="rounded-3xl glass-container">
        <div className="text-sm sm:text-lg rounded-t-3xl px-6 py-4 flex gap-11 text-[#FDD200] font-black border-b border-[#FDD200]">
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
