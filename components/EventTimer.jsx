'use client';

import { useState, useEffect } from 'react';

const EventTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <div className="flex font-bold text-3xl md:text-4xl gap-6 ">
        <div className="flex flex-col items-center justify-center md:w-16">
          <h3>{days ? String(days).padStart(2, '0') : 'To'}</h3>
          <p className="text-xs -mt-1">Days</p>
        </div>
        {/* <p>:</p> */}
        <div className="flex flex-col items-center justify-center md:w-16">
          <h3>{hours ? String(hours).padStart(2, '0') : 'be'}</h3>
          <p className="text-xs -mt-1">Hours</p>
        </div>
        {/* <p>:</p> */}
        <div className="flex flex-col items-center justify-center md:w-16">
          <h3>{minutes ? String(minutes).padStart(2, '0') : 'deci'}</h3>
          <p className="text-xs -mt-1">Minutes</p>
        </div>
        {/* <p>:</p> */}
        <div className="flex flex-col items-center justify-center md:w-16">
          <h3>{seconds ? String(seconds).padStart(2, '0') : 'ded'}</h3>
          <p className="text-xs -mt-1">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default EventTimer;
