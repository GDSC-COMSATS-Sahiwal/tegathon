import { eventSchedule } from "../constants";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className=" text-white w-full flex flex-col items-center min-h-screen gap-16 max-container"
    >
      <h1 className=" text-[2.25rem] md:text-[5rem] lg:text-8xl font-black">
        Event Schedule
      </h1>
      <div className="flex flex-col xl:flex-row gap-8">
        {eventSchedule.map((event) => (
          <Card key={event.eventTitle} event={event} />
        ))}
      </div>
      <div className="xl:mt-[30rem] font-bold md:font-black text-center">
        <h1
          style={{ WebkitTextStroke: "1px #FDD200" }}
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
      <div className="flex justify-between mb-4 ml-4 mr-4 gap-4">
        <h3 className="md:text-lg font-bold">{event.eventTitle}</h3>
        <h3>{event.eventDate}</h3>
      </div>
      <div className="border rounded-3xl border-yellow-400">
        <div className="text-sm sm:text-base bg-black bg-opacity-50 rounded-t-3xl backdrop-blur-2xl px-6 py-4 flex gap-11 text-amber-400 font-black text-md border-b border-yellow-400">
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
    <div className="text-sm sm:text-base bg-black bg-opacity-50 last-of-type:rounded-b-3xl backdrop-blur-2xl px-6 py-4 flex gap-8 border-b last-of-type:border-none border-yellow-400">
      <p className="min-w-fit">{session.startsAt}</p>
      <p>{session.sessionTitle}</p>
    </div>
  );
};

export default Schedule;
