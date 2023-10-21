"use client";
import React, { useState, useEffect } from "react";

const Clock = ({ hours, minutes, seconds }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentHours = hours !== undefined ? hours : time.getHours();
  const currentMinutes =
    minutes !== undefined ? minutes : time.getMinutes();
  const currentSeconds =
    seconds !== undefined ? seconds : time.getSeconds();

  return (
    <div>
      <div className="flex font-bold text-3xl md:text-4xl gap-4 ">
        <div className="flex flex-col items-center justify-center">
          <h3>{currentHours.toString().padStart(2, "0")}</h3>
          <p className="text-xs -mt-1">Hours</p>
        </div>
        <p>:</p>
        <div className="flex flex-col items-center justify-center">
          <h3>{currentMinutes.toString().padStart(2, "0")}</h3>
          <p className="text-xs -mt-1">Minutes</p>
        </div>
        <p>:</p>
        <div className="flex flex-col items-center justify-center">
          <h3>{currentMinutes.toString().padStart(2, "0")}</h3>
          <p className="text-xs -mt-1">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
